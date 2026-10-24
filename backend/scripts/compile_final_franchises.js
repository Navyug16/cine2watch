import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MARVEL_SUB_UNIVERSES, MARVEL_TIMELINE } from './marvel_data.js';
import { DC_SUB_UNIVERSES, DC_TIMELINE } from './dc_data.js';
import { STAR_WARS_SUB_UNIVERSES, STAR_WARS_TIMELINE } from './star_wars_data.js';
import { WIZARDING_WORLD_SUB_UNIVERSES, WIZARDING_WORLD_TIMELINE } from './wizarding_world_data.js';
import { MIDDLE_EARTH_SUB_UNIVERSES, MIDDLE_EARTH_TIMELINE } from './middle_earth_data.js';
import { FAST_FURIOUS_SUB_UNIVERSES, FAST_FURIOUS_TIMELINE } from './fast_and_furious_data.js';
import { TRANSFORMERS_SUB_UNIVERSES, TRANSFORMERS_TIMELINE } from './transformers_data.js';
import { MISSION_IMPOSSIBLE_SUB_UNIVERSES, MISSION_IMPOSSIBLE_TIMELINE } from './mission_impossible_data.js';
import { JOHN_WICK_SUB_UNIVERSES, JOHN_WICK_TIMELINE } from './john_wick_data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read current franchises to retain all remaining franchises
import { FRANCHISES, FRANCHISE_HUBS } from '../data/franchises.js';

const otherFranchises = FRANCHISES.filter(f => 
  f.id !== 'marvel' && 
  f.id !== 'dc-universe' && 
  f.id !== 'dc' && 
  f.id !== 'star-wars' &&
  f.id !== 'wizarding-world' &&
  f.id !== 'middle-earth' &&
  f.id !== 'fast-and-furious' &&
  f.id !== 'transformers' &&
  f.id !== 'mission-impossible' &&
  f.id !== 'john-wick'
);

const updatedMarvelFranchise = {
  id: 'marvel',
  name: 'Marvel Cinematic Multiverse',
  badge: '15 CANON BRANCHES • MCU, DEFENDERS, X-MEN, SPIDER-MAN, SSU & ANIMATION',
  icon: '🦸',
  theme_color: '#E62429',
  tagline: 'The definitive Marvel catalog: 15 distinct universes, eras, and timelines meticulously arranged with canonical watch orders.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  why_watch: 'The largest cinematic and televisual storytelling tapestry in pop-culture history, spanning 170+ interconnected films, prestige series, and animation.',
  sub_universes: MARVEL_SUB_UNIVERSES,
  watch_modes: [
    { id: 'chrono', label: '⏳ Chronological Story Order', desc: 'Ancient Era to Prehistoric, WWII, 1990s, Phases 1-6 & Future' },
    { id: 'release', label: '🎞️ Release Date Order', desc: 'Exact chronological release progression from 1989/2008 to present' },
    { id: 'defenders', label: '🛡️ Defenders Saga Canon', desc: 'Daredevil S1 → Jessica Jones S1 → DD S2 → Luke Cage S1 → Iron Fist S1 → Defenders' },
    { id: 'xmen', label: '🧬 X-Men Universe Order', desc: 'X-Men 2000 → X2 → Last Stand → First Class → Days of Future Past → Logan' },
    { id: 'spiderman', label: '🕷️ Spider-Man Canon Order', desc: 'Raimi Trilogy → TASM 1-2 → MCU Trilogy → Spider-Verse' }
  ],
  timeline: MARVEL_TIMELINE
};

