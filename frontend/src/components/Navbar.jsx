import React from 'react';
import { Search, Bookmark, Compass, Layers, Grid } from 'lucide-react';

export default function Navbar({
  activePage = 'home',
  onNavigate,
  onOpenSearch,
  onReset,
  onOpenWatchlist,
  watchlistCount = 0
}) {
  const navTabs = [
    { id: 'home', label: 'Discover', icon: Compass },
    { id: 'explore', label: 'Universes', icon: Layers },
    { id: 'genres', label: 'Genres', icon: Grid }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#08090d]/90 border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Brand Logo */}
        <button
          onClick={onReset}
          className="flex items-center space-x-2.5 cursor-pointer group shrink-0 text-left"
        >
          <div className="w-9 h-9 rounded-xl p-[1.5px] bg-gradient-to-br from-[#c5a059] via-[#e2c280]/70 to-[#7a5d24] shadow-[0_0_20px_rgba(197,160,89,0.22)] transition-transform duration-300 group-hover:scale-105 shrink-0">
            <div className="w-full h-full rounded-[10px] overflow-hidden bg-white flex items-center justify-center">
              <img src="/logo-mark.png" alt="cine2watch" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <span className="font-bold tracking-tight text-white font-headline text-base sm:text-lg group-hover:text-[#c5a059] transition-colors block leading-none">
              cine2watch
            </span>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider mt-0.5 hidden sm:block">
              Intelligent Cinema Engine
            </p>
          </div>
        </button>

        {/* Center: Universal Command / Search Trigger */}
        <div className="flex-1 max-w-md mx-auto">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3 sm:px-3.5 py-2 rounded-xl bg-[#12131a] hover:bg-[#181a24] border border-white/[0.08] hover:border-[#c5a059]/45 text-slate-400 hover:text-slate-200 text-xs transition-all duration-200 cursor-pointer shadow-inner group"
          >
            <div className="flex items-center space-x-2.5 truncate">
              <Search className="w-3.5 h-3.5 text-[#c5a059] group-hover:scale-110 transition-transform shrink-0" />
              <span className="truncate">Search 330,000+ titles or &quot;Movies like Interstellar&quot;...</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1 ml-2 shrink-0">
              <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/[0.1] text-[10px] font-mono text-slate-300">
                ⌘K
              </kbd>
            </div>
          </button>
        </div>

        {/* Right: Quick Page Navigation & Watchlist Shortlist (Desktop only; mobile uses bottom dock) */}
        <div className="hidden lg:flex items-center space-x-2 shrink-0">
          <nav className="flex items-center p-1 rounded-xl bg-[#111219] border border-white/[0.06]">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activePage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onNavigate?.(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#c5a059]/18 text-[#c5a059] border border-[#c5a059]/35 shadow-sm'
                      : 'text-slate-400 hover:text-white border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          <button
            onClick={onOpenWatchlist}
            aria-label="Open tonight's shortlist"
            title="Tonight's Shortlist"
            className="relative px-3 py-2 rounded-xl bg-[#12131a] hover:bg-[#191b26] border border-white/[0.08] hover:border-[#c5a059]/45 text-slate-200 hover:text-[#c5a059] text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer"
          >
            <Bookmark className={`w-3.5 h-3.5 ${watchlistCount > 0 ? 'text-[#c5a059] fill-[#c5a059]' : 'text-[#c5a059]'}`} />
            <span>Shortlist</span>
            {watchlistCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-[#c5a059] text-black font-mono font-black text-[10px] leading-tight">
                {watchlistCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
