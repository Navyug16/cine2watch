import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, Star, Film, Play, ExternalLink, ArrowRight, Loader2 } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectMovie, onWatchTrailer }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultsData, setResultsData] = useState(null);
  const inputRef = useRef(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResultsData(null);
    }
  }, [isOpen]);

  // Debounced Search
  useEffect(() => {
    if (!query.trim()) {
      setResultsData(null);
      setLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}`);
        if (res.ok) {
          const data = await res.json();
          setResultsData(data);
        }
      } catch (e) {
        console.error('Search error:', e);
      } finally {
        setLoading(false);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Movies like Interstellar',
    'Fast & Furious',
    'Transformers',
    'Series like Money Heist',
    'Batman',
    'Culpa Mía'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 modal-backdrop-luxury animate-in fade-in duration-200">
      <div className="card-luxury max-w-2xl w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center space-x-3 bg-[#10111a]">
          <Search className="w-5 h-5 text-[#c5a059] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search 330,000+ titles or "Movies like Interstellar"...'
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base outline-none font-medium"
          />
          {loading && <Loader2 className="w-4 h-4 text-[#c5a059] animate-spin shrink-0" />}
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-white/[0.08] text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg bg-black/40 border border-white/[0.08] text-[10px] font-mono text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Chips (when query is empty) */}
        {!query && (
          <div className="p-5 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Try Natural Language Vibe Queries</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setQuery(prompt)}
                  className="px-3 py-1.5 rounded-xl bg-[#171824] hover:bg-[#202232] border border-white/[0.06] hover:border-[#c5a059]/40 text-xs text-slate-300 hover:text-[#c5a059] transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <span>{prompt}</span>
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                </button>
              ))}
            </div>
            <div className="pt-4 border-t border-white/[0.04] text-[11px] text-slate-500">
              💡 Tip: Prefix any title with <strong className="text-slate-300">"Movies like"</strong> or <strong className="text-slate-300">"Series like"</strong> to uncover similar thematic gems.
            </div>
          </div>
        )}

        {/* Results Container */}
        {resultsData && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            
            {/* Mode Banner: If "Movies like X" was triggered */}
            {resultsData.mode === 'similar_to' && resultsData.reference && (
              <div className="p-3 rounded-2xl bg-[#181a28] border border-[#c5a059]/30 flex items-center space-x-3 mb-3">
                <div className="w-10 h-14 rounded-lg overflow-hidden shrink-0 bg-black/40 border border-white/[0.08]">
                  {resultsData.reference.poster_url ? (
                    <img src={resultsData.reference.poster_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <Film className="w-5 h-5 text-slate-600 m-auto mt-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[9px] font-mono font-bold uppercase bg-[#c5a059] text-black px-1.5 py-0.5 rounded">
                      DNA MATCH REFERENCE
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      ★ {resultsData.reference.rating}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white truncate font-headline mt-0.5">
                    {resultsData.reference.title} ({resultsData.reference.year})
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate">
                    Showing top films sharing themes with {resultsData.reference.title}
                  </p>
                </div>
              </div>
            )}

            {/* Results List */}
            {resultsData.results && resultsData.results.length > 0 ? (
              <div className="space-y-2">
                {resultsData.results.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-[#12131d] hover:bg-[#181926] border border-white/[0.06] hover:border-[#c5a059]/30 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      {/* Poster */}
                      <div className="w-11 sm:w-12 aspect-[2/3] rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-white/[0.08]">
                        {item.poster_url ? (
                          <img src={item.poster_url} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-600">
                            <Film className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <div className="flex items-center space-x-2 flex-wrap">
                          <h4 className="font-bold text-sm text-white truncate group-hover:text-[#c5a059] transition-colors font-headline">
                            {item.title}
                          </h4>
                          <span className="text-[11px] text-slate-400">({item.year})</span>
                          <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-white/[0.06] text-slate-300">
                            {item.media_type === 'tvSeries' ? 'SERIES' : 'FILM'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                          <div className="flex items-center space-x-1 text-[#c5a059]">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="font-bold">{item.rating}</span>
                          </div>
                          <span>•</span>
                          <span className="truncate">{item.genres?.join(', ') || item.original_language?.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={() => {
                          onClose();
                          onWatchTrailer(item);
                        }}
                        className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#1e202f] hover:bg-[#c5a059] text-slate-300 hover:text-black text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer"
                        title="Watch Trailer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span className="hidden sm:inline">Trailer</span>
                      </button>

                      <a
                        href={item.watch_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                        title="Where to watch"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center space-y-2">
                <span className="text-2xl">🔍</span>
                <p className="text-sm font-semibold text-white">No titles found for "{query}"</p>
                <p className="text-xs text-slate-400">Try searching a different title, director name, or genre vibe.</p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
