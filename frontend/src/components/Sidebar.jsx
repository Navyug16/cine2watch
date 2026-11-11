import React from 'react';
import { Home, Layers, Grid, Bookmark } from 'lucide-react';

export default function Sidebar({
  activePage = 'home',
  onNavigate,
  onOpenWatchlist,
  watchlistCount = 0
}) {
  const navItems = [
    {
      id: 'home',
      label: 'Discover',
      icon: Home
    },
    {
      id: 'explore',
      label: 'Universes',
      icon: Layers
    },
    {
      id: 'genres',
      label: 'Genres',
      icon: Grid
    }
  ];

  return (
    /* Mobile & Tablet Bottom Dock (Desktop uses Top Navbar so navigation never duplicates) */
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#07080c]/95 border-t border-white/[0.08] backdrop-blur-xl z-50 flex items-center justify-around px-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activePage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center space-y-0.5 ${
              isActive
                ? 'bg-[#181926] text-[#c5a059] border border-[#c5a059]/35'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-[10px] font-semibold tracking-tight">{item.label}</span>
          </button>
        );
      })}

      {onOpenWatchlist && (
        <button
          onClick={onOpenWatchlist}
          className="relative px-3.5 py-1.5 rounded-xl text-slate-400 hover:text-white cursor-pointer flex flex-col items-center justify-center space-y-0.5"
        >
          <Bookmark className={`w-4 h-4 ${watchlistCount > 0 ? 'text-[#c5a059]' : ''}`} />
          <span className="text-[10px] font-semibold tracking-tight">Saved</span>
          {watchlistCount > 0 && (
            <span className="absolute top-0.5 right-1.5 min-w-[15px] h-[15px] px-1 rounded-full bg-[#c5a059] text-black text-[9px] font-mono font-black flex items-center justify-center">
              {watchlistCount}
            </span>
          )}
        </button>
      )}
    </nav>
  );
}