const updatedDcFranchise = {
  id: 'dc-universe',
  name: 'DC Multiverse & Elseworlds',
  badge: '23 CANON BRANCHES • DCU, DCEU, BATMAN, SUPERMAN, DCAU, DCAMU & VERTIGO',
  icon: '🦇',
  theme_color: '#0078F0',
  tagline: 'The complete DC Multiverse: James Gunn\'s DCU, the Snyderverse DCEU, classic Gotham sagas, DCAU/DCAMU animation, and Vertigo dark legends.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
  why_watch: 'Spanning more than 80 years of heroic legacy, gods, monsters, vigilantes, and alternate timelines across 130+ iconic productions.',
  sub_universes: DC_SUB_UNIVERSES,
  watch_modes: [
    { id: 'chrono', label: '⏳ Chronological Story Order', desc: 'Canonical timeline progression across the DC Multiverse' },
    { id: 'release', label: '🎞️ Release Date Order', desc: 'Theatrical and television release progression from 1943/1978 to 2026+' },
    { id: 'dceu_release', label: '⚡ A. DCEU — Release Order', desc: 'Man of Steel (2013) → Batman v Superman → Suicide Squad ... Lost Kingdom (2023)' },
    { id: 'dceu_chrono', label: '🔱 B. DCEU — Chronological Order', desc: 'Wonder Woman (1918) → WW84 (1984) → Man of Steel → BvS ... Lost Kingdom' },
    { id: 'dcu_canon', label: '🌌 C. DCU — Release / Canon Order', desc: 'Creature Commandos → Superman (2025) → Peacemaker S2 → Supergirl → Lanterns → Clayface' },
    { id: 'batman_live', label: '🦇 D. Batman — Live-Action Release Order', desc: 'Burton/Schumacher (1989–1997) → Dark Knight Trilogy (2005–2012) → The Batman (2022)' },
    { id: 'dark_knight', label: '🃏 E. Batman — Dark Knight Trilogy', desc: 'Batman Begins (2005) → The Dark Knight (2008) → The Dark Knight Rises (2012)' },
    { id: 'arrowverse', label: '🏹 F. Arrowverse Watch Order', desc: 'Arrow → The Flash → Supergirl → Legends of Tomorrow → Black Lightning → Batwoman' },
    { id: 'dcau', label: '📺 G. DCAU Watch Order', desc: 'Batman: TAS → Superman: TAS → Batman Beyond → Static Shock → Justice League & Unlimited' },
    { id: 'dcamu', label: '⚔️ H. DCAMU Watch Order', desc: 'Flashpoint Paradox (2013) → War → Son of Batman → Death of Superman → Apokolips War (2020)' },
    { id: 'tomorrowverse', label: '🚀 I. Tomorrowverse Watch Order', desc: 'Man of Tomorrow (2020) → Long Halloween → Beware My Power → Crisis on Infinite Earths' }
  ],
  timeline: DC_TIMELINE
};

const updatedStarWarsFranchise = {
  id: 'star-wars',
  name: 'Star Wars Galactic Canon & Legends',
  badge: '19 CANON BRANCHES • SKYWALKER SAGA, CLONE WARS, MANDALORIAN & EXPANDED LORE',
  icon: '⭐',
  theme_color: '#FFE81F',
  tagline: 'A long time ago in a galaxy far, far away... Explore the High Republic, Fall of the Jedi, Age of Rebellion, New Republic, and First Order.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
  why_watch: 'The quintessential space-opera mythology spanning Jedi, Sith, bounty hunters, starfighter dogfights, and revolutionary galactic struggles.',
  sub_universes: STAR_WARS_SUB_UNIVERSES,
  watch_modes: [
    { id: 'chrono', label: '⏳ Complete Canon Chronological', desc: 'The Acolyte → Prequel Trilogy → The Clone Wars → Bad Batch → Solo → Kenobi → Andor → Rebels → Rogue One → Original Trilogy → Mandalorian Era → Sequel Trilogy' },
    { id: 'release', label: '🎞️ Release Date Order', desc: 'Theatrical and television release order starting with A New Hope (1977) through 2026' },
    { id: 'skywalker_release', label: '⚔️ A. Skywalker Saga — Release Order', desc: 'Original Trilogy (1977–1983) → Prequel Trilogy (1999–2005) → Sequel Trilogy (2015–2019)' },
    { id: 'skywalker_chrono', label: '🪐 B. Skywalker Saga — Chronological', desc: 'Episode I (The Phantom Menace) through Episode IX (The Rise of Skywalker)' },
    { id: 'clone_wars_order', label: '🛡️ D. Clone Wars Watch Order', desc: 'Attack of the Clones → Clone Wars (Movie) → Clone Wars (Series) → Tales of the Jedi → Revenge of the Sith → The Bad Batch' },
    { id: 'rebellion_order', label: '✊ E. Rebellion Watch Order', desc: 'The Bad Batch → Solo → Obi-Wan Kenobi → Andor → Rebels → Rogue One → Original Trilogy (Episodes IV, V, VI)' },
    { id: 'mando_order', label: '👶 F. Mandalorian / New Republic Watch Order', desc: 'Return of the Jedi → The Mandalorian S1–S2 → Book of Boba Fett → The Mandalorian S3 → Ahsoka → Skeleton Crew → The Mandalorian and Grogu' },
    { id: 'ahsoka_order', label: '🌀 G. Ahsoka Watch Order', desc: 'The Clone Wars → Rebels → The Mandalorian S1–S3 → The Book of Boba Fett → Ahsoka' },
    { id: 'andor_rogue_order', label: '🎯 H. Andor / Rogue One Watch Order', desc: 'Andor Season 1 → Andor Season 2 → Rogue One: A Star Wars Story' },
    { id: 'animation_order', label: '🎨 I. Animation Watch Order', desc: 'The Clone Wars → Rebels → Resistance → Bad Batch → Tales of the Jedi → Tales of the Empire → Underworld → Visions → Maul' }
  ],
  timeline: STAR_WARS_TIMELINE
};

