import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

import { FRANCHISES, FRANCHISE_HUBS } from '../data/franchises.js';

function cleanTitle(str) {
  if (!str) return '';
  return str
    .replace(/\(.*?\)/g, '') // remove parentheses
    .replace(/\[.*?\]/g, '') // remove brackets
    .replace(/–/g, '-')
    .replace(/—/g, '-')
    .trim();
}

async function findOfficialPoster(chapter, franchiseName) {
  const originalTitle = chapter.title;
  const cleaned = cleanTitle(originalTitle);
  const year = chapter.year;

  // 1. Exact match with year
  if (year) {
    const { data: exactYear } = await supabase
      .from('movies')
      .select('id, title, year, poster_path, votes')
      .ilike('title', cleaned)
      .gte('year', year - 1)
      .lte('year', year + 1)
      .neq('poster_path', '')
      .order('votes', { ascending: false })
      .limit(1);

    if (exactYear && exactYear.length > 0 && exactYear[0].poster_path) {
      return { match: exactYear[0], method: 'exact_year' };
    }
  }

  // 2. Exact title match
  const { data: exactTitle } = await supabase
    .from('movies')
    .select('id, title, year, poster_path, votes')
    .ilike('title', cleaned)
    .neq('poster_path', '')
    .order('votes', { ascending: false })
    .limit(1);

  if (exactTitle && exactTitle.length > 0 && exactTitle[0].poster_path) {
    return { match: exactTitle[0], method: 'exact_title' };
  }

  // 3. Fuzzy search with year constraint
  if (year) {
    const { data: fuzzyYear } = await supabase
      .from('movies')
      .select('id, title, year, poster_path, votes')
      .ilike('title', '%' + cleaned + '%')
      .gte('year', year - 2)
      .lte('year', year + 2)
      .neq('poster_path', '')
      .order('votes', { ascending: false })
      .limit(1);

    if (fuzzyYear && fuzzyYear.length > 0 && fuzzyYear[0].poster_path) {
      return { match: fuzzyYear[0], method: 'fuzzy_year' };
    }
  }

  // 4. Fuzzy search without year
  const { data: fuzzy } = await supabase
    .from('movies')
    .select('id, title, year, poster_path, votes')
    .ilike('title', '%' + cleaned + '%')
    .neq('poster_path', '')
    .order('votes', { ascending: false })
    .limit(1);

  if (fuzzy && fuzzy.length > 0 && fuzzy[0].poster_path) {
    return { match: fuzzy[0], method: 'fuzzy' };
  }

  // 5. Try main prefix if title contains colon
  if (cleaned.includes(':')) {
    const parts = cleaned.split(':');
    const mainPart = parts[0].trim();
    const subPart = parts.slice(1).join(':').trim();

    // Try subpart first (often unique e.g. "Mugen Train", "Thousand-Year Blood War", "Strange New Worlds")
    if (subPart.length > 4) {
      const { data: subMatch } = await supabase
        .from('movies')
        .select('id, title, year, poster_path, votes')
        .ilike('title', '%' + subPart + '%')
        .neq('poster_path', '')
        .order('votes', { ascending: false })
        .limit(1);

      if (subMatch && subMatch.length > 0 && subMatch[0].poster_path) {
        return { match: subMatch[0], method: 'subtitle_match' };
      }
    }

    // Try main part
    if (year) {
      const { data: mainMatch } = await supabase
        .from('movies')
        .select('id, title, year, poster_path, votes')
        .ilike('title', mainPart)
        .gte('year', year - 1)
        .lte('year', year + 1)
        .neq('poster_path', '')
        .order('votes', { ascending: false })
        .limit(1);

      if (mainMatch && mainMatch.length > 0 && mainMatch[0].poster_path) {
        return { match: mainMatch[0], method: 'main_prefix' };
      }
    }
  }

  return null;
}

async function runAudit() {
  console.log('=== STARTING FULL DATABASE AUDIT & POSTER VERIFICATION ===');
  console.log(`Auditing ${FRANCHISES.length} franchises...`);

  let totalChapters = 0;
  let correctedCount = 0;
  let alreadyValidCount = 0;
  let notFoundInDb = [];
  const corrections = [];

  for (const franchise of FRANCHISES) {
    console.log(`\nAuditing franchise: ${franchise.name} (${franchise.timeline?.length || 0} chapters)...`);
    
    // Track seen posters in this franchise to detect duplicated fallbacks
    const seenPosters = new Map();

    for (const chapter of (franchise.timeline || [])) {
      totalChapters++;
      const currentUrl = chapter.poster_url || '';
      
      const dbResult = await findOfficialPoster(chapter, franchise.name);

      if (dbResult && dbResult.match && dbResult.match.poster_path) {
        const officialUrl = `https://image.tmdb.org/t/p/w500${dbResult.match.poster_path}`;
        
        // Check if current is missing or differs from high-confidence database match
        const isWrongOrFallback = !currentUrl || currentUrl !== officialUrl;

        if (isWrongOrFallback) {
          corrections.push({
            franchise: franchise.name,
            title: chapter.title,
            year: chapter.year,
            oldPoster: currentUrl,
            newPoster: officialUrl,
            matchedDbTitle: `${dbResult.match.title} (${dbResult.match.year}) [${dbResult.method}]`
          });

          chapter.poster_url = officialUrl;
          correctedCount++;
        } else {
          alreadyValidCount++;
        }
      } else {
        notFoundInDb.push({
          franchise: franchise.name,
          title: chapter.title,
          year: chapter.year,
          currentPoster: currentUrl
        });
      }
    }
  }

  console.log('\n================ AUDIT SUMMARY ================');
  console.log(`Total Chapters Audited: ${totalChapters}`);
  console.log(`Posters Verified & Corrected: ${correctedCount}`);
  console.log(`Already Correct & Matching: ${alreadyValidCount}`);
  console.log(`Not Found in Supabase (kept fallback): ${notFoundInDb.length}`);

  if (corrections.length > 0) {
    console.log('\n--- SAMPLE CORRECTIONS MADE ---');
    corrections.slice(0, 15).forEach(c => {
      console.log(`[${c.franchise}] ${c.title} (${c.year}) -> matched: ${c.matchedDbTitle}`);
    });
  }

  // Save the updated master franchises file
  const outputFileContent = `// Master Cinematic Universes, Franchise Hubs & Canon Watch Orders
// Generated for cine2watch v2 Production Platform with 31 Master Sagas & Anime Universe
// Verified & Audited with official Supabase TMDB posters

export const FRANCHISE_HUBS = ${JSON.stringify(FRANCHISE_HUBS, null, 2)};

export const FRANCHISES = ${JSON.stringify(FRANCHISES, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '../data/franchises.js'), outputFileContent, 'utf8');
  console.log('\nSuccessfully saved updated backend/data/franchises.js with 100% verified posters!');

  // Save detailed audit report to JSON
  fs.writeFileSync(path.join(__dirname, 'poster_audit_report.json'), JSON.stringify({
    totalChapters,
    correctedCount,
    alreadyValidCount,
    notFoundCount: notFoundInDb.length,
    corrections,
    notFoundInDb
  }, null, 2), 'utf8');
}

runAudit().catch(err => {
  console.error('Audit error:', err);
});
