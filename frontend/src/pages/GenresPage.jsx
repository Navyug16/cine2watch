import React, { useState, useRef } from 'react';
import { 
  Play, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Info, 
  Film, 
  Tv, 
  ExternalLink,
  Search,
  X
} from 'lucide-react';

import genreData from '../data/genreTopTitles.json';

// Genre Display Configuration with Icons & Thematic Colors
const GENRE_METADATA = [
  { key: 'Action', label: 'Action', icon: '💥', tag: 'High-Octane Adrenaline' },
  { key: 'Adventure', label: 'Adventure', icon: '🗺️', tag: 'Epic Quests & Discovery' },
  { key: 'Animation', label: 'Animation', icon: '🎨', tag: 'Visual Masterpieces' },
  { key: 'Comedy', label: 'Comedy', icon: '😂', tag: 'Pure Laughs & Satire' },
  { key: 'Crime', label: 'Crime', icon: '🕵️', tag: 'Noir, Mafia & Heists' },
  { key: 'Drama', label: 'Drama', icon: '🎭', tag: 'Deep Human Emotion' },
  { key: 'Family', label: 'Family', icon: '👨‍👩‍👧', tag: 'Heartwarming For All Ages' },
  { key: 'Fantasy', label: 'Fantasy', icon: '🧙', tag: 'Magical Worlds & Lore' },
  { key: 'History', label: 'History', icon: '🏛️', tag: 'Epochs, Wars & Empires' },
  { key: 'Horror', label: 'Horror', icon: '👻', tag: 'Chills & Supernatural' },
  { key: 'Music', label: 'Music', icon: '🎵', tag: 'Rhythm, Biopics & Soul' },
  { key: 'Mystery', label: 'Mystery', icon: '🔍', tag: 'Puzzles & Whodunits' },
  { key: 'Romance', label: 'Romance', icon: '❤️', tag: 'Passion & Heartbreak' },
  { key: 'Sci-Fi', label: 'Sci-Fi', icon: '🚀', tag: 'Cosmos & Speculative Future' },
  { key: 'Thriller', label: 'Thriller', icon: '⚡', tag: 'Suspense & Edge-of-Seat' },
  { key: 'War', label: 'War', icon: '⚔️', tag: 'Valor & Battlefield Sagas' }
];

