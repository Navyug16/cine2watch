import { DC_SUB_UNIVERSES, DC_TIMELINE } from './dc_data.js';

console.log('--- DC SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
DC_SUB_UNIVERSES.forEach(su => {
  if (su === 'All DC') return;
  const count = DC_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su))).length;
  console.log(`${su}: ${count} titles`);
});

console.log('\nTotal unique titles in DC_TIMELINE:', DC_TIMELINE.length);

