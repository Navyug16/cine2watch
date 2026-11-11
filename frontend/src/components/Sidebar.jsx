import React from 'react';
import { Home, Layers, Grid, Search, PlaySquare } from 'lucide-react';

export default function Sidebar({ 
  activePage = 'home', 
  onNavigate, 
  onOpenSearch
}) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home
    },
    {
      id: 'explore',
      label: 'Explore',
      icon: Layers
    },
    {
      id: 'genres',
      label: 'Genres',
      icon: Grid
    }
  ];

  return (
    <>
      {/* Desktop Left Icon Rail */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-16 bg-[#07080c]/95 border-r border-white/[0.06] backdrop-blur-xl z-50 flex-col items-center justify-between py-5 transition-all duration-300">
        
        {/* Top: Logo Icon */}
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={() => onNavigate('home')}
            className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-[#c5a059]/60 flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.28)] hover:scale-105 transition-all duration-200 cursor-pointer group"
            title="cine2watch Home"
          >
            <img src="/logo-mark.png" alt="cine2watch" className="w-full h-full object-cover" />
          </button>

          {/* Navigation Icon Group (Only Icon Form) */}
          <nav className="flex flex-col items-center space-y-3 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  title={item.label}
                  aria-label={item.label}
                  className={`relative p-3 rounded-xl transition-all duration-200 cursor-pointer group flex items-center justify-center ${
                    isActive
                      ? 'bg-[#181926] text-[#c5a059] border border-[#c5a059]/40 shadow-md shadow-[#c5a059]/15 scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-[#c5a059]' : ''}`} />
                  
                  {/* Subtle active indicator dot */}
                  {isActive && (
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r bg-[#c5a059]" />
                  )}

                  {/* Clean hover tooltip */}
                  <span className="absolute left-16 px-2.5 py-1 rounded-lg bg-[#141520] border border-white/[0.1] text-xs font-semibold text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions: Quick Search Icon */}
        <div className="flex flex-col items-center space-y-3">
          <button
            onClick={onOpenSearch}
            title="Search Catalog (⌘K)"
            aria-label="Search"
            className="p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer group relative flex items-center justify-center"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="absolute left-16 px-2.5 py-1 rounded-lg bg-[#141520] border border-white/[0.1] text-xs font-semibold text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
              Search (⌘K)
            </span>
          </button>
        </div>

      </aside>

      {/* Mobile Bottom Dock (Icon Form Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#07080c]/95 border-t border-white/[0.08] backdrop-blur-xl z-50 flex items-center justify-around px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              title={item.label}
              className={`p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                isActive
                  ? 'bg-[#181926] text-[#c5a059] border border-[#c5a059]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}

        {/* Mobile Search Icon */}
        <button
          onClick={onOpenSearch}
          title="Search"
          className="p-2.5 rounded-xl text-slate-400 hover:text-white cursor-pointer"
        >
          <Search className="w-5 h-5" />
        </button>
      </nav>
    </>
  );
}
