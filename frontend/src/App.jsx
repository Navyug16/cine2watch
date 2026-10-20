import React, { useState, useEffect } from 'react';
import { 
  Film, 
  Tv, 
  Star, 
  Play, 
  RotateCcw, 
  Sparkles, 
  X, 
  Dices, 
  History, 
  SlidersHorizontal,
  ExternalLink,
  Share2,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

// 100% HTTP 200 VERIFIED POSTERS DIRECTLY FROM TMDB FOR EACH INDUSTRY
const INDUSTRIES = [
  { 
    id: 'hollywood', 
    name: 'Hollywood', 
    subtitle: 'Interstellar • Inception • Avengers', 
    icon: '🎬',
    tag: 'Global Blockbusters',
    posters: [
      { title: 'Interstellar', url: 'https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg' },
      { title: 'Inception', url: 'https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg' },
      { title: 'The Avengers', url: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg' }
    ]
  },
  { 
    id: 'bollywood', 
    name: 'Bollywood', 
    subtitle: 'DDLJ • 3 Idiots • My Name is Khan', 
    icon: '🇮🇳',
    tag: 'Heartfelt Epics',
    posters: [
      { title: 'Dilwale Dulhania Le Jayenge', url: 'https://image.tmdb.org/t/p/w500/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg' },
      { title: '3 Idiots', url: 'https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg' },
      { title: 'My Name Is Khan', url: 'https://image.tmdb.org/t/p/w500/5Y36lCiNyyV71mjq6LavgiggbhT.jpg' }
    ]
  },
  { 
    id: 'south_indian', 
    name: 'South Indian', 
    subtitle: 'RRR • Bāhubali 1 & 2', 
    icon: '🦁',
    tag: 'Grand Scale Vision',
    posters: [
      { title: 'RRR', url: 'https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg' },
      { title: 'Bāhubali: The Beginning', url: 'https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg' },
      { title: 'Bāhubali 2', url: 'https://image.tmdb.org/t/p/w500/21sC2assImQIYCEDA84Qh9d1RsK.jpg' }
    ]
  },
  { 
    id: 'anime', 
    name: 'Anime', 
    subtitle: 'Spirited Away • Your Name • Howl\'s', 
    icon: '⛩️',
    tag: 'Studio Ghibli & Modern Art',
    posters: [
      { title: 'Spirited Away', url: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { title: 'Your Name.', url: 'https://image.tmdb.org/t/p/w500/vfJFJPepRKapMd5G2ro7klIRysq.jpg' },
      { title: 'Howl\'s Moving Castle', url: 'https://image.tmdb.org/t/p/w500/13kOl2v0nD2OLbVSHnHk8GUFEhO.jpg' }
    ]
  },
  { 
    id: 'korean', 
    name: 'Korean Cinema', 
    subtitle: 'Parasite • Snowpiercer • Oldboy', 
    icon: '🇰🇷',
    tag: 'Thrilling & Masterclass',
    posters: [
      { title: 'Parasite', url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
      { title: 'Snowpiercer', url: 'https://image.tmdb.org/t/p/w500/kw6YQudA0TMcNmGUGy5XIw7zbnV.jpg' },
      { title: 'Oldboy', url: 'https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg' }
    ]
  },
  { 
    id: 'japanese_live', 
    name: 'Japanese Cinema', 
    subtitle: 'Battle Royale • Godzilla • Shoplifters', 
    icon: '🌸',
    tag: 'Atmospheric & Deep',
    posters: [
      { title: 'Battle Royale', url: 'https://image.tmdb.org/t/p/w500/aLGKAQKgzWpJ6egyWzzC11jXBRJ.jpg' },
      { title: 'Godzilla Minus One', url: 'https://image.tmdb.org/t/p/w500/2E2WTX0TJEflAged6kzErwqX1kt.jpg' },
      { title: 'Shoplifters', url: 'https://image.tmdb.org/t/p/w500/4nfRUOv3LX5zLn98WS1WqVBk9E9.jpg' }
    ]
  },
  { 
    id: 'european', 
    name: 'European Cinema', 
    subtitle: 'The Intouchables • Léon • Life Is Beautiful', 
    icon: '🏰',
    tag: 'Cannes & Criterion',
    posters: [
      { title: 'The Intouchables', url: 'https://image.tmdb.org/t/p/w500/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg' },
      { title: 'Léon: The Professional', url: 'https://image.tmdb.org/t/p/w500/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg' },
      { title: 'Life Is Beautiful', url: 'https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg' }
    ]
  }
];

const FORMATS = [
  { 
    id: 'movie', 
    title: 'Feature Film', 
    subtitle: 'Single-sitting cinematic storytelling (90–180 min)',
    badge: 'CINEMATIC DURATION',
    icon: '🎬',
    description: 'Immersive stories with definitive conclusions for tonight\'s viewing.'
  },
  { 
    id: 'tvSeries', 
    title: 'Prestige Web Series', 
    subtitle: 'Multi-episode binge-worthy arcs & seasons',
    badge: 'DEEP LORE & WORLDBUILDING',
    icon: '📺',
    description: 'Character-driven epics built for late-night binge marathons.'
  }
];

const ERAS = [
  { 
    id: 'modern_peak', 
    name: 'Modern Peak Cinema', 
    range: '2010–2020', 
    start: 2010, 
    end: 2020,
    desc: 'Golden era of modern visual spectacle, gritty reboots & peak storytelling.',
    icon: '⚡'
  },
  { 
    id: 'contemporary', 
    name: 'Contemporary Era', 
    range: '2021–2026', 
    start: 2021, 
    end: 2026,
    desc: 'Current releases, bleeding-edge CGI & contemporary social dramas.',
    icon: '✨'
  },
  { 
    id: 'noughties', 
    name: 'The 2000s Renaissance', 
    range: '2000–2009', 
    start: 2000, 
    end: 2009,
    desc: 'Mind-bending cinema, gritty classics & iconic trilogy premieres.',
    icon: '💿'
  },
  { 
    id: 'golden_age', 
    name: 'Golden Age Classics', 
    range: '1975–1999', 
    start: 1975, 
    end: 1999,
    desc: 'Timeless masterpieces, practical effects & nostalgic storytelling.',
    icon: '🎞️'
  }
];

const GENRES = [
  { name: 'Action', icon: '💥' },
  { name: 'Adventure', icon: '🗺️' },
  { name: 'Animation', icon: '🎨' },
  { name: 'Comedy', icon: '😂' },
  { name: 'Crime', icon: '🕵️' },
  { name: 'Drama', icon: '🎭' },
  { name: 'Family', icon: '👨‍👩‍👧' },
  { name: 'Fantasy', icon: '🧙' },
  { name: 'History', icon: '🏛️' },
  { name: 'Horror', icon: '👻' },
  { name: 'Music', icon: '🎵' },
  { name: 'Mystery', icon: '🔍' },
  { name: 'Romance', icon: '❤️' },
  { name: 'Sci-Fi', icon: '🚀' },
  { name: 'Thriller', icon: '⚡' },
  { name: 'War', icon: '⚔️' }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // User Filter State
  const [industry, setIndustry] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [selectedEra, setSelectedEra] = useState(null);
  const [customStart, setCustomStart] = useState(2010);
  const [customEnd, setCustomEnd] = useState(2020);
  const [showCustomYears, setShowCustomYears] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  // DYNAMIC RANDOM SUGGESTION MODAL STATE
  const [isRandomOpen, setIsRandomOpen] = useState(false);
  const [randomData, setRandomData] = useState(null);
  const [randomLoading, setRandomLoading] = useState(false);
  const [randomError, setRandomError] = useState(null);

  // Trailer Preview Modal
  const [activeTrailerItem, setActiveTrailerItem] = useState(null);

  // Recommendations State
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [historyExcludeIds, setHistoryExcludeIds] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsRandomOpen(false);
        setActiveTrailerItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch dynamic random suggestion from backend
  const fetchRandomSuggestion = async () => {
    setRandomLoading(true);
    setRandomError(null);
    try {
      const res = await fetch(`${API_BASE}/api/random-suggestion?_t=${Date.now()}`);
      if (!res.ok) {
        throw new Error('Failed to fetch random suggestion');
      }
      const data = await res.json();
      setRandomData(data);
    } catch (err) {
      console.error(err);
      setRandomError(err.message);
    } finally {
      setRandomLoading(false);
    }
  };

  const handleOpenRandomSuggestion = () => {
    setIsRandomOpen(true);
    fetchRandomSuggestion();
  };

  // Auto-advance helper: Question 1 (Industry)
  const handleSelectIndustry = (indId) => {
    setIndustry(indId);
    setTimeout(() => {
      setCurrentQuestion(2);
    }, 220);
  };

  // Auto-advance helper: Question 2 (Format)
  const handleSelectFormat = (formatId) => {
    setMediaType(formatId);
    setTimeout(() => {
      setCurrentQuestion(3);
    }, 220);
  };

  // Auto-advance helper: Question 3 (Era)
  const handleSelectEra = (start, end) => {
    setSelectedEra(`${start}-${end}`);
    setCustomStart(start);
    setCustomEnd(end);
    setTimeout(() => {
      setCurrentQuestion(4);
    }, 220);
  };

  // Genre selection handler (requires exactly 2 genres)
  const handleToggleGenre = (genreName) => {
    let updated;
    if (selectedGenres.includes(genreName)) {
      updated = selectedGenres.filter((g) => g !== genreName);
    } else {
      if (selectedGenres.length >= 2) {
        updated = [selectedGenres[1], genreName];
      } else {
        updated = [...selectedGenres, genreName];
      }
    }
    setSelectedGenres(updated);

    // Auto-advance when exactly 2 genres are selected
    if (updated.length === 2) {
      setTimeout(() => {
        setCurrentQuestion(5);
        fetchRecommendations(updated, false);
      }, 350);
    }
  };

  // Main Recommendation Fetcher
  const fetchRecommendations = async (genresToFetch = selectedGenres, ignoreYear = false) => {
    if (genresToFetch.length !== 2) return;

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        industry: industry || 'all',
        media_type: mediaType || 'movie',
        start_year: customStart.toString(),
        end_year: customEnd.toString(),
        genres: genresToFetch.join(','),
        ignore_year: ignoreYear ? 'true' : 'false'
      });

      if (historyExcludeIds.length > 0) {
        params.append('exclude_ids', historyExcludeIds.join(','));
      }

      const res = await fetch(`${API_BASE}/api/recommend?${params.toString()}`);
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to fetch recommendations');
      }

      const data = await res.json();
      setResults(data);

      if (data.found && data.data && data.data.length > 0) {
        const newIds = data.data.map((item) => item.id);
        setHistoryExcludeIds((prev) => [...new Set([...prev, ...newIds])]);

        // Celebratory confetti burst
        confetti({
          particleCount: 65,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#c5a059', '#e6c887', '#ffffff']
        });
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    setCurrentQuestion(1);
    setIndustry(null);
    setMediaType(null);
    setSelectedEra(null);
    setSelectedGenres([]);
    setResults(null);
    setError(null);
  };

  const clearHistoryAndRefetch = () => {
    setHistoryExcludeIds([]);
    fetchRecommendations(selectedGenres, false);
  };

  const handleCopyTitle = (item) => {
    const textToCopy = `${item.title} (${item.year}) - Recommended on CineMatch`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const currentIndustryObj = INDUSTRIES.find((i) => i.id === industry);

  // Helper renderer for each industry card
  const renderIndustryCard = (ind) => {
    const isSelected = industry === ind.id;
    return (
      <button
        key={ind.id}
        onClick={() => handleSelectIndustry(ind.id)}
        className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden flex-1 basis-[200px] max-w-[280px] ${
          isSelected
            ? 'bg-[#171822] border-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.2)] scale-102 ring-1 ring-[#c5a059]'
            : 'card-luxury hover:border-[#c5a059]/40 hover:-translate-y-0.5'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl p-1 rounded-lg bg-black/40 border border-white/[0.04]">
              {ind.icon}
            </span>
            <div>
              <h3 className="font-bold text-sm text-white font-headline group-hover:text-[#c5a059] transition-colors">
                {ind.name}
              </h3>
              <span className="text-[10px] text-slate-400 font-mono block">
                {ind.tag}
              </span>
            </div>
          </div>
          {isSelected && (
            <span className="w-5 h-5 rounded-full bg-[#c5a059] text-black text-xs font-black flex items-center justify-center shadow-md shrink-0">
              ✓
            </span>
          )}
        </div>

        {/* 3-Poster Fan Display */}
        <div className="relative h-24 w-full flex items-center justify-center overflow-hidden my-1.5 bg-[#090a0d]/60 rounded-xl border border-white/[0.04]">
          {ind.posters && ind.posters.map((p, idx) => {
            const rotation = idx === 0 
              ? '-rotate-6 -translate-x-5' 
              : idx === 1 
              ? 'z-10 scale-105' 
              : 'rotate-6 translate-x-5';
            return (
              <div
                key={idx}
                className={`absolute w-12 sm:w-14 aspect-[2/3] rounded-md overflow-hidden shadow-xl border border-white/[0.12] transition-all duration-300 group-hover:scale-110 bg-slate-900 ${rotation}`}
              >
                <img
                  src={p.url}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="w-full pt-1.5 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-slate-400">
          <span className="truncate pr-1">{ind.subtitle}</span>
          <span className="text-[#c5a059] text-[10px] font-mono group-hover:translate-x-0.5 transition-transform shrink-0">→</span>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#090a0d] text-slate-100 selection:bg-[#c5a059] selection:text-black relative">
      
      {/* 1. TOP EDITORIAL HERO */}
      <header className="pt-6 pb-2 px-4 max-w-5xl mx-auto w-full text-center space-y-2.5">
        
        {/* Curated Cinema Concierge Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#121319] border border-[#c5a059]/40 text-[#c5a059] text-[11px] font-bold tracking-wider uppercase shadow-[0_2px_15px_rgba(197,160,89,0.12)]">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>Curated Cinema Intelligence • 4 Quick Taps to Your Next Obsession</span>
        </div>
        
        {/* Editorial Headline - STRICTLY ONE LINE */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-black font-headline text-white tracking-tight leading-tight whitespace-nowrap">
          Never Ask <span className="text-[#c5a059]">"What Should I Watch?"</span> Again.
        </h1>
        
        {/* Engaging Subtitle */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Break free from 40-minute streaming paralysis. No accounts. No algorithms trapping you in feedback loops. Just 4 quick taps to uncover cinema masterpieces and binge-worthy series.
        </p>

        {/* Global Reset Trigger when in progress */}
        {currentQuestion > 1 && (
          <div className="pt-1">
            <button
              onClick={resetAll}
              className="text-xs text-slate-400 hover:text-[#c5a059] inline-flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset all choices and start fresh</span>
            </button>
          </div>
        )}
      </header>

      {/* 2. MAIN DECISION CONTAINER */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-5 max-w-5xl mx-auto w-full">
        
        {/* QUESTIONS VIEW (1 to 4) */}
        {currentQuestion <= 4 && (
          <div className="w-full space-y-4 animate-in fade-in duration-300">
            
            {/* Interactive Step Track */}
            <div className="flex items-center justify-center flex-wrap gap-2 text-xs">
              <button
                onClick={() => setCurrentQuestion(1)}
                className={`px-3.5 py-1.5 rounded-full border transition-all cursor-pointer flex items-center space-x-1.5 ${
                  currentQuestion === 1
                    ? 'bg-[#1b1c24] border-[#c5a059] text-white font-bold shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                    : industry
                    ? 'bg-[#121319] border-[#c5a059]/40 text-[#c5a059]'
                    : 'bg-[#121319]/40 border-white/[0.04] text-slate-500'
                }`}
              >
                <span>01</span>
                <span>{industry ? `✓ ${currentIndustryObj?.name}` : 'Region'}</span>
              </button>

              <span className="text-slate-600">➔</span>

              <button
                onClick={() => industry && setCurrentQuestion(2)}
                disabled={!industry}
                className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center space-x-1.5 ${
                  !industry ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                } ${
                  currentQuestion === 2
                    ? 'bg-[#1b1c24] border-[#c5a059] text-white font-bold shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                    : mediaType
                    ? 'bg-[#121319] border-[#c5a059]/40 text-[#c5a059]'
                    : 'bg-[#121319]/40 border-white/[0.04] text-slate-500'
                }`}
              >
                <span>02</span>
                <span>{mediaType ? `✓ ${mediaType === 'movie' ? 'Movies' : 'Series'}` : 'Format'}</span>
              </button>

              <span className="text-slate-600">➔</span>

              <button
                onClick={() => mediaType && setCurrentQuestion(3)}
                disabled={!mediaType}
                className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center space-x-1.5 ${
                  !mediaType ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                } ${
                  currentQuestion === 3
                    ? 'bg-[#1b1c24] border-[#c5a059] text-white font-bold shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                    : selectedEra
                    ? 'bg-[#121319] border-[#c5a059]/40 text-[#c5a059]'
                    : 'bg-[#121319]/40 border-white/[0.04] text-slate-500'
                }`}
              >
                <span>03</span>
                <span>{selectedEra ? `✓ ${customStart}–${customEnd}` : 'Era'}</span>
              </button>

              <span className="text-slate-600">➔</span>

              <button
                onClick={() => selectedEra && setCurrentQuestion(4)}
                disabled={!selectedEra}
                className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center space-x-1.5 ${
                  !selectedEra ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                } ${
                  currentQuestion === 4
                    ? 'bg-[#1b1c24] border-[#c5a059] text-white font-bold shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                    : selectedGenres.length === 2
                    ? 'bg-[#121319] border-[#c5a059]/40 text-[#c5a059]'
                    : 'bg-[#121319]/40 border-white/[0.04] text-slate-500'
                }`}
              >
                <span>04</span>
                <span>{selectedGenres.length > 0 ? `✓ ${selectedGenres.join(' + ')}` : 'Dual Vibe'}</span>
              </button>
            </div>

            {/* QUESTION 1: REGION / INDUSTRY */}
            {currentQuestion === 1 && (
              <div className="card-luxury rounded-3xl p-4 sm:p-5 space-y-3">
                <div className="text-center space-y-0.5">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">Step 01 of 04</span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline text-white">
                    Select Your Film Industry or Cinema Tradition
                  </h2>
                  <p className="text-xs text-slate-400">
                    Click any industry to explore its top cinematic heritage. Auto-advances instantly.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Row 1: 3 Cards Centered */}
                  <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3">
                    {INDUSTRIES.slice(0, 3).map((ind) => renderIndustryCard(ind))}
                  </div>

                  {/* Row 2: 4 Cards Centered */}
                  <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3">
                    {INDUSTRIES.slice(3, 7).map((ind) => renderIndustryCard(ind))}
                  </div>
                </div>
              </div>
            )}

            {/* QUESTION 2: FORMAT */}
            {currentQuestion === 2 && (
              <div className="card-luxury rounded-3xl p-5 sm:p-7 space-y-4">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">Step 02 of 04</span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline text-white">
                    What Type of Experience Are You Craving?
                  </h2>
                  <p className="text-xs text-slate-400">
                    A self-contained feature movie or a multi-episode binge arc?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {FORMATS.map((f) => {
                    const isSelected = mediaType === f.id;
                    return (
                      <button
                        key={f.id}
                        onClick={() => handleSelectFormat(f.id)}
                        className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                          isSelected
                            ? 'bg-[#171822] border-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.2)] scale-102 ring-1 ring-[#c5a059]'
                            : 'card-luxury hover:border-[#c5a059]/40 hover:-translate-y-0.5'
                        }`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-3xl p-2 rounded-xl bg-black/40 border border-white/[0.04]">
                              {f.icon}
                            </span>
                            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#c5a059]/10 text-[#c5a059] font-bold border border-[#c5a059]/30">
                              {f.badge}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white font-headline group-hover:text-[#c5a059] transition-colors">
                              {f.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                              {f.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] text-slate-400 flex items-center justify-between">
                          <span>{f.description}</span>
                          <span className="text-[#c5a059] font-mono text-xs group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* QUESTION 3: ERA */}
            {currentQuestion === 3 && (
              <div className="card-luxury rounded-3xl p-5 sm:p-7 space-y-4">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">Step 03 of 04</span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline text-white">
                    Select Your Cinematic Era
                  </h2>
                  <p className="text-xs text-slate-400">
                    Travel through time or define your own custom release years.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                  {ERAS.map((era) => {
                    const isSelected = selectedEra === `${era.start}-${era.end}`;
                    return (
                      <button
                        key={era.id}
                        onClick={() => handleSelectEra(era.start, era.end)}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                          isSelected
                            ? 'bg-[#171822] border-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.2)] scale-102 ring-1 ring-[#c5a059]'
                            : 'card-luxury hover:border-[#c5a059]/40 hover:-translate-y-0.5'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl p-1.5 rounded-xl bg-black/40 border border-white/[0.04]">
                              {era.icon}
                            </span>
                            <span className="text-[11px] font-mono font-bold text-[#c5a059]">
                              {era.range}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-bold text-sm text-white font-headline group-hover:text-[#c5a059] transition-colors">
                              {era.name}
                            </h3>
                            <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                              {era.desc}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] text-slate-400 flex items-center justify-between">
                          <span>Auto-advances</span>
                          <span className="text-[#c5a059] font-mono group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Year Range Toggle */}
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setShowCustomYears(!showCustomYears)}
                    className="text-xs text-slate-400 hover:text-[#c5a059] inline-flex items-center space-x-1 cursor-pointer transition-colors"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>{showCustomYears ? 'Hide custom slider' : 'Or set specific custom year range ✎'}</span>
                  </button>

                  {showCustomYears && (
                    <div className="mt-3 p-4 rounded-2xl bg-[#14151e] border border-white/[0.06] max-w-md mx-auto space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-[#c5a059]">
                        <span>From: {customStart}</span>
                        <span>To: {customEnd}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="range"
                          min="1950"
                          max="2026"
                          value={customStart}
                          onChange={(e) => setCustomStart(Math.min(parseInt(e.target.value), customEnd))}
                          className="accent-[#c5a059] cursor-pointer"
                        />
                        <input
                          type="range"
                          min="1950"
                          max="2026"
                          value={customEnd}
                          onChange={(e) => setCustomEnd(Math.max(parseInt(e.target.value), customStart))}
                          className="accent-[#c5a059] cursor-pointer"
                        />
                      </div>
                      <button
                        onClick={() => handleSelectEra(customStart, customEnd)}
                        className="w-full py-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                      >
                        Confirm Custom Range ({customStart}–{customEnd}) →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* QUESTION 4: DUAL VIBE */}
            {currentQuestion === 4 && (
              <div className="card-luxury rounded-3xl p-5 sm:p-7 space-y-4">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">Step 04 of 04</span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline text-white">
                    Select Exactly 2 Genres / Moods
                  </h2>
                  <p className="text-xs text-slate-400">
                    Precision intersection subquery: Pairing exactly two tastes uncovers the sharpest recommendations.
                  </p>

                  {/* Dynamic Progress indicator */}
                  <div className="flex items-center justify-center space-x-2 pt-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                      selectedGenres[0]
                        ? 'bg-[#c5a059]/20 border-[#c5a059] text-white'
                        : 'bg-[#14151c] border-dashed border-white/[0.15] text-slate-500'
                    }`}>
                      {selectedGenres[0] ? `1. ${selectedGenres[0]} ✓` : '1. Choose 1st Genre'}
                    </div>

                    <span className="text-[#c5a059] font-bold text-xs">+</span>

                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                      selectedGenres[1]
                        ? 'bg-[#c5a059]/20 border-[#c5a059] text-white'
                        : 'bg-[#14151c] border-dashed border-white/[0.15] text-slate-500'
                    }`}>
                      {selectedGenres[1] ? `2. ${selectedGenres[1]} ✓` : '2. Choose 2nd Genre'}
                    </div>
                  </div>

                  {selectedGenres.length === 2 && (
                    <p className="text-xs text-[#c5a059] font-medium animate-pulse pt-1">
                      Brewing your personalized cinematic match... 🎬
                    </p>
                  )}
                </div>

                {/* 16 Genre Selection Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  {GENRES.map((g) => {
                    const isSelected = selectedGenres.includes(g.name);
                    return (
                      <button
                        key={g.name}
                        onClick={() => handleToggleGenre(g.name)}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold shadow-[0_0_15px_rgba(197,160,89,0.3)] scale-102'
                            : 'bg-[#14151d] hover:bg-[#1a1c26] border-white/[0.06] text-slate-200 hover:border-[#c5a059]/40'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span className="text-base">{g.icon}</span>
                          <span>{g.name}</span>
                        </span>
                        {isSelected && <span className="text-xs font-black">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* QUESTION 5: RESULTS SCREEN */}
        {currentQuestion === 5 && (
          <div className="w-full space-y-6 animate-in fade-in duration-300">
            
            {/* Header & Quick Tweak Pills */}
            <div className="card-luxury rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CURATED MATCH COMPLETE • {results?.count || 0} TITLES FOUND</span>
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline text-white mt-0.5">
                    Your Personalized Recommendations
                  </h2>
                </div>

                {/* Reset or Roll Fresh Batch */}
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={() => fetchRecommendations(selectedGenres, false)}
                    disabled={loading}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-lg"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                    <span>Roll Fresh Batch</span>
                  </button>

                  <button
                    onClick={resetAll}
                    className="p-2 rounded-xl bg-[#171822] hover:bg-[#1f202e] border border-white/[0.08] text-slate-300 cursor-pointer"
                    title="Start fresh"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick-Tweak Bar */}
              <div className="flex items-center flex-wrap gap-2 text-xs">
                <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">Active Taste:</span>
                
                <button
                  onClick={() => setCurrentQuestion(1)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] hover:border-[#c5a059]/40 text-[#c5a059] flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <span>Region: {currentIndustryObj?.name || 'All'} ✎</span>
                </button>

                <button
                  onClick={() => setCurrentQuestion(2)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] hover:border-[#c5a059]/40 text-[#c5a059] flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <span>Format: {mediaType === 'movie' ? 'Film' : 'Series'} ✎</span>
                </button>

                <button
                  onClick={() => setCurrentQuestion(3)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] hover:border-[#c5a059]/40 text-[#c5a059] flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <span>Era: {customStart}–{customEnd} ✎</span>
                </button>

                <button
                  onClick={() => setCurrentQuestion(4)}
                  className="px-3 py-1 rounded-full bg-[#181924] hover:bg-[#202230] border border-white/[0.08] hover:border-[#c5a059]/40 text-[#c5a059] flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <span>Genres: {selectedGenres.join(' + ')} ✎</span>
                </button>
              </div>
            </div>

            {/* Loading Skeleton */}
            {loading && (
              <div className="card-luxury rounded-3xl p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] border-t-transparent animate-spin mx-auto" />
                <h3 className="text-lg font-bold font-headline text-white">
                  Searching 1.26 Million Titles...
                </h3>
                <p className="text-xs text-slate-400">
                  Executing subquery intersect across IMDb ratings, genres, and language vectors.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && !loading && (
              <div className="p-6 rounded-3xl bg-red-950/30 border border-red-500/30 text-center space-y-3">
                <p className="text-sm font-semibold text-red-300">{error}</p>
                <button
                  onClick={() => fetchRecommendations(selectedGenres, false)}
                  className="px-4 py-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Results Grid */}
            {!loading && results?.found && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {results.data.map((item, index) => {
                  const isTopPick = index === 0;
                  return (
                    <div
                      key={item.id}
                      className={`card-luxury rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl ${
                        isTopPick 
                          ? 'border-[#c5a059]/60 shadow-[0_4px_25px_rgba(197,160,89,0.15)] bg-gradient-to-b from-[#181924] to-[#121319]' 
                          : 'border-white/[0.06] hover:border-[#c5a059]/40'
                      }`}
                    >
                      <div>
                        {/* Poster */}
                        <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#0d0e14]">
                          {item.poster_url ? (
                            <img
                              src={item.poster_url}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#151620]">
                              <Film className="w-10 h-10 text-slate-600 mb-2" />
                              <span className="text-xs text-slate-400 font-semibold">{item.title}</span>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-transparent to-transparent opacity-90" />

                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                            {isTopPick ? (
                              <span className="bg-[#c5a059] text-black text-[10px] font-mono font-black px-2.5 py-0.5 rounded-md shadow-md flex items-center space-x-1">
                                <Sparkles className="w-3 h-3 fill-black" />
                                <span>#1 CURATOR PICK</span>
                              </span>
                            ) : (
                              <span className="bg-[#090a0d]/80 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
                                #{index + 1} MATCH
                              </span>
                            )}

                            <div className="bg-[#090a0d]/85 backdrop-blur-md border border-white/[0.1] px-2 py-0.5 rounded-lg flex items-center space-x-1 text-xs">
                              <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                              <span className="font-bold text-white">{item.rating}</span>
                              <span className="text-[10px] text-slate-400">({item.votes?.toLocaleString()})</span>
                            </div>
                          </div>

                          {/* Poster Bottom Info */}
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-lg font-bold font-headline text-white line-clamp-1 group-hover:text-[#c5a059] transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-[11px] text-slate-300">
                              <span>{item.year}</span>
                              <span>•</span>
                              <span>{item.original_language?.toUpperCase() || 'EN'}</span>
                              <span>•</span>
                              <span className="text-[#c5a059]">{item.genres}</span>
                            </div>
                          </div>
                        </div>

                        {/* Synopsis */}
                        <div className="p-4">
                          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                            {item.overview || 'No storyline synopsis currently cataloged for this entry in the archive.'}
                          </p>
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="p-4 pt-0 space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setActiveTrailerItem(item)}
                            className="py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Watch Trailer</span>
                          </button>

                          <a
                            href={item.yt_search_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2.5 rounded-xl bg-[#1c1d28] hover:bg-[#252736] border border-white/[0.08] text-xs font-semibold text-slate-200 flex items-center justify-center space-x-1 cursor-pointer transition-colors"
                          >
                            <span>YouTube</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </a>
                        </div>

                        <button
                          onClick={() => handleCopyTitle(item)}
                          className="w-full py-1.5 rounded-lg bg-transparent hover:bg-white/[0.04] text-[11px] text-slate-400 hover:text-white flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                        >
                          <Share2 className="w-3 h-3" />
                          <span>{copiedId === item.id ? 'Copied to Clipboard! ✓' : 'Copy title to share'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Empty State Fallback */}
            {!loading && results && !results.found && (
              <div className="card-luxury rounded-3xl p-8 sm:p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center mx-auto text-2xl">
                  🍿
                </div>
                <h3 className="text-xl font-bold font-headline text-white">
                  No Exact Matches in {customStart}–{customEnd}
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  {results.message}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => fetchRecommendations(selectedGenres, true)}
                    className="px-5 py-2.5 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                  >
                    <span>Expand to All Eras (1975–2026)</span>
                  </button>

                  {historyExcludeIds.length > 0 && (
                    <button
                      onClick={clearHistoryAndRefetch}
                      className="px-4 py-2.5 rounded-xl bg-[#161822] hover:bg-[#1e202c] border border-white/[0.08] text-slate-300 font-semibold flex items-center space-x-1.5 cursor-pointer"
                    >
                      <History className="w-3.5 h-3.5" />
                      <span>Reset Excluded History</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* 3. MAGNETIC "RANDOM SUGGESTION" FLOATING BUTTON (SMALL CIRCLE WITH ROLLING DICE ONLY, NO GLOWING DOT) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenRandomSuggestion}
          className="dice-roll-btn group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#121319]/95 hover:bg-[#1a1b24] border border-[#c5a059]/50 hover:border-[#c5a059] text-[#c5a059] shadow-[0_8px_30px_rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-xl"
          title="Random Suggestion (Always Unique)"
          aria-label="Random Suggestion"
        >
          <Dices className="dice-icon w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059] transition-transform duration-300" />
        </button>
      </div>

      {/* 4. DYNAMIC "RANDOM SUGGESTION" VAULT MODAL (UNCROPPED 2:3 POSTERS) */}
      {isRandomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop-luxury animate-in fade-in duration-200">
          <div className="card-luxury max-w-4xl w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl relative p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DYNAMIC SURPRISE ENGINE • {randomData?.theme || 'Curated Synergy'}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-headline text-white mt-0.5">
                  Tonight's Random Double Feature
                </h3>
                <p className="text-xs text-slate-400">
                  Guaranteed different on every roll. 1 Movie from 1.26M DB + 1 Prestige Series.
                </p>
              </div>

              {/* Roll Again & Close Buttons */}
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={fetchRandomSuggestion}
                  disabled={randomLoading}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-[#c5a059]/20"
                  title="Spin a brand-new random pair"
                >
                  <Dices className={`w-4 h-4 ${randomLoading ? 'animate-spin' : ''}`} />
                  <span>{randomLoading ? 'Shuffling...' : '🎲 Spin Another Pair'}</span>
                </button>

                <button
                  onClick={() => setIsRandomOpen(false)}
                  className="p-2.5 rounded-full bg-[#14151c] text-slate-400 hover:text-white border border-white/[0.08] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Loading State with Slot-Machine Shuffler */}
            {randomLoading && (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] border-t-transparent animate-spin mx-auto" />
                <h4 className="text-base font-bold font-headline text-white">
                  Shuffling 1,263,638 Masterpieces...
                </h4>
                <p className="text-xs text-slate-400">
                  Picking 1 high-rated film & 1 binge-worthy series across global cinema archives.
                </p>
              </div>
            )}

            {/* Error State */}
            {randomError && !randomLoading && (
              <div className="p-6 rounded-2xl bg-red-950/30 border border-red-500/30 text-center space-y-3">
                <p className="text-sm font-semibold text-red-300">{randomError}</p>
                <button
                  onClick={fetchRandomSuggestion}
                  className="px-4 py-2 rounded-xl btn-gold text-xs font-bold cursor-pointer"
                >
                  Retry Shuffle
                </button>
              </div>
            )}

            {/* DYNAMIC PAIR CARDS (UNCROPPED 2:3 POSTERS) */}
            {!randomLoading && randomData && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* CARD 1: DYNAMIC MOVIE */}
                <div className="bg-[#151622] rounded-2xl border border-white/[0.08] overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 group hover:border-[#c5a059]/40 transition-all shadow-xl">
                  {/* Portrait Poster (Full 2:3 Cinematic Ratio - Never Cropped) */}
                  <div className="relative w-32 sm:w-36 md:w-40 aspect-[2/3] shrink-0 mx-auto sm:mx-0 rounded-xl overflow-hidden bg-[#0d0e14] border border-white/[0.1] shadow-2xl group-hover:border-[#c5a059]/50 transition-all">
                    <img
                      src={randomData.movie.poster_url}
                      alt={randomData.movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                  </div>

                  {/* Metadata & Actions */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="space-y-2.5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="bg-[#090a0d]/90 text-[#c5a059] border border-[#c5a059]/30 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md flex items-center space-x-1">
                          <span>🎬</span>
                          <span>{randomData.movie.badge}</span>
                        </span>

                        <div className="bg-[#090a0d]/90 border border-white/[0.1] px-2.5 py-0.5 rounded-lg flex items-center space-x-1 text-xs shrink-0">
                          <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                          <span className="font-bold text-white">★ {randomData.movie.rating}</span>
                          <span className="text-[10px] text-slate-400">({randomData.movie.votes})</span>
                        </div>
                      </div>

                      {/* Title & Metadata */}
                      <div>
                        <h4 className="text-base sm:text-lg font-bold font-headline text-white line-clamp-1 group-hover:text-[#c5a059] transition-colors">
                          {randomData.movie.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                          <span className="text-slate-300 font-medium">{randomData.movie.year}</span>
                          <span>•</span>
                          <span className="text-slate-400">{randomData.movie.genres.join(' • ')}</span>
                        </div>
                      </div>

                      {/* Overview */}
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {randomData.movie.overview}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => {
                          setIsRandomOpen(false);
                          setActiveTrailerItem({
                            title: randomData.movie.title,
                            year: randomData.movie.year,
                            overview: randomData.movie.overview,
                            trailer_embed: null
                          });
                        }}
                        className="w-full py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-md hover:shadow-[#c5a059]/20 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Movie Trailer</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* CARD 2: DYNAMIC PRESTIGE SERIES */}
                <div className="bg-[#151622] rounded-2xl border border-white/[0.08] overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 group hover:border-purple-500/40 transition-all shadow-xl">
                  {/* Portrait Poster (Full 2:3 Cinematic Ratio - Never Cropped) */}
                  <div className="relative w-32 sm:w-36 md:w-40 aspect-[2/3] shrink-0 mx-auto sm:mx-0 rounded-xl overflow-hidden bg-[#0d0e14] border border-white/[0.1] shadow-2xl group-hover:border-purple-500/50 transition-all">
                    <img
                      src={randomData.series.poster_url}
                      alt={randomData.series.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&auto=format&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                  </div>

                  {/* Metadata & Actions */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="space-y-2.5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="bg-[#090a0d]/90 text-purple-300 border border-purple-500/30 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md flex items-center space-x-1">
                          <span>📺</span>
                          <span>{randomData.series.badge}</span>
                        </span>

                        <div className="bg-[#090a0d]/90 border border-white/[0.1] px-2.5 py-0.5 rounded-lg flex items-center space-x-1 text-xs shrink-0">
                          <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                          <span className="font-bold text-white">★ {randomData.series.rating}</span>
                          <span className="text-[10px] text-slate-400">({randomData.series.votes})</span>
                        </div>
                      </div>

                      {/* Title & Metadata */}
                      <div>
                        <h4 className="text-base sm:text-lg font-bold font-headline text-white line-clamp-1 group-hover:text-purple-300 transition-colors">
                          {randomData.series.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                          <span className="text-slate-300 font-medium">{randomData.series.year}</span>
                          <span>•</span>
                          <span className="text-slate-400">{randomData.series.genres.join(' • ')}</span>
                        </div>
                      </div>

                      {/* Tagline & Overview */}
                      <div className="space-y-1">
                        {randomData.series.tagline && (
                          <p className="text-[11px] text-[#c5a059] italic font-medium line-clamp-1">
                            "{randomData.series.tagline}"
                          </p>
                        )}
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {randomData.series.overview}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => {
                          setIsRandomOpen(false);
                          setActiveTrailerItem({
                            title: randomData.series.title,
                            year: randomData.series.year,
                            overview: randomData.series.overview,
                            trailer_embed: randomData.series.trailer_embed
                          });
                        }}
                        className="w-full py-2.5 rounded-xl bg-[#20222f] hover:bg-[#c5a059] text-white hover:text-black border border-white/[0.08] hover:border-[#c5a059] text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Series Trailer</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. TRAILER PREVIEW MODAL */}
      {activeTrailerItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop-luxury animate-in fade-in duration-200">
          <div className="card-luxury max-w-2xl w-full rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl space-y-4 p-5">
            <div className="flex items-center justify-between pb-1">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#c5a059]">
                  Trailer Preview
                </span>
                <h3 className="text-lg font-bold font-headline text-white">
                  {activeTrailerItem.title} ({activeTrailerItem.year})
                </h3>
              </div>
              <button
                onClick={() => setActiveTrailerItem(null)}
                className="p-2 rounded-full bg-[#14151c] hover:bg-[#1a1b24] text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video bg-[#090a0d] rounded-2xl overflow-hidden border border-white/[0.08] flex items-center justify-center">
              {activeTrailerItem.trailer_embed ? (
                <iframe 
                  src={activeTrailerItem.trailer_embed} 
                  title={activeTrailerItem.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              ) : (
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(activeTrailerItem.title + ' ' + activeTrailerItem.year + ' official trailer')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-3 rounded-xl text-xs font-bold flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer shadow-xl"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Open Official Trailer on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              )}
            </div>

            <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
              {activeTrailerItem.overview}
            </p>
          </div>
        </div>
      )}

      {/* 6. MINIMALIST LUXURY FOOTER */}
      <footer className="border-t border-white/[0.04] px-6 py-4 text-center text-xs text-slate-500">
        <p>© 2026 CineMatch Studio • Dynamic Neural Filter (1.26M+ Titles) • Zero Personal Data Stored</p>
      </footer>
    </div>
  );
}
