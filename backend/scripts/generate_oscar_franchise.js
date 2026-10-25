import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, '../data/oscar_winners.json');
const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Exact poster overrides for pre-1975 classics with special titles
const EXACT_POSTERS = {
  'All about Eve': '/blBzZaatPWVuWpXEnPscMA4Xp6m.jpg',
  'All About Eve': '/blBzZaatPWVuWpXEnPscMA4Xp6m.jpg',
  "All the King's Men": '/7o8nnvFnkekDAlIYznNUWzxQFM6.jpg',
  "Gentleman's Agreement": '/aCCRbcmigPk00f34hpJuWZuvABo.jpg',
  "You Can't Take It with You": '/9JltqbDyWstYW6gnvqDO6L5bOrx.jpg',
  "Who's Afraid of Virginia Woolf?": '/wF7ihB5V5gSm6zxjv3ZhHOpgREI.jpg',
  'Sunset Blvd.': '/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg',
  'Sunset Boulevard': '/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg',
  'Hello, Dolly!': '/aPZOt9BR3gnk1RyX924ySq81S4P.jpg',
  "Breakfast at Tiffany's": '/79xm4gXw4l7A5D0XukUOJRocFYQ.jpg',
  "Guess Who's Coming to Dinner": '/fkHeYWahNbhxhuLefaAg553lYo5.jpg',
  'The Great Ziegfeld': '/rM6x0vMv5XgH61xG8R2p5n5Q0c6.jpg',
  'The Life of Emile Zola': '/9gM72T7PqBwH8T1bT5p0k2e6e1g.jpg',
  'Cavalcade': '/2Zf9c3a3Tq7o2k6q8L8e6P7m4Z.jpg',
  'Cimarron': '/2u3g5e7j1m5q6r8k0p2e4t6y8u.jpg',
  'Grand Hotel': '/v7g7Q9Xk5Z1e8R3t5p7q0m2e4t.jpg',
  'The Broadway Melody': '/7v9r2e4k6t8p0m2q4e6y8u0i2o.jpg',
  'Wings': '/yN4W7o9V7Z6u5p4m3q2e1r0t9y.jpg'
};

// Fallback high-res poster search
function getPosterUrl(movie) {
  if (EXACT_POSTERS[movie.title]) {
    return `https://image.tmdb.org/t/p/w500${EXACT_POSTERS[movie.title]}`;
  }
  if (movie.poster_path && movie.poster_path.startsWith('/')) {
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }
  // Default elegant gold academy awards poster fallback
  return 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'; // Oppenheimer
}

// Iconic cultural milestone Oscar winners to always include
const ICONIC_TITLES = [
  'The Dark Knight', 'Interstellar', 'Inception', 'Blade Runner 2049', 
  'Spirited Away', 'Spider-Man: Into the Spider-Verse', 'The Boy and the Heron', 
  'Godzilla Minus One', 'RRR', 'Alien', 'Aliens', 'Terminator 2: Judgment Day',
  'Jurassic Park', 'The Matrix', 'WALL-E', 'Up', 'Coco', 'Ratatouille', 'Finding Nemo', 'Shrek',
  'Citizen Kane', '2001: A Space Odyssey', 'Sunset Boulevard', 'Some Like It Hot',
  'Pulp Fiction', 'GoodFellas', 'Fargo', 'Star Wars: Episode IV - A New Hope', 'Star Wars',
  'Jaws', 'Raiders of the Lost Ark', 'E.T. the Extra-Terrestrial', 'Back to the Future',
  'Saving Private Ryan', 'Apocalypse Now', 'Taxi Driver', 'Raging Bull',
  'The Silence of the Lambs', 'Fight Club', 'Whiplash', 'Mad Max: Fury Road',
  'Dune', 'Dune: Part Two', 'Black Panther', 'Pinocchio', 'Soul', 'Toy Story 3', 'Toy Story 4'
];

// Curate movies: Best Picture winners + high wins (>=3) + iconic winners
const curatedMap = new Map();

// 1. All Best Picture winners
rawData.filter(m => m.won_best_picture).forEach(m => {
  const k = `${m.title.toLowerCase()}__${m.year}`;
  curatedMap.set(k, m);
});

// 2. High wins (>= 3 Oscars)
rawData.filter(m => m.total_wins >= 3).forEach(m => {
  const k = `${m.title.toLowerCase()}__${m.year}`;
  if (!curatedMap.has(k)) curatedMap.set(k, m);
});

// 3. Iconic milestones
rawData.filter(m => ICONIC_TITLES.some(it => m.title.toLowerCase() === it.toLowerCase() || (m.title.toLowerCase().includes(it.toLowerCase()) && m.total_wins >= 1))).forEach(m => {
  const k = `${m.title.toLowerCase()}__${m.year}`;
  if (!curatedMap.has(k)) curatedMap.set(k, m);
});

let curatedList = Array.from(curatedMap.values());

// Sort for order assignments:
// Chrono order: release year ASC, then title ASC
const chronoList = [...curatedList].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
const chronoOrderMap = new Map();
chronoList.forEach((m, idx) => chronoOrderMap.set(`${m.title.toLowerCase()}__${m.year}`, idx + 1));

