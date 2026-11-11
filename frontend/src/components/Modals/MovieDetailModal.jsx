import React, { useEffect } from 'react';
import {
  X,
  Play,
  Star,
  Sparkles,
  ExternalLink,
  Clock,
  Bookmark,
  Check,
  Users,
  Clapperboard
} from 'lucide-react';
import CinemaPoster from '../Common/CinemaPoster';

export default function MovieDetailModal({
  item,
  onClose,
  onWatchTrailer,
  onOpenSimilar,
  isSaved = false,
  onToggleSave
}) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const isSeries = item.media_type === 'tvSeries' || item.media_type === 'series';
  const genres = Array.isArray(item.genres)
    ? item.genres
    : typeof item.genres === 'string'
    ? item.genres.split(',').map((g) => g.trim()).filter(Boolean)
    : [];

  const watchUrl =
    item.watch_url ||
    `https://www.google.com/search?q=${encodeURIComponent(
      `watch ${item.title} ${item.year || ''} ${isSeries ? 'series' : 'movie'} streaming online`
    )}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 modal-backdrop-luxury flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl bg-[#0e0f17] border border-white/[0.12] shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/[0.12] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Poster Column */}
          <div className="sm:w-[38%] aspect-[2/3] sm:aspect-auto min-h-[260px] bg-black relative shrink-0">
            <CinemaPoster
              src={item.poster_url}
              alt={item.title}
              title={item.title}
              year={item.year}
              badge={isSeries ? 'SERIES' : 'FILM'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0e0f17] sm:from-black/80 to-transparent pointer-events-none" />
          </div>

          {/* Info Column */}
          <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              {/* Top Type & Metadata */}
              <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#c5a059] pr-8">
                <span className="px-2.5 py-0.5 rounded-md bg-[#c5a059]/15 border border-[#c5a059]/30 uppercase font-bold">
                  {item.badge || (isSeries ? 'PRESTIGE SERIES' : 'FEATURE FILM')}
                </span>
                {item.year && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300">{item.year}</span>
                  </>
                )}
                {item.original_language && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="uppercase text-[#c5a059]">{item.original_language}</span>
                  </>
                )}
                {(item.runtime_minutes || item.runtime) && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="inline-flex items-center space-x-1 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.runtime || `${item.runtime_minutes} min`}</span>
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold font-headline text-white leading-tight">
                {item.title}
              </h2>

              {/* Rating */}
              {item.rating && (
                <div className="flex items-center space-x-3 text-xs">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#c5a059]/12 border border-[#c5a059]/25 font-mono font-bold text-[#c5a059]">
                    <Star className="w-3.5 h-3.5 fill-[#c5a059]" />
                    <span>{item.rating} / 10</span>
                  </span>
                  {item.votes && (
                    <span className="text-slate-400 font-mono">{item.votes} IMDb votes</span>
                  )}
                </div>
              )}

              {/* Genres */}
              {genres.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {genres.map((g) => (
                    <span
                      key={g}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              )}

              {/* Overview */}
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                {item.overview || item.desc || 'No storyline synopsis currently cataloged in the archives.'}
              </p>

              {/* Director & Cast */}
              {(item.director || item.cast_members) && (
                <div className="pt-2 space-y-1.5 text-xs text-slate-400 border-t border-white/[0.06]">
                  {item.director && (
                    <div className="flex items-start space-x-2">
                      <Clapperboard className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-200">Director:</strong> {item.director}
                      </span>
                    </div>
                  )}
                  {item.cast_members && (
                    <div className="flex items-start space-x-2">
                      <Users className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">
                        <strong className="text-slate-200">Cast:</strong> {item.cast_members}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.06]">
              {onWatchTrailer && (
                <button
                  onClick={() => {
                    onWatchTrailer(item);
                    onClose();
                  }}
                  className="flex-1 min-w-[140px] py-2.5 px-4 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Trailer</span>
                </button>
              )}

              {onOpenSimilar && (
                <button
                  onClick={() => {
                    onOpenSimilar(item);
                    onClose();
                  }}
                  className="py-2.5 px-4 rounded-xl bg-[#191a27] hover:bg-[#222436] border border-white/[0.1] hover:border-[#c5a059]/40 text-white font-semibold text-xs flex items-center space-x-1.5 cursor-pointer transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Similar</span>
                </button>
              )}

              {onToggleSave && (
                <button
                  onClick={() => onToggleSave(item)}
                  className={`py-2.5 px-3.5 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 cursor-pointer transition-colors ${
                    isSaved
                      ? 'bg-[#c5a059]/20 border-[#c5a059]/60 text-[#c5a059]'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] border-white/[0.1] text-slate-200'
                  }`}
                  title={isSaved ? 'Remove from Shortlist' : 'Save to Shortlist'}
                >
                  {isSaved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                  <span>{isSaved ? 'Saved' : 'Shortlist'}</span>
                </button>
              )}

              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Where to Stream"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

