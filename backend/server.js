import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve database path across local dev, root execution, and serverless environments
const possibleDbPaths = [
  path.resolve(__dirname, 'movies.db'),
  path.resolve(__dirname, '../backend/movies.db'),
  path.resolve(process.cwd(), 'backend/movies.db'),
  path.resolve(process.cwd(), 'movies.db'),
  path.resolve(__dirname, '../movies_master.db'),
  path.resolve(process.cwd(), 'movies_master.db')
];

const dbPath = possibleDbPaths.find(p => fs.existsSync(p)) || possibleDbPaths[0];
console.log(`[CineMatch API] Loading database from: ${dbPath}`);

const isVercel = Boolean(process.env.VERCEL);
const db = new Database(dbPath, { 
  fileMustExist: true, 
  readonly: isVercel 
});

// Optimize SQLite memory & WAL reads in Node
if (!isVercel) {
  try {
    db.pragma('journal_mode = WAL');
    db.pragma('synchronous = NORMAL');
  } catch (e) {
    console.log('[CineMatch API] Pragma note:', e.message);
  }
}

const app = express();
app.use(cors());
app.use(express.json());

// 100% VERIFIED PRESTIGE WEB SERIES POOL (All poster URLs verified HTTP 200 on TMDB CDN)
const VERIFIED_SERIES_POOL = [
  {
    id: 'series-bb',
    title: 'Breaking Bad',
    year: '2008–2013',
    rating: 9.5,
    votes: '2.1M',
    genres: ['Crime', 'Drama', 'Thriller'],
    badge: 'PRESTIGE TV',
    tagline: 'The definitive descent of Walter White into Heisenberg.',
    overview: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing methamphetamine to secure his family’s financial future.',
    poster_url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
    trailer_embed: 'https://www.youtube.com/embed/HhesaQXLuRY',
    yt_search_url: 'https://www.youtube.com/results?search_query=Breaking+Bad+official+trailer',
    watch_url: 'https://www.google.com/search?q=' + encodeURIComponent('watch Breaking Bad series streaming online'),
    justwatch_url: 'https://www.justwatch.com/find?q=Breaking%20Bad'
  },
  {
    id: 'series-chernobyl',
    title: 'Chernobyl',
    year: '2019',
    rating: 9.4,
    votes: '880K',
    genres: ['History', 'Drama', 'Thriller'],
    badge: 'MINISERIES MASTERPIECE',
    tagline: 'What is the cost of lies?',
    overview: 'In April 1986, an explosion at the Chernobyl nuclear power plant in the Soviet Union becomes one of the world’s worst man-made catastrophes.',
    poster_url: 'https://image.tmdb.org/t/p/w500/kVTz8T718i74RZb9lQ4v2EeKfKV.jpg',
    trailer_embed: 'https://www.youtube.com/embed/s9APLXM9Ei8',
    yt_search_url: 'https://www.youtube.com/results?search_query=Chernobyl+HBO+official+trailer'
  },
  {
    id: 'series-got',
    title: 'Game of Thrones',
    year: '2011–2019',
    rating: 9.2,
    votes: '2.3M',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    badge: 'EPIC FANTASY',
    tagline: 'When you play the game of thrones, you win or you die.',
    overview: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    poster_url: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    trailer_embed: 'https://www.youtube.com/embed/KPLWWIOCOOQ',
    yt_search_url: 'https://www.youtube.com/results?search_query=Game+of+Thrones+official+trailer'
  },
  {
    id: 'series-st',
    title: 'Stranger Things',
    year: '2016–Present',
    rating: 8.7,
    votes: '1.4M',
    genres: ['Sci-Fi', 'Horror', 'Drama'],
    badge: 'SUPERNATURAL PHENOMENON',
    tagline: 'One friend can change everything.',
    overview: 'When a young boy vanishes, a small Indiana town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    poster_url: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    trailer_embed: 'https://www.youtube.com/embed/b9EkMc79ZSU',
    yt_search_url: 'https://www.youtube.com/results?search_query=Stranger+Things+official+trailer'
  },
  {
    id: 'series-aot',
    title: 'Attack on Titan (進撃の巨人)',
    year: '2013–2023',
    rating: 9.1,
    votes: '540K',
    genres: ['Animation', 'Action', 'Adventure', 'Fantasy'],
    badge: 'ANIME REVOLUTION',
    tagline: 'If you win, you live. If you lose, you die. If you don\'t fight, you can\'t win!',
    overview: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
    poster_url: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg',
    trailer_embed: 'https://www.youtube.com/embed/MGRm4IzK1SQ',
    yt_search_url: 'https://www.youtube.com/results?search_query=Attack+on+Titan+official+trailer'
  },
  {
    id: 'series-dark',
    title: 'Dark',
    year: '2017–2020',
    rating: 8.7,
    votes: '460K',
    genres: ['Sci-Fi', 'Mystery', 'Drama'],
    badge: 'MIND-BENDING NOIR',
    tagline: 'The question is not where, but when.',
    overview: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
    poster_url: 'https://image.tmdb.org/t/p/w500/iHKAzTutbuXXniKinG1a2ZcKxgz.jpg',
    trailer_embed: 'https://www.youtube.com/embed/rrwycJ08PSA',
    yt_search_url: 'https://www.youtube.com/results?search_query=Dark+Netflix+official+trailer'
  },
  {
    id: 'series-peaky',
    title: 'Peaky Blinders',
    year: '2013–2022',
    rating: 8.8,
    votes: '630K',
    genres: ['Crime', 'Drama'],
    badge: 'BRITISH CRIME ODYSSEY',
    tagline: 'By order of the Peaky Blinders.',
    overview: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
    poster_url: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',
    trailer_embed: 'https://www.youtube.com/embed/oVzVdvGIC7U',
    yt_search_url: 'https://www.youtube.com/results?search_query=Peaky+Blinders+official+trailer'
  },
  {
    id: 'series-hotd',
    title: 'House of the Dragon',
    year: '2022–Present',
    rating: 8.4,
    votes: '420K',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    badge: 'TARGARYEN CIVIL WAR',
    tagline: 'Fire will reign.',
    overview: 'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
    poster_url: 'https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg',
    trailer_embed: 'https://www.youtube.com/embed/DotnJ7tTA34',
    yt_search_url: 'https://www.youtube.com/results?search_query=House+of+the+Dragon+official+trailer'
  },
  {
    id: 'series-loki',
    title: 'Loki',
    year: '2021–2023',
    rating: 8.2,
    votes: '390K',
    genres: ['Sci-Fi', 'Action', 'Adventure', 'Fantasy'],
    badge: 'MULTIVERSE ODYSSEY',
    tagline: 'Glorious purpose across the timelines.',
    overview: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.',
    poster_url: 'https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg',
    trailer_embed: 'https://www.youtube.com/embed/nW948Va-l10',
    yt_search_url: 'https://www.youtube.com/results?search_query=Loki+Disney+Plus+official+trailer'
  }
];

