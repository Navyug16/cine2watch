import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  X,
  Bookmark,
  Play,
  Sparkles,
  Trash2,
  Dices,
  ExternalLink,
  Star
} from 'lucide-react';
import CinemaPoster from '../Common/CinemaPoster';

const getItemKey = (item) => {
  if (!item) return '';
  return String(item.id || `${item.title || 'untitled'}-${item.year || ''}`);
};

export default function WatchlistDrawer({
  isOpen,
  onClose,
  items = [],
  onRemoveItem,
  onClearAll,
  onWatchTrailer,
  onOpenSimilar
}) {
  const [filter, setFilter] = useState('all'); // 'all' | 'movie' | 'tvSeries'
  const [pickedWinner, setPickedWinner] = useState(null);

  const handleClose = useCallback(() => {
    setPickedWinner(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const filteredItems = useMemo(() => {
    if (filter === 'movie') {
      return items.filter((i) => i.media_type !== 'tvSeries' && i.media_type !== 'series');
    }
    if (filter === 'tvSeries') {
      return items.filter((i) => i.media_type === 'tvSeries' || i.media_type === 'series');
    }
    return items;
  }, [items, filter]);

  const activeWinner = useMemo(() => {
    if (!pickedWinner) return null;
    const winnerKey = getItemKey(pickedWinner);
    return filteredItems.find((item) => getItemKey(item) === winnerKey) || null;
  }, [pickedWinner, filteredItems]);

  const handlePickWinner = () => {
    if (filteredItems.length === 0) return;
    const currentKey = getItemKey(activeWinner);
    const pool =
      filteredItems.length > 1 && currentKey
        ? filteredItems.filter((x) => getItemKey(x) !== currentKey)
        : filteredItems;
    const winner = pool[Math.floor(Math.random() * pool.length)];
    setPickedWinner(winner);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-end modal-backdrop-luxury animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md sm:max-w-lg h-full border-l border-white/[0.1] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 bg-[#0c0d14]"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between gap-3 bg-[#10111a]">
          <div className="flex items-center space-x-2.5">
            <span className="p-2 rounded-xl bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/30">
              <Bookmark className="w-4 h-4 fill-[#c5a059]/30" />
            </span>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
                LOCAL DEVICE SHORTLIST
              </span>
              <h3 className="text-base font-bold text-white font-headline">
                Tonight&apos;s Watchlist ({items.length})
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {items.length > 0 && (
              <button
                onClick={onClearAll}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-red-500/15 text-slate-400 hover:text-red-300 border border-white/[0.08] cursor-pointer transition-colors"
                title="Clear all saved titles"
                aria-label="Clear all saved titles"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={handleClose}
              aria-label="Close watchlist"
              className="p-2 rounded-full bg-[#181926] text-slate-400 hover:text-white border border-white/[0.08] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter & Random Tie-Breaker Bar */}
        {items.length > 0 && (
          <div className="px-4 py-3 bg-[#11121b] border-b border-white/[0.06] flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center p-0.5 rounded-xl bg-black/60 border border-white/[0.08]">
              {[
                { id: 'all', label: 'All' },
                { id: 'movie', label: 'Films' },
                { id: 'tvSeries', label: 'Series' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setFilter(tab.id);
                    setPickedWinner(null);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    filter === tab.id ? 'bg-[#c5a059] text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {filteredItems.length > 1 && (
              <button
                onClick={handlePickWinner}
                className="px-3 py-1.5 rounded-xl btn-gold text-[11px] font-bold flex items-center space-x-1.5 cursor-pointer shadow-md"
              >
                <Dices className="w-3.5 h-3.5" />
                <span>Pick Winner</span>
              </button>
            )}
          </div>
        )}

        {/* Spotlighted Tie-Breaker Winner */}
        {activeWinner && (
          <div className="mx-4 mt-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#c5a059]/18 via-[#181926] to-[#12131c] border border-[#c5a059]/60 shadow-lg animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] font-black">
                Tonight&apos;s Winner Selected
              </span>
              <button
                onClick={() => setPickedWinner(null)}
                className="text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                Dismiss
              </button>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h4 className="font-bold text-sm text-white font-headline truncate">
                  {activeWinner.title} ({activeWinner.year})
                </h4>
                <p className="text-[11px] text-slate-300 truncate">
                  {activeWinner.rating ? `★ ${activeWinner.rating} • ` : ''}
                  {Array.isArray(activeWinner.genres)
                    ? activeWinner.genres.slice(0, 3).join(' • ')
                    : activeWinner.genres}
                </p>
              </div>
              <button
                onClick={() => onWatchTrailer(activeWinner)}
                className="px-3 py-1.5 rounded-xl btn-gold text-xs font-bold flex items-center space-x-1 shrink-0 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Trailer</span>
              </button>
            </div>
          </div>
        )}

        {/* Watchlist Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {filteredItems.length === 0 ? (
            <div className="py-20 text-center space-y-3 px-4">
              <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/25 text-[#c5a059] flex items-center justify-center mx-auto">
                <Bookmark className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-headline">
                {items.length === 0 ? 'Your Shortlist is Empty' : 'No matching titles in this filter'}
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Tap the bookmark icon on any movie or series card to compare contenders before deciding. Stored privately in your browser only.
              </p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isSeries = item.media_type === 'tvSeries' || item.media_type === 'series';
              const isWinner = Boolean(activeWinner && getItemKey(activeWinner) === getItemKey(item));
              const watchUrl =
                item.watch_url ||
                `https://www.google.com/search?q=${encodeURIComponent(
                  `watch ${item.title} ${item.year || ''} streaming online`
                )}`;

              return (
                <div
                  key={getItemKey(item)}
                  className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 group ${
                    isWinner
                      ? 'bg-[#1a1b28] border-[#c5a059]/60'
                      : 'bg-[#13141f] hover:bg-[#181928] border-white/[0.06] hover:border-[#c5a059]/35'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-12 aspect-[2/3] rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-white/[0.08]">
                      <CinemaPoster
                        src={item.poster_url}
                        alt={item.title}
                        title={item.title}
                        year={item.year}
                        badge={isSeries ? 'SERIES' : 'FILM'}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <h5 className="font-bold text-xs sm:text-sm text-white truncate group-hover:text-[#c5a059] transition-colors font-headline">
                        {item.title}
                      </h5>
                      <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                        {item.rating && (
                          <span className="text-[#c5a059] font-bold inline-flex items-center space-x-0.5">
                            <Star className="w-3 h-3 fill-[#c5a059]" />
                            <span>{item.rating}</span>
                          </span>
                        )}
                        {item.year && <span>• {item.year}</span>}
                        <span className="text-[10px] font-mono uppercase text-slate-500">
                          • {isSeries ? 'Series' : 'Film'}
                        </span>
                      </div>
                      {(item.overview || item.desc) && (
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {item.overview || item.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center space-x-1.5 shrink-0">
                    <button
                      onClick={() => onWatchTrailer(item)}
                      className="p-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                      title="Watch Trailer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>

                    {onOpenSimilar && (
                      <button
                        onClick={() => onOpenSimilar(item)}
                        className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#c5a059] cursor-pointer transition-colors"
                        title="More Like This"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <a
                      href={watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
                      title="Where to Stream"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => onRemoveItem(item)}
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-300 cursor-pointer transition-colors"
                      title="Remove from shortlist"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-white/[0.06] bg-[#0a0b10] text-[11px] text-slate-500 flex items-center justify-between">
          <span>Saved locally in your browser</span>
          <span className="font-mono text-[#c5a059]">Zero Tracking</span>
        </div>
      </div>
    </div>
  );
}
