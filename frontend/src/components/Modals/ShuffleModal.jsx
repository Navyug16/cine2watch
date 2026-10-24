import React, { useState, useEffect } from 'react';
import { X, Dices, Sparkles, Star, Film, Play, RefreshCw, Compass } from 'lucide-react';
import { INDUSTRIES } from '../../data/constants';

export default function ShuffleModal({ isOpen, onClose, onWatchTrailer, currentIndustry }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Buffer for seen titles to guarantee zero repeats
  const [seenHistory, setSeenHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cine2watch_shuffle_seen') || '[]');
    } catch {
      return [];
    }
  });

  const activeIndObj = INDUSTRIES.find(i => i.id === currentIndustry);
  const industryLabel = activeIndObj ? activeIndObj.name : 'Worldwide Cinema';

  const fetchShuffle = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        industry: currentIndustry || 'all',
        mood: 'all',
        _t: Date.now()
      });

      if (seenHistory.length > 0) {
        params.append('exclude_ids', seenHistory.slice(-50).join(','));
      }

      const res = await fetch(`/api/random-suggestion?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to roll double feature');
      const json = await res.json();
      setData(json);

      // Record seen IDs
      const newIds = [];
      if (json.movie?.id) newIds.push(String(json.movie.id));
      if (json.series?.id) newIds.push(String(json.series.id));

      if (newIds.length > 0) {
        setSeenHistory(prev => {
          const updated = [...new Set([...prev, ...newIds])];
          localStorage.setItem('cine2watch_shuffle_seen', JSON.stringify(updated.slice(-100)));
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchShuffle();
    }
  }, [isOpen, currentIndustry]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 modal-backdrop-luxury animate-in fade-in duration-200">
      <div className="card-luxury max-w-4xl w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Header: Shows Selected Industry Origin with Zero Mood Clutter */}
        <div className="p-4 sm:p-6 border-b border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#10111a]">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DYNAMIC DOUBLE FEATURE</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-[10px] font-mono font-bold uppercase bg-[#c5a059]/15 text-[#c5a059] px-2 py-0.5 rounded border border-[#c5a059]/30 flex items-center space-x-1">
                <Compass className="w-3 h-3 inline" />
                <span>{industryLabel}</span>
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-headline text-white mt-1">
              Tonight's High-Synergy Pair
            </h3>
            <p className="text-xs text-slate-400">
              Guaranteed unique on every spin. 1 Film + 1 Prestige Series curated from {industryLabel}.
            </p>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={fetchShuffle}
              disabled={loading}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-[#c5a059]/20 transition-all hover:scale-102"
            >
              <Dices className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Rolling...' : '🎲 Spin Another Pair'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#161722] hover:bg-[#202230] text-slate-400 hover:text-white border border-white/[0.08] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {loading && (
            <div className="py-24 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] border-t-transparent animate-spin mx-auto" />
              <h4 className="text-base font-bold font-headline text-white">
                Spinning from {industryLabel}...
              </h4>
              <p className="text-xs text-slate-400">
                Sampling top-rated catalog for a guaranteed zero-repeat double feature.
              </p>
            </div>
          )}

          {!loading && error && (
            <div className="p-6 rounded-2xl bg-red-950/30 border border-red-500/30 text-center space-y-3">
              <p className="text-sm font-semibold text-red-300">{error}</p>
              <button
                onClick={fetchShuffle}
                className="px-4 py-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
              >
                Retry Roll
              </button>
            </div>
          )}

          {!loading && data && (
            <>
              {/* Snack & Drink Synergy Pill */}
              {data.snack && (
                <div className="p-3.5 rounded-2xl bg-[#141522] border border-white/[0.06] flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-2xl">{data.snack.icon}</span>
                    <div>
                      <span className="text-[10px] font-mono text-[#c5a059] uppercase font-bold block">
                        Cinephile Snack Pairing • {data.snack.vibe}
                      </span>
                      <span className="text-slate-200 font-semibold">
                        {data.snack.food} + {data.snack.drink}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded-md border border-white/[0.04]">
                    {data.theme || 'Curated Pair'}
                  </span>
                </div>
              )}

              {/* Dual Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                
                {/* 1. MOVIE CARD */}
                {data.movie && (
                  <div className="bg-[#141520] rounded-2xl border border-white/[0.08] overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row gap-4 group hover:border-[#c5a059]/40 transition-all shadow-xl">
                    <div className="relative w-28 sm:w-32 aspect-[2/3] shrink-0 mx-auto sm:mx-0 rounded-xl overflow-hidden bg-[#0d0e14] border border-white/[0.1] shadow-2xl">
                      {data.movie.poster_url ? (
                        <img src={data.movie.poster_url} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <Film className="w-8 h-8 text-slate-600 m-auto mt-12" />
                      )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono uppercase font-bold bg-[#c5a059] text-black px-2 py-0.5 rounded">
                            FEATURE FILM
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-[#c5a059] font-bold">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>{data.movie.rating}</span>
                          </div>
                        </div>

                        <h4 className="font-bold text-base text-white font-headline group-hover:text-[#c5a059] transition-colors line-clamp-1">
                          {data.movie.title}
                        </h4>

                        <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                          <span>{data.movie.year}</span>
                          <span>•</span>
                          <span className="uppercase text-[#c5a059] font-mono">{data.movie.original_language}</span>
                          <span>•</span>
                          <span className="truncate">{Array.isArray(data.movie.genres) ? data.movie.genres.slice(0, 2).join(', ') : data.movie.genres}</span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {data.movie.overview}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onWatchTrailer(data.movie);
                        }}
                        className="w-full py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Film Trailer</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. SERIES CARD */}
                {data.series && (
                  <div className="bg-[#141520] rounded-2xl border border-white/[0.08] overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row gap-4 group hover:border-[#c5a059]/40 transition-all shadow-xl">
                    <div className="relative w-28 sm:w-32 aspect-[2/3] shrink-0 mx-auto sm:mx-0 rounded-xl overflow-hidden bg-[#0d0e14] border border-white/[0.1] shadow-2xl">
                      {data.series.poster_url ? (
                        <img src={data.series.poster_url} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <Film className="w-8 h-8 text-slate-600 m-auto mt-12" />
                      )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono uppercase font-bold bg-[#1e202f] text-[#c5a059] border border-[#c5a059]/40 px-2 py-0.5 rounded">
                            PRESTIGE SERIES
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-[#c5a059] font-bold">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>{data.series.rating}</span>
                          </div>
                        </div>

                        <h4 className="font-bold text-base text-white font-headline group-hover:text-[#c5a059] transition-colors line-clamp-1">
                          {data.series.title}
                        </h4>

                        <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                          <span>{data.series.year}</span>
                          <span>•</span>
                          <span className="uppercase text-[#c5a059] font-mono">{data.series.original_language}</span>
                          <span>•</span>
                          <span className="truncate">{Array.isArray(data.series.genres) ? data.series.genres.slice(0, 2).join(', ') : data.series.genres}</span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {data.series.overview}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onWatchTrailer(data.series);
                        }}
                        className="w-full py-2.5 rounded-xl bg-[#1e202e] hover:bg-[#c5a059] text-white hover:text-black border border-white/[0.08] text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Series Trailer</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
