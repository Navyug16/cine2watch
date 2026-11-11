import React, { useState } from 'react';
import { SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { ERAS } from '../../data/constants';

const MAX_YEAR = Math.max(2026, new Date().getFullYear());

export default function EraStep({ selectedEra, customStart, customEnd, onSelectEra, onCustomSubmit, onBack }) {
  const [showCustom, setShowCustom] = useState(false);
  const [startInput, setStartInput] = useState(String(customStart || 2010));
  const [endInput, setEndInput] = useState(String(customEnd || MAX_YEAR));

  const parsedStart = parseInt(startInput, 10);
  const parsedEnd = parseInt(endInput, 10);

  const safeStart = Number.isNaN(parsedStart)
    ? 1975
    : Math.min(Math.max(parsedStart, 1975), MAX_YEAR);
  const safeEnd = Number.isNaN(parsedEnd)
    ? MAX_YEAR
    : Math.min(Math.max(parsedEnd, 1975), MAX_YEAR);

  const finalStart = Math.min(safeStart, safeEnd);
  const finalEnd = Math.max(safeStart, safeEnd);

  const handleApplyCustom = () => {
    setStartInput(String(finalStart));
    setEndInput(String(finalEnd));
    onCustomSubmit(finalStart, finalEnd);
  };

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

      {/* Quick All-Eras Shortcut + Custom Range Dial */}
      <div className="text-center pt-1 space-y-3">
        <div className="flex items-center justify-center flex-wrap gap-3">
          <button
            onClick={() => {
              setShowCustom(false);
              onSelectEra(1975, MAX_YEAR);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all cursor-pointer ${
              selectedEra === `1975-${MAX_YEAR}`
                ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#c5a059] font-bold'
                : 'bg-[#12131c] hover:bg-[#181926] border-white/[0.08] text-slate-300 hover:text-white'
            }`}
          >
            All Eras (1975–{MAX_YEAR})
          </button>

          <button
            onClick={() => setShowCustom(!showCustom)}
            className="text-xs font-mono text-slate-400 hover:text-[#c5a059] flex items-center space-x-1.5 cursor-pointer transition-colors px-3 py-1.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{showCustom ? 'Hide custom year dial' : 'Or dial a custom year range (e.g. 1995–2005)'}</span>
          </button>
        </div>

        {showCustom && (
          <div className="mt-2 p-5 rounded-2xl card-luxury max-w-md mx-auto space-y-4 border border-white/[0.08] animate-in fade-in duration-200">
            <h4 className="text-xs font-bold text-white font-headline">Custom Timeline Interval</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-mono text-slate-400">Start Year (1975+)</label>
                <input
                  type="number"
                  min="1975"
                  max={MAX_YEAR}
                  value={startInput}
                  onChange={(e) => setStartInput(e.target.value)}
                  className="w-full bg-[#161722] border border-white/[0.08] rounded-xl px-3 py-2 text-white font-mono text-sm outline-none focus:border-[#c5a059]"
                />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-mono text-slate-400">End Year ({MAX_YEAR})</label>
                <input
                  type="number"
                  min="1975"
                  max={MAX_YEAR}
                  value={endInput}
                  onChange={(e) => setEndInput(e.target.value)}
                  className="w-full bg-[#161722] border border-white/[0.08] rounded-xl px-3 py-2 text-white font-mono text-sm outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            <button
              onClick={handleApplyCustom}
              className="w-full py-2.5 rounded-xl btn-gold text-xs font-bold cursor-pointer"
            >
              Lock {finalStart}–{finalEnd} &amp; Proceed
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-center pt-1">
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
