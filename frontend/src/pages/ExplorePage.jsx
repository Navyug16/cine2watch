import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Layers, 
  ArrowRight, 
  X
} from 'lucide-react';

import { EXPLORE_CATEGORIES, EXPLORE_HUBS } from '../data/exploreHubsData';
import FranchiseUniversePage from './FranchiseUniversePage';

export default function ExplorePage({ 
  selectedSagaId = null,
  onSelectFranchise,
  onWatchTrailer, 
  onOpenSimilar 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter hubs by category and search query (Always call hooks at top level)
  const filteredHubs = useMemo(() => {
    return EXPLORE_HUBS.filter((hub) => {
      // Category match
      if (selectedCategory !== 'all' && hub.category !== selectedCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = hub.name.toLowerCase().includes(q) || hub.shortName.toLowerCase().includes(q);
        const matchesTag = hub.tagline.toLowerCase().includes(q);
        const matchesFilms = hub.keyFilms?.some(f => f.toLowerCase().includes(q));
        return matchesName || matchesTag || matchesFilms;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // If a specific sagaId is active (e.g. /explore/marvel, /explore/christopher-nolan), render its inside page!
  if (selectedSagaId) {
    return (
      <FranchiseUniversePage
        key={selectedSagaId}
        sagaId={selectedSagaId}
        onBack={() => onSelectFranchise(null)}
        onWatchTrailer={onWatchTrailer}
        onOpenSimilar={onOpenSimilar}
      />
    );
  }

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* 1. Android TV Sticky Category Filter Rail & In-Hub Search */}
      <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-[#08090d]/90 backdrop-blur-xl border-y border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-1">
          {EXPLORE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#c5a059] to-[#8d6c2a] text-black shadow-md shadow-[#c5a059]/20 scale-105'
                    : 'bg-[#12131c] hover:bg-[#1a1b26] text-slate-300 border border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live Filter Search Input */}
        <div className="relative shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search universe (e.g. Nolan, Marvel)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 pl-8 pr-7 py-1.5 rounded-2xl bg-black/60 border border-white/[0.08] focus:border-[#c5a059] text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

      </div>

      {/* 2. Android TV Brand Hubs Grid (Wide Landscape Banners) */}
      <section className="space-y-4 pt-2">
        
        <div className="flex items-center justify-between px-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-headline text-white tracking-tight flex items-center space-x-2">
              <Layers className="w-5 h-5 text-[#c5a059]" />
              <span>Cinematic Universes & Sagas</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Select any universe to view chronological watch orders, sub-universes, and continuity arcs.
            </p>
          </div>

          <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-[#c5a059] font-bold">
            {filteredHubs.length} Universes
          </span>
        </div>

        {/* The 16:9 Landscape Hub Banners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredHubs.map((hub) => {
            return (
              <div
                key={hub.id}
                onClick={() => onSelectFranchise(hub.id)}
                className="group relative rounded-2xl overflow-hidden bg-[#11121b] border border-white/[0.08] hover:border-[#c5a059] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_20px_45px_rgba(0,0,0,0.95)] cursor-pointer aspect-[16/9]"
              >
                {/* 1. Base Landscape Artwork (Always visible & clean) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={hub.backdrop_url}
                    alt={hub.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle resting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* 2. Full Hover Detail Overlay (Reveals Name, Badge, Tagline & Details on Cursor Hover) */}
                <div className="absolute inset-0 z-10 p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-t from-[#090a10] via-[#090a10]/85 to-[#090a10]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#c5a059]/20 border border-[#c5a059]/40 text-[10px] font-mono text-[#c5a059] font-black uppercase tracking-wider shadow-sm">
                      {hub.badge}
                    </span>

                    <span className="w-8 h-8 rounded-xl bg-black/60 border border-white/[0.15] flex items-center justify-center text-base shadow-sm">
                      {hub.icon}
                    </span>
                  </div>

                  {/* Bottom Details: Name, Tagline, Key Pillars & Enter Button */}
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-headline text-white group-hover:text-[#c5a059] transition-colors leading-tight">
                        {hub.name}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-sans mt-0.5 line-clamp-1">
                        {hub.tagline}
                      </p>
                    </div>

                    {/* Key Films / Chapters Preview */}
                    <div className="flex items-center space-x-1.5 pt-0.5 overflow-hidden">
                      <span className="text-[9px] font-mono text-slate-400 shrink-0">Pillars:</span>
                      <span className="text-[10px] font-mono text-slate-300 truncate">
                        {hub.keyFilms?.join(' • ')}
                      </span>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-2 flex items-center justify-between border-t border-white/[0.08] text-xs text-[#c5a059] font-bold">
                      <span className="flex items-center space-x-1">
                        <span>Enter Universe</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Android TV Hub</span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}
