import React, { useState } from 'react';
import { Film } from 'lucide-react';

export default function CinemaPoster({
  src,
  alt = 'Cinema Title',
  className = 'w-full h-full object-cover',
  title = '',
  year = '',
  badge = ''
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no source provided or failed to load from CDN, display the luxury obsidian monogram fallback
  if (!src || hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-between p-4 text-center bg-gradient-to-br from-[#12141f] via-[#0d0e15] to-[#07080c] border border-white/[0.08] relative select-none">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Top Mini Badge */}
        <div className="w-full flex justify-end z-10">
          <span className="px-1.5 py-0.5 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 text-[9px] font-mono font-bold text-[#c5a059] uppercase">
            {badge || 'ARCHIVE'}
          </span>
        </div>

        {/* Center Crest Icon */}
        <div className="flex flex-col items-center justify-center space-y-2 z-10 my-auto">
          <div className="w-10 h-10 rounded-xl bg-black/60 border border-[#c5a059]/30 flex items-center justify-center shadow-lg">
            <Film className="w-5 h-5 text-[#c5a059]" />
          </div>
          <span className="text-[11px] font-bold text-white font-headline line-clamp-3 leading-snug px-1">
            {title || alt}
          </span>
          {year && (
            <span className="text-[10px] font-mono text-slate-400">
              {year}
            </span>
          )}
        </div>

        {/* Bottom Logo Watermark */}
        <div className="w-full z-10 flex items-center justify-center pt-2 border-t border-white/[0.04]">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
            cine2watch
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-80'}`}
    />
  );
}

