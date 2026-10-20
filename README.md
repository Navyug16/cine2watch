# CineMatch Studio 🎬

> **The Intelligent Cinema & Episodic Streaming Decision Engine**  
> Skip the 40-minute catalog paralysis. Answer 4 quick tastes to instantly uncover high-rated films and binge-worthy series across global cinema archives.

---

## ✨ Features

- **4-Tap Decision Engine**:
  1. **Region / Industry**: Hollywood, Bollywood, South Indian, Anime, Korean Cinema, Japanese Cinema, and Global Cinema with tactile 3D poster previews.
  2. **Format**: Single-sitting Feature Films (90–180 min) vs. Multi-Season Episodic Arcs.
  3. **Release Era**: Modern Peak (2010–2020), Current Releases (2021–2026), Millennium Boom (2000–2009), Golden Era (1975–1999), or custom range dial.
  4. **Dual-Vibe Chemistry Dock**: Blend exactly 2 genres (e.g. *Sci-Fi + Drama*) for maximum precision matching.
- **Always-Unique "Random Suggestion" Engine**:
  - Small circular action button in bottom-right with rolling dice micro-animation.
  - Dynamically fetches 1 high-rated Movie from the master catalog paired with 1 Prestige Web Series on every spin (never static or hardcoded).
- **Dribbble-Grade Luxury Aesthetics**:
  - Deep obsidian palette (`#090a0d`, `#121319`), champagne gold accents (`#c5a059`), glassmorphism, and responsive layout.
- **Sub-20ms SQLite Engine**:
  - Fast intersect subqueries across IMDb ratings, genres, and language vectors.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide React, Canvas Confetti.
- **Backend**: Node.js, Express, Better-SQLite3, CORS.
- **Database**: SQLite (89,600+ curated titles with `votes >= 50` in production `backend/movies.db`).

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Start Both Frontend & Backend Concurrently
```bash
npm run dev
```
- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`

---

## 🌐 Deployment Guide (Vercel)

### Method 1: Direct Vercel Deployment (Monorepo)

1. Push your repository to **GitHub**.
   > *Note: Large raw dataset files in `data/` and the 920MB raw database are already listed in `.gitignore`. The lightweight 65MB production database `backend/movies.db` is tracked and optimized for deployment.*
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `frontend/dist`
5. Click **Deploy**. Vercel will build the frontend and automatically route `/api/*` requests through `vercel.json` and `api/index.js`.

---

### Method 2: Frontend on Vercel + Backend on Render/Railway (Recommended for High Traffic)

If you prefer separating static CDN hosting from the API server:
1. Deploy `backend/` to [Render](https://render.com) or [Railway](https://railway.app) as a Node Web Service (Start command: `node server.js`).
2. Deploy `frontend/` to Vercel (Root Directory: `frontend`).
3. In your Vercel Project Settings, add an Environment Variable:
   - **`VITE_API_BASE_URL`**: `https://your-backend-api.onrender.com`
4. Re-deploy. The frontend will automatically point all recommendations and random suggestions to your live API.

---

## 📄 License
MIT License. Built for film lovers and cinephiles worldwide.
