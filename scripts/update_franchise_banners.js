import fs from 'fs';
import { FRANCHISES, FRANCHISE_HUBS } from '../backend/data/franchises.js';
import { EXPLORE_HUBS } from '../frontend/src/data/exploreHubsData.js';

const hubMap = {};
EXPLORE_HUBS.forEach(h => {
  hubMap[h.id] = h.backdrop_url;
});

let updatedCount = 0;
FRANCHISES.forEach(f => {
  if (hubMap[f.id]) {
    f.banner_poster = hubMap[f.id];
    updatedCount++;
  }
});

const out = `// Master Cinematic Universes, Franchise Hubs & Canon Watch Orders
// Generated for cine2watch v2 Production Platform with 34 Master Sagas & Anime Universe

export const FRANCHISE_HUBS = ${JSON.stringify(FRANCHISE_HUBS, null, 2)};

export const FRANCHISES = ${JSON.stringify(FRANCHISES, null, 2)};
`;

fs.writeFileSync('./backend/data/franchises.js', out, 'utf-8');
fs.writeFileSync('./frontend/src/data/franchisesData.js', out, 'utf-8');
console.log(`Successfully updated ${updatedCount} franchises in both backend and frontend data files!`);
