import { MIDDLE_EARTH_SUB_UNIVERSES, MIDDLE_EARTH_TIMELINE } from './middle_earth_data.js';

console.log('--- MIDDLE-EARTH SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
MIDDLE_EARTH_SUB_UNIVERSES.forEach(su => {
  if (su === 'All Middle-Earth') return;
  const count = MIDDLE_EARTH_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su))).length;
  console.log(`${su}: ${count} titles`);
});

console.log('\nTotal unique titles in MIDDLE_EARTH_TIMELINE:', MIDDLE_EARTH_TIMELINE.length);
