import { WIZARDING_WORLD_SUB_UNIVERSES, WIZARDING_WORLD_TIMELINE } from './wizarding_world_data.js';

console.log('--- WIZARDING WORLD SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
WIZARDING_WORLD_SUB_UNIVERSES.forEach(su => {
  if (su === 'All Wizarding World') return;
  const count = WIZARDING_WORLD_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su))).length;
  console.log(`${su}: ${count} titles`);
});

console.log('\nTotal unique titles in WIZARDING_WORLD_TIMELINE:', WIZARDING_WORLD_TIMELINE.length);
