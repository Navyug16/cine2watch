import { TRANSFORMERS_SUB_UNIVERSES, TRANSFORMERS_TIMELINE } from './transformers_data.js';

console.log('--- TRANSFORMERS SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
TRANSFORMERS_SUB_UNIVERSES.forEach(su => {
  if (su === 'All Transformers') return;
  const count = TRANSFORMERS_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su))).length;
  console.log(`${su}: ${count} titles`);
});

console.log('\nTotal unique titles in TRANSFORMERS_TIMELINE:', TRANSFORMERS_TIMELINE.length);
