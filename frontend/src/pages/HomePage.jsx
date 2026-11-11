import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  RotateCcw,
  RefreshCw,
  History,
  Play,
  Star,
  Clock,
  Bookmark,
  ExternalLink,
  Check
} from 'lucide-react';

import IndustryStep from '../components/Funnel/IndustryStep';
import FormatStep from '../components/Funnel/FormatStep';
import EraStep from '../components/Funnel/EraStep';
import DualGenreStep from '../components/Funnel/DualGenreStep';
import MovieCard from '../components/Results/MovieCard';
import CinemaPoster from '../components/Common/CinemaPoster';

import { INDUSTRIES } from '../data/constants';

const MAX_YEAR = Math.max(2026, new Date().getFullYear());

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
  onOpenSimilar,
  onOpenDetails,
  isInWatchlist,
  onToggleWatchlist
}) {
  const [sortBy, setSortBy] = useState('match'); // 'match' | 'rating' | 'runtime' | 'newest'

  // Auto-advance handlers
  const handleSelectIndustry = (indId) => {
    setIndustry(indId);
    setTimeout(() => setCurrentStep(2), 180);
  };

  const handleSelectFormat = (formatId) => {
    setMediaType(formatId);
    setTimeout(() => setCurrentStep(3), 180);
  };

  const handleSelectEra = (start, end) => {
    setSelectedEra(`${start}-${end}`);
    setCustomStart(start);
    setCustomEnd(end);
    setTimeout(() => setCurrentStep(4), 180);
  };

  const handleCustomEraSubmit = (start, end) => {
    setSelectedEra(`${start}-${end}`);
    setCustomStart(start);
    setCustomEnd(end);
    setTimeout(() => setCurrentStep(4), 180);
  };

  const handleToggleGenre = (genreName) => {
    let updated;
    if (selectedGenres.includes(genreName)) {
      updated = selectedGenres.filter((g) => g !== genreName);
    } else if (selectedGenres.length >= 2) {
      updated = [selectedGenres[1], genreName];
    } else {
      updated = [...selectedGenres, genreName];
    }
    setSelectedGenres(updated);

    if (updated.length === 2) {
      setSortBy('match');
      setTimeout(() => {
        onFetchRecommendations(updated, false);
      }, 320);
    }
  };

  const currentIndObj = INDUSTRIES.find((i) => i.id === industry);

  // Client-side sorted view of returned batch
  const sortedResults = useMemo(() => {
    if (!results?.data) return [];
    const list = [...results.data];
    if (sortBy === 'rating') {
      list.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
    } else if (sortBy === 'runtime') {
      list.sort((a, b) => (Number(a.runtime_minutes) || 999) - (Number(b.runtime_minutes) || 999));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));
    }
    return list;
  }, [results, sortBy]);

  const spotlightItem = sortedResults[0] || null;
  const gridItems = sortedResults.slice(1);

  return (
    <div className="w-full flex flex-col justify-center py-2 sm:py-4 space-y-5">

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
            onProceed={(g) => {
              setSortBy('match');
              onFetchRecommendations(g, false);
            }}
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
                    className="p-2.5 rounded-xl bg-[#161722] hover:bg-[#1f202e] border border-white/[0.08] text-slate-300 hover:text-white cursor-pointer transition-colors"
                    title="Start fresh"
                    aria-label="Start fresh"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Taste Chips + Client Sort Controls */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
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

                {/* Quick Sort Pills */}
                {!loading && sortedResults.length > 1 && (
                  <div className="flex items-center space-x-1 p-1 rounded-xl bg-black/50 border border-white/[0.06] shrink-0 self-start lg:self-auto">
                    {[
                      { id: 'match', label: 'Best Match' },
                      { id: 'rating', label: 'Top Rated' },
                      { id: 'runtime', label: 'Shortest' },
                      { id: 'newest', label: 'Newest' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSortBy(opt.id)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                          sortBy === opt.id
                            ? 'bg-[#c5a059] text-black font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Shimmer Loading Skeletons */}
            {loading && (
              <div className="space-y-5">
                <div className="rounded-3xl p-5 sm:p-6 bg-[#11121a] border border-white/[0.06] flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-52 aspect-[2/3] rounded-2xl skeleton-luxury shrink-0" />
                  <div className="flex-1 space-y-4 py-2">
                    <div className="h-4 w-36 rounded-lg skeleton-luxury" />
                    <div className="h-8 w-2/3 rounded-xl skeleton-luxury" />
                    <div className="h-4 w-48 rounded-lg skeleton-luxury" />
                    <div className="space-y-2 pt-2">
                      <div className="h-3.5 w-full rounded skeleton-luxury" />
                      <div className="h-3.5 w-5/6 rounded skeleton-luxury" />
                      <div className="h-3.5 w-4/6 rounded skeleton-luxury" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="rounded-3xl overflow-hidden bg-[#11121a] border border-white/[0.06] p-4 space-y-4">
                      <div className="aspect-[2/3] w-full rounded-2xl skeleton-luxury" />
                      <div className="h-4 w-3/4 rounded skeleton-luxury" />
                      <div className="h-3 w-full rounded skeleton-luxury" />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-9 rounded-xl skeleton-luxury" />
                        <div className="h-9 rounded-xl skeleton-luxury" />
                      </div>
                    </div>
                  ))}
                </div>
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

            {/* Spotlight #1 Hero + Runners-Up Grid */}
            {!loading && results?.found && sortedResults.length > 0 && (
              <div className="space-y-6">
                
                {/* #1 Curator Spotlight Wide Hero Card */}
                {spotlightItem && (
                  <div className="ambient-glow-curator rounded-3xl bg-gradient-to-br from-[#171925] via-[#12131c] to-[#0b0c12] border border-[#c5a059]/60 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.75)]">
                    <div className="flex flex-col md:flex-row">
                      {/* Spotlight Poster */}
                      <div
                        onClick={() => onOpenDetails?.(spotlightItem)}
                        className="md:w-60 lg:w-64 aspect-[2/3] md:aspect-auto relative bg-[#090a0d] shrink-0 cursor-pointer group overflow-hidden"
                      >
                        <CinemaPoster
                          src={spotlightItem.poster_url}
                          alt={spotlightItem.title}
                          title={spotlightItem.title}
                          year={spotlightItem.year}
                          badge="TOP PICK"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-[#c5a059] text-black text-[10px] font-mono font-black px-2.5 py-1 rounded-md shadow-md inline-flex items-center space-x-1">
                            <Sparkles className="w-3 h-3 fill-black" />
                            <span>#1 CURATOR PICK</span>
                          </span>
                        </div>
                      </div>

                      {/* Spotlight Details */}
                      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center flex-wrap gap-2 text-xs font-mono">
                              <span className="px-2.5 py-0.5 rounded-md bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#c5a059] font-bold">
                                {spotlightItem.badge || 'FEATURED MATCH'}
                              </span>
                              <span className="text-slate-300">{spotlightItem.year}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-[#c5a059] uppercase">{spotlightItem.original_language}</span>
                              {spotlightItem.runtime_minutes && (
                                <>
                                  <span className="text-slate-600">•</span>
                                  <span className="inline-flex items-center space-x-1 text-slate-300">
                                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                                    <span>{spotlightItem.runtime_minutes} min</span>
                                  </span>
                                </>
                              )}
                            </div>

                            <div className="bg-black/60 border border-white/[0.1] px-2.5 py-1 rounded-xl flex items-center space-x-1.5 text-xs">
                              <Star className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                              <span className="font-bold text-white">{spotlightItem.rating}</span>
                              <span className="text-slate-400">({spotlightItem.votes})</span>
                            </div>
                          </div>

                          <h3
                            onClick={() => onOpenDetails?.(spotlightItem)}
                            className="text-2xl sm:text-3xl font-black font-headline text-white hover:text-[#c5a059] transition-colors cursor-pointer leading-tight"
                          >
                            {spotlightItem.title}
                          </h3>

                          <div className="flex flex-wrap gap-1.5">
                            {(Array.isArray(spotlightItem.genres) ? spotlightItem.genres : []).map((g) => (
                              <span
                                key={g}
                                className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                              >
                                {g}
                              </span>
                            ))}
                          </div>

                          <p className="text-sm text-slate-300 leading-relaxed line-clamp-4">
                            {spotlightItem.overview}
                          </p>

                          {spotlightItem.director && (
                            <p className="text-xs text-slate-400 font-mono">
                              Directed by <span className="text-slate-200">{spotlightItem.director}</span>
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/[0.06]">
                          <button
                            onClick={() => onWatchTrailer(spotlightItem)}
                            className="px-5 py-2.5 rounded-xl btn-gold text-xs font-bold inline-flex items-center space-x-2 cursor-pointer shadow-lg"
                          >
                            <Play className="w-4 h-4 fill-current" />
                            <span>Watch Trailer</span>
                          </button>

                          <button
                            onClick={() => onOpenSimilar(spotlightItem)}
                            className="px-4 py-2.5 rounded-xl bg-[#1c1d2b] hover:bg-[#26283c] border border-white/[0.1] hover:border-[#c5a059]/40 text-xs font-semibold text-white inline-flex items-center space-x-1.5 cursor-pointer transition-colors"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                            <span>Similar Titles</span>
                          </button>

                          {onToggleWatchlist && (
                            <button
                              onClick={() => onToggleWatchlist(spotlightItem)}
                              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold inline-flex items-center space-x-1.5 cursor-pointer transition-colors ${
                                isInWatchlist?.(spotlightItem)
                                  ? 'bg-[#c5a059]/20 border-[#c5a059]/60 text-[#c5a059]'
                                  : 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.1] text-slate-200'
                              }`}
                            >
                              {isInWatchlist?.(spotlightItem) ? (
                                <Check className="w-3.5 h-3.5" />
                              ) : (
                                <Bookmark className="w-3.5 h-3.5" />
                              )}
                              <span>{isInWatchlist?.(spotlightItem) ? 'Saved' : 'Save'}</span>
                            </button>
                          )}

                          <a
                            href={spotlightItem.watch_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto px-3 py-2 text-xs text-slate-300 hover:text-[#c5a059] inline-flex items-center space-x-1 transition-colors"
                          >
                            <span>Where to Stream</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Runners-up Grid (#2 - #18) */}
                {gridItems.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {gridItems.map((item, idx) => (
                      <MovieCard
                        key={item.id}
                        item={item}
                        index={idx + 1}
                        onWatchTrailer={(it) => onWatchTrailer(it)}
                        onOpenSimilar={(it) => onOpenSimilar(it)}
                        onOpenDetails={(it) => onOpenDetails?.(it)}
                        isSaved={isInWatchlist?.(item)}
                        onToggleSave={(it) => onToggleWatchlist?.(it)}
                      />
                    ))}
                  </div>
                )}
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
                    <span>Expand to All Eras (1975–{MAX_YEAR})</span>
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
