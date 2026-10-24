import { JOHN_WICK_SUB_UNIVERSES, JOHN_WICK_TIMELINE } from './john_wick_data.js';

console.log('--- JOHN WICK SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
JOHN_WICK_SUB_UNIVERSES.forEach(su => {
  if (su === 'All John Wick') return;
  const matches = JOHN_WICK_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su)));
  console.log(`${su}: ${matches.length} titles`);
  matches.forEach(m => console.log(`   - ${m.title} (${m.year}) [${m.media_type}]`));
});

console.log('\n--- METRICS CHECK ---');
console.log('Total unique titles:', JOHN_WICK_TIMELINE.length);
console.log('Essential titles count:', JOHN_WICK_TIMELINE.filter(t => t.is_essential).length);
console.log('Movies count:', JOHN_WICK_TIMELINE.filter(t => t.media_type === 'movie').length);
console.log('Series count:', JOHN_WICK_TIMELINE.filter(t => t.media_type === 'series').length);
