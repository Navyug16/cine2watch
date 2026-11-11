import React, { useState, useMemo } from 'react';
import {
  Search,
  Layers,
  ArrowRight,
  X,
  Sparkles
} from 'lucide-react';

import { EXPLORE_CATEGORIES, EXPLORE_HUBS } from '../data/exploreHubsData';
import FranchiseUniversePage from './FranchiseUniversePage';

const SPOTLIGHT_IDS = ['oscar-winners', 'marvel', 'christopher-nolan', 'anime-universe'];

export default function ExplorePage({
  selectedSagaId = null,
  onSelectFranchise,
  onWatchTrailer,
  onOpenSimilar,
  isInWatchlist,
  onToggleWatchlist
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const spotlightHubs = useMemo(() => {
    const picked = SPOTLIGHT_IDS.map((id) => EXPLORE_HUBS.find((h) => h.id === id)).filter(Boolean);
    return picked.length > 0 ? picked : EXPLORE_HUBS.slice(0, 4);
  }, []);

  const activeSpotlight = spotlightHubs[spotlightIndex % spotlightHubs.length];

  // Filter hubs by category and search query
  const filteredHubs = useMemo(() => {
    return EXPLORE_HUBS.filter((hub) => {
      if (selectedCategory !== 'all' && hub.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = hub.name.toLowerCase().includes(q) || hub.shortName.toLowerCase().includes(q);
        const matchesTag = hub.tagline.toLowerCase().includes(q);
        const matchesFilms = hub.keyFilms?.some((f) => f.toLowerCase().includes(q));
        return matchesName || matchesTag || matchesFilms;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // If a specific sagaId is active, render its inside page
  if (selectedSagaId) {
    return (
      <FranchiseUniversePage
        key={selectedSagaId}
        sagaId={selectedSagaId}
        onBack={() => onSelectFranchise(null)}
        onWatchTrailer={onWatchTrailer}
        onOpenSimilar={onOpenSimilar}
        isInWatchlist={isInWatchlist}
        onToggleWatchlist={onToggleWatchlist}
      />
    );
  }

  const showSpotlight = selectedCategory === 'all' && !searchQuery.trim() && Boolean(activeSpotlight);

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* 1. Sticky Category Filter Rail & In-Hub Search */}
      <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-[#08090d]/92 backdrop-blur-xl border-y border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-3">
        
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
                    ? 'bg-gradient-to-r from-[#c5a059] to-[#8d6c2a] text-black shadow-md shadow-[#c5a059]/20 scale-102'
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
              aria-label="Clear universe filter"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* 2. Featured Universe Spotlight Hero */}
      {showSpotlight && (
        <section className="relative rounded-3xl overflow-hidden bg-[#0e0f17] border border-white/[0.1] shadow-2xl min-h-[210px] sm:min-h-[240px] flex items-end group">
          <img
            src={activeSpotlight.backdrop_url}
            alt={activeSpotlight.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-black/25" />

          <div className="relative z-10 w-full p-5 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-mono uppercase tracking-wider font-bold">
                <Sparkles className="w-3 h-3" />
                <span>FEATURED UNIVERSE • {activeSpotlight.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-headline text-white tracking-tight flex items-center space-x-2.5">
                <span>{activeSpotlight.icon}</span>
                <span>{activeSpotlight.name}</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                {activeSpotlight.tagline}
              </p>

              {activeSpotlight.keyFilms && (
                <p className="text-[11px] font-mono text-slate-400 truncate">
                  Includes: {activeSpotlight.keyFilms.join(' • ')}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <button
                onClick={() => onSelectFranchise(activeSpotlight.id)}
                className="px-5 py-2.5 rounded-xl btn-gold text-xs font-bold inline-flex items-center space-x-2 shadow-xl cursor-pointer"
              >
                <span>Explore Watch Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Spotlight Switcher Pills */}
              <div className="flex items-center space-x-1.5">
                {spotlightHubs.map((hub, idx) => (
                  <button
                    key={hub.id}
                    onClick={() => setSpotlightIndex(idx)}
                    title={hub.shortName}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      spotlightIndex % spotlightHubs.length === idx
                        ? 'w-7 bg-[#c5a059]'
                        : 'w-2.5 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Brand Hubs Grid (Wide Landscape Banners with Persistent Bottom Titles) */}
      <section className="space-y-4 pt-1">
        
        <div className="flex items-center justify-between px-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-headline text-white tracking-tight flex items-center space-x-2">
              <Layers className="w-5 h-5 text-[#c5a059]" />
              <span>Cinematic Universes &amp; Sagas</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Select any universe to view chronological watch orders, sub-universes, and continuity arcs.
            </p>
          </div>

          <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-[#c5a059] font-bold shrink-0">
            {filteredHubs.length} Universes
          </span>
        </div>

        {filteredHubs.length === 0 ? (
          <div className="card-luxury rounded-3xl p-12 text-center space-y-3">
            <p className="text-base font-bold font-headline text-white">
              No universe matched &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-slate-400">
              Try clearing your filter or browsing all {EXPLORE_HUBS.length} cinematic universes.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
            >
              Show All {EXPLORE_HUBS.length} Universes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredHubs.map((hub) => {
              return (
                <div
                  key={hub.id}
                  onClick={() => onSelectFranchise(hub.id)}
                  className="group relative rounded-2xl overflow-hidden bg-[#11121b] border border-white/[0.08] hover:border-[#c5a059] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(0,0,0,0.95)] cursor-pointer aspect-[16/9]"
                >
                  {/* 1. Base Landscape Artwork */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={hub.backdrop_url}
                      alt={hub.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Persistent Readability Scrim for Touch/Mobile & Resting View */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-[#07080d]/35 to-black/25 group-hover:opacity-0 transition-opacity duration-300" />
                  </div>

                  {/* Resting Always-Visible Bottom Label (Accessible on Mobile & Fast Scanning) */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 sm:p-4 flex items-end justify-between gap-2 group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-[#c5a059] font-bold uppercase tracking-wider block truncate">
                        {hub.badge}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold font-headline text-white truncate drop-shadow">
                        {hub.shortName || hub.name}
                      </h3>
                    </div>
                    <span className="w-8 h-8 rounded-xl bg-black/70 border border-white/[0.15] flex items-center justify-center text-base shrink-0 backdrop-blur-sm">
                      {hub.icon}
                    </span>
                  </div>

                  {/* 2. Full Hover Detail Overlay (Expands with Tagline, Key Films & Enter CTA) */}
                  <div className="absolute inset-0 z-20 p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-t from-[#090a10] via-[#090a10]/88 to-[#090a10]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#c5a059]/20 border border-[#c5a059]/40 text-[10px] font-mono text-[#c5a059] font-black uppercase tracking-wider truncate">
                        {hub.badge}
                      </span>

                      <span className="w-8 h-8 rounded-xl bg-black/60 border border-white/[0.15] flex items-center justify-center text-base shrink-0">
                        {hub.icon}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold font-headline text-white group-hover:text-[#c5a059] transition-colors leading-tight">
                          {hub.name}
                        </h3>
                        <p className="text-[11px] text-slate-300 font-sans mt-0.5 line-clamp-1">
                          {hub.tagline}
                        </p>
                      </div>

                      <div className="flex items-center space-x-1.5 pt-0.5 overflow-hidden">
                        <span className="text-[10px] font-mono text-slate-400 shrink-0">Pillars:</span>
                        <span className="text-[11px] font-mono text-slate-300 truncate">
                          {hub.keyFilms?.join(' • ')}
                        </span>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-white/[0.08] text-xs text-[#c5a059] font-bold">
                        <span className="flex items-center space-x-1">
                          <span>Enter Universe</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Watch Order</span>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>

    </div>
  );
}
