import React from 'react';
import { Sparkles, ArrowLeft, Check, RefreshCw } from 'lucide-react';
import { GENRES } from '../../data/constants';

export default function DualGenreStep({ selectedGenres, onToggleGenre, onProceed, onBack, loading }) {
  const isComplete = selectedGenres.length === 2;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
      <div className="text-center space-y-1">
        <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
          STEP 4 OF 4 • DUAL-VIBE CHEMISTRY DOCK
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-headline text-white tracking-tight">
          Blend Exactly 2 Genres
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          Combining two cinematic flavors (e.g. <em>Sci-Fi + Drama</em> or <em>Crime + Thriller</em>) unlocks maximum recommendation precision.
        </p>
      </div>

      {/* Chemistry Dock Status Bar */}
      <div className="p-4 rounded-2xl bg-[#141520] border border-white/[0.08] flex items-center justify-between max-w-lg mx-auto">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
          <span className="text-xs font-semibold text-white">Vibe Formula:</span>
          {selectedGenres.length === 0 && (
            <span className="text-xs text-slate-500 italic">Select 2 genres below</span>
          )}
          {selectedGenres.map((g, idx) => (
            <span
              key={g}
              className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#c5a059] text-black shadow-sm"
            >
              {g} {idx === 0 && selectedGenres.length === 2 ? '+' : ''}
            </span>
          ))}
        </div>

        <div className="text-right">
          <span className={`text-xs font-mono font-bold ${isComplete ? 'text-[#c5a059]' : 'text-slate-400'}`}>
            {selectedGenres.length} / 2 Selected
          </span>
        </div>
      </div>

      {/* Genre Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {GENRES.map((g) => {
          const isSelected = selectedGenres.includes(g.name);
          return (
            <button
              key={g.name}
              onClick={() => onToggleGenre(g.name)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                isSelected
                  ? 'bg-[#1b1c2b] border-[#c5a059] text-white shadow-[0_0_15px_rgba(197,160,89,0.2)] ring-1 ring-[#c5a059]'
                  : 'bg-[#12131c] hover:bg-[#161724] border-white/[0.06] text-slate-300 hover:border-white/[0.15]'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-lg">{g.icon}</span>
                <span className="text-xs font-semibold">{g.name}</span>
              </div>
              {isSelected && (
                <span className="w-4 h-4 rounded-full bg-[#c5a059] text-black text-[10px] font-black flex items-center justify-center">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Action Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-[#14151f] hover:bg-[#1a1b2a] border border-white/[0.06] text-xs text-slate-400 hover:text-white flex items-center space-x-1.5 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Era</span>
        </button>

        {isComplete && (
          <button
            onClick={() => onProceed(selectedGenres)}
            disabled={loading}
            className="px-6 py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center space-x-2 shadow-xl cursor-pointer hover:scale-105 transition-all"
          >
            {loading ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 fill-current" />
            )}
            <span>{loading ? 'Consulting 330,000 Titles...' : 'Reveal Curated Matches'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
