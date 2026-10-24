import React from 'react';
import { Search, Layers, PlaySquare } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenFranchises, onReset }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#08090d]/85 border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo: cine2watch */}
        <div 
          onClick={onReset} 
          className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c5a059] to-[#8d6c2a] flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-transform duration-300 group-hover:scale-105">
            <PlaySquare className="w-5 h-5 text-black fill-black" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold tracking-tight text-white font-headline text-lg group-hover:text-[#c5a059] transition-colors">
                cine2watch
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider -mt-0.5 hidden sm:block">
              Intelligent Cinema Engine
            </p>
          </div>
        </div>

        {/* Center: Universal Command / Search Trigger */}
        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#12131a] hover:bg-[#181a24] border border-white/[0.08] hover:border-[#c5a059]/40 text-slate-400 hover:text-slate-200 text-xs transition-all duration-200 cursor-pointer shadow-inner group"
          >
            <div className="flex items-center space-x-2.5 truncate">
              <Search className="w-3.5 h-3.5 text-[#c5a059] group-hover:scale-110 transition-transform shrink-0" />
              <span className="truncate">Search 330,000+ titles or "Movies like Interstellar"...</span>
            </div>
            <div className="flex items-center space-x-1 ml-2 shrink-0">
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/[0.1] text-[10px] font-mono text-slate-300">
                ⌘K
              </kbd>
            </div>
          </button>
        </div>

        {/* Right Action Controls: Franchises & Mobile Search (Quick Shuffle removed from header as requested) */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          
          {/* Mobile Search Icon */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2.5 rounded-xl bg-[#12131a] border border-white/[0.08] text-slate-300 hover:text-white cursor-pointer"
            title="Search catalog"
          >
            <Search className="w-4 h-4 text-[#c5a059]" />
          </button>

          {/* Cinematic Universes & Franchises Button */}
          <button
            onClick={onOpenFranchises}
            className="px-3.5 py-2 rounded-xl bg-[#13141d] hover:bg-[#1c1e2b] border border-white/[0.08] hover:border-[#c5a059]/40 text-xs font-bold text-slate-200 flex items-center space-x-2 cursor-pointer transition-all duration-200 shadow-md group"
            title="Franchises & Cinematic Universes"
          >
            <Layers className="w-4 h-4 text-[#c5a059] group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Franchises & Universes</span>
            <span className="sm:hidden">Franchises</span>
          </button>
        </div>

      </div>
    </header>
  );
}