// Welcome & Health Check Routes
app.get('/', (req, res) => {
  res.json({
    message: '🎬 CineMatch Decision Studio API is running!',
    status: 'online',
    database: path.basename(dbPath),
    endpoints: {
      recommend: '/api/recommend?industry=hollywood&genres=Action,Sci-Fi&start_year=2010&end_year=2020&media_type=movie',
      random_suggestion: '/api/random-suggestion',
      health: '/api/health'
    }
  });
});

app.get('/api/health', (req, res) => {
  try {
    const row = db.prepare('SELECT COUNT(*) as count FROM movies').get();
    res.json({ status: 'healthy', total_movies: row.count, database: path.basename(dbPath) });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// Genre Synonym Mappings
const GENRE_MAP = {
  'Sci-Fi': 'Science Fiction',
  'SciFi': 'Science Fiction',
  'Sci-fi': 'Science Fiction'
};

// LIVE DYNAMIC RANDOM SUGGESTION ENDPOINT (ENHANCED: MOOD CHIPS + SNACK PAIRINGS + WATCH LINKS)
app.get('/api/random-suggestion', (req, res) => {
  try {
    const mood = (req.query.mood || 'all').toLowerCase();

    // 1. Filter SQLite query by mood if requested
    let moodFilter = '';
    let seriesCandidates = VERIFIED_SERIES_POOL;

    if (mood === 'action') {
      moodFilter = "AND (genres LIKE '%Action%' OR genres LIKE '%Adventure%')";
      seriesCandidates = VERIFIED_SERIES_POOL.filter(s => s.genres.some(g => ['Action', 'Adventure', 'Fantasy'].includes(g)));
    } else if (mood === 'mystery') {
      moodFilter = "AND (genres LIKE '%Mystery%' OR genres LIKE '%Sci-Fi%')";
      seriesCandidates = VERIFIED_SERIES_POOL.filter(s => s.genres.some(g => ['Sci-Fi', 'Mystery'].includes(g)));
    } else if (mood === 'comedy') {
      moodFilter = "AND (genres LIKE '%Comedy%' OR genres LIKE '%Animation%' OR genres LIKE '%Family%')";
      seriesCandidates = VERIFIED_SERIES_POOL.filter(s => s.genres.some(g => ['Animation', 'Comedy'].includes(g)) || ['series-loki', 'series-st'].includes(s.id));
    } else if (mood === 'horror') {
      moodFilter = "AND (genres LIKE '%Horror%' OR genres LIKE '%Thriller%' OR genres LIKE '%Crime%')";
      seriesCandidates = VERIFIED_SERIES_POOL.filter(s => s.genres.some(g => ['Horror', 'Thriller', 'Crime'].includes(g)));
    } else if (mood === 'drama') {
      moodFilter = "AND (genres LIKE '%Drama%' OR genres LIKE '%Romance%' OR genres LIKE '%History%')";
      seriesCandidates = VERIFIED_SERIES_POOL.filter(s => s.genres.some(g => ['Drama', 'History', 'Crime'].includes(g)));
    }

    if (!seriesCandidates || seriesCandidates.length === 0) {
      seriesCandidates = VERIFIED_SERIES_POOL;
    }

    const movieSql = `
      SELECT id, title, year, rating, votes, poster_path, overview, genres, original_language, runtime_minutes, director, imdb_id
      FROM (
        SELECT id, title, year, rating, votes, poster_path, overview, genres, original_language, runtime_minutes, director, imdb_id
        FROM movies
        WHERE media_type = 'movie'
          AND rating >= 7.2
          AND votes >= 1000
          AND poster_path IS NOT NULL
          AND overview IS NOT NULL
          ${moodFilter}
        LIMIT 2500
      )
      ORDER BY RANDOM()
      LIMIT 1;
    `;

    const movieRow = db.prepare(movieSql).get();
    if (!movieRow) {
      return res.status(404).json({ error: 'No matching movie found for this mood' });
    }

    const movieFormatted = {
      id: movieRow.id,
      title: movieRow.title,
      year: movieRow.year,
      rating: typeof movieRow.rating === 'number' ? Number(movieRow.rating.toFixed(1)) : movieRow.rating,
      votes: movieRow.votes ? movieRow.votes.toLocaleString() : '10K+',
      genres: movieRow.genres ? movieRow.genres.split(',').map(g => g.trim()) : [],
      overview: movieRow.overview,
      original_language: movieRow.original_language,
      runtime_minutes: movieRow.runtime_minutes || null,
      director: movieRow.director || null,
      imdb_id: movieRow.imdb_id || null,
      badge: 'FEATURE FILM',
      poster_url: `https://image.tmdb.org/t/p/w500${movieRow.poster_path}`,
      yt_search_url: `https://www.youtube.com/results?search_query=${encodeURIComponent(movieRow.title + ' ' + movieRow.year + ' official trailer')}`,
      watch_url: `https://www.google.com/search?q=${encodeURIComponent('watch ' + movieRow.title + ' ' + movieRow.year + ' streaming online')}`,
      justwatch_url: `https://www.justwatch.com/find?q=${encodeURIComponent(movieRow.title)}`
    };

    // 2. Pick 1 matching series from candidates
    const pickedSeries = seriesCandidates[Math.floor(Math.random() * seriesCandidates.length)];
    const seriesFormatted = {
      ...pickedSeries,
      watch_url: pickedSeries.watch_url || `https://www.google.com/search?q=${encodeURIComponent('watch ' + pickedSeries.title + ' series streaming online')}`,
      justwatch_url: pickedSeries.justwatch_url || `https://www.justwatch.com/find?q=${encodeURIComponent(pickedSeries.title)}`
    };

    // 3. Dynamic pairing themes
    const moodThemes = {
      action: ['High-Octane Adrenaline & Iconic Showdowns', 'Epic Quest & Grand Spectacle', 'Relentless Momentum & Heroic Feats'],
      mystery: ['Mind-Bending Lore & Reality-Warping Secrets', 'Conspiracy, Time & Parallel Realities', 'Cryptic Puzzles & Psychological Tension'],
      comedy: ['Feel-Good Escapism & Kinetic Wit', 'Unfiltered Laughs & Whimsical Chaos', 'Heartwarming Charm & Dynamic Duos'],
      horror: ['Chilling Atmosphere & Unrelenting Suspense', 'Dark Noir & Pulse-Pounding Dread', 'Shadows, Betrayal & High Stakes'],
      drama: ['Heartfelt Masterclass & Human Drama', 'Poignant Journeys & Unforgettable Arcs', 'Cinematic Power & Soul-Stirring Performances'],
      all: [
        'Epic Narrative & Deep World-Building',
        'High-Stakes Tension & Iconic Characters',
        'Mind-Bending Lore & Cinematic Excellence',
        'Critically Acclaimed Masterclass Duo',
        'Atmospheric Thrills & Unforgettable Arcs'
      ]
    };
    const themePool = moodThemes[mood] || moodThemes.all;
    const pairingTheme = themePool[Math.floor(Math.random() * themePool.length)];

    // 4. Curated Food, Drink & Snack Pairing
    const combinedGenres = [...(movieFormatted.genres || []), ...(seriesFormatted.genres || [])].join(' ').toLowerCase();
    let snack = { icon: '🍿', food: 'Hot Butter Popcorn & Warm Pretzels', drink: 'Chilled Cherry Cola', vibe: 'Classic Cinema Night' };
    if (combinedGenres.includes('horror') || combinedGenres.includes('thriller') || combinedGenres.includes('mystery')) {
      snack = { icon: '🍿', food: 'Sea Salt Popcorn & Nacho Dip', drink: 'Cold Soda & Dim Lights', vibe: 'Tense & Gripping Atmosphere' };
    } else if (combinedGenres.includes('animation') || combinedGenres.includes('fantasy') || combinedGenres.includes('adventure')) {
      snack = { icon: '🍜', food: 'Steaming Ramen or Crispy Gyoza', drink: 'Boba Milk Tea or Green Tea', vibe: 'Pure Immersive Escapism' };
    } else if (combinedGenres.includes('comedy') || combinedGenres.includes('family')) {
      snack = { icon: '🍕', food: 'Cheesy Pepperoni Pizza Slices', drink: 'Frosty Soda or Cider', vibe: 'Unfiltered Feel-Good Fun' };
    } else if (combinedGenres.includes('romance') || combinedGenres.includes('drama')) {
      snack = { icon: '🍷', food: 'Artisan Dark Chocolate & Berries', drink: 'Red Wine or Hot Cocoa', vibe: 'Cozy, Soulful & Thought-Provoking' };
    } else if (combinedGenres.includes('action') || combinedGenres.includes('crime')) {
      snack = { icon: '🌮', food: 'Loaded Queso Nachos with Jalapeños', drink: 'Ice-Cold Craft Brew', vibe: 'High-Octane Adrenaline' };
    }

    return res.json({
      success: true,
      timestamp: Date.now(),
      mood: mood,
      theme: pairingTheme,
      snack: snack,
      movie: movieFormatted,
      series: seriesFormatted
    });
  } catch (err) {
    console.error('Random suggestion error:', err);
    return res.status(500).json({ error: 'Failed to retrieve random suggestion' });
  }
});

// RECOMMENDATION ENDPOINT
app.get('/api/recommend', (req, res) => {
  const { industry, media_type, start_year, end_year, genres, ignore_year, exclude_ids } = req.query;

  // 1. Validation: Require Exactly 2 Genres
  const rawGenreList = Array.isArray(genres) 
    ? genres 
    : (genres ? genres.split(',').map(g => g.trim()) : []);

  const genreList = rawGenreList.map(g => GENRE_MAP[g] || g);

  if (genreList.length !== 2) {
    return res.status(400).json({ error: 'Please select exactly 2 genres for maximum recommendation accuracy.' });
  }

  // 2. Build Dynamic SQL Conditions & Params
  const conditions = [
    `m.media_type = ?`,
    `m.votes >= 50`
  ];
  const params = [
    media_type || 'movie'
  ];

  // Exclude previously shown IDs if requested ("don't show last options next time")
  if (exclude_ids) {
    const excludeList = exclude_ids.split(',').map(id => id.trim()).filter(Boolean);
    if (excludeList.length > 0) {
      const placeholders = excludeList.map(() => '?').join(',');
      conditions.push(`m.id NOT IN (${placeholders})`);
      params.push(...excludeList);
    }
  }

  // Optional Year Range Filter (unless ignore_year=true for fallback expansion)
  if (ignore_year !== 'true') {
    conditions.push(`m.year BETWEEN ? AND ?`);
    params.push(
      parseInt(start_year, 10) || 1975,
      parseInt(end_year, 10) || 2026
    );
  }

  // Industry / Wood Filter Rules
  const ind = (industry || 'all').toLowerCase();
  if (ind === 'hollywood') {
    conditions.push(`m.original_language = ?`);
    params.push('en');
  } else if (ind === 'bollywood') {
    conditions.push(`m.original_language = ?`);
    params.push('hi');
  } else if (ind === 'south_indian') {
    conditions.push(`m.original_language IN ('te', 'ta', 'ml', 'kn')`);
  } else if (ind === 'anime') {
    conditions.push(`m.original_language = ?`);
    params.push('ja');
    conditions.push(`m.id IN (SELECT movie_id FROM movie_genres WHERE genre = 'Animation')`);
  } else if (ind === 'japanese_live') {
    conditions.push(`m.original_language = ?`);
    params.push('ja');
    conditions.push(`m.id NOT IN (SELECT movie_id FROM movie_genres WHERE genre = 'Animation')`);
  } else if (ind === 'korean') {
    conditions.push(`m.original_language = ?`);
    params.push('ko');
  }

  // Subquery with INTERSECT (proven fastest in benchmarks)
  const intersectSubqueries = genreList
    .map(() => `SELECT movie_id FROM movie_genres WHERE genre = ?`)
    .join(' INTERSECT ');
  
  params.unshift(...genreList);

  const sql = `
    SELECT 
      m.id,
      m.title,
      m.year,
      m.rating,
      m.votes,
      m.poster_path,
      m.overview,
      m.cast,
      m.genres,
      m.certification,
      m.original_language,
      m.runtime_minutes,
      m.director,
      m.imdb_id
    FROM movies m
    WHERE m.id IN (${intersectSubqueries})
      AND ${conditions.join(' AND ')}
    ORDER BY m.rating DESC, m.votes DESC
    LIMIT 15;
  `;

  try {
    const stmt = db.prepare(sql);
    const results = stmt.all(...params);

    // Format poster paths, YouTube search links, and Where to Watch links
    const formatted = results.map(item => ({
      ...item,
      poster_url: item.poster_path 
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}` 
        : null,
      yt_search_url: `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + ' ' + item.year + ' official trailer')}`,
      watch_url: `https://www.google.com/search?q=${encodeURIComponent('watch ' + item.title + ' ' + item.year + ' movie streaming online')}`,
      justwatch_url: `https://www.justwatch.com/find?q=${encodeURIComponent(item.title)}`
    }));

    if (formatted.length === 0) {
      return res.json({
        found: false,
        count: 0,
        message: "No new titles found matching this criteria. Click 'Expand to All Eras' or clear history to see fresh recommendations.",
        data: []
      });
    }

    return res.json({
      found: true,
      count: formatted.length,
      data: formatted
    });
  } catch (err) {
    console.error('Query error:', err);
    return res.status(500).json({ error: 'Failed to retrieve recommendations' });
  }
});

const PORT = process.env.PORT || 5000;

// Only start standalone HTTP server if running directly (not imported as a serverless handler)
if (process.env.NODE_ENV !== 'production' || process.env.RENDER || !process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => console.log(`Recommendation server listening on http://localhost:${PORT}`));
}

export default app;