const updatedWizardingWorldFranchise = {
  id: 'wizarding-world',
  name: 'The Wizarding World of Harry Potter',
  badge: '6 CANON BRANCHES • HARRY POTTER, FANTASTIC BEASTS, HOGWARTS & VOLDEMORT LORE',
  icon: '🧙',
  theme_color: '#D3A625',
  tagline: 'The official Wizarding World catalog: J.K. Rowling\'s 8-film Harry Potter saga, Fantastic Beasts prequels, and Hogwarts lore.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
  why_watch: 'The most beloved fantasy franchise of modern literature and cinema, taking viewers into the spells, houses, mysteries, and battles of Hogwarts.',
  sub_universes: WIZARDING_WORLD_SUB_UNIVERSES,
  watch_modes: [
    { id: 'hp_release', label: '⚡ Harry Potter Release Order', desc: 'Philosopher\'s Stone (2001) → Chamber of Secrets → Azkaban → Goblet of Fire → Order of the Phoenix → Half-Blood Prince → Deathly Hallows Parts 1 & 2' },
    { id: 'chrono', label: '⏳ Wizarding World Chronological Order', desc: 'Fantastic Beasts 1–3 (1926–1932) → Harry Potter 1–8 (1991–1998) → The Battle of Hogwarts' },
    { id: 'fb_order', label: '🧳 Fantastic Beasts Order', desc: 'Fantastic Beasts and Where to Find Them (2016) → The Crimes of Grindelwald (2018) → The Secrets of Dumbledore (2022)' },
    { id: 'hp_essential', label: '⭐ Harry Potter Essential Order', desc: 'The definitive 8-film journey of the Boy Who Lived from the Sorting Hat to Voldemort\'s defeat' },
    { id: 'release', label: '🎞️ Full Theatrical Release Order', desc: 'Chronological theatrical progression from 2001 through 2026' }
  ],
  timeline: WIZARDING_WORLD_TIMELINE
};

const updatedMiddleEarthFranchise = {
  id: 'middle-earth',
  name: 'The Lord of the Rings & Middle-Earth',
  badge: '6 CANON BRANCHES • LOTR TRILOGY, THE HOBBIT, RINGS OF POWER & ANIMATION',
  icon: '🧝',
  theme_color: '#C5A059',
  tagline: 'J.R.R. Tolkien\'s legendary legendarium: Peter Jackson\'s Oscar-winning trilogies, The Rings of Power, and anime lore.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
  why_watch: 'The crowning achievement of high fantasy cinema, recipient of 17 Academy Awards with unparalleled worldbuilding and score.',
  sub_universes: MIDDLE_EARTH_SUB_UNIVERSES,
  watch_modes: [
    { id: 'chrono', label: '⏳ Middle-Earth Chronological Order', desc: 'The Rings of Power → The War of the Rohirrim → The Hobbit Trilogy → The Lord of the Rings Trilogy' },
    { id: 'lotr_release', label: '💍 Lord of the Rings Trilogy — Release Order', desc: 'The Fellowship of the Ring (2001) → The Two Towers (2002) → The Return of the King (2003)' },
    { id: 'hobbit_release', label: '🗡️ The Hobbit Trilogy — Release Order', desc: 'An Unexpected Journey (2012) → The Desolation of Smaug (2013) → The Battle of the Five Armies (2014)' },
    { id: 'movie_release', label: '🎞️ Middle-Earth Movie Release Order', desc: 'LOTR Trilogy (2001–2003) followed by The Hobbit Trilogy (2012–2014)' },
    { id: 'essential', label: '⭐ Essential Middle-Earth Order', desc: 'The Fellowship of the Ring → The Two Towers → The Return of the King' },
    { id: 'release', label: '📜 Full Release Progression', desc: 'From 1977 vintage animation and 2001 Jackson trilogy to modern day' }
  ],
  timeline: MIDDLE_EARTH_TIMELINE
};

