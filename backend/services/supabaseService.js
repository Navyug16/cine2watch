import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://enqufpimptgjsbztkcns.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_lPmZk0qPiGmIzgUqVWpliw_t4uAInF7';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false }
});

// Format movie / series row into a rich standard frontend item
export function formatMediaItem(item, customBadge = null) {
  if (!item) return null;

  const posterUrl = item.poster_path
    ? (item.poster_path.startsWith('http') ? item.poster_path : `https://image.tmdb.org/t/p/w500${item.poster_path}`)
    : null;

  const genreList = typeof item.genres === 'string'
    ? item.genres.split(',').map(g => g.trim()).filter(Boolean)
    : (Array.isArray(item.genres) ? item.genres : []);

  const cleanYear = item.year || 'Unknown';
  const cleanTitle = item.title || item.original_title || 'Untitled';
  const isSeries = item.media_type === 'tvSeries' || item.media_type === 'tvMiniSeries' || item.media_type === 'series';

  return {
    id: String(item.id),
    imdb_id: item.imdb_id || null,
    title: cleanTitle,
    original_title: item.original_title || cleanTitle,
    media_type: isSeries ? 'tvSeries' : 'movie',
    badge: customBadge || (isSeries ? 'PRESTIGE SERIES' : 'FEATURE FILM'),
    year: cleanYear,
    rating: typeof item.rating === 'number' ? Number(item.rating.toFixed(1)) : (Number(item.rating) || 7.0),
    votes: typeof item.votes === 'number' ? item.votes.toLocaleString() : (item.votes || '1K+'),
    raw_votes: Number(item.votes) || 0,
    runtime_minutes: item.runtime_minutes || null,
    genres: genreList,
    overview: item.overview || 'No storyline synopsis currently cataloged in the archives.',
    original_language: (item.original_language || 'en').toLowerCase(),
    director: item.director || null,
    cast_members: item.cast_members || null,
    poster_url: posterUrl,
    yt_search_url: `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanTitle + ' ' + cleanYear + ' official trailer')}`,
    watch_url: `https://www.google.com/search?q=${encodeURIComponent('watch ' + cleanTitle + ' ' + cleanYear + (isSeries ? ' series' : ' movie') + ' streaming online')}`,
    justwatch_url: `https://www.justwatch.com/find?q=${encodeURIComponent(cleanTitle)}`
  };
}

// 1. RECOMMENDATION ENGINE (4-Tap Funnel)
export async function getRecommendations({
  industry = 'all',
  media_type = 'movie',
  start_year = 1975,
  end_year = 2026,
  genres = [],
  exclude_ids = [],
  ignore_year = false
}) {
  let query = supabase
    .from('movies')
    .select('id, imdb_id, title, original_title, media_type, year, original_language, genres, rating, votes, runtime_minutes, director, cast_members, poster_path, overview');

  // Media Type
  if (media_type === 'tvSeries' || media_type === 'series') {
    query = query.in('media_type', ['tvSeries', 'tvMiniSeries']);
  } else {
    query = query.eq('media_type', 'movie');
  }

  // Base quality filters
  query = query.not('poster_path', 'is', null);
  query = query.not('overview', 'is', null);

  // Year range
  if (!ignore_year) {
    const sYear = parseInt(start_year, 10) || 1975;
    const eYear = parseInt(end_year, 10) || 2026;
    query = query.gte('year', sYear).lte('year', eYear);
  }

  // Industry / Regional Languages
  const ind = (industry || 'all').toLowerCase();
  if (ind === 'hollywood' || ind === 'north_america') {
    query = query.eq('original_language', 'en');
  } else if (ind === 'european') {
    // True European Cinema (Spanish, French, German, Italian, Nordic, Polish, Dutch)
    query = query.in('original_language', ['es', 'fr', 'de', 'it', 'da', 'sv', 'no', 'pl', 'nl']);
  } else if (ind === 'anime') {
    query = query.eq('original_language', 'ja').ilike('genres', '%Animation%');
  } else if (ind === 'japanese_live') {
    query = query.eq('original_language', 'ja').not('genres', 'ilike', '%Animation%');
  } else if (ind === 'korean') {
    query = query.eq('original_language', 'ko');
  } else if (ind === 'indian_south' || ind === 'south_indian') {
    query = query.in('original_language', ['te', 'ta', 'ml', 'kn']);
  } else if (ind === 'bollywood') {
    query = query.eq('original_language', 'hi');
  } else if (ind === 'latin_american') {
    query = query.in('original_language', ['es', 'pt']);
  }

  // 2 Genres Filter
  if (genres && genres.length > 0) {
    for (const g of genres) {
      if (g) query = query.ilike('genres', `%${g.trim()}%`);
    }
  }

  // Exclude seen IDs
  if (exclude_ids && exclude_ids.length > 0) {
    const cleanExclude = exclude_ids.map(id => String(id)).slice(0, 50);
    query = query.not('id', 'in', `(${cleanExclude.join(',')})`);
  }

  // Fetch candidate pool without forcing compound index walk (fast sub-second fetch)
  query = query.limit(50);

  const { data, error } = await query;
  if (error) {
    console.error('[SupabaseService] getRecommendations error:', error);
    throw error;
  }

  if (!data || data.length === 0) return [];

  // Sort candidate pool in memory by popularity (votes) and rating
  const sorted = [...data].sort((a, b) => {
    const scoreA = (Number(a.votes) || 0) * 0.7 + (Number(a.rating) || 0) * 1000;
    const scoreB = (Number(b.votes) || 0) * 0.7 + (Number(b.rating) || 0) * 1000;
    return scoreB - scoreA;
  });

  return sorted.slice(0, 18).map(row => formatMediaItem(row));
}

