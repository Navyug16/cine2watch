import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Dices } from 'lucide-react';

// Navigation & Modals
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchModal from './components/Search/SearchModal';
import ShuffleModal from './components/Modals/ShuffleModal';
import SimilarDrawer from './components/Results/SimilarDrawer';
import TrailerModal from './components/Modals/TrailerModal';
import WatchlistDrawer from './components/Modals/WatchlistDrawer';
import MovieDetailModal from './components/Modals/MovieDetailModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import FranchiseUniversePage from './pages/FranchiseUniversePage';
import GenresPage from './pages/GenresPage';

const CURRENT_YEAR = Math.max(2026, new Date().getFullYear());

const getItemKey = (item) => {
  if (!item) return '';
  return String(item.id || `${item.title || 'untitled'}-${item.year || ''}`);
};

export default function App() {
  // Parse structural URL without '#' (e.g. '/', '/explore', '/explore/marvel', '/genres')
  const parseCurrentUrl = () => {
    if (window.location.hash) {
      const legacyPath = window.location.hash.replace('#', '').replace(/^\//, '');
      const newPath = legacyPath ? '/' + legacyPath : '/';
      window.history.replaceState({}, '', newPath);
    }

    const segments = window.location.pathname.toLowerCase().split('/').filter(Boolean);
    if (segments[0] === 'explore') {
      return {
        page: 'explore',
        sagaId: segments[1] || null
      };
    }
    if (segments[0] === 'genres') {
      return {
        page: 'genres',
        sagaId: null
      };
    }
    return {
      page: 'home',
      sagaId: null
    };
  };

  const initialRoute = parseCurrentUrl();
  const [activePage, setActivePage] = useState(initialRoute.page);
  const [selectedExploreSagaId, setSelectedExploreSagaId] = useState(initialRoute.sagaId);

  // Decision Funnel State for HomePage
  const [currentStep, setCurrentStep] = useState(1);
  const [industry, setIndustry] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [selectedEra, setSelectedEra] = useState(null);
  const [customStart, setCustomStart] = useState(2010);
  const [customEnd, setCustomEnd] = useState(CURRENT_YEAR);
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Modals & Drawers State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShuffleOpen, setIsShuffleOpen] = useState(false);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [activeTrailerItem, setActiveTrailerItem] = useState(null);
  const [similarReferenceItem, setSimilarReferenceItem] = useState(null);
  const [detailModalItem, setDetailModalItem] = useState(null);

  // Recommendations Data State
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [historyExcludeIds, setHistoryExcludeIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cinematch_excluded_ids') || '[]');
    } catch {
      return [];
    }
  });

  // Zero-Tracking Local Shortlist / Watchlist
  const [watchlist, setWatchlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cine2watch_watchlist') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cine2watch_watchlist', JSON.stringify(watchlist.slice(0, 60)));
    } catch (e) {
      console.warn('Watchlist storage error:', e);
    }
  }, [watchlist]);

  const isInWatchlist = useCallback(
    (item) => {
      const key = getItemKey(item);
      return Boolean(key && watchlist.some((w) => getItemKey(w) === key));
    },
    [watchlist]
  );

  const toggleWatchlist = useCallback((item) => {
    const key = getItemKey(item);
    if (!key) return;
    setWatchlist((prev) => {
      const exists = prev.some((w) => getItemKey(w) === key);
      if (exists) {
        return prev.filter((w) => getItemKey(w) !== key);
      }
      return [
        {
          id: key,
          title: item.title,
          year: item.year,
          media_type: item.media_type,
          rating: item.rating,
          genres: item.genres,
          poster_url: item.poster_url,
          overview: item.overview || item.desc,
          director: item.director,
          original_language: item.original_language,
          watch_url: item.watch_url,
          yt_search_url: item.yt_search_url
        },
        ...prev
      ];
    });
  }, []);

  const removeWatchlistItem = useCallback((item) => {
    const key = getItemKey(item);
    setWatchlist((prev) => prev.filter((w) => getItemKey(w) !== key));
  }, []);

  const clearWatchlist = useCallback(() => {
    setWatchlist([]);
  }, []);

  // Sync browser Back/Forward (popstate) with structural URLs
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseCurrentUrl();
      setActivePage(parsed.page);
      setSelectedExploreSagaId(parsed.sagaId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Structural URL Navigation
  const handleNavigate = (pageName, extraParam = null) => {
    setActivePage(pageName);
    setSelectedExploreSagaId(extraParam || null);

    let targetPath = '/';
    if (pageName === 'explore') {
      targetPath = extraParam ? `/explore/${extraParam}` : '/explore';
    } else if (pageName === 'genres') {
      targetPath = '/genres';
    } else {
      targetPath = '/';
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for Search, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsShuffleOpen(false);
        setIsWatchlistOpen(false);
        setActiveTrailerItem(null);
        setSimilarReferenceItem(null);
        setDetailModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save historyExcludeIds to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cinematch_excluded_ids', JSON.stringify(historyExcludeIds.slice(-100)));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [historyExcludeIds]);

  // Fetch Recommendations from Supabase Backend API
  const fetchRecommendations = async (genresToFetch = selectedGenres, ignoreYear = false) => {
    if (genresToFetch.length !== 2) return;

    setLoading(true);
    setError(null);
    setCurrentStep(5);

    try {
      const params = new URLSearchParams({
        industry: industry || 'all',
        media_type: mediaType || 'movie',
        start_year: customStart.toString(),
        end_year: customEnd.toString(),
        genres: genresToFetch.join(','),
        ignore_year: ignoreYear ? 'true' : 'false'
      });

      if (historyExcludeIds.length > 0) {
        params.append('exclude_ids', historyExcludeIds.slice(-50).join(','));
      }

      const res = await fetch(`/api/recommend?${params.toString()}`);
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || 'Failed to fetch recommendations');
      }

      const data = await res.json();
      setResults(data);

      if (data.found && data.data && data.data.length > 0) {
        const newIds = data.data.map((item) => String(item.id));
        setHistoryExcludeIds((prev) => [...new Set([...prev, ...newIds])]);

        confetti({
          particleCount: 28,
          spread: 50,
          origin: { y: 0.65 },
          colors: ['#c5a059', '#e6c887', '#ffffff']
        });
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIndustry(null);
    setMediaType(null);
    setSelectedEra(null);
    setSelectedGenres([]);
    setResults(null);
    setError(null);
    if (activePage !== 'home') {
      handleNavigate('home');
    }
  };

  const clearHistoryAndRefetch = () => {
    setHistoryExcludeIds([]);
    fetchRecommendations(selectedGenres, false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#08090d] text-slate-100 selection:bg-[#c5a059] selection:text-black relative pb-16 lg:pb-0">
      
      {/* Mobile/Tablet Bottom Navigation Dock */}
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        watchlistCount={watchlist.length}
      />

      {/* Top Luxury Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onReset={handleReset}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        watchlistCount={watchlist.length}
      />

      {/* Main Page Content Body */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex flex-col">
        
        {/* PAGE 1: HOME (Decision Funnel Questions & Results) */}
        {activePage === 'home' && (
          <HomePage
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            industry={industry}
            setIndustry={setIndustry}
            mediaType={mediaType}
            setMediaType={setMediaType}
            selectedEra={selectedEra}
            setSelectedEra={setSelectedEra}
            customStart={customStart}
            setCustomStart={setCustomStart}
            customEnd={customEnd}
            setCustomEnd={setCustomEnd}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            results={results}
            loading={loading}
            error={error}
            historyExcludeIds={historyExcludeIds}
            onReset={handleReset}
            onFetchRecommendations={fetchRecommendations}
            onClearHistory={clearHistoryAndRefetch}
            onWatchTrailer={(item) => setActiveTrailerItem(item)}
            onOpenSimilar={(item) => setSimilarReferenceItem(item)}
            onOpenDetails={(item) => setDetailModalItem(item)}
            isInWatchlist={isInWatchlist}
            onToggleWatchlist={toggleWatchlist}
          />
        )}

        {/* PAGE 2: EXPLORE (Universes Hub) */}
        {activePage === 'explore' && !selectedExploreSagaId && (
          <ExplorePage
            onSelectFranchise={(sagaId) => handleNavigate('explore', sagaId)}
            onWatchTrailer={(item) => setActiveTrailerItem(item)}
            onOpenSimilar={(item) => setSimilarReferenceItem(item)}
            isInWatchlist={isInWatchlist}
            onToggleWatchlist={toggleWatchlist}
          />
        )}

        {/* PAGE 2B: EXPLORE INSIDE UNIVERSE */}
        {activePage === 'explore' && Boolean(selectedExploreSagaId) && (
          <FranchiseUniversePage
            key={selectedExploreSagaId}
            sagaId={selectedExploreSagaId}
            onBack={() => handleNavigate('explore')}
            onWatchTrailer={(item) => setActiveTrailerItem(item)}
            onOpenSimilar={(item) => setSimilarReferenceItem(item)}
            isInWatchlist={isInWatchlist}
            onToggleWatchlist={toggleWatchlist}
          />
        )}

        {/* PAGE 3: GENRES */}
        {activePage === 'genres' && (
          <GenresPage
            onWatchTrailer={(item) => setActiveTrailerItem(item)}
            onOpenSimilar={(item) => setSimilarReferenceItem(item)}
            isInWatchlist={isInWatchlist}
            onToggleWatchlist={toggleWatchlist}
          />
        )}

      </main>

      {/* Floating Rolling Dice Action Button */}
      <div className="fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-40">
        <button
          onClick={() => setIsShuffleOpen(true)}
          className="dice-roll-btn group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#121319]/95 hover:bg-[#1a1b24] border border-[#c5a059]/50 hover:border-[#c5a059] text-[#c5a059] shadow-[0_8px_30px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-xl"
          title="Dynamic Surprise Double Feature"
          aria-label="Random Suggestion"
        >
          <Dices className="dice-icon w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059] transition-transform duration-300" />
        </button>
      </div>

      {/* Universal Search Modal (Cmd+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onWatchTrailer={(item) => setActiveTrailerItem(item)}
        onOpenSimilar={(item) => setSimilarReferenceItem(item)}
        isInWatchlist={isInWatchlist}
        onToggleWatchlist={toggleWatchlist}
      />

      {/* Dynamic Random Double Feature (Shuffle Modal) */}
      <ShuffleModal
        isOpen={isShuffleOpen}
        currentIndustry={industry}
        onClose={() => setIsShuffleOpen(false)}
        onWatchTrailer={(item) => setActiveTrailerItem(item)}
        onOpenSimilar={(item) => setSimilarReferenceItem(item)}
        isInWatchlist={isInWatchlist}
        onToggleWatchlist={toggleWatchlist}
      />

      {/* Similar Titles Drawer */}
      <SimilarDrawer
        isOpen={Boolean(similarReferenceItem)}
        referenceItem={similarReferenceItem}
        onClose={() => setSimilarReferenceItem(null)}
        onWatchTrailer={(item) => setActiveTrailerItem(item)}
        isInWatchlist={isInWatchlist}
        onToggleWatchlist={toggleWatchlist}
      />

      {/* Tonight's Shortlist / Watchlist Drawer */}
      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        items={watchlist}
        onRemoveItem={removeWatchlistItem}
        onClearAll={clearWatchlist}
        onWatchTrailer={(item) => {
          setIsWatchlistOpen(false);
          setActiveTrailerItem(item);
        }}
        onOpenSimilar={(item) => {
          setIsWatchlistOpen(false);
          setSimilarReferenceItem(item);
        }}
      />

      {/* Home Movie Detail Modal */}
      <MovieDetailModal
        item={detailModalItem}
        onClose={() => setDetailModalItem(null)}
        onWatchTrailer={(item) => setActiveTrailerItem(item)}
        onOpenSimilar={(item) => setSimilarReferenceItem(item)}
        isSaved={isInWatchlist(detailModalItem)}
        onToggleSave={toggleWatchlist}
      />

      {/* Trailer Launcher Modal */}
      <TrailerModal
        activeItem={activeTrailerItem}
        onClose={() => setActiveTrailerItem(null)}
        isInWatchlist={isInWatchlist}
        onToggleWatchlist={toggleWatchlist}
      />

      {/* Minimalist World-Class Footer */}
      <footer className="border-t border-white/[0.04] px-6 py-4 text-center text-xs text-slate-500 bg-[#08090d]">
        <p>© {CURRENT_YEAR} cine2watch • Supabase PostgreSQL Neural Filter (330,000+ Titles) • Zero Personal Tracking</p>
      </footer>

    </div>
  );
}
