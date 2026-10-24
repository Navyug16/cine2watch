import { MISSION_IMPOSSIBLE_SUB_UNIVERSES, MISSION_IMPOSSIBLE_TIMELINE } from './mission_impossible_data.js';

console.log('--- MISSION: IMPOSSIBLE SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
MISSION_IMPOSSIBLE_SUB_UNIVERSES.forEach(su => {
  if (su === 'All Mission: Impossible') return;
  const matches = MISSION_IMPOSSIBLE_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su)));
  console.log(`${su}: ${matches.length} titles`);
  matches.forEach(m => console.log(`   - ${m.title} (${m.year}) [${m.media_type}]`));
});

console.log('\n--- METRICS CHECK ---');
console.log('Total unique titles:', MISSION_IMPOSSIBLE_TIMELINE.length);
console.log('Essential titles count:', MISSION_IMPOSSIBLE_TIMELINE.filter(t => t.is_essential).length);
console.log('Movies count:', MISSION_IMPOSSIBLE_TIMELINE.filter(t => t.media_type === 'movie').length);
console.log('Series count:', MISSION_IMPOSSIBLE_TIMELINE.filter(t => t.media_type === 'series').length);
