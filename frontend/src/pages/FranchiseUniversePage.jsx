import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  Play,
  Star,
  Sparkles,
  Search,
  X,
  ExternalLink,
  Bookmark,
  Check
} from 'lucide-react';

import { EXPLORE_HUBS } from '../data/exploreHubsData';
import { FRANCHISES } from '../data/franchisesData';
import CinemaPoster from '../components/Common/CinemaPoster';

export default function FranchiseUniversePage({
  sagaId,
  onBack,
  onWatchTrailer,
  onOpenSimilar,
  isInWatchlist,
  onToggleWatchlist
}) {
  const staticMatch = useMemo(() => {
    return FRANCHISES?.find((f) => f.id === sagaId) || null;
  }, [sagaId]);

  const [franchise, setFranchise] = useState(() => staticMatch);
  const [loading, setLoading] = useState(() => !staticMatch);
  const [error, setError] = useState(null);

  // Filter States
  const [activeSubUniverse, setActiveSubUniverse] = useState('all');
  const [orderMode, setOrderMode] = useState('chrono'); // 'chrono' | 'release' | 'rating'
  const [mediaFilter, setMediaFilter] = useState('all'); // 'all' | 'movie' | 'series' | 'essential'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (staticMatch) {
      setFranchise(staticMatch);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetch('/api/franchises')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load franchise data');
        return res.json();
      })
      .then((data) => {
        if (data.success && data.data) {
          const match = data.data.find((f) => f.id === sagaId);
          if (match) {
            setFranchise(match);
          } else {
            setError(`Franchise "${sagaId}" not found.`);
          }
        }
      })
      .catch((err) => {
        console.error('Error fetching franchise:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [sagaId, staticMatch]);

  useEffect(() => {
    if (!selectedMovie) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMovie(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMovie]);

  const hasEssentialChapters = useMemo(() => {
    return Boolean(franchise?.timeline?.some((item) => item.is_essential === true));
  }, [franchise]);

  const processedTimeline = useMemo(() => {
    if (!franchise?.timeline) return [];

    let list = [...franchise.timeline];

    if (activeSubUniverse !== 'all' && !activeSubUniverse.toLowerCase().startsWith('all')) {
      list = list.filter(
        (item) =>
          item.sub_universe === activeSubUniverse ||
          (Array.isArray(item.sub_universes) && item.sub_universes.includes(activeSubUniverse))
      );
    }

    if (mediaFilter === 'movie') {
      list = list.filter((item) => item.media_type === 'movie');
    } else if (mediaFilter === 'series') {
      list = list.filter((item) => item.media_type === 'series' || item.media_type === 'tvSeries');
    } else if (mediaFilter === 'essential') {
      list = list.filter((item) => item.is_essential === true);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.title?.toLowerCase().includes(q) ||
          item.desc?.toLowerCase().includes(q) ||
          item.phase?.toLowerCase().includes(q)
      );
    }

    if (orderMode === 'chrono') {
      list.sort((a, b) => (Number(a.chrono_order) || 999) - (Number(b.chrono_order) || 999));
    } else if (orderMode === 'release') {
      list.sort(
        (a, b) =>
          (Number(a.release_order) || Number(a.year) || 0) -
          (Number(b.release_order) || Number(b.year) || 0)
      );
    } else if (orderMode === 'rating') {
      list.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
    }

    return list;
  }, [franchise, activeSubUniverse, mediaFilter, searchQuery, orderMode]);

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 border-2 border-[#c5a059] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono text-slate-400">Loading Universe Archives...</p>
      </div>
    );
  }

  if (error || !franchise) {
    return (
      <div className="w-full p-8 rounded-3xl bg-[#12131c] border border-white/[0.08] text-center space-y-4">
        <p className="text-sm text-red-400 font-mono">{error || 'Universe not found'}</p>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl btn-gold text-black text-xs font-bold inline-flex items-center space-x-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Explore Universes</span>
        </button>
      </div>
    );
  }

  const subUniverses = franchise.sub_universes || ['All Chapters'];

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300 pb-16">
      
      {/* 1. Universe Header & Breadcrumb */}
      <section className="relative rounded-3xl overflow-hidden bg-[#0c0d15] border border-white/[0.08] p-6 sm:p-8 shadow-2xl">
        {(() => {
          const hubData = EXPLORE_HUBS.find((h) => h.id === sagaId);
          const bg = hubData?.backdrop_url || franchise.banner_poster;
          return bg ? (
            <div className="absolute inset-0 z-0">
              <img
                src={bg}
                alt={franchise.name}
                className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/85 to-transparent" />
            </div>
          ) : null;
        })()}

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/[0.1] hover:border-[#c5a059] text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Back to All Universes</span>
            </button>

            <span className="px-3 py-1 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-mono font-bold tracking-wider uppercase">
              {franchise.badge || 'CANON CONTINUITY'}
            </span>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline text-white tracking-tight flex items-center space-x-3">
              <span>{franchise.icon}</span>
              <span>{franchise.name}</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {franchise.tagline}
            </p>

            {franchise.why_watch && (
              <p className="text-[11px] text-slate-400 font-mono leading-relaxed hidden sm:block">
                {franchise.why_watch}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/[0.08]">
                {processedTimeline.length} Chapters Cataloged
              </span>
            </div>

            <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/[0.08] backdrop-blur-md">
              <button
                onClick={() => setOrderMode('chrono')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  orderMode === 'chrono'
                    ? 'bg-[#c5a059] text-black shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⏳ Story Order
              </button>
              <button
                onClick={() => setOrderMode('release')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  orderMode === 'release'
                    ? 'bg-[#c5a059] text-black shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🎬 Release Order
              </button>
              <button
                onClick={() => setOrderMode('rating')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  orderMode === 'rating'
                    ? 'bg-[#c5a059] text-black shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⭐ Top Rated
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Universe / Phase Pills Rail & Live Search */}
      <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-[#08090d]/92 backdrop-blur-xl border-y border-white/[0.06] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-1">
          {subUniverses.map((sub) => {
            const isActive =
              activeSubUniverse === sub ||
              (activeSubUniverse === 'all' && sub.toLowerCase().startsWith('all'));
            return (
              <button
                key={sub}
                onClick={() => setActiveSubUniverse(sub.toLowerCase().startsWith('all') ? 'all' : sub)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#c5a059] to-[#8d6c2a] text-black font-bold shadow-md shadow-[#c5a059]/20'
                    : 'bg-[#12131c] hover:bg-[#1a1b26] text-slate-300 border border-white/[0.06]'
                }`}
              >
                {sub}
              </button>
            );
          })}
        </div>

        <div className="flex items-center flex-wrap gap-2 shrink-0">
          <div className="flex items-center p-0.5 rounded-xl bg-black/60 border border-white/[0.08]">
            {[
              { id: 'all', label: 'All' },
              { id: 'movie', label: 'Films' },
              { id: 'series', label: 'Series' },
              ...(hasEssentialChapters ? [{ id: 'essential', label: 'Essential' }] : [])
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMediaFilter(tab.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                  mediaFilter === tab.id ? 'bg-[#c5a059] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-36 sm:w-44 pl-7 pr-6 py-1 rounded-xl bg-black/60 border border-white/[0.08] focus:border-[#c5a059] text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* 3. Timeline Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-mono text-slate-400">
            Showing {processedTimeline.length} of {franchise.timeline?.length || 0} chapters
          </span>
          <span className="text-xs font-mono text-[#c5a059]">
            {orderMode === 'chrono'
              ? 'Timeline Continuity Order'
              : orderMode === 'release'
              ? 'Theatrical Release Order'
              : 'Highest Rated'}
          </span>
        </div>

        {processedTimeline.length === 0 ? (
          <div className="card-luxury rounded-3xl p-10 text-center space-y-3">
            <p className="text-sm font-bold text-white font-headline">
              No chapters match your current filter.
            </p>
            <button
              onClick={() => {
                setActiveSubUniverse('all');
                setMediaFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
            >
              Reset Chapter Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {processedTimeline.map((item, idx) => {
              const isSeries = item.media_type === 'series' || item.media_type === 'tvSeries';
              const saved = isInWatchlist?.(item);
              return (
                <div
                  key={item.id || idx}
                  onClick={() => setSelectedMovie(item)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-[#12131c] border border-white/[0.08] group-hover:border-[#c5a059] shadow-md group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:-translate-y-1">
                    <CinemaPoster
                      src={item.poster_url}
                      alt={item.title}
                      title={item.title}
                      year={item.year}
                      badge={isSeries ? 'SERIES' : 'FILM'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 pointer-events-none">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-black uppercase tracking-wider backdrop-blur-md shadow-sm ${
                          isSeries ? 'bg-purple-600/90 text-white' : 'bg-black/75 text-slate-200'
                        }`}
                      >
                        {isSeries ? 'SERIES' : 'FILM'}
                      </span>

                      {item.rating && (
                        <span className="flex items-center space-x-0.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[#c5a059] text-[10px] font-mono font-bold shadow-sm">
                          <Star className="w-2.5 h-2.5 fill-[#c5a059] text-[#c5a059]" />
                          <span>{item.rating}</span>
                        </span>
                      )}
                    </div>

                    {/* Watch Order Rank (#1, #2...) + Quick Save Indicator */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                      <div className="px-2 py-0.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/[0.1] text-white text-[11px] font-mono font-black shadow-lg">
                        #{idx + 1}
                      </div>
                      {saved && (
                        <div className="p-1 rounded-lg bg-[#c5a059] text-black shadow-lg">
                          <Bookmark className="w-3 h-3 fill-black" />
                        </div>
                      )}
                    </div>

                    {/* Hover Overlay Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 space-y-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onWatchTrailer) onWatchTrailer(item);
                        }}
                        className="w-full py-1.5 rounded-xl bg-[#c5a059] hover:bg-[#e0bb70] text-black font-bold text-xs flex items-center justify-center space-x-1.5 shadow-lg transition-transform active:scale-95 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-black" />
                        <span>Trailer</span>
                      </button>

                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMovie(item);
                          }}
                          className="py-1 rounded-xl bg-white/[0.12] hover:bg-white/[0.2] text-white font-medium text-[11px] flex items-center justify-center cursor-pointer"
                        >
                          <span>Synopsis</span>
                        </button>

                        {onToggleWatchlist && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWatchlist(item);
                            }}
                            className={`py-1 rounded-xl font-medium text-[11px] flex items-center justify-center space-x-1 cursor-pointer ${
                              saved
                                ? 'bg-[#c5a059]/30 text-[#c5a059] border border-[#c5a059]/50'
                                : 'bg-white/[0.12] hover:bg-white/[0.2] text-white'
                            }`}
                          >
                            <Bookmark className={`w-3 h-3 ${saved ? 'fill-[#c5a059]' : ''}`} />
                            <span>{saved ? 'Saved' : 'Save'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 space-y-0.5">
                    <h3
                      className="text-xs font-bold text-white font-headline truncate group-hover:text-[#c5a059] transition-colors"
                      title={item.title}
                    >
                      {item.title}
                    </h3>

                    {item.phase && (
                      <p className="text-[11px] text-[#c5a059] font-mono truncate" title={item.phase}>
                        {item.phase}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>{item.year}</span>
                      {item.runtime && <span>{item.runtime}</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Chapter Detail Modal */}
      {selectedMovie && (
        <div
          onClick={() => setSelectedMovie(null)}
          className="fixed inset-0 z-50 modal-backdrop-luxury flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl bg-[#0f1019] border border-white/[0.1] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 aspect-[2/3] sm:aspect-auto bg-black relative shrink-0">
                <CinemaPoster
                  src={selectedMovie.poster_url}
                  alt={selectedMovie.title}
                  title={selectedMovie.title}
                  year={selectedMovie.year}
                  badge={selectedMovie.media_type === 'series' || selectedMovie.media_type === 'tvSeries' ? 'SERIES' : 'FILM'}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#c5a059] mb-1 pr-6">
                    <span className="px-2 py-0.5 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 uppercase font-bold">
                      {selectedMovie.media_type === 'series' || selectedMovie.media_type === 'tvSeries'
                        ? 'PRESTIGE SERIES'
                        : 'FEATURE FILM'}
                    </span>
                    <span>•</span>
                    <span>{selectedMovie.year}</span>
                    {selectedMovie.runtime && (
                      <>
                        <span>•</span>
                        <span>{selectedMovie.runtime}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold font-headline text-white">
                    {selectedMovie.title}
                  </h2>

                  {selectedMovie.phase && (
                    <p className="text-xs font-mono text-[#c5a059] mt-1">
                      {selectedMovie.phase}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 line-clamp-5">
                    {selectedMovie.desc ||
                      selectedMovie.overview ||
                      'No storyline synopsis currently cataloged in the archives.'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
                  <button
                    onClick={() => {
                      if (onWatchTrailer) onWatchTrailer(selectedMovie);
                      setSelectedMovie(null);
                    }}
                    className="flex-1 min-w-[130px] py-2.5 px-4 rounded-xl btn-gold text-black font-bold text-xs flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-black" />
                    <span>Watch Trailer</span>
                  </button>

                  {onOpenSimilar && (
                    <button
                      onClick={() => {
                        onOpenSimilar(selectedMovie);
                        setSelectedMovie(null);
                      }}
                      className="py-2.5 px-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold text-xs flex items-center space-x-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>Similar</span>
                    </button>
                  )}

                  {onToggleWatchlist && (
                    <button
                      onClick={() => onToggleWatchlist(selectedMovie)}
                      className={`py-2.5 px-3.5 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 cursor-pointer transition-colors ${
                        isInWatchlist?.(selectedMovie)
                          ? 'bg-[#c5a059]/20 border-[#c5a059]/60 text-[#c5a059]'
                          : 'bg-white/[0.08] hover:bg-white/[0.15] border-white/[0.08] text-white'
                      }`}
                    >
                      {isInWatchlist?.(selectedMovie) ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <Bookmark className="w-3.5 h-3.5" />
                      )}
                      <span>{isInWatchlist?.(selectedMovie) ? 'Saved' : 'Save'}</span>
                    </button>
                  )}

                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      'watch ' + selectedMovie.title + ' ' + selectedMovie.year + ' streaming online'
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Where to Watch"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
