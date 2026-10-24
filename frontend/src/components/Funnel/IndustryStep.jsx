import React from 'react';
import { INDUSTRIES } from '../../data/constants';

export default function IndustryStep({ selectedIndustry, onSelect }) {
  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      <div className="text-center space-y-1">
        <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
          STEP 1 OF 4 • CINEMATIC ORIGIN
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-headline text-white tracking-tight">
          Select Your Cinematic Landscape
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          Explore world-class film hubs, from Hollywood auteurs and European noir to Studio Ghibli and Indian regional epics.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 max-w-5xl mx-auto">
        {INDUSTRIES.map((ind) => {
          const isSelected = selectedIndustry === ind.id;
          return (
            <button
              key={ind.id}
              onClick={() => onSelect(ind.id)}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden flex-1 basis-[220px] max-w-[280px] ${
                isSelected
                  ? 'bg-[#171822] border-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.25)] scale-102 ring-1 ring-[#c5a059]'
                  : 'card-luxury hover:border-[#c5a059]/40 hover:-translate-y-1'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2.5">
                  <span className="text-xl sm:text-2xl p-1.5 rounded-xl bg-black/40 border border-white/[0.04]">
                    {ind.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-white font-headline group-hover:text-[#c5a059] transition-colors leading-snug">
                      {ind.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono block line-clamp-1">
                      {ind.tag}
                    </span>
                  </div>
                </div>
                {isSelected && (
                  <span className="w-5 h-5 rounded-full bg-[#c5a059] text-black text-xs font-black flex items-center justify-center shadow-md shrink-0">
                    ✓
                  </span>
                )}
              </div>

              {/* 3-Poster Fan Display */}
              <div className="relative h-24 sm:h-28 w-full flex items-center justify-center overflow-hidden my-2.5 bg-[#090a0d]/70 rounded-xl border border-white/[0.04]">
                {ind.posters && ind.posters.map((p, idx) => {
                  const rotation = idx === 0 
                    ? '-rotate-6 -translate-x-5.5' 
                    : idx === 1 
                    ? 'z-10 scale-105 shadow-2xl' 
                    : 'rotate-6 translate-x-5.5';
                  return (
                    <div
                      key={idx}
                      className={`absolute w-12 sm:w-14 aspect-[2/3] rounded-md overflow-hidden shadow-xl border border-white/[0.14] transition-all duration-300 group-hover:scale-110 bg-slate-900 ${rotation}`}
                    >
                      <img
                        src={p.url}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Footer Subtitle */}
              <div className="w-full pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-slate-400">
                <span className="truncate pr-1">{ind.subtitle}</span>
                <span className="text-[#c5a059] text-xs font-mono group-hover:translate-x-1 transition-transform shrink-0">→</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