// 2. DYNAMIC RANDOM DOUBLE-FEATURE ENGINE (Guaranteed Non-Repeating & Industry Aware)
export async function getRandomDoubleFeature({
  mood = 'all',
  industry = 'all',
  exclude_ids = []
}) {
  // A. FETCH 1 HIGH-RATED MOVIE
  let movieQuery = supabase
    .from('movies')
    .select('id, imdb_id, title, original_title, media_type, year, original_language, genres, rating, votes, runtime_minutes, director, cast_members, poster_path, overview')
    .eq('media_type', 'movie')
    .gte('rating', 7.0)
    .not('poster_path', 'is', null)
    .not('overview', 'is', null);

  const ind = (industry || 'all').toLowerCase();
  if (ind === 'hollywood') {
    movieQuery = movieQuery.eq('original_language', 'en').gt('votes', 2000).gte('year', 1980);
  } else if (ind === 'european') {
    movieQuery = movieQuery.in('original_language', ['es', 'fr', 'de', 'it', 'da', 'sv', 'no', 'pl', 'nl']).gt('votes', 500);
  } else if (ind === 'anime') {
    movieQuery = movieQuery.eq('original_language', 'ja').ilike('genres', '%Animation%').gt('votes', 500);
  } else if (ind === 'japanese_live') {
    movieQuery = movieQuery.eq('original_language', 'ja').gt('votes', 500);
  } else if (ind === 'korean') {
    movieQuery = movieQuery.eq('original_language', 'ko').gt('votes', 500);
  } else if (ind === 'indian_south' || ind === 'south_indian') {
    movieQuery = movieQuery.in('original_language', ['te', 'ta', 'ml', 'kn']).gt('votes', 1000).gte('year', 1995);
  } else if (ind === 'bollywood') {
    movieQuery = movieQuery.eq('original_language', 'hi').gt('votes', 1000).gte('year', 1990);
  } else if (ind === 'latin_american') {
    movieQuery = movieQuery.in('original_language', ['es', 'pt']).gt('votes', 500);
  } else {
    movieQuery = movieQuery.gt('votes', 1000).gte('year', 1980);
  }

  const m = mood.toLowerCase();
  if (m === 'action') movieQuery = movieQuery.ilike('genres', '%Action%');
  else if (m === 'mystery') movieQuery = movieQuery.ilike('genres', '%Mystery%');
  else if (m === 'comedy') movieQuery = movieQuery.ilike('genres', '%Comedy%');
  else if (m === 'horror') movieQuery = movieQuery.ilike('genres', '%Horror%');
  else if (m === 'drama') movieQuery = movieQuery.ilike('genres', '%Drama%');

  if (exclude_ids && exclude_ids.length > 0) {
    const cleanExclude = exclude_ids.map(id => String(id)).slice(0, 50);
    movieQuery = movieQuery.not('id', 'in', `(${cleanExclude.join(',')})`);
  }

  // Fetch candidate pool
  movieQuery = movieQuery.limit(50);
  const { data: movieRows } = await movieQuery;

  let selectedMovie = null;
  if (movieRows && movieRows.length > 0) {
    // Pick randomly from the top candidate pool
    selectedMovie = movieRows[Math.floor(Math.random() * movieRows.length)];
  }

  // B. FETCH 1 PRESTIGE SERIES (Industry Aware)
  let seriesQuery = supabase
    .from('movies')
    .select('id, imdb_id, title, original_title, media_type, year, original_language, genres, rating, votes, runtime_minutes, director, cast_members, poster_path, overview')
    .in('media_type', ['tvSeries', 'tvMiniSeries'])
    .gte('rating', 6.8)
    .not('poster_path', 'is', null)
    .not('overview', 'is', null);

  if (ind === 'hollywood') {
    seriesQuery = seriesQuery.eq('original_language', 'en').gt('votes', 2000).gte('year', 1995);
  } else if (ind === 'european') {
    seriesQuery = seriesQuery.in('original_language', ['es', 'fr', 'de', 'it', 'da', 'sv', 'no', 'pl', 'nl']).gt('votes', 200).gte('year', 2000);
  } else if (ind === 'anime') {
    seriesQuery = seriesQuery.eq('original_language', 'ja').gt('votes', 300).gte('year', 1990);
  } else if (ind === 'japanese_live') {
    seriesQuery = seriesQuery.eq('original_language', 'ja').gt('votes', 100).gte('year', 2000);
  } else if (ind === 'korean') {
    seriesQuery = seriesQuery.eq('original_language', 'ko').gt('votes', 200).gte('year', 2000);
  } else if (ind === 'indian_south' || ind === 'south_indian') {
    seriesQuery = seriesQuery.in('original_language', ['te', 'ta', 'ml', 'kn']).gt('votes', 50).gte('year', 2000);
  } else if (ind === 'bollywood') {
    seriesQuery = seriesQuery.eq('original_language', 'hi').gt('votes', 200).gte('year', 2000);
  } else if (ind === 'latin_american') {
    seriesQuery = seriesQuery.in('original_language', ['es', 'pt']).gt('votes', 100).gte('year', 2000);
  } else {
    seriesQuery = seriesQuery.gt('votes', 500).gte('year', 2000);
  }

  if (exclude_ids && exclude_ids.length > 0) {
    const cleanExclude = exclude_ids.map(id => String(id)).slice(0, 50);
    seriesQuery = seriesQuery.not('id', 'in', `(${cleanExclude.join(',')})`);
  }

  seriesQuery = seriesQuery.limit(50);
  const { data: seriesRows } = await seriesQuery;

  let selectedSeries = null;
  if (seriesRows && seriesRows.length > 0) {
    selectedSeries = seriesRows[Math.floor(Math.random() * seriesRows.length)];
  }

  // Industry-specific curated fallback defaults
  const getFallbackMovie = () => {
    if (ind === 'bollywood') {
      return {
        id: 'fallback-movie-bollywood',
        title: '3 Idiots',
        year: 2009,
        rating: 8.4,
        votes: '445K',
        genres: ['Comedy', 'Drama'],
        overview: 'Two friends embark on a quest for a lost buddy. On this journey, they reminisce about their college days and their friend who inspired them to think differently.',
        poster_url: 'https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg',
        badge: 'BOLLYWOOD MASTERPIECE',
        yt_search_url: 'https://www.youtube.com/results?search_query=3+Idiots+trailer'
      };
    }
    if (ind === 'indian_south' || ind === 'south_indian') {
      return {
        id: 'fallback-movie-south',
        title: 'RRR',
        year: 2022,
        rating: 7.8,
        votes: '190K',
        genres: ['Action', 'Drama'],
        overview: 'A fearless revolutionary and an officer in the British force decide to join hands and fight against the British colonialists in the 1920s.',
        poster_url: 'https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg',
        badge: 'SOUTH REGIONAL MASTERPIECE',
        yt_search_url: 'https://www.youtube.com/results?search_query=RRR+movie+trailer'
      };
    }
    return {
      id: 'fallback-movie-global',
      title: 'Interstellar',
      year: 2014,
      rating: 8.7,
      votes: '2.6M',
      genres: ['Adventure', 'Drama', 'Sci-Fi'],
      overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      poster_url: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      badge: 'FEATURE FILM PICK',
      yt_search_url: 'https://www.youtube.com/results?search_query=Interstellar+trailer'
    };
  };

  const getFallbackSeries = () => {
    if (ind === 'bollywood') {
      return {
        id: 'fallback-series-bollywood',
        title: 'Scam 1992: The Harshad Mehta Story',
        year: 2020,
        rating: 9.2,
        votes: '175K',
        genres: ['Biography', 'Crime', 'Drama'],
        overview: 'Set in 1980s and 90s Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.',
        poster_url: 'https://image.tmdb.org/t/p/w500/g4d95J7X7uUuL7v6a1m3Z5e7x0B.jpg',
        badge: 'INDIAN PRESTIGE SERIES',
        yt_search_url: 'https://www.youtube.com/results?search_query=Scam+1992+trailer'
      };
    }
    if (ind === 'indian_south' || ind === 'south_indian') {
      return {
        id: 'fallback-series-south',
        title: 'The Family Man',
        year: '2019–2021',
        rating: 8.7,
        votes: '110K',
        genres: ['Action', 'Comedy', 'Drama'],
        overview: 'A working man from the National Investigation Agency must balance saving the nation from dangerous threats while keeping his secret from his family.',
        poster_url: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg',
        badge: 'INDIAN PRESTIGE SERIES',
        yt_search_url: 'https://www.youtube.com/results?search_query=The+Family+Man+trailer'
      };
    }
    return {
      id: 'fallback-series-global',
      title: 'Money Heist',
      year: '2017–2021',
      rating: 8.2,
      votes: '622K',
      genres: ['Action', 'Crime', 'Drama'],
      overview: 'To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers.',
      poster_url: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbk5rUhGnyBh0Ryl.jpg',
      badge: 'PRESTIGE SERIES PICK',
      yt_search_url: 'https://www.youtube.com/results?search_query=Money+Heist+trailer'
    };
  };

  const movieFormatted = selectedMovie
    ? formatMediaItem(selectedMovie, `${ind.toUpperCase()} FEATURE PICK`)
    : getFallbackMovie();

  const seriesFormatted = selectedSeries
    ? formatMediaItem(selectedSeries, `${ind.toUpperCase()} PRESTIGE SERIES`)
    : getFallbackSeries();

  const themes = [
    'Mind-Bending Realities & Grand Narrative Arcs',
    'High-Octane Adrenaline & Psychological Intensity',
    'Atmospheric World-Building & Soul-Stirring Drama',
    'Uncompromising Vision & Cinematic Masterclass',
    'High-Stakes Tension & Iconic Showdowns'
  ];
  const pickedTheme = themes[Math.floor(Math.random() * themes.length)];

  const snack = {
    icon: '🍿',
    food: 'Truffle Butter Popcorn & Sea Salt Pretzels',
    drink: 'Chilled Artisanal Soda or Espresso Tonic',
    vibe: 'Late-Night Immersive Cinema'
  };

  return {
    success: true,
    timestamp: Date.now(),
    mood,
    industry,
    theme: pickedTheme,
    snack,
    movie: movieFormatted,
    series: seriesFormatted
  };
}