export default function GenresPage({ 
  onWatchTrailer, 
  onOpenSimilar 
}) {
  const [selectedFormat, setSelectedFormat] = useState('all'); // 'all' | 'movie' | 'tvSeries'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGenrePill, setActiveGenrePill] = useState('Action');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // References for shelf horizontal scrolling
  const shelfRefs = useRef({});

  const scrollShelf = (genreKey, direction) => {
    const el = shelfRefs.current[genreKey];
    if (el) {
      const scrollAmount = direction === 'left' ? -480 : 480;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToGenre = (genreKey) => {
    setActiveGenrePill(genreKey);
    const target = document.getElementById(`genre-shelf-${genreKey}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter items by format & query
  const getFilteredGenreItems = (items) => {
    if (!items) return [];
    return items.filter(item => {
      // Format filter
      if (selectedFormat === 'movie' && item.media_type !== 'movie') return false;
      if (selectedFormat === 'tvSeries' && item.media_type !== 'tvSeries') return false;
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDirector = item.director?.toLowerCase().includes(q);
        return matchesTitle || matchesDirector;
      }
      return true;
    });
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300 pb-16">
      
      {/* 1. Android TV Style Spotlight Header */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#12141f] via-[#0d0e16] to-[#07080c] border border-white/[0.08] p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#c5a059] text-[11px] font-mono uppercase tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Android Cinema Shelves • Top 15 Masterpieces</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline text-white tracking-tight">
              Curated Masterworks By Genre
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Direct access to the greatest 15 movies & prestige series across every cinematic category. Zero decision fatigue.
            </p>
          </div>

          {/* Quick Format Toggle & Instant Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Format Toggle */}
            <div className="flex items-center p-1 rounded-2xl bg-black/60 border border-white/[0.08]">
              <button
                onClick={() => setSelectedFormat('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFormat === 'all'
                    ? 'bg-[#c5a059] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedFormat('movie')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFormat === 'movie'
                    ? 'bg-[#c5a059] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Film className="w-3 h-3" />
                <span>Films</span>
              </button>
              <button
                onClick={() => setSelectedFormat('tvSeries')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFormat === 'tvSeries'
                    ? 'bg-[#c5a059] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Tv className="w-3 h-3" />
                <span>Series</span>
              </button>
            </div>

            {/* In-Page Quick Filter */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Filter titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-44 pl-8 pr-7 py-1.5 rounded-2xl bg-black/60 border border-white/[0.08] focus:border-[#c5a059] text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-sans"
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
        </div>
      </section>

      {/* 2. Android TV Sticky Category Pills Rail */}
      <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-[#08090d]/90 backdrop-blur-xl border-y border-white/[0.06]">
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-1">
          {GENRE_METADATA.map((genre) => {
            const isActive = activeGenrePill === genre.key;
            return (
              <button
                key={genre.key}
                onClick={() => scrollToGenre(genre.key)}
                className={`shrink-0 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#c5a059] to-[#8d6c2a] text-black shadow-md shadow-[#c5a059]/20 scale-105'
                    : 'bg-[#12131c] hover:bg-[#1a1b26] text-slate-300 border border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <span>{genre.icon}</span>
                <span>{genre.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Android TV Horizontal Shelves (One Per Genre) */}
      <div className="space-y-10">
        {GENRE_METADATA.map((genre) => {
          const rawItems = genreData[genre.key] || [];
          const filteredItems = getFilteredGenreItems(rawItems);

          if (filteredItems.length === 0) return null;

          return (
            <section
              key={genre.key}
              id={`genre-shelf-${genre.key}`}
              className="space-y-3 pt-2 scroll-mt-32"
            >
              {/* Shelf Header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl sm:text-3xl p-1.5 rounded-2xl bg-[#141520] border border-white/[0.06] shadow-sm">
                    {genre.icon}
                  </span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-lg sm:text-xl font-bold font-headline text-white tracking-tight">
                        {genre.label}
                      </h2>
                      <span className="px-2 py-0.5 rounded-md bg-white/[0.06] text-[10px] font-mono text-[#c5a059] font-bold">
                        Top {filteredItems.length}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                      {genre.tag}
                    </p>
                  </div>
                </div>

                {/* Android TV Shelf Scroll Chevrons */}
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => scrollShelf(genre.key, 'left')}
                    aria-label={`Scroll ${genre.label} left`}
                    className="w-8 h-8 rounded-full bg-[#12131c] hover:bg-[#1c1e2b] border border-white/[0.08] hover:border-[#c5a059]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollShelf(genre.key, 'right')}
                    aria-label={`Scroll ${genre.label} right`}
                    className="w-8 h-8 rounded-full bg-[#12131c] hover:bg-[#1c1e2b] border border-white/[0.08] hover:border-[#c5a059]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Shelf Content (Horizontal Scrolling Rail) */}
              <div
                ref={(el) => (shelfRefs.current[genre.key] = el)}
                className="flex space-x-4 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth snap-x snap-mandatory"
              >
                {filteredItems.map((movie, idx) => {
                  const isSeries = movie.media_type === 'tvSeries';
                  return (
                    <div
                      key={movie.id || `${genre.key}-${idx}`}
                      onClick={() => setSelectedMovie(movie)}
                      className="snap-start shrink-0 w-36 sm:w-44 group cursor-pointer"
                    >
                      {/* Poster Container */}
                      <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-[#12131c] border border-white/[0.08] group-hover:border-[#c5a059] shadow-md group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:-translate-y-1">
                        
                        {movie.poster_url ? (
                          <img
                            src={movie.poster_url}
                            alt={movie.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#181a26] to-[#0c0d14]">
                            <Film className="w-8 h-8 text-[#c5a059]/40 mb-2" />
                            <span className="text-xs font-bold text-white line-clamp-2">{movie.title}</span>
                          </div>
                        )}

                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                          {/* Media Type Badge */}
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-black uppercase tracking-wider backdrop-blur-md shadow-sm ${
                            isSeries ? 'bg-purple-600/90 text-white' : 'bg-black/75 text-slate-200'
                          }`}>
                            {isSeries ? 'SERIES' : 'FILM'}
                          </span>

                          {/* IMDb Rating Badge */}
                          {movie.rating && (
                            <span className="flex items-center space-x-0.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[#c5a059] text-[10px] font-mono font-bold shadow-sm">
                              <Star className="w-2.5 h-2.5 fill-[#c5a059] text-[#c5a059]" />
                              <span>{movie.rating}</span>
                            </span>
                          )}
                        </div>

                        {/* Rank Badge (1-15) */}
                        <div className="absolute bottom-2 left-2 w-6 h-6 rounded-lg bg-black/80 backdrop-blur-md border border-white/[0.1] text-white text-[11px] font-mono font-black flex items-center justify-center shadow-lg">
                          #{idx + 1}
                        </div>

                        {/* Hover Overlay with Action Buttons */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 space-y-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onWatchTrailer) onWatchTrailer(movie);
                            }}
                            className="w-full py-1.5 rounded-xl bg-[#c5a059] hover:bg-[#e0bb70] text-black font-bold text-xs flex items-center justify-center space-x-1.5 shadow-lg transition-transform active:scale-95"
                          >
                            <Play className="w-3.5 h-3.5 fill-black" />
                            <span>Trailer</span>
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMovie(movie);
                            }}
                            className="w-full py-1 rounded-xl bg-white/[0.1] hover:bg-white/[0.2] text-white font-medium text-[11px] flex items-center justify-center space-x-1"
                          >
                            <Info className="w-3 h-3" />
                            <span>Details</span>
                          </button>
                        </div>

                      </div>

                      {/* Card Info Below Poster */}
                      <div className="mt-2 space-y-0.5">
                        <h3 className="text-xs font-bold text-white font-headline truncate group-hover:text-[#c5a059] transition-colors" title={movie.title}>
                          {movie.title}
                        </h3>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                          <span>{movie.year}</span>
                          {movie.runtime_minutes && (
                            <span>{movie.runtime_minutes}m</span>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. Android TV Movie Detail Modal */}
      {selectedMovie && (
        <div 
          onClick={() => setSelectedMovie(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-3xl bg-[#0f1019] border border-white/[0.1] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Poster Left */}
              <div className="sm:w-1/3 aspect-[2/3] sm:aspect-auto bg-black relative shrink-0">
                {selectedMovie.poster_url && (
                  <img
                    src={selectedMovie.poster_url}
                    alt={selectedMovie.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Info Right */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#c5a059] mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 uppercase font-bold">
                      {selectedMovie.media_type === 'tvSeries' ? 'PRESTIGE SERIES' : 'FEATURE FILM'}
                    </span>
                    <span>•</span>
                    <span>{selectedMovie.year}</span>
                    {selectedMovie.runtime_minutes && (
                      <>
                        <span>•</span>
                        <span>{selectedMovie.runtime_minutes} min</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold font-headline text-white">
                    {selectedMovie.title}
                  </h2>

                  {/* Rating & Director */}
                  <div className="flex items-center space-x-3 mt-2 text-xs text-slate-300">
                    <span className="flex items-center space-x-1 font-mono font-bold text-[#c5a059]">
                      <Star className="w-3.5 h-3.5 fill-[#c5a059]" />
                      <span>{selectedMovie.rating} / 10</span>
                      <span className="text-slate-500">({selectedMovie.votes} votes)</span>
                    </span>
                    {selectedMovie.director && (
                      <span className="text-slate-400">Dir. {selectedMovie.director}</span>
                    )}
                  </div>

                  {/* Genres */}
                  {selectedMovie.genres && selectedMovie.genres.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {selectedMovie.genres.map(g => (
                        <span key={g} className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-slate-300">
                          {g}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Synopsis */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-4 line-clamp-4">
                    {selectedMovie.overview}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-white/[0.06]">
                  <button
                    onClick={() => {
                      if (onWatchTrailer) onWatchTrailer(selectedMovie);
                      setSelectedMovie(null);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl btn-gold text-black font-bold text-xs flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-black" />
                    <span>Watch Trailer</span>
                  </button>

                  {onOpenSimilar && (
                    <button
                      onClick={() => {
                        onOpenSimilar(selectedMovie);
                        setSelectedMovie(null);
                      }}
                      className="py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-semibold text-xs flex items-center space-x-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>Similar</span>
                    </button>
                  )}

                  <a
                    href={selectedMovie.watch_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Where to Watch"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