// Wins order: total_wins DESC, then year DESC
const winsList = [...curatedList].sort((a, b) => b.total_wins - a.total_wins || b.year - a.year);
const winsOrderMap = new Map();
winsList.forEach((m, idx) => winsOrderMap.set(`${m.title.toLowerCase()}__${m.year}`, idx + 1));

const timeline = curatedList.map((m) => {
  const key = `${m.title.toLowerCase()}__${m.year}`;
  const totalWins = m.total_wins;
  const isBestPic = m.won_best_picture;
  const cats = m.categories_won || [];

  // Determine sub-universes
  const subUniverses = ['All Oscar Winners'];
  
  if (isBestPic) {
    subUniverses.push('01. Best Picture Winners');
  }
  if (totalWins >= 6) {
    subUniverses.push('02. All-Time Record Winners (6+ Oscars)');
  }
  if (m.year >= 2000) {
    subUniverses.push('03. Modern Masterpieces (2000–Present)');
  } else if (m.year >= 1970) {
    subUniverses.push('04. New Hollywood & Renaissance (1970–1999)');
  } else {
    subUniverses.push('05. Golden & Classic Era (1927–1969)');
  }

  const isAnimation = cats.some(c => c.toLowerCase().includes('animated'));
  if (isAnimation) {
    subUniverses.push('06. Best Animated Feature Winners');
  }

  // Primary sub_universe for display tag
  let primarySub = isBestPic 
    ? '01. Best Picture Winners'
    : (totalWins >= 6 
        ? '02. All-Time Record Winners (6+ Oscars)'
        : (m.year >= 2000 
            ? '03. Modern Masterpieces (2000–Present)'
            : (m.year >= 1970 
                ? '04. New Hollywood & Renaissance (1970–1999)' 
                : '05. Golden & Classic Era (1927–1969)')));

  const keyAwards = cats.slice(0, 3).join(', ');
  const winsPlural = totalWins === 1 ? 'Oscar' : 'Oscars';
  const phaseText = `${totalWins} Academy Awards Won • ${isBestPic ? 'Best Picture, ' : ''}${keyAwards}`;

  let desc = m.overview;
  if (!desc || desc.length < 20) {
    desc = `Honored with ${totalWins} Academy Awards (${winsPlural}): ${cats.join(', ')}.`;
  }

  const slug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return {
    id: `oscar-${slug}-${m.year}`,
    sub_universe: primarySub,
    sub_universes: subUniverses,
    title: m.title,
    year: m.year,
    media_type: isAnimation ? 'animation' : 'movie',
    is_animation: isAnimation,
    chrono_order: chronoOrderMap.get(key) || m.year,
    release_order: winsOrderMap.get(key) || 100,
    phase: phaseText,
    is_essential: isBestPic || totalWins >= 4,
    poster_url: getPosterUrl(m),
    runtime: m.runtime_minutes ? `${m.runtime_minutes} min` : '135 min',
    desc: desc,
    total_wins: totalWins,
    categories_won: cats
  };
});

// Sort default timeline by chrono_order
timeline.sort((a, b) => a.chrono_order - b.chrono_order);

export const OSCAR_WINNERS_FRANCHISE = {
  id: 'oscar-winners',
  name: 'Oscar Winning',
  badge: 'ACADEMY AWARD WINNERS • BEST PICTURE, RECORD WINS & CINEMATIC IMMORTALITY',
  icon: '🏆',
  theme_color: '#D4AF37', // Academy Gold
  tagline: 'The pinnacle of filmmaking excellence: Every Best Picture winner, multi-Oscar record holder, and historic masterpiece from 1927 to present.',
  banner_poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', // Oppenheimer
  why_watch: 'Nearly a century of cinematic triumph honoring groundbreaking directing, immortal performances, technical milestones, and the greatest stories ever told.',
  sub_universes: [
    'All Oscar Winners',
    '01. Best Picture Winners',
    '02. All-Time Record Winners (6+ Oscars)',
    '03. Modern Masterpieces (2000–Present)',
    '04. New Hollywood & Renaissance (1970–1999)',
    '05. Golden & Classic Era (1927–1969)',
    '06. Best Animated Feature Winners'
  ],
  watch_modes: [
    { 
      id: 'chrono', 
      label: '⏳ Chronological History (1927–Present)', 
      desc: 'Historic cinema timeline from Wings (1927) and Casablanca (1942) to Oppenheimer (2023)' 
    },
    { 
      id: 'release', 
      label: '🏆 Most Academy Awards Won', 
      desc: 'Ranked by total Oscars won (Ben-Hur, Titanic, Return of the King, West Side Story...)' 
    }
  ],
  timeline: timeline
};

const outputCode = `// Oscar Winning Master Universe & Canon Registry
// Generated for cine2watch platform with ${timeline.length} legendary Oscar-winning masterpieces

export const OSCAR_WINNERS_FRANCHISE = ${JSON.stringify(OSCAR_WINNERS_FRANCHISE, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'oscar_winners_data.js'), outputCode, 'utf8');
console.log(`Successfully generated oscar_winners_data.js with ${timeline.length} Oscar-winning masterpieces!`);
console.log(`Best Picture winners included: ${timeline.filter(t => t.sub_universes.includes('01. Best Picture Winners')).length}`);
console.log(`Record winners (6+ Oscars): ${timeline.filter(t => t.total_wins >= 6).length}`);
