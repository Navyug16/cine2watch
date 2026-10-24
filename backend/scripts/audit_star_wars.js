import { STAR_WARS_SUB_UNIVERSES, STAR_WARS_TIMELINE } from './star_wars_data.js';

console.log('--- STAR WARS SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
STAR_WARS_SUB_UNIVERSES.forEach(su => {
  if (su === 'All Star Wars') return;
  const count = STAR_WARS_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su))).length;
  console.log(`${su}: ${count} titles`);
});

console.log('\nTotal unique titles in STAR_WARS_TIMELINE:', STAR_WARS_TIMELINE.length);
