import React, { useState, useEffect, useMemo } from 'react';
import { X, Layers, Play, ExternalLink, Sparkles, Clock, Calendar, ArrowRight, Compass, Search, Filter } from 'lucide-react';

export default function FranchiseModal({ isOpen, onClose, onWatchTrailer }) {
  const [franchises, setFranchises] = useState([]);
  const [activeFranchiseId, setActiveFranchiseId] = useState('marvel');
  const [activeSubUniverse, setActiveSubUniverse] = useState('all');
  const [orderMode, setOrderMode] = useState('chrono'); // 'chrono' or 'release'
  const [mediaFilter, setMediaFilter] = useState('all'); // 'all', 'movie', 'series', 'essential'
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    if (isOpen && franchises.length === 0) {
      fetch('/api/franchises')
        .then(r => r.json())
        .then(res => {
          if (res.success && res.data) {
            setFranchises(res.data);
            if (res.data[0]) setActiveFranchiseId(res.data[0].id);
          }
        })
        .catch(err => console.error('Franchises fetch error:', err));
    }
  }, [isOpen]);

  // Reset sub-universe filter when switching franchise
  const handleSelectFranchise = (id) => {
    setActiveFranchiseId(id);
    setActiveSubUniverse('all');
    setMediaFilter('all');
    setSearchFilter('');
  };

  const activeFranchise = franchises.find(f => f.id === activeFranchiseId) || franchises[0];

  // Available sub-universes for active franchise
  const subUniverses = activeFranchise?.sub_universes || ['All Chapters'];

  // Filtered and sorted timeline
  const processedTimeline = useMemo(() => {
    if (!activeFranchise?.timeline) return [];

    let list = [...activeFranchise.timeline];

    // Filter by sub-universe if selected
    if (activeSubUniverse !== 'all' && !activeSubUniverse.toLowerCase().startsWith('all')) {
      list = list.filter(item => 
        item.sub_universe === activeSubUniverse || 
        (Array.isArray(item.sub_universes) && item.sub_universes.includes(activeSubUniverse))
      );
    }

    // Filter by media mode (Movies Only, Series Only, Animation Only, Essential Only)
    if (mediaFilter === 'movie') {
      list = list.filter(item => item.media_type === 'movie');
    } else if (mediaFilter === 'series') {
      list = list.filter(item => item.media_type === 'series');
    } else if (mediaFilter === 'animation') {
      list = list.filter(item => 
        item.media_type === 'animation' || 
        item.is_animation === true || 
        (Array.isArray(item.sub_universes) && item.sub_universes.some(s => s.toLowerCase().includes('animat'))) ||
        (item.sub_universe && item.sub_universe.toLowerCase().includes('animat'))
      );
    } else if (mediaFilter === 'essential') {
      list = list.filter(item => item.is_essential === true);
    }

    // Filter by live search text
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      list = list.filter(item => 
        item.title?.toLowerCase().includes(q) ||
        item.phase?.toLowerCase().includes(q) ||
        item.desc?.toLowerCase().includes(q) ||
        String(item.year).includes(q)
      );
    }

    // Sort by order mode
    return list.sort((a, b) => {
      if (orderMode === 'release') {
        return (a.release_order || a.year) - (b.release_order || b.year);
      }
      return (a.chrono_order || a.year) - (b.chrono_order || b.year);
    });
  }, [activeFranchise, activeSubUniverse, mediaFilter, searchFilter, orderMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 modal-backdrop-luxury animate-in fade-in duration-200">
      <div className="card-luxury max-w-6xl w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl flex flex-col max-h-[94vh] bg-[#090a0f]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#0e1017]">
          <div className="flex items-center space-x-3">
            <span className="p-2 sm:p-2.5 rounded-xl bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/30">
              <Layers className="w-5 h-5 text-[#c5a059]" />
            </span>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
                  MASTER FRANCHISE TIMELINES
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-[10px] font-mono text-[#c5a059] font-bold">
                  {franchises.length || 12} Cinematic Universes
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-headline text-white mt-0.5">
                Canonical Watch Order & Lore Guides
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#161722] hover:bg-[#202230] text-slate-400 hover:text-white border border-white/[0.08] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Single Responsive Universe Selector Bar */}
        <div className="flex items-center space-x-2 p-3 sm:px-6 bg-[#0c0d14] border-b border-white/[0.06] overflow-x-auto no-scrollbar">
          {franchises.map(f => {
            const isSelected = f.id === activeFranchiseId;
            return (
              <button
                key={f.id}
                onClick={() => handleSelectFranchise(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center space-x-2 cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#c5a059] text-black font-bold shadow-lg shadow-[#c5a059]/20 scale-102'
                    : 'bg-[#141520] hover:bg-[#1a1b2a] text-slate-300 border border-white/[0.04]'
                }`}
              >
                <span className="text-sm">{f.icon}</span>
                <span>{f.name.split(' (')[0].split(' & ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Franchise Body */}
        {activeFranchise && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* Cinematic Hero Spotlight Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#12141f] p-5 sm:p-7 shadow-xl">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                      style={{ 
                        color: activeFranchise.theme_color || '#c5a059',
                        borderColor: `${activeFranchise.theme_color || '#c5a059'}40`,
                        backgroundColor: `${activeFranchise.theme_color || '#c5a059'}15`
                      }}
                    >
                      {activeFranchise.badge}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs text-slate-300 font-mono">
                      {activeFranchise.timeline?.length} Master Chapters
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-headline tracking-tight">
                    {activeFranchise.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeFranchise.tagline}
                  </p>

                  <div className="pt-1 text-xs text-slate-400 italic flex items-center space-x-2">
                    <span className="text-[#c5a059] font-bold">🎬 Why Watch:</span>
                    <span>{activeFranchise.why_watch}</span>
                  </div>
                </div>

                {/* Watch Modes & Sequence Controls */}
                <div className="flex flex-col space-y-2 shrink-0 w-full md:w-auto">
                  {/* Chrono vs Release Order Switch */}
                  <div className="bg-black/50 p-1.5 rounded-2xl border border-white/[0.08] flex items-center space-x-1 shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => setOrderMode('chrono')}
                      className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                        orderMode === 'chrono'
                          ? 'bg-[#c5a059] text-black font-bold shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>⏳ Chronological Story</span>
                    </button>

                    <button
                      onClick={() => setOrderMode('release')}
                      className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                        orderMode === 'release'
                          ? 'bg-[#c5a059] text-black font-bold shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>🎞️ Release Date Order</span>
                    </button>
                  </div>

                  {/* Optional Watch Modes Filters (Section F) */}
                  <div className="bg-black/30 p-1 rounded-xl border border-white/[0.04] flex items-center space-x-1 overflow-x-auto no-scrollbar">
                    <button
                      onClick={() => setMediaFilter('all')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer shrink-0 ${
                        mediaFilter === 'all'
                          ? 'bg-white/15 text-[#c5a059] font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      All Media
                    </button>

                    <button
                      onClick={() => setMediaFilter('movie')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer shrink-0 ${
                        mediaFilter === 'movie'
                          ? 'bg-white/15 text-[#c5a059] font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🎬 Movies Only
                    </button>

                    <button
                      onClick={() => setMediaFilter('series')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer shrink-0 ${
                        mediaFilter === 'series'
                          ? 'bg-white/15 text-[#c5a059] font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      📺 Series Only
                    </button>

                    <button
                      onClick={() => setMediaFilter('animation')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer shrink-0 ${
                        mediaFilter === 'animation'
                          ? 'bg-white/15 text-[#c5a059] font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🎨 Animation
                    </button>

                    <button
                      onClick={() => setMediaFilter('essential')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer shrink-0 ${
                        mediaFilter === 'essential'
                          ? 'bg-white/15 text-[#c5a059] font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ⭐ Essential Only
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Universe Filter Chips & Live Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#0d0e16] p-3 rounded-2xl border border-white/[0.06]">
              {/* Sub-Universe Filter Chips */}
              <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-1">
                {subUniverses.map(sub => {
                  const isAll = sub.toLowerCase().startsWith('all');
                  const isSelected = isAll ? activeSubUniverse === 'all' : activeSubUniverse === sub;
                  return (
                    <button
                      key={sub}
                      onClick={() => setActiveSubUniverse(isAll ? 'all' : sub)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#c5a059] text-black font-bold shadow-md'
                          : 'bg-[#161724] hover:bg-[#202130] text-slate-300 border border-white/[0.04]'
                      }`}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>

              {/* In-Modal Search Bar */}
              <div className="relative sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by title, phase..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full bg-[#161724] border border-white/[0.08] focus:border-[#c5a059]/50 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                {searchFilter && (
                  <button
                    onClick={() => setSearchFilter('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-bold tracking-wider uppercase text-[#c5a059]">
                  {orderMode === 'chrono' ? 'Timeline Storyline Sequence' : 'Theatrical Release Sequence'}
                </span>
                <span>Showing {processedTimeline.length} Chapters</span>
              </div>

              {processedTimeline.length === 0 ? (
                <div className="p-8 text-center bg-[#13141f] rounded-2xl border border-white/[0.06] text-slate-400 text-xs">
                  No chapters match "{searchFilter}". Clear your search filter to see all chapters.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {processedTimeline.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-[#13141f] hover:bg-[#181a28] border border-white/[0.06] hover:border-[#c5a059]/40 transition-all flex items-start gap-3.5 group shadow-lg"
                    >
                      {/* Sequence Badge */}
                      <div className="flex flex-col items-center shrink-0 space-y-1">
                        <span className="w-7 h-7 rounded-xl bg-black/60 text-[#c5a059] font-mono text-xs font-black flex items-center justify-center border border-[#c5a059]/30 shadow-md">
                          {idx + 1}
                        </span>
                      </div>

                      {/* Poster */}
                      <div className="w-16 aspect-[2/3] rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-white/[0.08] shadow-md group-hover:scale-102 transition-transform">
                        {item.poster_url ? (
                          <img src={item.poster_url} alt="" className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-600">
                            <span className="text-xl">🎬</span>
                          </div>
                        )}
                      </div>

                      {/* Metadata & Actions */}
                      <div className="min-w-0 flex-1 flex flex-col justify-between h-full space-y-2">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                            <span className="text-[9px] font-mono uppercase font-bold text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                              {item.phase}
                            </span>
                            {item.media_type && (
                              <span className={`text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded border ${
                                item.media_type === 'movie' 
                                  ? 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20' 
                                  : item.media_type === 'series'
                                  ? 'text-purple-400 bg-purple-400/10 border-purple-400/20'
                                  : 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                              }`}>
                                {item.media_type === 'movie' ? '🎬 Film' : item.media_type === 'series' ? '📺 Series' : '✨ Special'}
                              </span>
                            )}
                            {item.is_essential && (
                              <span className="text-[9px] font-mono font-bold text-amber-300 bg-amber-400/15 px-1.5 py-0.5 rounded border border-amber-400/30">
                                ⭐ Essential
                              </span>
                            )}
                            <span className="text-[10px] text-slate-400 flex items-center space-x-1">
                              <Clock className="w-3 h-3 inline" />
                              <span>{item.runtime}</span>
                            </span>
                          </div>

                          <h4 className="font-bold text-sm text-white group-hover:text-[#c5a059] transition-colors font-headline line-clamp-1">
                            {item.title}
                          </h4>

                          <span className="text-xs text-slate-400 font-mono block">
                            Release Year: {item.year}
                          </span>

                          <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                            {item.desc}
                          </p>
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center space-x-2 pt-1 border-t border-white/[0.04]">
                          <button
                            onClick={() => {
                              onClose();
                              onWatchTrailer({
                                title: item.title,
                                year: item.year,
                                overview: `${item.title} (${item.year}) - Part of ${activeFranchise.name}. ${item.desc}`,
                                yt_search_url: `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + ' ' + item.year + ' official trailer')}`
                              });
                            }}
                            className="px-3 py-1.5 rounded-xl btn-gold text-xs font-bold flex items-center space-x-1.5 cursor-pointer shadow-md hover:scale-102 transition-transform"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Trailer</span>
                          </button>

                          <a
                            href={`https://www.google.com/search?q=${encodeURIComponent('watch ' + item.title + ' ' + item.year + ' streaming online')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white text-xs flex items-center space-x-1 transition-colors"
                          >
                            <span>Where to Stream</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
