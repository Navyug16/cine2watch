import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  RotateCcw, 
  RefreshCw, 
  History, 
  SlidersHorizontal,
  Film,
  Dices
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import SearchModal from './components/Search/SearchModal';
import FranchiseModal from './components/Franchises/FranchiseModal';
import IndustryStep from './components/Funnel/IndustryStep';
import FormatStep from './components/Funnel/FormatStep';
import EraStep from './components/Funnel/EraStep';
import DualGenreStep from './components/Funnel/DualGenreStep';
import MovieCard from './components/Results/MovieCard';
import SimilarDrawer from './components/Results/SimilarDrawer';
import ShuffleModal from './components/Modals/ShuffleModal';
import TrailerModal from './components/Modals/TrailerModal';

import { INDUSTRIES } from './data/constants';

export default function App() {
  // Decision Funnel Steps: 1 = Industry, 2 = Format, 3 = Era, 4 = DualGenre, 5 = Results
  const [currentStep, setCurrentStep] = useState(1);

  // User Filter State
  const [industry, setIndustry] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [selectedEra, setSelectedEra] = useState(null);
  const [customStart, setCustomStart] = useState(2010);
  const [customEnd, setCustomEnd] = useState(2026);
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Modals & Drawers State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFranchisesOpen, setIsFranchisesOpen] = useState(false);
  const [isShuffleOpen, setIsShuffleOpen] = useState(false);
  const [activeTrailerItem, setActiveTrailerItem] = useState(null);
  const [similarReferenceItem, setSimilarReferenceItem] = useState(null);

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

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for Search, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsFranchisesOpen(false);
        setIsShuffleOpen(false);
        setActiveTrailerItem(null);
        setSimilarReferenceItem(null);
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

  // Step 1: Select Industry & Auto-Advance
  const handleSelectIndustry = (indId) => {
    setIndustry(indId);
    setTimeout(() => setCurrentStep(2), 200);
  };

  // Step 2: Select Format & Auto-Advance
  const handleSelectFormat = (formatId) => {
    setMediaType(formatId);
    setTimeout(() => setCurrentStep(3), 200);
  };

  // Step 3: Select Era & Auto-Advance
  const handleSelectEra = (start, end) => {
    setSelectedEra(`${start}-${end}`);
    setCustomStart(start);
    setCustomEnd(end);
    setTimeout(() => setCurrentStep(4), 200);
  };

  const handleCustomEraSubmit = (start, end) => {
    setSelectedEra(`${start}-${end}`);
    setCustomStart(start);
    setCustomEnd(end);
    setTimeout(() => setCurrentStep(4), 200);
  };

  // Step 4: Toggle Genre (Requires exactly 2)
  const handleToggleGenre = (genreName) => {
    let updated;
    if (selectedGenres.includes(genreName)) {
      updated = selectedGenres.filter(g => g !== genreName);
    } else {
      if (selectedGenres.length >= 2) {
        updated = [selectedGenres[1], genreName];
      } else {
        updated = [...selectedGenres, genreName];
      }
    }
    setSelectedGenres(updated);

    if (updated.length === 2) {
      setTimeout(() => {
        fetchRecommendations(updated, false);
      }, 350);
    }
  };

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
        const newIds = data.data.map(item => String(item.id));
        setHistoryExcludeIds(prev => [...new Set([...prev, ...newIds])]);

        // Celebration Confetti
        confetti({
          particleCount: 50,
          spread: 55,
          origin: { y: 0.6 },
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
  };

  const clearHistoryAndRefetch = () => {
    setHistoryExcludeIds([]);
    fetchRecommendations(selectedGenres, false);
  };

  const currentIndObj = INDUSTRIES.find(i => i.id === industry);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#08090d] text-slate-100 selection:bg-[#c5a059] selection:text-black relative">
      
      {/* Top Luxury Navbar */}
      <Navbar
        currentStep={currentStep}
        onReset={handleReset}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFranchises={() => setIsFranchisesOpen(true)}
      />

      {/* Main Interactive Funnel & Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10 flex flex-col justify-center">
        
        {/* Step 1: Industry Landscape */}
        {currentStep === 1 && (
          <IndustryStep
            selectedIndustry={industry}
            onSelect={handleSelectIndustry}
          />
        )}

        {/* Step 2: Format (Movie vs Series) */}
        {currentStep === 2 && (
          <FormatStep
            selectedFormat={mediaType}
            onSelect={handleSelectFormat}
            onBack={() => setCurrentStep(1)}
          />
        )}

        {/* Step 3: Era Timeline */}
        {currentStep === 3 && (
          <EraStep
            selectedEra={selectedEra}
            customStart={customStart}
            customEnd={customEnd}
            onSelectEra={handleSelectEra}
            onCustomSubmit={handleCustomEraSubmit}
            onBack={() => setCurrentStep(2)}
          />
        )}

        {/* Step 4: Dual-Genre Blend */}
        {currentStep === 4 && (
          <DualGenreStep
            selectedGenres={selectedGenres}
            onToggleGenre={handleToggleGenre}
            onProceed={(g) => fetchRecommendations(g, false)}
            onBack={() => setCurrentStep(3)}
            loading={loading}
          />
        )}

        {/* Step 5: Recommendations Results Grid */}
        {currentStep === 5 && (
          <div className="w-full space-y-6 animate-in fade-in duration-300">
            
            {/* Header & Quick Tweak Bar */}
            <div className="card-luxury rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CURATED MATCH COMPLETE • {results?.count || 0} TITLES DISCOVERED</span>
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline text-white mt-0.5">
                    Your Personalized Recommendations
                  </h2>
                </div>

                {/* Roll Fresh Batch or Reset */}
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={() => fetchRecommendations(selectedGenres, false)}
                    disabled={loading}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-lg"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                    <span>Roll Fresh Batch</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="p-2 rounded-xl bg-[#161722] hover:bg-[#1f202e] border border-white/[0.08] text-slate-300 cursor-pointer"
                    title="Start fresh"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Taste Chips */}
              <div className="flex items-center flex-wrap gap-2 text-xs">
                <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">Active Formula:</span>
                
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] text-[#c5a059] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Region: {currentIndObj?.name || 'Worldwide'} ✎</span>
                </button>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] text-[#c5a059] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Format: {mediaType === 'tvSeries' ? 'Prestige Series' : 'Feature Film'} ✎</span>
                </button>

                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] text-[#c5a059] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Era: {customStart}–{customEnd} ✎</span>
                </button>

                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] text-[#c5a059] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Genres: {selectedGenres.join(' + ')} ✎</span>
                </button>
              </div>
            </div>

            {/* Loading Skeleton */}
            {loading && (
              <div className="card-luxury rounded-3xl p-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] border-t-transparent animate-spin mx-auto" />
                <h3 className="text-lg font-bold font-headline text-white">
                  Searching 330,000 Titles Across Supabase...
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Filtering high-vote cinematic gems, language vectors, and ratings.
                </p>
              </div>
            )}

            {/* Error View */}
            {!loading && error && (
              <div className="p-8 rounded-3xl bg-red-950/20 border border-red-500/30 text-center space-y-3">
                <p className="text-sm font-semibold text-red-300">{error}</p>
                <button
                  onClick={() => fetchRecommendations(selectedGenres, false)}
                  className="px-5 py-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Results Grid */}
            {!loading && results?.found && results?.data && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {results.data.map((item, index) => (
                  <MovieCard
                    key={item.id}
                    item={item}
                    index={index}
                    onWatchTrailer={(it) => setActiveTrailerItem(it)}
                    onOpenSimilar={(it) => setSimilarReferenceItem(it)}
                  />
                ))}
              </div>
            )}

            {/* Empty State Fallback */}
            {!loading && results && !results.found && (
              <div className="card-luxury rounded-3xl p-10 sm:p-14 text-center space-y-4 max-w-xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center mx-auto text-2xl border border-[#c5a059]/20">
                  🍿
                </div>
                <h3 className="text-xl font-bold font-headline text-white">
                  No Exact Matches in {customStart}–{customEnd}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {results.message}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => fetchRecommendations(selectedGenres, true)}
                    className="px-5 py-2.5 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                  >
                    <span>Expand to All Eras (1975–2026)</span>
                  </button>

                  {historyExcludeIds.length > 0 && (
                    <button
                      onClick={clearHistoryAndRefetch}
                      className="px-4 py-2.5 rounded-xl bg-[#161822] hover:bg-[#1e202c] border border-white/[0.08] text-slate-300 text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
                    >
                      <History className="w-3.5 h-3.5" />
                      <span>Reset Excluded History ({historyExcludeIds.length})</span>
                    </button>
                  )}
                </div>
              </div>
            )}

          </div>
        )}

      </main>

      {/* Floating Rolling Dice Action Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
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
      />

      {/* Cinematic Universes & Franchises Hub */}
      <FranchiseModal
        isOpen={isFranchisesOpen}
        onClose={() => setIsFranchisesOpen(false)}
        onWatchTrailer={(item) => setActiveTrailerItem(item)}
      />

      {/* Dynamic Random Double Feature (Shuffle Modal) */}
      <ShuffleModal
        isOpen={isShuffleOpen}
        currentIndustry={industry}
        onClose={() => setIsShuffleOpen(false)}
        onWatchTrailer={(item) => setActiveTrailerItem(item)}
      />

      {/* Similar Titles Drawer (Feature #6) */}
      <SimilarDrawer
        isOpen={Boolean(similarReferenceItem)}
        referenceItem={similarReferenceItem}
        onClose={() => setSimilarReferenceItem(null)}
        onWatchTrailer={(item) => setActiveTrailerItem(item)}
      />

      {/* In-App Trailer Player Modal */}
      <TrailerModal
        activeItem={activeTrailerItem}
        onClose={() => setActiveTrailerItem(null)}
      />

      {/* Minimalist World-Class Footer */}
      <footer className="border-t border-white/[0.04] px-6 py-4 text-center text-xs text-slate-500 bg-[#08090d]">
        <p>© 2026 cine2watch • Supabase PostgreSQL Neural Filter (330,000+ Titles) • Zero Personal Tracking</p>
      </footer>

    </div>
  );
}