const updatedFastFuriousFranchise = {
  id: 'fast-and-furious',
  name: 'Fast & Furious Saga',
  badge: '4 CANON BRANCHES • MAIN SAGA, TOKYO DRIFT CHRONOLOGY, HOBBS & SHAW & ANIMATION',
  icon: '🏎️',
  theme_color: '#FF2A00',
  tagline: 'Quarter-mile at a time: Street races, impossible vault heists, supersonic supercars, and the unbreakable code of family.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
  why_watch: 'The ultimate modern adrenaline franchise that evolved from gritty midnight Los Angeles street racing into billion-dollar globetrotting super-spy action.',
  sub_universes: FAST_FURIOUS_SUB_UNIVERSES,
  watch_modes: [
    { id: 'chrono', label: '⏳ Chronological Story Order', desc: '1 → 2 → 4 → 5 → 6 → Tokyo Drift → 7 → 8 → Hobbs & Shaw → 9 → Fast X' },
    { id: 'main_release', label: '🏎️ Main Saga — Release Order', desc: 'The Fast and the Furious (2001) → 2 Fast 2 Furious → Tokyo Drift (2006) ... Fast X (2023)' },
    { id: 'hobbs_shaw', label: '💥 Hobbs & Shaw Spinoff', desc: 'Fast & Furious Presents: Hobbs & Shaw (2019)' },
    { id: 'essential', label: '⭐ Essential Fast & Furious Order', desc: 'The Fast and the Furious → Fast Five → Fast & Furious 6 → Furious 7 → The Fate of the Furious → F9 → Fast X' },
    { id: 'release', label: '🎞️ Full Theatrical Release Order', desc: 'Exact chronological release order from 2001 through 2026' }
  ],
  timeline: FAST_FURIOUS_TIMELINE
};

const updatedTransformersFranchise = {
  id: 'transformers',
  name: 'Transformers Saga',
  badge: '5 CANON BRANCHES • BAYVERSE, REBOOT CONTINUITY, CYBERTRON ORIGINS & G1 ANIMATION',
  icon: '🤖',
  theme_color: '#0055FF',
  tagline: 'More than meets the eye: Autobots, Decepticons, Maximals, and the battle for the Allspark across millions of years.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/4N4sipl8T72tNE4earcctQa2Kw2.jpg',
  why_watch: 'The quintessential giant-robot spectacle combining high-octane vehicular action, extraterrestrial mythology, and Optimus Prime\'s legendary leadership.',
  sub_universes: TRANSFORMERS_SUB_UNIVERSES,
  watch_modes: [
    { id: 'chrono', label: '⏳ Chronological Story Order', desc: 'Transformers One (Cybertron) → Bumblebee (1987) → Rise of the Beasts (1994) → Bayverse (2007–2017)' },
    { id: 'live_release', label: '🎬 Live-Action Release Order', desc: 'Transformers (2007) → Revenge of the Fallen → Dark of the Moon → Age of Extinction → The Last Knight → Bumblebee → Rise of the Beasts' },
    { id: 'bayverse', label: '💥 Bayverse Order', desc: 'The 5-film saga directed by Michael Bay (2007–2017)' },
    { id: 'reboot', label: '🐝 Reboot / New Continuity', desc: 'Bumblebee (1987) → Transformers: Rise of the Beasts (1994)' },
    { id: 'animated', label: '🎨 Animated Order', desc: 'The Transformers: The Movie (1986) & Transformers One (2024)' },
    { id: 'essential', label: '⭐ Essential Order', desc: 'Transformers (2007) → Bumblebee (2018) → Rise of the Beasts (2023)' },
    { id: 'release', label: '🎞️ Full Theatrical Release Order', desc: 'Chronological theatrical progression from 1986 to 2024' }
  ],
  timeline: TRANSFORMERS_TIMELINE
};

