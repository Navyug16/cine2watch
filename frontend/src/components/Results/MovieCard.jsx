import React, { useState } from 'react';
import { Star, Play, Sparkles, Film, Share2, Layers, ExternalLink, Clock } from 'lucide-react';

export default function MovieCard({ item, index, onWatchTrailer, onOpenSimilar }) {
  const [copied, setCopied] = useState(false);
  const isTopPick = index === 0;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${item.title} (${item.year}) - Discovered on cine2watch`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`card-luxury rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl ${
        isTopPick
          ? 'border-[#c5a059]/70 shadow-[0_8px_30px_rgba(197,160,89,0.18)] bg-gradient-to-b from-[#181924] to-[#111219]'
          : 'border-white/[0.08] hover:border-[#c5a059]/40'
      }`}
    >
      <div>
        {/* Cinematic Poster Container */}
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#0a0b10]">
          {item.poster_url ? (
            <img
              src={item.poster_url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#141520]">
              <Film className="w-12 h-12 text-slate-600 mb-2" />
              <span className="text-xs text-slate-400 font-semibold">{item.title}</span>
            </div>
          )}

          {/* Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111219] via-transparent to-transparent opacity-95" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            {isTopPick ? (
              <span className="bg-[#c5a059] text-black text-[10px] font-mono font-black px-2.5 py-0.5 rounded-md shadow-md flex items-center space-x-1">
                <Sparkles className="w-3 h-3 fill-black" />
                <span>#1 CURATOR PICK</span>
              </span>
            ) : (
              <span className="bg-[#090a0d]/85 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
                #{index + 1} MATCH
              </span>
            )}

            {/* IMDb Rating Badge */}
            <div className="bg-[#090a0d]/85 backdrop-blur-md border border-white/[0.1] px-2 py-0.5 rounded-lg flex items-center space-x-1 text-xs">
              <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
              <span className="font-bold text-white">{item.rating}</span>
              <span className="text-[10px] text-slate-400">({item.votes})</span>
            </div>
          </div>

          {/* Poster Bottom Info */}
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <h3 className="text-lg sm:text-xl font-bold font-headline text-white line-clamp-1 group-hover:text-[#c5a059] transition-colors">
              {item.title}
            </h3>
            
            <div className="flex items-center space-x-2 text-[11px] text-slate-300 flex-wrap">
              <span>{item.year}</span>
              <span>•</span>
              <span className="font-mono text-[#c5a059] uppercase">{item.original_language}</span>
              {item.runtime_minutes && (
                <>
                  <span>•</span>
                  <span className="flex items-center space-x-0.5 text-slate-400">
                    <Clock className="w-3 h-3 inline" />
                    <span>{item.runtime_minutes}m</span>
                  </span>
                </>
              )}
            </div>

            <div className="text-[10px] font-mono text-slate-400 line-clamp-1">
              {Array.isArray(item.genres) ? item.genres.join(' • ') : item.genres}
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="p-4 sm:p-5">
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
            {item.overview}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-5 pt-0 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {/* Watch Trailer */}
          <button
            onClick={() => onWatchTrailer(item)}
            className="py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-md hover:scale-102 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Trailer</span>
          </button>

          {/* Similar Button (Feature #6) */}
          <button
            onClick={() => onOpenSimilar(item)}
            className="py-2.5 rounded-xl bg-[#1c1d2b] hover:bg-[#25273a] border border-white/[0.08] hover:border-[#c5a059]/40 text-xs font-semibold text-slate-200 flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
            title="Explore similar movies"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Similar</span>
          </button>
        </div>

        {/* Bottom Utility Row: JustWatch + Share */}
        <div className="flex items-center justify-between pt-1 text-[11px]">
          <a
            href={item.watch_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#c5a059] flex items-center space-x-1 transition-colors"
          >
            <span>Where to Stream</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <Share2 className="w-3 h-3" />
            <span>{copied ? 'Copied! ✓' : 'Share'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
