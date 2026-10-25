import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://enqufpimptgjsbztkcns.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false }
});

const jsonPath = path.join(__dirname, '../data/oscar_winners.json');
const winners = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

console.log(`Loaded ${winners.length} Oscar winner records from ${jsonPath}`);

async function uploadToSupabase() {
  const BATCH_SIZE = 100;
  let insertedCount = 0;
  let errors = [];

  for (let i = 0; i < winners.length; i += BATCH_SIZE) {
    const chunk = winners.slice(i, i + BATCH_SIZE).map((w, index) => {
      const slug = w.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const uniqueId = w.imdb_id || `oscar-${slug}-${w.year}`;
      
      return {
        id: uniqueId,
        imdb_id: w.imdb_id || null,
        title: w.title,
        year: parseInt(w.year, 10),
        total_wins: parseInt(w.total_wins, 10),
        won_best_picture: !!w.won_best_picture,
        categories_won: w.categories_won || [],
        poster_path: w.poster_path || null,
        rating: w.rating ? parseFloat(w.rating) : null,
        votes: w.votes ? parseInt(w.votes, 10) : null,
        overview: w.overview || null,
        genres: w.genres || null,
        director: w.director || null
      };
    });

    const { data, error } = await supabase
      .from('oscar_winners')
      .upsert(chunk, { onConflict: 'id' });

    if (error) {
      errors.push({ batch: i / BATCH_SIZE + 1, message: error.message });
      console.error(`Batch ${i / BATCH_SIZE + 1} error:`, error.message);
      break; // Stop on first error (e.g. RLS policy violation)
    } else {
      insertedCount += chunk.length;
      console.log(`Uploaded batch ${i / BATCH_SIZE + 1}: ${insertedCount} / ${winners.length} rows...`);
    }
  }

  if (errors.length > 0) {
    console.log('\nUpload failed due to policy or permission error.');
    return { success: false, error: errors[0].message };
  } else {
    console.log(`\nSuccessfully uploaded all ${insertedCount} Oscar-winning films to Supabase!`);
    return { success: true, count: insertedCount };
  }
}

uploadToSupabase();