const updatedMissionImpossibleFranchise = {
  id: 'mission-impossible',
  name: 'Mission: Impossible Saga',
  badge: '4 CANON BRANCHES • MAIN SAGA, ETHAN HUNT, IMF & CLASSIC TELEVISION',
  icon: '💥',
  theme_color: '#E50914',
  tagline: 'Your mission, should you choose to accept it: Tom Cruise\'s peerless death-defying stunts, IMF global espionage, and mask reveals.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
  why_watch: 'The pinnacle of practical cinematic action and espionage thrills, famous for Tom Cruise performing real halo jumps, biplane stunts, and Burj Khalifa climbs.',
  sub_universes: MISSION_IMPOSSIBLE_SUB_UNIVERSES,
  watch_modes: [
    { id: 'movie_release', label: '🎬 Main Movie Release Order', desc: 'Mission: Impossible (1996) → MI-2 → MI-3 → Ghost Protocol → Rogue Nation → Fallout → Dead Reckoning → The Final Reckoning' },
    { id: 'ethan_hunt', label: '🕶️ Ethan Hunt Order', desc: 'The complete 8-movie saga of impossible agent Ethan Hunt' },
    { id: 'essential', label: '⭐ Essential Order', desc: 'All 8 cinematic milestone blockbusters from 1996 to 2025' },
    { id: 'chrono', label: '⏳ Ethan Hunt Chronological Story', desc: 'Prague NOC list betrayal (1996) through the Sevastopol Arctic submarine climax (2025)' },
    { id: 'release', label: '🎞️ Full Franchise Release Order', desc: 'Classic 1966 & 1988 TV series through modern 2025 blockbuster cinema' }
  ],
  timeline: MISSION_IMPOSSIBLE_TIMELINE
};

const updatedJohnWickFranchise = {
  id: 'john-wick',
  name: 'John Wick Universe',
  badge: '3 CANON BRANCHES • MAIN SAGA, BALLERINA & THE CONTINENTAL',
  icon: '🎯',
  theme_color: '#F59E0B',
  tagline: 'Yeah, I\'m thinking I\'m back: Gun-fu mastery, the High Table underworld, gold coins, and legendary oaths of the Continental.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
  why_watch: 'The gold standard of 21st-century martial arts and stunt cinema, reinventing Hollywood action with Keanu Reeves, Chad Stahelski, and breathtaking worldbuilding.',
  sub_universes: JOHN_WICK_SUB_UNIVERSES,
  watch_modes: [
    { id: 'chrono', label: '⏳ Universe Chronological Order', desc: 'The Continental (1970s) → John Wick 1–4 → Ballerina (2025)' },
    { id: 'main_release', label: '🎯 Main Saga — Release Order', desc: 'John Wick (2014) → Chapter 2 (2017) → Chapter 3 (2019) → Chapter 4 (2023)' },
    { id: 'essential', label: '⭐ Essential Order', desc: 'The core 4-film Baba Yaga quadrilogy' },
    { id: 'release', label: '🎞️ Full Franchise Release Order', desc: 'Theatrical and television releases from 2014 to 2026' }
  ],
  timeline: JOHN_WICK_TIMELINE
};

const finalFranchises = [
  updatedMarvelFranchise, 
  updatedDcFranchise, 
  updatedStarWarsFranchise,
  updatedWizardingWorldFranchise,
  updatedMiddleEarthFranchise,
  updatedFastFuriousFranchise,
  updatedTransformersFranchise,
  updatedMissionImpossibleFranchise,
  updatedJohnWickFranchise,
  ...otherFranchises
];

const outputFileContent = `// Master Cinematic Universes, Franchise Hubs & Canon Watch Orders
// Generated for cine2watch v2 Production Platform with Marvel (15), DC (23), Star Wars (19), Wizarding World (6), Middle-Earth (6), Fast & Furious (4), Transformers (5), Mission: Impossible (4), and John Wick (3)

export const FRANCHISE_HUBS = ${JSON.stringify(FRANCHISE_HUBS, null, 2)};

export const FRANCHISES = ${JSON.stringify(finalFranchises, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../data/franchises.js'), outputFileContent, 'utf8');
console.log('Successfully compiled complete master franchises!');
console.log('Total franchises:', finalFranchises.length);
console.log('Marvel total chapters:', MARVEL_TIMELINE.length);
console.log('DC total chapters:', DC_TIMELINE.length);
console.log('Star Wars total chapters:', STAR_WARS_TIMELINE.length);
console.log('Wizarding World total chapters:', WIZARDING_WORLD_TIMELINE.length);
console.log('Middle-Earth total chapters:', MIDDLE_EARTH_TIMELINE.length);
console.log('Fast & Furious total chapters:', FAST_FURIOUS_TIMELINE.length);
console.log('Transformers total chapters:', TRANSFORMERS_TIMELINE.length);
console.log('Mission: Impossible total chapters:', MISSION_IMPOSSIBLE_TIMELINE.length);
console.log('John Wick total chapters:', JOHN_WICK_TIMELINE.length);