// 3. "MORE LIKE THIS" (SIMILAR TITLES ENGINE)
export async function getSimilarTitles({
  id = null,
  title = '',
  genres = [],
  director = null,
  original_language = null,
  year = null
}) {
  let query = supabase
    .from('movies')
    .select('id, imdb_id, title, original_title, media_type, year, original_language, genres, rating, votes, runtime_minutes, director, cast_members, poster_path, overview')
    .not('poster_path', 'is', null)
    .not('overview', 'is', null);

  if (id) query = query.neq('id', id);
  if (title) query = query.neq('title', title);

  const genreList = Array.isArray(genres)
    ? genres
    : (typeof genres === 'string' ? genres.split(',').map(g => g.trim()) : []);

  // Priority match on distinctive genres
  if (genreList.length > 0) {
    const priorityGenres = ['Sci-Fi', 'Animation', 'Horror', 'Mystery', 'Crime', 'Fantasy', 'Action', 'Comedy', 'Drama'];
    const chosen = priorityGenres.find(pg => genreList.some(g => g.toLowerCase() === pg.toLowerCase())) || genreList[0];
    query = query.ilike('genres', `%${chosen}%`);
  }

  // Quality gate: ensure high votes for similar recommendations
  query = query.gte('votes', 1000);

  // Era alignment: if reference is modern (post-1990), prefer modern recommendations
  if (year && Number(year) >= 1990) {
    query = query.gte('year', 1985);
  }

  if (original_language && !['en'].includes(original_language)) {
    query = query.eq('original_language', original_language);
  }

  query = query.limit(50);

  const { data, error } = await query;
  if (error) {
    console.error('[SupabaseService] getSimilarTitles error:', error);
    throw error;
  }

  if (!data || data.length === 0) return [];

  // Relevance ranking by genre overlap, director, rating, and votes
  const sorted = [...data].sort((a, b) => {
    const aGenres = typeof a.genres === 'string' ? a.genres.split(',').map(g => g.trim()) : (a.genres || []);
    const bGenres = typeof b.genres === 'string' ? b.genres.split(',').map(g => g.trim()) : (b.genres || []);

    const aOverlap = aGenres.filter(g => genreList.includes(g)).length;
    const bOverlap = bGenres.filter(g => genreList.includes(g)).length;

    const aDir = director && a.director && a.director.toLowerCase() === director.toLowerCase() ? 500000 : 0;
    const bDir = director && b.director && b.director.toLowerCase() === director.toLowerCase() ? 500000 : 0;

    const scoreA = (aOverlap * 100000) + aDir + (Number(a.votes) || 0) + ((Number(a.rating) || 0) * 1000);
    const scoreB = (bOverlap * 100000) + bDir + (Number(b.votes) || 0) + ((Number(b.rating) || 0) * 1000);

    return scoreB - scoreA;
  });

  return sorted.slice(0, 10).map(row => formatMediaItem(row, 'SIMILAR VIBE'));
}

