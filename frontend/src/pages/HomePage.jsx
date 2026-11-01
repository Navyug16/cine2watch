import React from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  RefreshCw, 
  History
} from 'lucide-react';

import IndustryStep from '../components/Funnel/IndustryStep';
import FormatStep from '../components/Funnel/FormatStep';
import EraStep from '../components/Funnel/EraStep';
import DualGenreStep from '../components/Funnel/DualGenreStep';
import MovieCard from '../components/Results/MovieCard';

import { INDUSTRIES } from '../data/constants';

export default function HomePage({
  currentStep,
  setCurrentStep,
  industry,
  setIndustry,
  mediaType,
  setMediaType,
  selectedEra,
  setSelectedEra,
  customStart,
  setCustomStart,
  customEnd,
  setCustomEnd,
  selectedGenres,
  setSelectedGenres,
  results,
  loading,
  error,
  historyExcludeIds,
  onReset,
  onFetchRecommendations,
  onClearHistory,
  onWatchTrailer,
  onOpenSimilar
}) {

  // Auto-advance handlers
  const handleSelectIndustry = (indId) => {
    setIndustry(indId);
    setTimeout(() => setCurrentStep(2), 200);
  };

  const handleSelectFormat = (formatId) => {
    setMediaType(formatId);
    setTimeout(() => setCurrentStep(3), 200);
  };

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
        onFetchRecommendations(updated, false);
      }, 350);
    }
  };

  const currentIndObj = INDUSTRIES.find(i => i.id === industry);

  return (
    <div className="w-full flex flex-col justify-center py-2 sm:py-4">
      
      {/* MAIN DECISION FUNNEL QUESTIONS & RESULTS */}
      <section className="w-full flex-1 flex flex-col justify-center">
        
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
            onProceed={(g) => onFetchRecommendations(g, false)}
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
                    onClick={() => onFetchRecommendations(selectedGenres, false)}
                    disabled={loading}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-lg"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                    <span>Roll Fresh Batch</span>
                  </button>

                  <button
                    onClick={onReset}
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
                  onClick={() => onFetchRecommendations(selectedGenres, false)}
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
                    onWatchTrailer={(it) => onWatchTrailer(it)}
                    onOpenSimilar={(it) => onOpenSimilar(it)}
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
                    onClick={() => onFetchRecommendations(selectedGenres, true)}
                    className="px-5 py-2.5 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                  >
                    <span>Expand to All Eras (1975–2026)</span>
                  </button>

                  {historyExcludeIds.length > 0 && (
                    <button
                      onClick={onClearHistory}
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

      </section>

    </div>
  );
}
