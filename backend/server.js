import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

import { 
  getRecommendations, 
  getRandomDoubleFeature, 
  getSimilarTitles, 
  searchMovies 
} from './services/supabaseService.js';
import { FRANCHISES, FRANCHISE_HUBS } from './data/franchises.js';

const app = express();
app.use(cors());
app.use(express.json());

// Genre Synonym Normalization
const GENRE_MAP = {
  'Sci-Fi': 'Sci-Fi',
  'SciFi': 'Sci-Fi',
  'Science Fiction': 'Sci-Fi'
};

// 1. Health & Status
app.get('/', (req, res) => {
  res.json({
    engine: 'cine2watch Studio Production API',
    status: 'online',
    datasource: 'Supabase PostgreSQL (330K+ global cinema & series)',
    endpoints: {
      recommend: '/api/recommend?industry=hollywood&genres=Action,Sci-Fi&media_type=movie',
      random_suggestion: '/api/random-suggestion?mood=all&industry=all',
      similar: '/api/similar?title=Inception&genres=Sci-Fi,Action',
      search: '/api/search?q=Movies like Interstellar',
      franchises: '/api/franchises',
      health: '/api/health'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    version: '2.0.0-production',
    database: 'Supabase PostgreSQL (enqufpimptgjsbztkcns)',
    timestamp: new Date().toISOString()
  });
});

// 2. Main Recommendation Funnel
app.get('/api/recommend', async (req, res) => {
  try {
    const { 
      industry = 'all', 
      media_type = 'movie', 
      start_year = 1975, 
      end_year = 2026, 
      genres, 
      ignore_year, 
      exclude_ids 
    } = req.query;

    const rawGenreList = Array.isArray(genres)
      ? genres
      : (genres ? genres.split(',').map(g => g.trim()) : []);

    const genreList = rawGenreList.map(g => GENRE_MAP[g] || g);

    if (genreList.length !== 2) {
      return res.status(400).json({ 
        error: 'Please select exactly 2 genres for maximum recommendation accuracy.' 
      });
    }

    const excludeList = exclude_ids 
      ? exclude_ids.split(',').map(id => id.trim()).filter(Boolean)
      : [];

    const recommendations = await getRecommendations({
      industry,
      media_type,
      start_year: parseInt(start_year, 10) || 1975,
      end_year: parseInt(end_year, 10) || 2026,
      genres: genreList,
      exclude_ids: excludeList,
      ignore_year: ignore_year === 'true'
    });

    if (!recommendations || recommendations.length === 0) {
      return res.json({
        found: false,
        count: 0,
        message: "No new titles found matching this criteria. Click 'Expand to All Eras' or clear history to explore more titles.",
        data: []
      });
    }

    return res.json({
      found: true,
      count: recommendations.length,
      data: recommendations
    });
  } catch (err) {
    console.error('[API /api/recommend] Error:', err);
    return res.status(500).json({ error: 'Failed to retrieve curated recommendations' });
  }
});

// 3. Dynamic Random Double Feature (Guaranteed Non-Repeating & Industry-Aware)
app.get('/api/random-suggestion', async (req, res) => {
  try {
    const mood = (req.query.mood || 'all').toLowerCase();
    const industry = (req.query.industry || 'all').toLowerCase();
    const excludeIds = req.query.exclude_ids 
      ? req.query.exclude_ids.split(',').map(id => id.trim()).filter(Boolean)
      : [];

    const suggestion = await getRandomDoubleFeature({
      mood,
      industry,
      exclude_ids: excludeIds
    });

    return res.json(suggestion);
  } catch (err) {
    console.error('[API /api/random-suggestion] Error:', err);
    return res.status(500).json({ error: 'Failed to generate random suggestion' });
  }
});

// 4. "More Like This" Similar Titles
app.get('/api/similar', async (req, res) => {
  try {
    const { id, title, genres, director, original_language } = req.query;

    const genreList = genres 
      ? (Array.isArray(genres) ? genres : genres.split(',').map(g => g.trim()))
      : [];

    const similar = await getSimilarTitles({
      id,
      title: title || '',
      genres: genreList,
      director: director || null,
      original_language: original_language || null
    });

    return res.json({
      success: true,
      count: similar.length,
      reference_title: title || 'Selected Title',
      data: similar
    });
  } catch (err) {
    console.error('[API /api/similar] Error:', err);
    return res.status(500).json({ error: 'Failed to find similar titles' });
  }
});

// 5. Universal Search Engine ("Movies like X" & Direct Search)
app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q || '';
    if (!query.trim()) {
      return res.json({ mode: 'empty', results: [] });
    }

    const searchResponse = await searchMovies({ query });
    return res.json(searchResponse);
  } catch (err) {
    console.error('[API /api/search] Error:', err);
    return res.status(500).json({ error: 'Search operation failed' });
  }
});

// 6. Cinematic Franchises & Universes Hub
app.get('/api/franchises', (req, res) => {
  res.json({
    success: true,
    count: FRANCHISES.length,
    hubs: FRANCHISE_HUBS,
    data: FRANCHISES
  });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production' || process.env.RENDER || !process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[CineMatch Studio v2] Production Server listening on http://localhost:${PORT}`);
  });
}

export default app;
