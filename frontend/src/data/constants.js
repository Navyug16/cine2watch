// CineMatch Studio v2 - Global Taxonomy & Master Configuration

export const INDUSTRIES = [
  { 
    id: 'hollywood', 
    name: 'Hollywood & North America', 
    subtitle: 'Interstellar • Inception • Oppenheimer', 
    icon: '🎬',
    tag: 'Global Auteur & Blockbusters',
    posters: [
      { title: 'Interstellar', url: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { title: 'Inception', url: 'https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg' },
      { title: 'Oppenheimer', url: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' }
    ]
  },
  { 
    id: 'european', 
    name: 'European Cinema', 
    subtitle: 'Money Heist • Anatomy of a Fall • Dark', 
    icon: '🏰',
    tag: 'Spanish, French, German, Italian & Nordic Noir',
    posters: [
      { title: 'Money Heist', url: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
      { title: 'Anatomy of a Fall', url: 'https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg' },
      { title: 'Dark', url: 'https://image.tmdb.org/t/p/w500/wiiyc3m6HKaQhFBYeuM7ySCNQsG.jpg' }
    ]
  },
  { 
    id: 'anime', 
    name: 'Anime & Japanese Cinema', 
    subtitle: 'Spirited Away • Attack on Titan • Your Name', 
    icon: '⛩️',
    tag: 'Studio Ghibli, Makoto Shinkai & Masterworks',
    posters: [
      { title: 'Spirited Away', url: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { title: 'Your Name.', url: 'https://image.tmdb.org/t/p/w500/vfJFJPepRKapMd5G2ro7klIRysq.jpg' },
      { title: 'Attack on Titan', url: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg' }
    ]
  },
  { 
    id: 'korean', 
    name: 'Korean Cinema & K-Drama', 
    subtitle: 'Parasite • Squid Game • Oldboy', 
    icon: '🇰🇷',
    tag: 'Mind-Bending Thrillers & Emotion',
    posters: [
      { title: 'Parasite', url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
      { title: 'Squid Game', url: 'https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg' },
      { title: 'Oldboy', url: 'https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg' }
    ]
  },
  { 
    id: 'indian_south', 
    name: 'Indian Cinema: South Regional', 
    subtitle: 'RRR • Bāhubali • Manjummel Boys', 
    icon: '🦁',
    tag: 'Telugu, Tamil, Malayalam & Kannada Grand Vision',
    posters: [
      { title: 'RRR', url: 'https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg' },
      { title: 'Bāhubali', url: 'https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg' },
      { title: 'Kantara', url: 'https://image.tmdb.org/t/p/w500/jIsKmkxMzdCZ0Ux1GVSnu8m6Na6.jpg' }
    ]
  },
  { 
    id: 'bollywood', 
    name: 'Indian Cinema: Hindi (Bollywood)', 
    subtitle: '3 Idiots • Dangal • Gangs of Wasseypur', 
    icon: '🇮🇳',
    tag: 'Epic Dramas, Auteur Voices & Musical Scale',
    posters: [
      { title: '3 Idiots', url: 'https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg' },
      { title: 'Dangal', url: 'https://image.tmdb.org/t/p/w500/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg' },
      { title: 'Gangs of Wasseypur', url: 'https://image.tmdb.org/t/p/w500/4nbvLoPDftqXV14w5Mv14iqgVrt.jpg' }
    ]
  },
  { 
    id: 'latin_american', 
    name: 'Latin American & World Cinema', 
    subtitle: 'City of God • Roma • Wild Tales', 
    icon: '🌎',
    tag: 'Raw Realism, Noir & Magic Realism',
    posters: [
      { title: 'City of God', url: 'https://image.tmdb.org/t/p/w500/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg' },
      { title: 'Roma', url: 'https://image.tmdb.org/t/p/w500/dtIIyQyALk57ko5bjac7hi01YQ.jpg' },
      { title: 'Wild Tales', url: 'https://image.tmdb.org/t/p/w500/vmeCDuWJ6B2cqi9f3QFyIwRKqFV.jpg' }
    ]
  }
];

export const FORMATS = [
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

const CURRENT_YEAR = Math.max(2026, new Date().getFullYear());

export const ERAS = [
  { 
    id: 'contemporary', 
    name: 'Contemporary Era', 
    range: `2021–${CURRENT_YEAR}`, 
    start: 2021, 
    end: CURRENT_YEAR,
    desc: 'Current releases, high dynamic range spectacle & bleeding-edge filmmaking.',
    icon: '✨'
  },
  { 
    id: 'modern_peak', 
    name: 'Modern Peak Cinema', 
    range: '2010–2020', 
    start: 2010, 
    end: 2020,
    desc: 'Golden era of modern visual spectacle, gritty reboots & cinematic universes.',
    icon: '⚡'
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

export const GENRES = [
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

export const STREAMING_PLATFORMS = [
  { name: 'Netflix', color: '#E50914' },
  { name: 'Prime Video', color: '#00A8E1' },
  { name: 'Disney+', color: '#113CCF' },
  { name: 'Apple TV+', color: '#A2AAAD' },
  { name: 'Max', color: '#002BE7' }
];
