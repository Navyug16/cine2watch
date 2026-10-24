import React from 'react';
import { Film, Tv, ArrowLeft } from 'lucide-react';
import { FORMATS } from '../../data/constants';

export default function FormatStep({ selectedFormat, onSelect, onBack }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-3xl mx-auto">
      <div className="text-center space-y-1">
        <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
          STEP 2 OF 4 • STORYTELLING DURATION
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-headline text-white tracking-tight">
          How Long Do You Want to Immerse?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          Choose between definitive single-night films or multi-season episodic sagas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FORMATS.map((f) => {
          const isSelected = selectedFormat === f.id;
          return (
            <button
              key={f.id}
              onClick={() => onSelect(f.id)}
              className={`p-6 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'bg-[#171824] border-[#c5a059] shadow-[0_0_30px_rgba(197,160,89,0.25)] ring-1 ring-[#c5a059]'
                  : 'card-luxury hover:border-[#c5a059]/40 hover:-translate-y-1'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                    {f.icon}
                  </span>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/20 px-2 py-0.5 rounded-md">
                    {f.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-headline group-hover:text-[#c5a059] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {f.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-400 pt-2 border-t border-white/[0.04]">
                  {f.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-[#c5a059] font-semibold">
                <span>Select format</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-[#14151f] hover:bg-[#1a1b2a] border border-white/[0.06] text-xs text-slate-400 hover:text-white flex items-center space-x-1.5 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Origin</span>
        </button>
      </div>
    </div>
  );
}
