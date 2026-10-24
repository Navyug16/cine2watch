import { FAST_FURIOUS_SUB_UNIVERSES, FAST_FURIOUS_TIMELINE } from './fast_and_furious_data.js';

console.log('--- FAST & FURIOUS SUB-UNIVERSES AUDIT (With Multi-Tag Support) ---');
FAST_FURIOUS_SUB_UNIVERSES.forEach(su => {
  if (su === 'All Fast & Furious') return;
  const count = FAST_FURIOUS_TIMELINE.filter(t => t.sub_universe === su || (Array.isArray(t.sub_universes) && t.sub_universes.includes(su))).length;
  console.log(`${su}: ${count} titles`);
});

console.log('\nTotal unique titles in FAST_FURIOUS_TIMELINE:', FAST_FURIOUS_TIMELINE.length);
