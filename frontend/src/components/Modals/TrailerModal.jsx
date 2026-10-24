import React, { useEffect } from 'react';
import { X, Play, ExternalLink, Film } from 'lucide-react';

export default function TrailerModal({ activeItem, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!activeItem) return null;

  const ytQuery = encodeURIComponent(`${activeItem.title} ${activeItem.year || ''} official trailer`);
  const ytSearchUrl = `https://www.youtube.com/results?search_query=${ytQuery}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop-luxury animate-in fade-in duration-200">
      <div className="card-luxury max-w-2xl w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl p-5 space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#c5a059] font-bold">
              Official Trailer Preview
            </span>
            <h3 className="text-base sm:text-lg font-bold font-headline text-white mt-0.5">
              {activeItem.title} {activeItem.year ? `(${activeItem.year})` : ''}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#14151c] hover:bg-[#1a1b24] text-slate-400 hover:text-white border border-white/[0.08] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-[#090a0d] rounded-2xl overflow-hidden border border-white/[0.08] flex items-center justify-center">
          {activeItem.trailer_embed ? (
            <iframe 
              src={activeItem.trailer_embed} 
              title={activeItem.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          ) : (
            <div className="text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/15 text-[#c5a059] flex items-center justify-center mx-auto border border-[#c5a059]/30">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <h4 className="font-bold text-white font-headline text-sm sm:text-base">
                Play Official Trailer for {activeItem.title}
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Stream verified high-definition trailers directly via YouTube cinema channels.
              </p>
              <a
                href={ytSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition-transform hover:scale-105 shadow-xl"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Open Official Trailer on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          )}
        </div>

        {/* Overview */}
        {activeItem.overview && (
          <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
            {activeItem.overview}
          </p>
        )}

      </div>
    </div>
  );
}