// 4. UNIVERSAL SEARCH ENGINE ("Movies like X" & Direct Search)
export async function searchMovies({ query }) {
  if (!query || query.trim().length === 0) return { mode: 'empty', results: [] };

  const clean = query.trim();
  const lower = clean.toLowerCase();

  // Mode A: "Movies like [Title]" or "Shows like [Title]"
  const isLikeQuery = lower.startsWith('movies like ') || 
                      lower.startsWith('movie like ') || 
                      lower.startsWith('shows like ') || 
                      lower.startsWith('series like ') || 
                      lower.startsWith('like ');

  if (isLikeQuery) {
    const targetTitle = clean
      .replace(/^(movies like|movie like|shows like|series like|like)\s+/i, '')
      .trim();

    // 1. Locate reference title
    const { data: refRows } = await supabase
      .from('movies')
      .select('*')
      .ilike('title', `%${targetTitle}%`)
      .limit(10);

    const ref = refRows && refRows.length > 0 
      ? [...refRows].sort((a, b) => {
          const aExact = a.title.toLowerCase() === targetTitle.toLowerCase() ? 100000000 : 0;
          const bExact = b.title.toLowerCase() === targetTitle.toLowerCase() ? 100000000 : 0;
          return (bExact + (Number(b.votes) || 0)) - (aExact + (Number(a.votes) || 0));
        })[0]
      : null;

    if (ref) {
      const refGenres = typeof ref.genres === 'string' ? ref.genres.split(',').map(g => g.trim()) : [];
      const similar = await getSimilarTitles({
        id: ref.id,
        title: ref.title,
        genres: refGenres,
        director: ref.director,
        original_language: ref.original_language,
        year: ref.year
      });

      return {
        mode: 'similar_to',
        reference: formatMediaItem(ref, 'REFERENCE TITLE'),
        results: similar
      };
    }
  }

  // Mode B: Direct Search via title / original_title
  // Normalize & vs and
  const altClean = clean.includes('&') ? clean.replace(/&/g, 'and') : clean.replace(/\band\b/gi, '&');

  const { data: titleData, error: titleErr } = await supabase
    .from('movies')
    .select('id, imdb_id, title, original_title, media_type, year, original_language, genres, rating, votes, runtime_minutes, director, cast_members, poster_path, overview')
    .or(`title.ilike.%${clean}%,original_title.ilike.%${clean}%,title.ilike.%${altClean}%`)
    .limit(40);

  if (titleErr) {
    console.error('[SupabaseService] searchMovies error:', titleErr);
  }

  const results = titleData || [];
  
  // Intelligent relevance scoring
  const qNorm = clean.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9 ]/g, '').trim();
  const qWords = qNorm.split(/\s+/).filter(Boolean);

  const scored = results.map(item => {
    const tClean = (item.title || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9 ]/g, '').trim();
    const otClean = (item.original_title || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9 ]/g, '').trim();

    let relevance = 0;
    // Exact title match (with or without leading 'the')
    if (tClean === qNorm || otClean === qNorm || tClean === 'the ' + qNorm || otClean === 'the ' + qNorm) {
      relevance += 10000000;
    }
    // Starts with
    else if (tClean.startsWith(qNorm) || tClean.startsWith('the ' + qNorm) || otClean.startsWith(qNorm)) {
      relevance += 5000000;
    }
    // All query words appear in title
    else if (qWords.every(w => tClean.includes(w) || otClean.includes(w))) {
      relevance += 2000000;
    }
    // Substring match
    else if (tClean.includes(qNorm) || otClean.includes(qNorm)) {
      relevance += 1000000;
    }

    // Tie-break strongly by vote count (blockbusters over obscure shorts)
    const voteWeight = Math.min(Number(item.votes) || 0, 3000000);
    relevance += voteWeight;

    return { item, relevance };
  });

  scored.sort((a, b) => b.relevance - a.relevance);

  return {
    mode: 'direct',
    results: scored.slice(0, 18).map(s => formatMediaItem(s.item))
  };
}
