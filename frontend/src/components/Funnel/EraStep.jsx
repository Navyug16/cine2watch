import React, { useState } from 'react';
import { SlidersHorizontal, ArrowLeft, Calendar } from 'lucide-react';
import { ERAS } from '../../data/constants';

export default function EraStep({ selectedEra, customStart, customEnd, onSelectEra, onCustomSubmit, onBack }) {
  const [showCustom, setShowCustom] = useState(false);
  const [startYear, setStartYear] = useState(customStart || 2010);
  const [endYear, setEndYear] = useState(customEnd || 2026);

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
      <div className="text-center space-y-1">
        <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
          STEP 3 OF 4 • RELEASE ERA
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-headline text-white tracking-tight">
          Which Era Resonates Tonight?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          From golden age practical classics to current cinematic masterworks.
        </p>
      </div>

      {/* Preset Eras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {ERAS.map((era) => {
          const isSelected = selectedEra === `${era.start}-${era.end}` && !showCustom;
          return (
            <button
              key={era.id}
              onClick={() => {
                setShowCustom(false);
                onSelectEra(era.start, era.end);
              }}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                isSelected
                  ? 'bg-[#171824] border-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.2)] ring-1 ring-[#c5a059]'
                  : 'card-luxury hover:border-[#c5a059]/40 hover:-translate-y-1'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl p-2 rounded-xl bg-black/40 border border-white/[0.04]">
                    {era.icon}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                    {era.range}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-white font-headline group-hover:text-[#c5a059] transition-colors">
                  {era.name}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {era.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] text-[11px] text-[#c5a059] flex items-center justify-between mt-3">
                <span>Select era</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Custom Year Range Dial Toggle */}
      <div className="text-center pt-2">
        <button
          onClick={() => setShowCustom(!showCustom)}
          className="text-xs font-mono text-slate-400 hover:text-[#c5a059] flex items-center space-x-1.5 mx-auto cursor-pointer transition-colors"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>{showCustom ? 'Hide custom year dial' : 'Or dial a custom year range (e.g. 1995–2005)'}</span>
        </button>

        {showCustom && (
          <div className="mt-4 p-5 rounded-2xl card-luxury max-w-md mx-auto space-y-4 border border-white/[0.08] animate-in fade-in duration-200">
            <h4 className="text-xs font-bold text-white font-headline">Custom Timeline Interval</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-mono text-slate-400">Start Year</label>
                <input
                  type="number"
                  min="1975"
                  max="2026"
                  value={startYear}
                  onChange={(e) => setStartYear(parseInt(e.target.value, 10))}
                  className="w-full bg-[#161722] border border-white/[0.08] rounded-xl px-3 py-2 text-white font-mono text-sm outline-none focus:border-[#c5a059]"
                />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-mono text-slate-400">End Year</label>
                <input
                  type="number"
                  min="1975"
                  max="2026"
                  value={endYear}
                  onChange={(e) => setEndYear(parseInt(e.target.value, 10))}
                  className="w-full bg-[#161722] border border-white/[0.08] rounded-xl px-3 py-2 text-white font-mono text-sm outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            <button
              onClick={() => onCustomSubmit(startYear, endYear)}
              className="w-full py-2.5 rounded-xl btn-gold text-xs font-bold cursor-pointer"
            >
              Lock {startYear}–{endYear} & Proceed
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-[#14151f] hover:bg-[#1a1b2a] border border-white/[0.06] text-xs text-slate-400 hover:text-white flex items-center space-x-1.5 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Format</span>
        </button>
      </div>
    </div>
  );
}
