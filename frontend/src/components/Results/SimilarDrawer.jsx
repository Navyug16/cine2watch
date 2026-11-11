import React, { useState, useEffect } from 'react';
import { X, Sparkles, Play, Loader2, Bookmark, Check } from 'lucide-react';
import CinemaPoster from '../Common/CinemaPoster';

export default function SimilarDrawer({
  isOpen,
  referenceItem,
  onClose,
  onWatchTrailer,
  isInWatchlist,
  onToggleWatchlist
}) {
  const [similarItems, setSimilarItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && referenceItem) {
      setLoading(true);
      const params = new URLSearchParams({
        id: referenceItem.id || '',
        title: referenceItem.title || '',
        genres: Array.isArray(referenceItem.genres)
          ? referenceItem.genres.join(',')
          : referenceItem.genres || '',
        director: referenceItem.director || '',
        original_language: referenceItem.original_language || ''
      });

      fetch(`/api/similar?${params.toString()}`)
        .then((r) => r.json())
        .then((res) => {
          if (res.success && res.data) {
            setSimilarItems(res.data);
          } else {
            setSimilarItems([]);
          }
        })
        .catch((err) => {
          console.error('Similar fetch error:', err);
          setSimilarItems([]);
        })
        .finally(() => setLoading(false));
    } else {
      setSimilarItems([]);
    }
  }, [isOpen, referenceItem]);

  if (!isOpen || !referenceItem) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-end modal-backdrop-luxury animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card-luxury w-full max-w-xl h-full border-l border-white/[0.12] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 bg-[#0d0e15]"
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between gap-3 bg-[#11121b]">
          <div className="flex items-center space-x-2.5 min-w-0">
            <span className="p-2 rounded-xl bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/30 shrink-0">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
                MORE LIKE THIS
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white font-headline truncate">
                Related to {referenceItem.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close similar titles"
            className="p-2 rounded-full bg-[#181926] text-slate-400 hover:text-white border border-white/[0.08] cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reference Item Preview Banner */}
        <div className="p-4 bg-[#141522] border-b border-white/[0.06] flex items-center space-x-3">
          <div className="w-12 aspect-[2/3] rounded-lg overflow-hidden shrink-0 bg-black/40 border border-white/[0.08]">
            <CinemaPoster
              src={referenceItem.poster_url}
              alt={referenceItem.title}
              title={referenceItem.title}
              year={referenceItem.year}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-0.5">
            <div className="flex items-center space-x-2">
              <span className="text-[9px] font-mono uppercase bg-[#c5a059] text-black font-bold px-1.5 py-0.2 rounded">
                ANCHOR SEED
              </span>
              {referenceItem.rating && (
                <span className="text-xs text-slate-400 font-mono">
                  ★ {referenceItem.rating}
                </span>
              )}
            </div>
            <h4 className="font-bold text-sm text-white truncate font-headline">
              {referenceItem.title} ({referenceItem.year})
            </h4>
            <p className="text-[11px] text-slate-400 truncate">
              {Array.isArray(referenceItem.genres) ? referenceItem.genres.join(' • ') : referenceItem.genres}
            </p>
          </div>
        </div>

        {/* Similar Titles List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {loading && (
            <div className="py-20 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-[#c5a059] animate-spin mx-auto" />
              <p className="text-xs text-slate-400">Discovering matching cinematic DNA across 330,000 titles...</p>
            </div>
          )}

          {!loading && similarItems.length > 0 && (
            <div className="space-y-2.5">
              {similarItems.map((item) => {
                const saved = isInWatchlist?.(item);
                return (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-[#13141f] hover:bg-[#181928] border border-white/[0.06] hover:border-[#c5a059]/40 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <div className="w-12 aspect-[2/3] rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-white/[0.08]">
                        <CinemaPoster
                          src={item.poster_url}
                          alt={item.title}
                          title={item.title}
                          year={item.year}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1 space-y-0.5">
                        <h5 className="font-bold text-xs sm:text-sm text-white truncate group-hover:text-[#c5a059] transition-colors font-headline">
                          {item.title}
                        </h5>
                        <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                          <span className="text-[#c5a059] font-bold">★ {item.rating}</span>
                          <span>•</span>
                          <span>{item.year}</span>
                          <span>•</span>
                          <span className="truncate">
                            {Array.isArray(item.genres) ? item.genres.slice(0, 2).join(', ') : item.genres}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {item.overview}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <button
                        onClick={() => onWatchTrailer(item)}
                        className="p-2 sm:px-3 sm:py-1.5 rounded-xl btn-gold text-xs font-bold flex items-center space-x-1 cursor-pointer shadow-md"
                        title="Watch trailer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span className="hidden sm:inline">Trailer</span>
                      </button>

                      {onToggleWatchlist && (
                        <button
                          onClick={() => onToggleWatchlist(item)}
                          className={`p-2 rounded-xl border cursor-pointer transition-colors ${
                            saved
                              ? 'bg-[#c5a059]/20 border-[#c5a059]/60 text-[#c5a059]'
                              : 'bg-white/[0.05] hover:bg-white/[0.12] border-white/[0.08] text-slate-300'
                          }`}
                          title={saved ? 'Remove from Shortlist' : 'Save to Shortlist'}
                        >
                          {saved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!loading && similarItems.length === 0 && (
            <div className="py-20 text-center space-y-2">
              <span className="text-2xl">🎬</span>
              <p className="text-sm font-semibold text-white">No closely related titles discovered</p>
              <p className="text-xs text-slate-400">Try exploring titles with broader genre overlap.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
