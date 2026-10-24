// Master Cinematic Universes, Franchise Hubs & Canon Watch Orders
// Generated for cine2watch v2 Production Platform with Marvel (15), DC (23), Star Wars (19), Wizarding World (6), Middle-Earth (6), Fast & Furious (4), Transformers (5), Mission: Impossible (4), and John Wick (3)

export const FRANCHISE_HUBS = [
  {
    "id": "all",
    "name": "All Universes",
    "icon": "🌐"
  },
  {
    "id": "marvel",
    "name": "Marvel",
    "icon": "🦸"
  },
  {
    "id": "dc-universe",
    "name": "DC Multiverse",
    "icon": "🦇"
  },
  {
    "id": "star-wars",
    "name": "Star Wars",
    "icon": "⭐"
  },
  {
    "id": "wizarding-world",
    "name": "Wizarding World",
    "icon": "🧙"
  },
  {
    "id": "middle-earth",
    "name": "Middle-Earth",
    "icon": "🧝"
  },
  {
    "id": "fast-and-furious",
    "name": "Fast & Furious",
    "icon": "🏎️"
  },
  {
    "id": "transformers",
    "name": "Transformers",
    "icon": "⚡"
  },
  {
    "id": "mission-impossible",
    "name": "Mission: Impossible",
    "icon": "💥"
  },
  {
    "id": "john-wick",
    "name": "John Wick",
    "icon": "🎯"
  },
  {
    "id": "sci-fi-hub",
    "name": "Sci-Fi Hub",
    "icon": "👽"
  },
  {
    "id": "anime-hub",
    "name": "Anime Master IP",
    "icon": "🇯🇵"
  },
  {
    "id": "indian-universes",
    "name": "Indian Universes",
    "icon": "🇮🇳"
  }
];

export const FRANCHISES = [
  {
    "id": "marvel",
    "name": "Marvel Cinematic Multiverse",
    "badge": "15 CANON BRANCHES • MCU, DEFENDERS, X-MEN, SPIDER-MAN, SSU & ANIMATION",
    "icon": "🦸",
    "theme_color": "#E62429",
    "tagline": "The definitive Marvel catalog: 15 distinct universes, eras, and timelines meticulously arranged with canonical watch orders.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "why_watch": "The largest cinematic and televisual storytelling tapestry in pop-culture history, spanning 170+ interconnected films, prestige series, and animation.",
    "sub_universes": [
      "All Marvel",
      "01. MCU — Marvel Cinematic Universe",
      "02. Defenders Saga",
      "03. Marvel Television — ABC",
      "04. Marvel Television — Hulu / FX",
      "05. X-Men Universe",
      "06. Spider-Man",
      "07. Sony's Spider-Man Universe",
      "08. Fantastic Four",
      "09. Blade",
      "10. Ghost Rider",
      "11. Daredevil — Film",
      "12. Hulk",
      "13. Punisher",
      "14. Marvel Animation",
      "15. Marvel Special / Short-Form"
    ],
    "watch_modes": [
      {
        "id": "chrono",
        "label": "⏳ Chronological Story Order",
        "desc": "Ancient Era to Prehistoric, WWII, 1990s, Phases 1-6 & Future"
      },
      {
        "id": "release",
        "label": "🎞️ Release Date Order",
        "desc": "Exact chronological release progression from 1989/2008 to present"
      },
      {
        "id": "defenders",
        "label": "🛡️ Defenders Saga Canon",
        "desc": "Daredevil S1 → Jessica Jones S1 → DD S2 → Luke Cage S1 → Iron Fist S1 → Defenders"
      },
      {
        "id": "xmen",
        "label": "🧬 X-Men Universe Order",
        "desc": "X-Men 2000 → X2 → Last Stand → First Class → Days of Future Past → Logan"
      },
      {
        "id": "spiderman",
        "label": "🕷️ Spider-Man Canon Order",
        "desc": "Raimi Trilogy → TASM 1-2 → MCU Trilogy → Spider-Verse"
      }
    ],
    "timeline": [
      {
        "id": "mcu-cap1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Captain America: The First Avenger",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 2,
        "release_order": 5,
        "phase": "MCU Phase 1 • WWII Genesis (1942–1945)",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpqjqDIfj6.jpg",
        "runtime": "124 min",
        "desc": "Steve Rogers volunteers for a top-secret research project that turns him into Captain America during World War II."
      },
      {
        "id": "mcu-cm",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Captain Marvel",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 21,
        "phase": "MCU Phase 3 • 1990s Cosmic Genesis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TDC.jpg",
        "runtime": "123 min",
        "desc": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in a galactic war."
      },
      {
        "id": "mcu-im1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Iron Man",
        "year": 2008,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 1,
        "phase": "MCU Phase 1 • Birth of MCU",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        "runtime": "126 min",
        "desc": "After being held captive in an Afghan cave, billionaire Tony Stark creates a unique weaponized suit of armor."
      },
      {
        "id": "mcu-hulk",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "The Incredible Hulk",
        "year": 2008,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2,
        "phase": "MCU Phase 1 • Gamma Genesis",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
        "runtime": "112 min",
        "desc": "Bruce Banner, a scientist on the run from the U.S. government, searches for a cure for the monster within."
      },
      {
        "id": "mcu-im2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Iron Man 2",
        "year": 2010,
        "media_type": "movie",
        "chrono_order": 6,
        "release_order": 3,
        "phase": "MCU Phase 1 • Stark Legacy & Black Widow",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
        "runtime": "124 min",
        "desc": "With the world now aware of his identity as Iron Man, Tony Stark must contend with declining health and Ivan Vanko."
      },
      {
        "id": "mcu-thor1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Thor",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 7,
        "release_order": 4,
        "phase": "MCU Phase 1 • Asgardian Exile",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        "runtime": "115 min",
        "desc": "The powerful but arrogant god Thor is cast out of Asgard to live among humans in Midgard, becoming their defender."
      },
      {
        "id": "mcu-av1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "The Avengers",
        "year": 2012,
        "media_type": "movie",
        "chrono_order": 8,
        "release_order": 6,
        "phase": "MCU Phase 1 • Battle of New York Climax",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        "runtime": "143 min",
        "desc": "Nick Fury brings together an elite team of superheroes to pull the world back from disaster when Loki attacks."
      },
      {
        "id": "mcu-im3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Iron Man 3",
        "year": 2013,
        "media_type": "movie",
        "chrono_order": 9,
        "release_order": 7,
        "phase": "MCU Phase 2 • PTSD & Extremis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
        "runtime": "130 min",
        "desc": "When Tony Stark's world is torn apart by a terrorist called the Mandarin, he starts an odyssey of rebuilding."
      },
      {
        "id": "mcu-thor2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Thor: The Dark World",
        "year": 2013,
        "media_type": "movie",
        "chrono_order": 10,
        "release_order": 8,
        "phase": "MCU Phase 2 • The Aether Reality Stone",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
        "runtime": "112 min",
        "desc": "When the Dark Elves attempt to plunge the universe into darkness, Thor embarks on a perilous personal journey."
      },
      {
        "id": "mcu-cap2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Captain America: The Winter Soldier",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 11,
        "release_order": 9,
        "phase": "MCU Phase 2 • Espionage Noir & Hydra",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tVFRpFw3xTed5nGQqW0SdKGMWPA.jpg",
        "runtime": "136 min",
        "desc": "Steve Rogers struggles in the modern world while battling a shadowy assassin who turns out to be Bucky Barnes."
      },
      {
        "id": "mcu-gotg1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Guardians of the Galaxy",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 12,
        "release_order": 10,
        "phase": "MCU Phase 2 • Cosmic Outlaws & Power Stone",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXOsLbtMAW.jpg",
        "runtime": "121 min",
        "desc": "A group of intergalactic criminals must pull together to stop Ronan the Accuser from destroying Xandar."
      },
      {
        "id": "mcu-gotg2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Guardians of the Galaxy Vol. 2",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 13,
        "release_order": 15,
        "phase": "MCU Phase 3 • Ego the Living Planet",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9MFbBOKi9GDT.jpg",
        "runtime": "136 min",
        "desc": "The Guardians struggle to keep together while dealing with family issues and Peter Quill's celestial father."
      },
      {
        "id": "mcu-av2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Avengers: Age of Ultron",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 14,
        "release_order": 11,
        "phase": "MCU Phase 2 • AI Reckoning & Sokovia",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
        "runtime": "141 min",
        "desc": "When Tony Stark tries to jump-start a peacekeeping program called Ultron, the Avengers must stop its eradication plan."
      },
      {
        "id": "mcu-ant1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Ant-Man",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 15,
        "release_order": 12,
        "phase": "MCU Phase 2 • Pym Tech Heist",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
        "runtime": "117 min",
        "desc": "Armed with a super-suit with the ability to shrink in scale, cat burglar Scott Lang embraces his inner hero."
      },
      {
        "id": "mcu-cap3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Captain America: Civil War",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 16,
        "release_order": 13,
        "phase": "MCU Phase 3 • Sokovia Accords Fracture",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
        "runtime": "147 min",
        "desc": "Political involvement in Avengers affairs causes a rift between former allies Captain America and Iron Man."
      },
      {
        "id": "mcu-bw",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Black Widow",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 17,
        "release_order": 24,
        "phase": "MCU Phase 4 • Red Room Prequel",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
        "runtime": "134 min",
        "desc": "Natasha Romanoff confronts the darker parts of her ledger when a conspiracy with ties to her past arises."
      },
      {
        "id": "mcu-sm1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Spider-Man: Homecoming",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 18,
        "release_order": 16,
        "phase": "MCU Phase 3 • Queens High School & Vulture",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "133 min",
        "desc": "Peter Parker balances high school in Queens with superhero duties under Tony Stark's watchful eye."
      },
      {
        "id": "mcu-ds1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Doctor Strange",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 19,
        "release_order": 14,
        "phase": "MCU Phase 3 • Kamar-Taj Mystic Arts",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
        "runtime": "115 min",
        "desc": "While on a journey of healing, brilliant neurosurgeon Stephen Strange discovers the multiverse and mystic arts."
      },
      {
        "id": "mcu-bp1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Black Panther",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 20,
        "release_order": 18,
        "phase": "MCU Phase 3 • Wakanda Forever Oscar Winner",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        "runtime": "134 min",
        "desc": "T'Challa, heir to the hidden kingdom of Wakanda, must step forward to lead his people against Killmonger."
      },
      {
        "id": "mcu-thor3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Thor: Ragnarok",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 21,
        "release_order": 17,
        "phase": "MCU Phase 3 • Sakaar Gladiators & Hela",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        "runtime": "130 min",
        "desc": "Imprisoned on Sakaar, Thor must race to return to Asgard and stop Ragnarök at the hands of Hela."
      },
      {
        "id": "mcu-ant2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Ant-Man and the Wasp",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 22,
        "release_order": 20,
        "phase": "MCU Phase 3 • Quantum Realm Rescue",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/cFQEO687n1K6umXbInzocxcnAQz.jpg",
        "runtime": "118 min",
        "desc": "As Scott Lang balances fatherhood, Hope van Dyne and Dr. Hank Pym present an urgent quantum mission."
      },
      {
        "id": "mcu-iw",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Avengers: Infinity War",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 23,
        "release_order": 19,
        "phase": "MCU Phase 3 • Thanos The Snap",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "149 min",
        "desc": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat Thanos before his blitz of devastation."
      },
      {
        "id": "mcu-endgame",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Avengers: Endgame",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 24,
        "release_order": 22,
        "phase": "Infinity Saga Climax • Time Heist",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "runtime": "181 min",
        "desc": "After the devastating events of Infinity War, the surviving Avengers assemble once more to reverse Thanos' actions."
      },
      {
        "id": "mcu-sm2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Spider-Man: Far From Home",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 25,
        "release_order": 23,
        "phase": "MCU Phase 3 • Post-Blip Europe & Mysterio",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
        "runtime": "129 min",
        "desc": "Following Endgame, Peter Parker steps up to take on new threats during a European school trip."
      },
      {
        "id": "mcu-wandavision",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "WandaVision",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 26,
        "release_order": 24,
        "phase": "MCU Phase 4 • Westview Sitcom Reality",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/ijWWwINc8h71NQ8j1LTJMFSj5wr.jpg",
        "runtime": "9 Episodes",
        "desc": "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems."
      },
      {
        "id": "mcu-falcon",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "The Falcon and the Winter Soldier",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 27,
        "release_order": 25,
        "phase": "MCU Phase 4 • Shield Inheritance & Flag Smashers",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
        "runtime": "6 Episodes",
        "desc": "Sam Wilson and Bucky Barnes team up on a global adventure that tests their abilities and patience."
      },
      {
        "id": "mcu-loki1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Loki — Season 1",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 28,
        "release_order": 26,
        "phase": "MCU Phase 4 • TVA & Sacred Timeline Fracture",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
        "runtime": "6 Episodes",
        "desc": "The mercurial villain Loki resumes his role as God of Mischief after stepping out of his brother's shadow at the TVA."
      },
      {
        "id": "mcu-whatif1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "What If...? — Season 1",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 29,
        "release_order": 27,
        "phase": "MCU Phase 4 • The Watcher Multiverse",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
        "runtime": "9 Episodes",
        "desc": "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head into alternate realities."
      },
      {
        "id": "mcu-shangchi",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Shang-Chi and the Legend of the Ten Rings",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 30,
        "release_order": 28,
        "phase": "MCU Phase 4 • Wuxia Action & Ta Lo",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/9f2Q0U3IOsLgrI2HkvldwSABZy5.jpg",
        "runtime": "132 min",
        "desc": "Shang-Chi is forced to confront his past after being drawn into the mysterious Ten Rings organization."
      },
      {
        "id": "mcu-eternals",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Eternals",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 31,
        "release_order": 29,
        "phase": "MCU Phase 4 • Celestials & 7000 Years",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
        "runtime": "156 min",
        "desc": "The saga of the Eternals, immortal beings who lived on Earth and shaped its history and civilizations."
      },
      {
        "id": "mcu-hawkeye",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Hawkeye",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 32,
        "release_order": 30,
        "phase": "MCU Phase 4 • NYC Christmas & Kate Bishop",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gk35QdXSLd1kDgRS2tyAMIcFQZH.jpg",
        "runtime": "6 Episodes",
        "desc": "Clint Barton teams up with young archer Kate Bishop to confront enemies from his past as Ronin in NYC."
      },
      {
        "id": "mcu-sm3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Spider-Man: No Way Home",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 33,
        "release_order": 31,
        "phase": "MCU Phase 4 • Three Generations of Spider-Men",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "runtime": "148 min",
        "desc": "With Spider-Man's identity revealed, Peter asks Doctor Strange for help, unleashing multiverse villains."
      },
      {
        "id": "mcu-moonknight",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Moon Knight",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 34,
        "release_order": 32,
        "phase": "MCU Phase 4 • Egyptian Khonshu Avatar",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/9K3lbMf8TKvL9xGEbzi7TggWCNQ.jpg",
        "runtime": "6 Episodes",
        "desc": "Steven Grant discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector."
      },
      {
        "id": "mcu-ds2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Doctor Strange in the Multiverse of Madness",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 35,
        "release_order": 33,
        "phase": "MCU Phase 4 • Scarlet Witch & Illuminati",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg",
        "runtime": "126 min",
        "desc": "Doctor Strange teams up with America Chavez to traverse mind-bending alternate realities and battle Wanda Maximoff."
      },
      {
        "id": "mcu-msmarvel",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Ms. Marvel",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 36,
        "release_order": 34,
        "phase": "MCU Phase 4 • Kamala Khan & Noor Bangle",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/3HWWh92kZbD7odwJX7nKmXNZsYo.jpg",
        "runtime": "6 Episodes",
        "desc": "Kamala Khan, a superhero megafan from Jersey City, acquires cosmic powers from an ancient bangle."
      },
      {
        "id": "mcu-thor4",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Thor: Love and Thunder",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 37,
        "release_order": 35,
        "phase": "MCU Phase 4 • Gorr the God Butcher & Mighty Thor",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        "runtime": "119 min",
        "desc": "Thor enlists Valkyrie, Korg and Mighty Thor Jane Foster to battle Gorr who intends to eradicate all gods."
      },
      {
        "id": "mcu-groot1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "I Am Groot — Season 1",
        "year": 2022,
        "media_type": "special",
        "chrono_order": 38,
        "release_order": 36,
        "phase": "MCU Phase 4 • Baby Groot Shorts",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xYclNuEguW38VvE9m4nN6E6yG6b.jpg",
        "runtime": "5 Shorts",
        "desc": "A series of original shorts following Baby Groot's glory days growing up and getting into trouble among the stars."
      },
      {
        "id": "mcu-shehulk",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "She-Hulk: Attorney at Law",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 39,
        "release_order": 37,
        "phase": "MCU Phase 4 • Fourth-Wall Legal Comedy",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/o7n7eBvQ9h7bL1m5j7X5lO7y7b.jpg",
        "runtime": "9 Episodes",
        "desc": "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a 6-foot-7 green Hulk."
      },
      {
        "id": "mcu-werewolf",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Werewolf by Night",
        "year": 2022,
        "media_type": "special",
        "chrono_order": 40,
        "release_order": 38,
        "phase": "MCU Phase 4 • Black & White Monster Special",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mvIvNKRIJPPS7WSFarFhOAGIVnU.jpg",
        "runtime": "52 min",
        "desc": "A secret cabal of monster hunters emerge from the shadows and gather at the foreboding Bloodstone Temple."
      },
      {
        "id": "mcu-bp2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Black Panther: Wakanda Forever",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 41,
        "release_order": 39,
        "phase": "MCU Phase 4 • Talokan Namor Conflict",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        "runtime": "161 min",
        "desc": "Wakanda fights to protect its nation from intervening world powers as they mourn King T'Challa and face Namor."
      },
      {
        "id": "mcu-gotgholiday",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "The Guardians of the Galaxy Holiday Special",
        "year": 2022,
        "media_type": "special",
        "chrono_order": 42,
        "release_order": 40,
        "phase": "MCU Phase 4 • Kevin Bacon Holiday Adventure",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
        "runtime": "44 min",
        "desc": "The Guardians head to Earth in search of the perfect present to make Christmas unforgettable for Peter Quill."
      },
      {
        "id": "mcu-ant3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Ant-Man and the Wasp: Quantumania",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 43,
        "release_order": 41,
        "phase": "MCU Phase 5 • Kang the Conqueror Dynasty",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
        "runtime": "125 min",
        "desc": "Scott Lang and Hope van Dyne explore the Quantum Realm and face Kang the Conqueror."
      },
      {
        "id": "mcu-gotg3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Guardians of the Galaxy Vol. 3",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 44,
        "release_order": 42,
        "phase": "MCU Phase 5 • Rocket Raccoon Farewell",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN2Ydgii51xQ.jpg",
        "runtime": "150 min",
        "desc": "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and save Rocket."
      },
      {
        "id": "mcu-secretinvasion",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Secret Invasion",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 45,
        "release_order": 43,
        "phase": "MCU Phase 5 • Skrull Cold War Espionage",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/3rINdUPSy9AklJg74jWHOyUXuZd.jpg",
        "runtime": "6 Episodes",
        "desc": "Nick Fury learns of a clandestine invasion of Earth by a faction of shapeshifting Skrulls."
      },
      {
        "id": "mcu-loki2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Loki — Season 2",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 46,
        "release_order": 44,
        "phase": "MCU Phase 5 • God of Stories & Temporal Loom",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
        "runtime": "6 Episodes",
        "desc": "Loki navigates an ever-expanding and increasingly dangerous multiverse in search of Sylvie and Miss Minutes."
      },
      {
        "id": "mcu-marvels",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "The Marvels",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 47,
        "release_order": 45,
        "phase": "MCU Phase 5 • Cosmic Entanglement",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3b95YIRuc.jpg",
        "runtime": "105 min",
        "desc": "Carol Danvers gets her powers entangled with Kamala Khan and Monica Rambeau, forcing them to work together."
      },
      {
        "id": "mcu-whatif2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "What If...? — Season 2",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 48,
        "release_order": 46,
        "phase": "MCU Phase 5 • Multiverse Anthology",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
        "runtime": "9 Episodes",
        "desc": "The Watcher continues his journey as our guide through the vast multiverse, introducing brand new faces."
      },
      {
        "id": "mcu-echo",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Echo",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 49,
        "release_order": 47,
        "phase": "MCU Spotlight • Maya Lopez & Kingpin",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/vFyJH630cF68LohVYjQW49074Sy.jpg",
        "runtime": "5 Episodes",
        "desc": "Maya Lopez must face her past, reconnect with her Native American roots and embrace family and community."
      },
      {
        "id": "mcu-whatif3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "What If...? — Season 3",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 50,
        "release_order": 48,
        "phase": "MCU Phase 5 • Final Season of The Watcher",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
        "runtime": "8 Episodes",
        "desc": "The culmination of The Watcher's observations across the multiverse in a thrilling final season."
      },
      {
        "id": "mcu-xmen97-s1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "X-Men '97 — Season 1",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 51,
        "release_order": 49,
        "phase": "Marvel Animation Canon • 90s Revival Peak",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/9k2c8J0Yg7MvGvF2b8L9h6R0w8.jpg",
        "runtime": "10 Episodes",
        "desc": "A band of mutants use their uncanny gifts to protect a world that hates and fears them in this celebrated animated masterpiece."
      },
      {
        "id": "mcu-agatha",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Agatha All Along",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 52,
        "release_order": 50,
        "phase": "MCU Phase 5 • The Witches' Road",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/mGsxKwXUjojitRv2E9qMTbxbBRd.jpg",
        "runtime": "9 Episodes",
        "desc": "Agatha Harkness regains her freedom with the help of a teen who wishes to face the trials of the legendary Witches' Road."
      },
      {
        "id": "mcu-dp3",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Deadpool & Wolverine",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 53,
        "release_order": 51,
        "phase": "MCU Phase 5 • Multiverse Anchor & Void",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        "runtime": "128 min",
        "desc": "Deadpool is offered a place in the MCU by the TVA, but instead recruits a reluctant Wolverine to save his universe."
      },
      {
        "id": "mcu-cap4",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Captain America: Brave New World",
        "year": 2025,
        "media_type": "movie",
        "chrono_order": 54,
        "release_order": 52,
        "phase": "MCU Phase 5 • Red Hulk & Sam Wilson",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/kOVEVeg59E08ipYTg5X4q0b9L7.jpg",
        "runtime": "118 min",
        "desc": "Sam Wilson officially takes the mantle of Captain America and navigates an international espionage crisis."
      },
      {
        "id": "mcu-dd-bornagain1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Daredevil: Born Again — Season 1",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 55,
        "release_order": 53,
        "phase": "MCU Phase 5 • Matt Murdock vs Mayor Fisk",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
        "runtime": "9 Episodes",
        "desc": "Matt Murdock and Wilson Fisk try to leave their alter egos behind, but their pasts inevitably catch up to them in New York."
      },
      {
        "id": "mcu-thunderbolts",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Thunderbolts*",
        "year": 2025,
        "media_type": "movie",
        "chrono_order": 56,
        "release_order": 54,
        "phase": "MCU Phase 5 • Anti-Hero Black Ops",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/uFjW3T9CqD8sBvR9yL5b8GkM0Y.jpg",
        "runtime": "125 min",
        "desc": "A group of reformed antiheroes including Yelena Belova and Bucky Barnes are sent on a dangerous covert mission."
      },
      {
        "id": "mcu-ff-firststeps",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "The Fantastic Four: First Steps",
        "year": 2025,
        "media_type": "movie",
        "chrono_order": 57,
        "release_order": 55,
        "phase": "MCU Phase 6 • 1960s Retro-Future Galactus",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg",
        "runtime": "130 min",
        "desc": "Marvel's First Family—Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm—face cosmic herald Silver Surfer and Galactus."
      },
      {
        "id": "mcu-ironheart",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Ironheart",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 58,
        "release_order": 56,
        "phase": "MCU Phase 5 • Riri Williams Tech vs Magic",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        "runtime": "6 Episodes",
        "desc": "Riri Williams, a brilliant teen inventor who built the most advanced armor since Iron Man, clashes with The Hood."
      },
      {
        "id": "mcu-eyesofwakanda",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Eyes of Wakanda",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 1,
        "release_order": 57,
        "phase": "MCU History • Ancient Wakandan War Dogs",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        "runtime": "4 Episodes",
        "desc": "Throughout Wakandan history, brave warriors are tasked to travel the world retrieving dangerous vibranium artifacts."
      },
      {
        "id": "mcu-marvelzombies",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Marvel Zombies",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 59,
        "release_order": 58,
        "phase": "Marvel Animation • R-Rated Apocalyptic Survival",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
        "runtime": "4 Episodes",
        "desc": "A reimagining of the Marvel Universe where a new generation of heroes must battle against an ever-spreading zombie scourge."
      },
      {
        "id": "mcu-friendlyspider1",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Your Friendly Neighborhood Spider-Man — Season 1",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 60,
        "release_order": 59,
        "phase": "Marvel Animation • Early High School Spidey",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "10 Episodes",
        "desc": "Follows Peter Parker on his way to becoming Spider-Man in the MCU, celebrating early comic-book roots."
      },
      {
        "id": "mcu-wonderman",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Wonder Man — Season 1",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 61,
        "release_order": 60,
        "phase": "MCU Spotlight • Hollywood Satire & Simon Williams",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
        "runtime": "10 Episodes",
        "desc": "Simon Williams, a Hollywood actor and stuntman, gains ionic powers and enters the superhero sphere."
      },
      {
        "id": "mcu-dd-bornagain2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Daredevil: Born Again — Season 2",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 62,
        "release_order": 61,
        "phase": "MCU Phase 6 • Hell's Kitchen Underworld War",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
        "runtime": "9 Episodes",
        "desc": "The next chapter in Matt Murdock's crusade against Kingpin's iron grip on New York City."
      },
      {
        "id": "mcu-punisher-lastkill",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "The Punisher: One Last Kill",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 63,
        "release_order": 62,
        "phase": "MCU Spotlight • Jon Bernthal Frank Castle",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
        "runtime": "Special Series",
        "desc": "Frank Castle returns to exact brutal vigilante justice against an untouchable syndicate."
      },
      {
        "id": "mcu-friendlyspider2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Your Friendly Neighborhood Spider-Man — Season 2",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 64,
        "release_order": 63,
        "phase": "Marvel Animation • Sophomore Year",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "10 Episodes",
        "desc": "Peter Parker's sophomore adventures as Spider-Man facing new classic rogue gallery threats."
      },
      {
        "id": "mcu-xmen97-s2",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "X-Men '97 — Season 2",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 65,
        "release_order": 64,
        "phase": "Marvel Animation Canon • Apocalypse & Future",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/9k2c8J0Yg7MvGvF2b8L9h6R0w8.jpg",
        "runtime": "10 Episodes",
        "desc": "The X-Men pick up the pieces across timelines following the cataclysmic events of the Season 1 finale."
      },
      {
        "id": "mcu-sm4",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Spider-Man: Brand New Day",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 66,
        "release_order": 65,
        "phase": "MCU Phase 6 • Street-Level Spidey & Daredevil",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "runtime": "140 min",
        "desc": "Peter Parker operates as an anonymous street-level vigilante in Manhattan, balancing college and new foes."
      },
      {
        "id": "mcu-visionquest",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "VisionQuest",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 67,
        "release_order": 66,
        "phase": "MCU Phase 6 • White Vision's Identity Search",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/ijWWwINc8h71NQ8j1LTJMFSj5wr.jpg",
        "runtime": "Series",
        "desc": "White Vision explores his newfound memories and synthetic humanity after escaping Westview."
      },
      {
        "id": "mcu-os-carter",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Marvel One-Shot: Agent Carter",
        "year": 2011,
        "media_type": "special",
        "chrono_order": 2.5,
        "release_order": 5.5,
        "phase": "MCU One-Shot • Post-WWII SSR & Zodiac",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fe79VYyLp5ZBstpJ4oukpuUT3B.jpg",
        "runtime": "15 min",
        "desc": "Peggy Carter undertakes a solo mission to retrieve the mysterious Zodiac serum."
      },
      {
        "id": "mcu-os-consultant",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Marvel One-Shot: The Consultant",
        "year": 2011,
        "media_type": "special",
        "chrono_order": 5.1,
        "release_order": 4.5,
        "phase": "MCU One-Shot • Sitwell & Coulson S.H.I.E.L.D.",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpqjqDIfj6.jpg",
        "runtime": "4 min",
        "desc": "Agents Coulson and Sitwell plot to ensure Emil Blonsky is not released to the Avengers Initiative."
      },
      {
        "id": "mcu-os-hammer",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
        "year": 2011,
        "media_type": "special",
        "chrono_order": 6.5,
        "release_order": 4.8,
        "phase": "MCU One-Shot • Agent Coulson Gas Station Fight",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        "runtime": "4 min",
        "desc": "Agent Coulson stops at a convenience store on the way to New Mexico and effortlessly thwarts a robbery."
      },
      {
        "id": "mcu-os-item47",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Marvel One-Shot: Item 47",
        "year": 2012,
        "media_type": "special",
        "chrono_order": 8.5,
        "release_order": 6.5,
        "phase": "MCU One-Shot • Chitauri Gun Bank Robbers",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        "runtime": "12 min",
        "desc": "A down-on-their-luck couple finds a discarded Chitauri gun after the Battle of New York and goes on a crime spree."
      },
      {
        "id": "mcu-os-hailking",
        "sub_universe": "01. MCU — Marvel Cinematic Universe",
        "title": "Marvel One-Shot: All Hail the King",
        "year": 2014,
        "media_type": "special",
        "chrono_order": 9.5,
        "release_order": 8.5,
        "phase": "MCU One-Shot • Trevor Slattery in Seagate Prison",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
        "runtime": "14 min",
        "desc": "Trevor Slattery has become a celebrity in Seagate prison, unaware the real Ten Rings wants a word."
      },
      {
        "id": "def-dd-s1",
        "sub_universe": "02. Defenders Saga",
        "title": "Daredevil — Season 1",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 101,
        "release_order": 101,
        "phase": "Defenders Saga Order #1 • The Man Without Fear",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
        "runtime": "13 Episodes",
        "desc": "Blind lawyer Matt Murdock fights crime in Hell's Kitchen by night, opposing ruthless kingpin Wilson Fisk."
      },
      {
        "id": "def-jj-s1",
        "sub_universe": "02. Defenders Saga",
        "title": "Jessica Jones — Season 1",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 102,
        "release_order": 102,
        "phase": "Defenders Saga Order #2 • Kilgrave Psychological Noir",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/oxnWofiE9fHOgUfs9NJa6nG6NTR.jpg",
        "runtime": "13 Episodes",
        "desc": "Haunted by a traumatic past, private investigator Jessica Jones uses her gifts to find her tormentor Kilgrave."
      },
      {
        "id": "def-dd-s2",
        "sub_universe": "02. Defenders Saga",
        "title": "Daredevil — Season 2",
        "year": 2016,
        "media_type": "series",
        "chrono_order": 103,
        "release_order": 103,
        "phase": "Defenders Saga Order #3 • Punisher & Elektra Hand",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
        "runtime": "13 Episodes",
        "desc": "Matt Murdock is challenged by lethal vigilante Frank Castle while an old flame, Elektra, pulls him into war with The Hand."
      },
      {
        "id": "def-lc-s1",
        "sub_universe": "02. Defenders Saga",
        "title": "Luke Cage — Season 1",
        "year": 2016,
        "media_type": "series",
        "chrono_order": 104,
        "release_order": 104,
        "phase": "Defenders Saga Order #4 • Harlem Bulletproof Hero",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/yzM1hMB3PUJqbISX0f421b3xOjB.jpg",
        "runtime": "13 Episodes",
        "desc": "Given superstrength and unbreakable skin, Luke Cage defends the heart of Harlem against Cottonmouth."
      },
      {
        "id": "def-if-s1",
        "sub_universe": "02. Defenders Saga",
        "title": "Iron Fist — Season 1",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 105,
        "release_order": 105,
        "phase": "Defenders Saga Order #5 • K'un-Lun Return & Danny Rand",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4l6KD9HhtD6nCDEfg10Lp6C6zah.jpg",
        "runtime": "13 Episodes",
        "desc": "After disappearing for fifteen years, Danny Rand returns to NYC to reclaim his family company with the Iron Fist."
      },
      {
        "id": "def-team",
        "sub_universe": "02. Defenders Saga",
        "title": "The Defenders",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 106,
        "release_order": 106,
        "phase": "Defenders Saga Order #6 • Midland Circle Climax",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/g4QCPffsJqElwCu8f1JvvuaRVsc.jpg",
        "runtime": "8 Episodes",
        "desc": "Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up to battle a sinister conspiracy threatening NYC."
      },
      {
        "id": "def-pun-s1",
        "sub_universe": "02. Defenders Saga",
        "title": "The Punisher — Season 1",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 107,
        "release_order": 107,
        "phase": "Defenders Saga Order #7 • Frank Castle Military Conspiracy",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
        "runtime": "13 Episodes",
        "desc": "After exacting revenge on those responsible for the death of his family, Frank Castle uncovers a vast conspiracy."
      },
      {
        "id": "def-jj-s2",
        "sub_universe": "02. Defenders Saga",
        "title": "Jessica Jones — Season 2",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 108,
        "release_order": 108,
        "phase": "Defenders Saga Order #8 • IGH Origin & Mother",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/oxnWofiE9fHOgUfs9NJa6nG6NTR.jpg",
        "runtime": "13 Episodes",
        "desc": "Jessica Jones begins piecing her life back together while digging deep into the shadowy organization IGH."
      },
      {
        "id": "def-lc-s2",
        "sub_universe": "02. Defenders Saga",
        "title": "Luke Cage — Season 2",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 109,
        "release_order": 109,
        "phase": "Defenders Saga Order #9 • Bushmaster & Harlem King",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/yzM1hMB3PUJqbISX0f421b3xOjB.jpg",
        "runtime": "13 Episodes",
        "desc": "With a newfound celebrity status, Luke Cage faces a formidable Jamaican rival named Bushmaster."
      },
      {
        "id": "def-if-s2",
        "sub_universe": "02. Defenders Saga",
        "title": "Iron Fist — Season 2",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 110,
        "release_order": 110,
        "phase": "Defenders Saga Order #10 • Davos & Colleen Wing",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4l6KD9HhtD6nCDEfg10Lp6C6zah.jpg",
        "runtime": "10 Episodes",
        "desc": "Danny Rand fights to keep peace in Chinatown while his former brother Davos plots to steal the Iron Fist."
      },
      {
        "id": "def-dd-s3",
        "sub_universe": "02. Defenders Saga",
        "title": "Daredevil — Season 3",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 111,
        "release_order": 111,
        "phase": "Defenders Saga Order #11 • Bullseye & Fisk Prison Break",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
        "runtime": "13 Episodes",
        "desc": "Missing for months, Matt Murdock reemerges a broken man while Wilson Fisk leaves prison with an FBI agent named Bullseye."
      },
      {
        "id": "def-pun-s2",
        "sub_universe": "02. Defenders Saga",
        "title": "The Punisher — Season 2",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 112,
        "release_order": 112,
        "phase": "Defenders Saga Order #12 • Jigsaw & Pilgrim",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
        "runtime": "13 Episodes",
        "desc": "Former marine Frank Castle lives a quiet life on the road until he is drawn into an assassination attempt on a young girl."
      },
      {
        "id": "def-jj-s3",
        "sub_universe": "02. Defenders Saga",
        "title": "Jessica Jones — Season 3",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 113,
        "release_order": 113,
        "phase": "Defenders Saga Order #13 • Gregory Sallinger Finale",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/oxnWofiE9fHOgUfs9NJa6nG6NTR.jpg",
        "runtime": "13 Episodes",
        "desc": "When Jessica crosses paths with a highly intelligent psychopath, she and Trish must repair their fractured relationship."
      },
      {
        "id": "abc-shield",
        "sub_universe": "03. Marvel Television — ABC",
        "title": "Agents of S.H.I.E.L.D.",
        "year": 2013,
        "media_type": "series",
        "chrono_order": 201,
        "release_order": 201,
        "phase": "ABC Marvel • Phil Coulson & Inhuman Outbreak",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gHUCCMy1vvj58tzE3dZqeC9SXus.jpg",
        "runtime": "7 Seasons (136 Ep)",
        "desc": "Agent Phil Coulson leads a team of elite S.H.I.E.L.D. agents investigating strange and superhuman occurrences worldwide."
      },
      {
        "id": "abc-agentcarter",
        "sub_universe": "03. Marvel Television — ABC",
        "title": "Agent Carter",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 202,
        "release_order": 202,
        "phase": "ABC Marvel • 1946 SSR Espionage",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fe79VYyLp5ZBstpJ4oukpuUT3B.jpg",
        "runtime": "2 Seasons (18 Ep)",
        "desc": "In 1946, Peggy Carter balances administrative work with secret missions for Howard Stark while dealing with Captain America's loss."
      },
      {
        "id": "abc-inhumans",
        "sub_universe": "03. Marvel Television — ABC",
        "title": "Inhumans",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 203,
        "release_order": 203,
        "phase": "ABC Marvel • Attilan Royal Family",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/zKfGip55oJ9tdzhyd9ayGyFFhuo.jpg",
        "runtime": "8 Episodes",
        "desc": "An isolated community of Inhumans with unique powers face a military coup and flee to the lush island of Hawaii."
      },
      {
        "id": "hulu-runaways",
        "sub_universe": "04. Marvel Television — Hulu / FX",
        "title": "Runaways",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 301,
        "release_order": 301,
        "phase": "Hulu Marvel • PRIDE Villain Parents",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/hnHEhbzh0F7kN3Ah1lzRjtQuW16.jpg",
        "runtime": "3 Seasons (33 Ep)",
        "desc": "Six Los Angeles teenagers discover that their parents are secretly members of a villainous society called PRIDE."
      },
      {
        "id": "hulu-cloakdagger",
        "sub_universe": "04. Marvel Television — Hulu / FX",
        "title": "Cloak & Dagger",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 302,
        "release_order": 302,
        "phase": "Freeform / Hulu • Tandy & Tyrone Light and Dark",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/pYnRJuBPEqZO1o4fcxBTgmKNHfy.jpg",
        "runtime": "2 Seasons (20 Ep)",
        "desc": "Two teenagers from very different backgrounds find themselves burdened and awakened to newly acquired superpowers inextricably linked."
      },
      {
        "id": "fx-legion",
        "sub_universe": "04. Marvel Television — Hulu / FX",
        "title": "Legion",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 303,
        "release_order": 303,
        "phase": "FX Masterpiece • David Haller Shadow King",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/xhJtYVTsdXQCIlB5hAXkMCPUG9y.jpg",
        "runtime": "3 Seasons (27 Ep)",
        "desc": "Noah Hawley's visually stunning, mind-bending psychological thriller about Charles Xavier's mutant son David Haller."
      },
      {
        "id": "fx-gifted",
        "sub_universe": "04. Marvel Television — Hulu / FX",
        "title": "The Gifted",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 304,
        "release_order": 304,
        "phase": "Fox / Hulu • Mutant Underground & Sentinel Services",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/zlyqKqRoUv1Y4qBodqMSpdsZARK.jpg",
        "runtime": "2 Seasons (29 Ep)",
        "desc": "In a world where mutants are treated with distrust, an ordinary family goes on the run after discovering their children are mutants."
      },
      {
        "id": "hulu-helstrom",
        "sub_universe": "04. Marvel Television — Hulu / FX",
        "title": "Helstrom",
        "year": 2020,
        "media_type": "series",
        "chrono_order": 305,
        "release_order": 305,
        "phase": "Hulu Marvel • Occult Horror",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/5QmcKsepYpO9XYsWNLwsiULoaAu.jpg",
        "runtime": "10 Episodes",
        "desc": "Daimon and Ana Helstrom, the son and daughter of a mysterious serial killer, hunt the worst of terrorizing humanity."
      },
      {
        "id": "hulu-modok",
        "sub_universe": "04. Marvel Television — Hulu / FX",
        "title": "M.O.D.O.K.",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 306,
        "release_order": 306,
        "phase": "Stop-Motion Adult Comedy • A.I.M. Bankruptcy",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/2kXRzRjQZs9kAIm3K9MkQgsZR9C.jpg",
        "runtime": "10 Episodes",
        "desc": "The megalomaniacal supervillain M.O.D.O.K. struggles to maintain control of his evil organization and demanding family."
      },
      {
        "id": "hulu-hitmonkey",
        "sub_universe": "04. Marvel Television — Hulu / FX",
        "title": "Hit-Monkey",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 307,
        "release_order": 307,
        "phase": "Adult Animation • Tokyo Yakuza Ghost Assassin",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/y3ee57YPBhP8RHadX920UjURAWu.jpg",
        "runtime": "2 Seasons (20 Ep)",
        "desc": "A Japanese snow monkey, mentored by the ghost of an American assassin, goes on a revenge quest through Tokyo's underworld."
      },
      {
        "id": "xm-1",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men",
        "year": 2000,
        "media_type": "movie",
        "chrono_order": 401,
        "release_order": 401,
        "phase": "X-Men Order #1 • Fox Era Genesis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/bRDAc4GogS9GtUdAoJnUPZTr8yp.jpg",
        "runtime": "104 min",
        "desc": "In a world where mutants face discrimination, Wolverine and Rogue find refuge with Professor X's team against Magneto."
      },
      {
        "id": "xm-2",
        "sub_universe": "05. X-Men Universe",
        "title": "X2",
        "year": 2003,
        "media_type": "movie",
        "chrono_order": 402,
        "release_order": 402,
        "phase": "X-Men Order #2 • Stryker War & White House Nightcrawler",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/2L2Gf75v2vP2xY21yM0o0Z3Z4j4.jpg",
        "runtime": "134 min",
        "desc": "When Colonel William Stryker attacks Xavier's school, the X-Men must ally with Magneto to save mutantkind."
      },
      {
        "id": "xm-3",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men: The Last Stand",
        "year": 2006,
        "media_type": "movie",
        "chrono_order": 403,
        "release_order": 403,
        "phase": "X-Men Order #3 • Mutant Cure & Dark Phoenix",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7a92u0BGmKH8nVLkhiCbTwM4w7.jpg",
        "runtime": "104 min",
        "desc": "A cure for mutancy threatens history, forcing a war between Xavier and Magneto while Jean Grey awakens as Phoenix."
      },
      {
        "id": "xm-origins",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men Origins: Wolverine",
        "year": 2009,
        "media_type": "movie",
        "chrono_order": 404,
        "release_order": 404,
        "phase": "X-Men Order #4 • Weapon X & Adamantium",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/yj8Vb2e0Yp4NvhNfA5O0P7q7z1.jpg",
        "runtime": "107 min",
        "desc": "Wolverine's early life with Sabretooth and Colonel Stryker's Team X before the adamantium bonding experiment."
      },
      {
        "id": "xm-fc",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men: First Class",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 405,
        "release_order": 405,
        "phase": "X-Men Order #5 • 1962 Cuban Missile Crisis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/3pTwMUEavOB94aL8V9b8MvM7R0.jpg",
        "runtime": "131 min",
        "desc": "In the 1960s, Charles Xavier and Erik Lensherr work together to form the original X-Men before their ideological split."
      },
      {
        "id": "xm-wolv",
        "sub_universe": "05. X-Men Universe",
        "title": "The Wolverine",
        "year": 2013,
        "media_type": "movie",
        "chrono_order": 406,
        "release_order": 406,
        "phase": "X-Men Order #6 • Japan Silver Samurai",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/9k2c8J0Yg7MvGvF2b8L9h6R0w8.jpg",
        "runtime": "126 min",
        "desc": "Wolverine travels to modern Tokyo, finding himself vulnerable when stripped of his healing factor by a dying industrialist."
      },
      {
        "id": "xm-dofp",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men: Days of Future Past",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 407,
        "release_order": 407,
        "phase": "X-Men Order #7 • 1973 Reset & Sentinels Dystopia",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tK1dU02v0R12vL7v6a1m3Z5e7x.jpg",
        "runtime": "132 min",
        "desc": "Wolverine is sent back in time to 1973 to prevent an assassination that leads to the Sentinel apocalypse."
      },
      {
        "id": "xm-dp1",
        "sub_universe": "05. X-Men Universe",
        "title": "Deadpool",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 408,
        "release_order": 408,
        "phase": "X-Men Order #8 • R-Rated Merc with a Mouth",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsRIv4.jpg",
        "runtime": "108 min",
        "desc": "Wade Wilson undergoes a rogue experiment that leaves him with accelerated healing powers and a dark sense of humor."
      },
      {
        "id": "xm-apoc",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men: Apocalypse",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 409,
        "release_order": 409,
        "phase": "X-Men Order #9 • 1983 En Sabah Nur Four Horsemen",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/bBinEcUhBikc2y2q7U5Q0jY7y0B.jpg",
        "runtime": "144 min",
        "desc": "The X-Men must unite to defeat the ancient Egyptian mutant En Sabah Nur who plans to cleanse humanity."
      },
      {
        "id": "xm-logan",
        "sub_universe": "05. X-Men Universe",
        "title": "Logan",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 410,
        "release_order": 410,
        "phase": "X-Men Order #10 • 2029 Swansong & Laura Kinney",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
        "runtime": "137 min",
        "desc": "In an apocalyptic 2029 where mutants are nearly extinct, a weary Logan cares for an ailing Professor X and young Laura."
      },
      {
        "id": "xm-dp2",
        "sub_universe": "05. X-Men Universe",
        "title": "Deadpool 2",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 411,
        "release_order": 411,
        "phase": "X-Men Order #11 • Cable & X-Force Assembly",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbvn99F41m1O2d.jpg",
        "runtime": "119 min",
        "desc": "Deadpool forms the ragtag X-Force to protect a young mutant boy from time-traveling cybernetic soldier Cable."
      },
      {
        "id": "xm-dp",
        "sub_universe": "05. X-Men Universe",
        "title": "Dark Phoenix",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 412,
        "release_order": 412,
        "phase": "X-Men Order #12 • 1992 Space Flare & Jean Grey",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/cCTjpXZ9hgAAJvje3URScEZVO9u.jpg",
        "runtime": "113 min",
        "desc": "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix."
      },
      {
        "id": "xm-nm",
        "sub_universe": "05. X-Men Universe",
        "title": "The New Mutants",
        "year": 2020,
        "media_type": "movie",
        "chrono_order": 413,
        "release_order": 413,
        "phase": "X-Men Order #13 • Demon Bear Hospital Horror",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xrIaaepj3Y38x0A1m3Z5e7x0BqD.jpg",
        "runtime": "94 min",
        "desc": "Five teenage mutants, held in a secret facility against their will, must battle their pasts to save themselves."
      },
      {
        "id": "xm-animated-classic",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men: The Animated Series",
        "year": 1992,
        "media_type": "series",
        "chrono_order": 414,
        "release_order": 414,
        "phase": "Classic 90s Cartoon Network • Legendary Theme",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/bRDAc4GogS9GtUdAoJnUPZTr8yp.jpg",
        "runtime": "5 Seasons (76 Ep)",
        "desc": "The definitive 90s animated adaptation of the X-Men comics featuring Cyclops, Wolverine, Rogue, and Storm."
      },
      {
        "id": "xm-watxm",
        "sub_universe": "05. X-Men Universe",
        "title": "Wolverine and the X-Men",
        "year": 2009,
        "media_type": "series",
        "chrono_order": 415,
        "release_order": 415,
        "phase": "Animated Cult Gem • Future Professor X",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/yj8Vb2e0Yp4NvhNfA5O0P7q7z1.jpg",
        "runtime": "26 Episodes",
        "desc": "Wolverine must reunite the scattered X-Men after a devastating explosion destroys the Xavier Institute."
      },
      {
        "id": "xm-xmen97-series",
        "sub_universe": "05. X-Men Universe",
        "title": "X-Men '97",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 416,
        "release_order": 416,
        "phase": "Modern Marvel Animation Masterpiece",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/9k2c8J0Yg7MvGvF2b8L9h6R0w8.jpg",
        "runtime": "Seasons 1–2",
        "desc": "Direct continuation of the legendary 1992 series produced by Marvel Animation to universal acclaim."
      },
      {
        "id": "sm-raim1",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man",
        "year": 2002,
        "media_type": "movie",
        "chrono_order": 501,
        "release_order": 501,
        "phase": "Spider-Man Order #1 • Sam Raimi & Green Goblin",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gh4c2bk1Fuq64UmSpVIamIfmpAL.jpg",
        "runtime": "121 min",
        "desc": "After being bitten by a genetically-modified spider, Peter Parker learns that with great power comes great responsibility."
      },
      {
        "id": "sm-raim2",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man 2",
        "year": 2004,
        "media_type": "movie",
        "chrono_order": 502,
        "release_order": 502,
        "phase": "Spider-Man Order #2 • Doctor Octopus Masterpiece",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/olxpyq9MgrMl3Tfqq4ulINK0UsP.jpg",
        "runtime": "127 min",
        "desc": "Peter Parker battles personal crises while facing brilliant scientist Doctor Otto Octavius and his mechanical arms."
      },
      {
        "id": "sm-raim3",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man 3",
        "year": 2007,
        "media_type": "movie",
        "chrono_order": 503,
        "release_order": 503,
        "phase": "Spider-Man Order #3 • Black Symbiote, Sandman & Venom",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/2jLxvdffq12qW4H81q6f3Y207u0.jpg",
        "runtime": "139 min",
        "desc": "A strange black extraterrestrial entity bonds with Peter Parker, altering his personality while Sandman and Venom strike."
      },
      {
        "id": "sm-tasm1",
        "sub_universe": "06. Spider-Man",
        "title": "The Amazing Spider-Man",
        "year": 2012,
        "media_type": "movie",
        "chrono_order": 504,
        "release_order": 504,
        "phase": "Spider-Man Order #4 • Andrew Garfield & The Lizard",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fSbkkXQxLz12rGz9nK8x3Y207u0.jpg",
        "runtime": "136 min",
        "desc": "Peter Parker investigates his father's mysterious Oscorp past, leading to a clash with Dr. Curt Connors' Lizard."
      },
      {
        "id": "sm-tasm2",
        "sub_universe": "06. Spider-Man",
        "title": "The Amazing Spider-Man 2",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 505,
        "release_order": 505,
        "phase": "Spider-Man Order #5 • Electro & Clock Tower Tragedy",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/c3e98xZ7kX7eY6eZ8B9C1A7x0Bq.jpg",
        "runtime": "142 min",
        "desc": "Peter Parker squares off against Electro and Green Goblin Harry Osborn with tragic consequences for Gwen Stacy."
      },
      {
        "id": "sm-mcu-hc",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: Homecoming",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 506,
        "release_order": 506,
        "phase": "Spider-Man Order #6 • MCU Vulture & Tony Stark",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "133 min",
        "desc": "Peter Parker balances life as an ordinary Queens high schooler with superhero alter-ego under Tony Stark's guidance."
      },
      {
        "id": "sm-sv1",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: Into the Spider-Verse",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 507,
        "release_order": 507,
        "phase": "Spider-Man Order #7 • Miles Morales Oscar Winner",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        "runtime": "117 min",
        "desc": "Brooklyn teen Miles Morales becomes the new Spider-Man and meets five alternate-dimension counterparts."
      },
      {
        "id": "sm-mcu-ffh",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: Far From Home",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 508,
        "release_order": 508,
        "phase": "Spider-Man Order #8 • Post-Endgame Europe & Mysterio",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
        "runtime": "129 min",
        "desc": "Peter Parker takes on new elemental threats alongside Quentin Beck in Europe, culminating in a world-changing reveal."
      },
      {
        "id": "sm-mcu-nwh",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: No Way Home",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 509,
        "release_order": 509,
        "phase": "Spider-Man Order #9 • Three Spider-Men Crossover",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "runtime": "148 min",
        "desc": "Peter asks Doctor Strange to make the world forget his identity, accidentally cracking open the multiverse."
      },
      {
        "id": "sm-sv2",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: Across the Spider-Verse",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 510,
        "release_order": 510,
        "phase": "Spider-Man Order #10 • Miguel O'Hara & Spider-Society",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "runtime": "140 min",
        "desc": "Miles Morales catapults across the multiverse, clashing with Miguel O'Hara over what it truly means to be a hero."
      },
      {
        "id": "sm-brandnewday",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: Brand New Day",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 511,
        "release_order": 511,
        "phase": "Spider-Man Order #11 • New NYC Era",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "runtime": "140 min",
        "desc": "The beginning of Peter Parker's college trilogy as he balances civilian anonymity with relentless New York crime."
      },
      {
        "id": "sm-beyond",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: Beyond the Spider-Verse",
        "year": 2027,
        "media_type": "movie",
        "chrono_order": 512,
        "release_order": 512,
        "phase": "Spider-Verse Trilogy Finale • Earth-42 Climax",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "runtime": "140 min",
        "desc": "Miles Morales and Gwen Stacy's band of Spider-Rebels face The Spot and Miles G. Morales on Earth-42."
      },
      {
        "id": "sm-tas-90s",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man: The Animated Series",
        "year": 1994,
        "media_type": "series",
        "chrono_order": 513,
        "release_order": 513,
        "phase": "Classic 90s Spidey • Kingpin & Neogenic Nightmare",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gh4c2bk1Fuq64UmSpVIamIfmpAL.jpg",
        "runtime": "5 Seasons (65 Ep)",
        "desc": "The beloved 90s animated series featuring Christopher Daniel Barnes as Peter Parker in NYC."
      },
      {
        "id": "sm-unlimited",
        "sub_universe": "06. Spider-Man",
        "title": "Spider-Man Unlimited",
        "year": 1999,
        "media_type": "series",
        "chrono_order": 514,
        "release_order": 514,
        "phase": "Counter-Earth Cyberpunk Spidey",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "13 Episodes",
        "desc": "Spider-Man travels to Counter-Earth to rescue John Jameson, fighting High Evolutionary's Bestials with a nanotech suit."
      },
      {
        "id": "sm-spectacular",
        "sub_universe": "06. Spider-Man",
        "title": "The Spectacular Spider-Man",
        "year": 2008,
        "media_type": "series",
        "chrono_order": 515,
        "release_order": 515,
        "phase": "Greg Weisman Masterpiece • High School Pinnacle",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/olxpyq9MgrMl3Tfqq4ulINK0UsP.jpg",
        "runtime": "2 Seasons (26 Ep)",
        "desc": "Critically acclaimed animated adaptation showcasing Peter Parker's formative high school struggles and villains."
      },
      {
        "id": "sm-ultimate",
        "sub_universe": "06. Spider-Man",
        "title": "Ultimate Spider-Man",
        "year": 2012,
        "media_type": "series",
        "chrono_order": 516,
        "release_order": 516,
        "phase": "S.H.I.E.L.D. Teen Trainee Team",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fSbkkXQxLz12rGz9nK8x3Y207u0.jpg",
        "runtime": "4 Seasons (104 Ep)",
        "desc": "Nick Fury recruits Spider-Man to train alongside teenage heroes Nova, White Tiger, Iron Fist, and Power Man."
      },
      {
        "id": "sm-marvel2017",
        "sub_universe": "06. Spider-Man",
        "title": "Marvel's Spider-Man",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 517,
        "release_order": 517,
        "phase": "Horizon High Science Prodigy",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "3 Seasons (64 Ep)",
        "desc": "Peter Parker enrolls at Horizon High, a prestigious academy for geniuses, while safeguarding Manhattan."
      },
      {
        "id": "sm-friendlyneighbor",
        "sub_universe": "06. Spider-Man",
        "title": "Your Friendly Neighborhood Spider-Man",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 518,
        "release_order": 518,
        "phase": "Marvel Studios Animation Canon",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "2 Seasons",
        "desc": "An innovative animated journey celebrating the comic origins of Peter Parker with Norman Osborn as mentor."
      },
      {
        "id": "ssu-venom1",
        "sub_universe": "07. Sony's Spider-Man Universe",
        "title": "Venom",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 601,
        "release_order": 601,
        "phase": "SSU • Tom Hardy & Eddie Brock Lethal Protector",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL2544aKQiGhMv2mFu.jpg",
        "runtime": "112 min",
        "desc": "A failed reporter bonds with an alien symbiote and together they become the lethal protector Venom."
      },
      {
        "id": "ssu-venom2",
        "sub_universe": "07. Sony's Spider-Man Universe",
        "title": "Venom: Let There Be Carnage",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 602,
        "release_order": 602,
        "phase": "SSU • Cletus Kasady & Red Symbiote Carnage",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/1I5F5aGg4vXqO9b7x0BqD9L34.jpg",
        "runtime": "97 min",
        "desc": "Eddie Brock attempts to interview serial killer Cletus Kasady, who becomes host to the chaotic Carnage."
      },
      {
        "id": "ssu-morbius",
        "sub_universe": "07. Sony's Spider-Man Universe",
        "title": "Morbius",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 603,
        "release_order": 603,
        "phase": "SSU • The Living Vampire & Jared Leto",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/Av8Z2jZhEm1FLkFzMThzz9hndJF.jpg",
        "runtime": "104 min",
        "desc": "Dr. Michael Morbius, dangerously ill with a rare blood disorder, cures himself with bat DNA, turning into a living vampire."
      },
      {
        "id": "ssu-madameweb",
        "sub_universe": "07. Sony's Spider-Man Universe",
        "title": "Madame Web",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 604,
        "release_order": 604,
        "phase": "SSU • Clairvoyant Web of Fate",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
        "runtime": "116 min",
        "desc": "Cassandra Webb develops clairvoyant abilities and protects three young women hunted by an adversary."
      },
      {
        "id": "ssu-venom3",
        "sub_universe": "07. Sony's Spider-Man Universe",
        "title": "Venom: The Last Dance",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 605,
        "release_order": 605,
        "phase": "SSU • Knull Symbiote Climax",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/k42OwCU899W41V93g24gX2Mh.jpg",
        "runtime": "110 min",
        "desc": "Eddie and Venom are on the run from both of their worlds as Knull's monstrous Xenophages invade Earth."
      },
      {
        "id": "ssu-kraven",
        "sub_universe": "07. Sony's Spider-Man Universe",
        "title": "Kraven the Hunter",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 606,
        "release_order": 606,
        "phase": "SSU • R-Rated Apex Predator",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/1GvBhRxY6MELDfxFrete6BNhBB5.jpg",
        "runtime": "127 min",
        "desc": "Russian immigrant Sergei Kravinoff embarks on a mission to prove that he is the greatest hunter in the world."
      },
      {
        "id": "ff-1994",
        "sub_universe": "08. Fantastic Four",
        "title": "The Fantastic Four (1994)",
        "year": 1994,
        "media_type": "movie",
        "chrono_order": 701,
        "release_order": 701,
        "phase": "Roger Corman Cult Classic",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4YMcYEFS8sFuW3soP1HVmgR3cSm.jpg",
        "runtime": "90 min",
        "desc": "Four astronauts gain superpowers after being bombarded by cosmic rays and battle Dr. Doom in this legendary unreleased film."
      },
      {
        "id": "ff-2005",
        "sub_universe": "08. Fantastic Four",
        "title": "Fantastic Four",
        "year": 2005,
        "media_type": "movie",
        "chrono_order": 702,
        "release_order": 702,
        "phase": "Fox Era • Cosmic Ray Genesis & Dr. Doom",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/4YMcYEFS8sFuW3soP1HVmgR3cSm.jpg",
        "runtime": "106 min",
        "desc": "A group of four astronauts gain extraordinary superpowers after cosmic radiation exposure and oppose Doctor Doom."
      },
      {
        "id": "ff-2007",
        "sub_universe": "08. Fantastic Four",
        "title": "Fantastic Four: Rise of the Silver Surfer",
        "year": 2007,
        "media_type": "movie",
        "chrono_order": 703,
        "release_order": 703,
        "phase": "Fox Era • Galactus Herald Silver Surfer",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/9wRfzTcMyyzkQxVDqBHv8RwuZOv.jpg",
        "runtime": "92 min",
        "desc": "The Fantastic Four square off against the powerful Silver Surfer and the planet-consuming entity Galactus."
      },
      {
        "id": "ff-2015",
        "sub_universe": "08. Fantastic Four",
        "title": "Fantastic Four",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 704,
        "release_order": 704,
        "phase": "Josh Trank • Planet Zero Dark Reboot",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/cDroz5qSlP8xZ6tOpeYoPkBvKyL.jpg",
        "runtime": "100 min",
        "desc": "Four young scientists teleport to an alternate dimension, altering their physical forms in shocking ways."
      },
      {
        "id": "ff-2025-mcu",
        "sub_universe": "08. Fantastic Four",
        "title": "The Fantastic Four: First Steps",
        "year": 2025,
        "media_type": "movie",
        "chrono_order": 705,
        "release_order": 705,
        "phase": "MCU Phase 6 • Retro-Futuristic 1960s",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg",
        "runtime": "130 min",
        "desc": "Pedro Pascal stars as Reed Richards alongside Sue, Johnny, and Ben as Marvel's First Family joins the MCU."
      },
      {
        "id": "blade-1",
        "sub_universe": "09. Blade",
        "title": "Blade",
        "year": 1998,
        "media_type": "movie",
        "chrono_order": 801,
        "release_order": 801,
        "phase": "Wesley Snipes • R-Rated Marvel Pioneer",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/3UhpYn0BqD9L343p5M9eZ8A1m3Z.jpg",
        "runtime": "120 min",
        "desc": "A half-vampire, half-mortal man becomes a protector of humanity while slaying an evil cadre of vampires led by Deacon Frost."
      },
      {
        "id": "blade-2",
        "sub_universe": "09. Blade",
        "title": "Blade II",
        "year": 2002,
        "media_type": "movie",
        "chrono_order": 802,
        "release_order": 802,
        "phase": "Guillermo del Toro • The Reaper Mutants",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/wAn6VYamKbnOtfyTZ6arVtkMzDv.jpg",
        "runtime": "117 min",
        "desc": "Blade forms an alliance with the vampire Bloodpack to combat the Reapers, super-vampires who prey on both humans and vampires."
      },
      {
        "id": "blade-3",
        "sub_universe": "09. Blade",
        "title": "Blade: Trinity",
        "year": 2004,
        "media_type": "movie",
        "chrono_order": 803,
        "release_order": 803,
        "phase": "Nightstalkers & Drake Dracula",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6f7iXvPOnf83MaLB1JmPzUor1rr.jpg",
        "runtime": "113 min",
        "desc": "Blade joins forces with the human vigilante group Nightstalkers to take down the progenitor of all vampires: Dracula."
      },
      {
        "id": "blade-series",
        "sub_universe": "09. Blade",
        "title": "Blade: The Series",
        "year": 2006,
        "media_type": "series",
        "chrono_order": 804,
        "release_order": 804,
        "phase": "Spike TV • Sticky Fingaz Detroit Vampire War",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/3UhpYn0BqD9L343p5M9eZ8A1m3Z.jpg",
        "runtime": "12 Episodes",
        "desc": "Blade returns to Detroit where he teams up with a former army soldier to infiltrate the vampire House of Chthon."
      },
      {
        "id": "gr-1",
        "sub_universe": "10. Ghost Rider",
        "title": "Ghost Rider",
        "year": 2007,
        "media_type": "movie",
        "chrono_order": 901,
        "release_order": 901,
        "phase": "Nicolas Cage • Mephistopheles Blood Pact",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/4quwR1VwZouD0YF9AaD72kQAjxH.jpg",
        "runtime": "110 min",
        "desc": "Stunt motorcyclist Johnny Blaze gives up his soul to become a hellblazing vigilante and fight Blackheart."
      },
      {
        "id": "gr-2",
        "sub_universe": "10. Ghost Rider",
        "title": "Ghost Rider: Spirit of Vengeance",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 902,
        "release_order": 902,
        "phase": "Neveldine & Taylor • Kinetic Hellfire",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xEoBT6lYfQNpSpTm8gJMTrQytiw.jpg",
        "runtime": "96 min",
        "desc": "Johnny Blaze is summoned in Eastern Europe to stop the devil, who is trying to take human form through a young boy."
      },
      {
        "id": "gr-shield-arc",
        "sub_universe": "10. Ghost Rider",
        "title": "Agents of S.H.I.E.L.D. — Ghost Rider Arc",
        "year": 2016,
        "media_type": "series",
        "chrono_order": 903,
        "release_order": 903,
        "phase": "Robbie Reyes • The '69 Dodge Charger Hellcharger",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gHUCCMy1vvj58tzE3dZqeC9SXus.jpg",
        "runtime": "Season 4 Arc (10 Ep)",
        "desc": "Gabriel Luna stars as Robbie Reyes, the Los Angeles Ghost Rider who wields supernatural vengeance alongside S.H.I.E.L.D."
      },
      {
        "id": "dd-film-2003",
        "sub_universe": "11. Daredevil — Film",
        "title": "Daredevil",
        "year": 2003,
        "media_type": "movie",
        "chrono_order": 1001,
        "release_order": 1001,
        "phase": "Mark Steven Johnson • Ben Affleck, Elektra & Bullseye",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/cij4dd21v2R102vCWSiE5qB08H0.jpg",
        "runtime": "103 min",
        "desc": "A man blinded by toxic waste which heightened his remaining senses fights crime as an acrobatic martial arts superhero."
      },
      {
        "id": "hulk-2003",
        "sub_universe": "12. Hulk",
        "title": "Hulk",
        "year": 2003,
        "media_type": "movie",
        "chrono_order": 1101,
        "release_order": 1101,
        "phase": "Ang Lee Masterpiece • Comic Split-Screen Aesthetic",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/UllIft2jLSBaay3zQyMV4GNdfy.jpg",
        "runtime": "138 min",
        "desc": "Bruce Banner, a genetics researcher with a tragic past, suffers an accident that causes him to transform into a raging green monster."
      },
      {
        "id": "hulk-mcu-2008",
        "sub_universe": "12. Hulk",
        "title": "The Incredible Hulk",
        "year": 2008,
        "media_type": "movie",
        "chrono_order": 1102,
        "release_order": 1102,
        "phase": "Louis Leterrier • Edward Norton vs Abomination",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
        "runtime": "112 min",
        "desc": "Bruce Banner pursues a cure for gamma contamination while hunted by General Ross and the monstrous Abomination in Harlem."
      },
      {
        "id": "pun-1989",
        "sub_universe": "13. Punisher",
        "title": "The Punisher (1989)",
        "year": 1989,
        "media_type": "movie",
        "chrono_order": 1201,
        "release_order": 1201,
        "phase": "Dolph Lundgren • 80s Sewer Vigilante",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
        "runtime": "89 min",
        "desc": "When Frank Castle's family is murdered by criminals, he wages a one-man war on the entire mob from the sewers."
      },
      {
        "id": "pun-2004",
        "sub_universe": "13. Punisher",
        "title": "The Punisher (2004)",
        "year": 2004,
        "media_type": "movie",
        "chrono_order": 1202,
        "release_order": 1202,
        "phase": "Thomas Jane • Tampa Revenge & John Travolta",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
        "runtime": "124 min",
        "desc": "An undercover FBI agent becomes a relentless vigilante after his entire family is slaughtered by corrupt businessman Howard Saint."
      },
      {
        "id": "pun-warzone",
        "sub_universe": "13. Punisher",
        "title": "Punisher: War Zone",
        "year": 2008,
        "media_type": "movie",
        "chrono_order": 1203,
        "release_order": 1203,
        "phase": "Ray Stevenson • Ultra-Violent R-Rated Cult Classic",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
        "runtime": "103 min",
        "desc": "Frank Castle wages war on disfigured mob boss Jigsaw in Lexi Alexander's unapologetic, neon-soaked comic-book bloodbath."
      },
      {
        "id": "pun-bernthal-series",
        "sub_universe": "13. Punisher",
        "title": "The Punisher (2017–2019)",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 1204,
        "release_order": 1204,
        "phase": "Jon Bernthal • Definitive Modern Castle",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
        "runtime": "2 Seasons (26 Ep)",
        "desc": "The critically acclaimed Netflix series following Frank Castle's war against military corruption and Jigsaw."
      },
      {
        "id": "ani-av-united",
        "sub_universe": "14. Marvel Animation",
        "title": "The Avengers: United They Stand",
        "year": 1999,
        "media_type": "series",
        "chrono_order": 1301,
        "release_order": 1301,
        "phase": "Fox Kids • High-Tech Armor Avengers",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        "runtime": "13 Episodes",
        "desc": "An animated adaptation featuring Ant-Man, Wasp, Hawkeye, and Falcon fighting Ultron and Kang in cybernetic armor suits."
      },
      {
        "id": "ani-av-emh",
        "sub_universe": "14. Marvel Animation",
        "title": "Avengers: Earth's Mightiest Heroes",
        "year": 2010,
        "media_type": "series",
        "chrono_order": 1302,
        "release_order": 1302,
        "phase": "The Gold Standard • Comic Faithful Masterpiece",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        "runtime": "2 Seasons (52 Ep)",
        "desc": "After 75 of the world's most dangerous villains escape, Earth's Mightiest Heroes join forces to form the Avengers."
      },
      {
        "id": "ani-av-assemble",
        "sub_universe": "14. Marvel Animation",
        "title": "Avengers Assemble",
        "year": 2013,
        "media_type": "series",
        "chrono_order": 1303,
        "release_order": 1303,
        "phase": "Disney XD • MCU-Inspired Ongoing Action",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
        "runtime": "5 Seasons (127 Ep)",
        "desc": "Iron Man reunites the Avengers at Avengers Tower to protect the world from Thanos, Ultron, and the Squadron Supreme."
      },
      {
        "id": "ani-gotg-series",
        "sub_universe": "14. Marvel Animation",
        "title": "Guardians of the Galaxy",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 1304,
        "release_order": 1304,
        "phase": "Disney XD • Cosmic Rock 'n' Roll Adventures",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXOsLbtMAW.jpg",
        "runtime": "3 Seasons (79 Ep)",
        "desc": "Star-Lord, Gamora, Drax, Rocket, and Groot safeguard the cosmos from Ronan, Thanos, and the Collector."
      },
      {
        "id": "ani-moongirl",
        "sub_universe": "14. Marvel Animation",
        "title": "Marvel's Moon Girl and Devil Dinosaur",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 1305,
        "release_order": 1305,
        "phase": "Disney Animation • Emmy Winner Visual Splendor",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "2 Seasons (30 Ep)",
        "desc": "13-year-old super-genius Lunella Lafayette accidentally brings a ten-ton T-Rex to modern New York City."
      },
      {
        "id": "ani-spidey-friends",
        "sub_universe": "14. Marvel Animation",
        "title": "Marvel's Spidey and His Amazing Friends",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 1306,
        "release_order": 1306,
        "phase": "Disney Junior • Young Superhero Team-Up",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "runtime": "Ongoing Series",
        "desc": "Spidey teams up with Ghost-Spider and Miles Morales to save the neighborhood with the help of Hulk and Ms. Marvel."
      },
      {
        "id": "ani-ironman-armored",
        "sub_universe": "14. Marvel Animation",
        "title": "Iron Man: Armored Adventures",
        "year": 2008,
        "media_type": "series",
        "chrono_order": 1307,
        "release_order": 1307,
        "phase": "Teen Prodigy Tony Stark CGI Action",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        "runtime": "2 Seasons (52 Ep)",
        "desc": "Teenager Tony Stark uses his revolutionary suit of armor to solve the mystery of his father's plane crash."
      },
      {
        "id": "ani-silversurfer",
        "sub_universe": "14. Marvel Animation",
        "title": "Silver Surfer",
        "year": 1998,
        "media_type": "series",
        "chrono_order": 1308,
        "release_order": 1308,
        "phase": "Jack Kirby Cosmic Animation Style",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/9wRfzTcMyyzkQxVDqBHv8RwuZOv.jpg",
        "runtime": "13 Episodes",
        "desc": "Norrin Radd rebels against Galactus to search for his lost home world Zenn-La across the cosmos."
      },
      {
        "id": "ani-ff-90s",
        "sub_universe": "14. Marvel Animation",
        "title": "Fantastic Four (1994–1996)",
        "year": 1994,
        "media_type": "series",
        "chrono_order": 1309,
        "release_order": 1309,
        "phase": "Marvel Action Hour 90s Series",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4YMcYEFS8sFuW3soP1HVmgR3cSm.jpg",
        "runtime": "2 Seasons (26 Ep)",
        "desc": "The Fantastic Four battle Doctor Doom, Sub-Mariner, and Galactus in this classic 90s animated series."
      },
      {
        "id": "ani-hulk-90s",
        "sub_universe": "14. Marvel Animation",
        "title": "The Incredible Hulk (1996–1998)",
        "year": 1996,
        "media_type": "series",
        "chrono_order": 1310,
        "release_order": 1310,
        "phase": "Lou Ferrigno Voice & Dark Gamma Lore",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
        "runtime": "2 Seasons (21 Ep)",
        "desc": "Bruce Banner travels across America searching for a cure while pursued by General Ross and the Leader."
      },
      {
        "id": "ani-hulk-smash",
        "sub_universe": "14. Marvel Animation",
        "title": "Hulk and the Agents of S.M.A.S.H.",
        "year": 2013,
        "media_type": "series",
        "chrono_order": 1311,
        "release_order": 1311,
        "phase": "Hulk Family • She-Hulk, A-Bomb & Red Hulk",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
        "runtime": "2 Seasons (52 Ep)",
        "desc": "Hulk teams up with She-Hulk, A-Bomb, Red Hulk, and Skaar to tackle threats too big for other superheroes."
      },
      {
        "id": "ani-marvel-rising",
        "sub_universe": "14. Marvel Animation",
        "title": "Marvel Rising",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 1312,
        "release_order": 1312,
        "phase": "Secret Warriors • Ms. Marvel, Squirrel Girl & Ghost-Spider",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/3HWWh92kZbD7odwJX7nKmXNZsYo.jpg",
        "runtime": "Animation Specials",
        "desc": "A generation of diverse heroes team up to prove that sometimes great power comes with being young and fierce."
      },
      {
        "id": "spec-iamgroot",
        "sub_universe": "15. Marvel Special / Short-Form",
        "title": "I Am Groot",
        "year": 2022,
        "media_type": "special",
        "chrono_order": 1401,
        "release_order": 1401,
        "phase": "Photorealistic Baby Groot Vignettes",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xYclNuEguW38VvE9m4nN6E6yG6b.jpg",
        "runtime": "10 Shorts (2 Seasons)",
        "desc": "Baby Groot's misadventures exploring the galaxy and getting into humorous mischief."
      },
      {
        "id": "spec-whih",
        "sub_universe": "15. Marvel Special / Short-Form",
        "title": "WHIH Newsfront",
        "year": 2015,
        "media_type": "special",
        "chrono_order": 1402,
        "release_order": 1402,
        "phase": "In-Universe Broadcasts with Christine Everhart",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
        "runtime": "Web Series",
        "desc": "In-universe viral news broadcasts chronicling the events of the Ant-Man heist and Captain America: Civil War."
      },
      {
        "id": "spec-slingshot",
        "sub_universe": "15. Marvel Special / Short-Form",
        "title": "Agents of S.H.I.E.L.D.: Slingshot",
        "year": 2016,
        "media_type": "special",
        "chrono_order": 1403,
        "release_order": 1403,
        "phase": "Yo-Yo Rodriguez Inhuman Web Miniseries",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gHUCCMy1vvj58tzE3dZqeC9SXus.jpg",
        "runtime": "6 Webisodes",
        "desc": "Yo-Yo Rodriguez undergoes a solo secret mission in Colombia before signing the Sokovia Accords."
      },
      {
        "id": "spec-dailybugle",
        "sub_universe": "15. Marvel Special / Short-Form",
        "title": "The Daily Bugle",
        "year": 2019,
        "media_type": "special",
        "chrono_order": 1404,
        "release_order": 1404,
        "phase": "J. Jonah Jameson & Peter Parker Exposed",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "runtime": "TikTok / Web Series",
        "desc": "J.K. Simmons rants as J. Jonah Jameson running The Daily Bugle news website, smearing Spider-Man."
      },
      {
        "id": "spec-legends",
        "sub_universe": "15. Marvel Special / Short-Form",
        "title": "Marvel Studios: Legends",
        "year": 2021,
        "media_type": "special",
        "chrono_order": 1405,
        "release_order": 1405,
        "phase": "Character Retrospectives Before New MCU Releases",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "runtime": "2 Seasons (40+ Clips)",
        "desc": "Official recap clips celebrating the individual heroes and villains of the Marvel Cinematic Universe."
      }
    ]
  },
  {
    "id": "dc-universe",
    "name": "DC Multiverse & Elseworlds",
    "badge": "23 CANON BRANCHES • DCU, DCEU, BATMAN, SUPERMAN, DCAU, DCAMU & VERTIGO",
    "icon": "🦇",
    "theme_color": "#0078F0",
    "tagline": "The complete DC Multiverse: James Gunn's DCU, the Snyderverse DCEU, classic Gotham sagas, DCAU/DCAMU animation, and Vertigo dark legends.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    "why_watch": "Spanning more than 80 years of heroic legacy, gods, monsters, vigilantes, and alternate timelines across 130+ iconic productions.",
    "sub_universes": [
      "All DC",
      "01. DC Universe (DCU) — Gods & Monsters",
      "02. DCEU — DC Extended Universe",
      "03. Batman",
      "04. Superman",
      "05. Wonder Woman",
      "06. Justice League",
      "07. DC Animated Universe — DCAU",
      "08. DC Animated Movie Universe — DCAMU",
      "09. Tomorrowverse",
      "10. Arrowverse",
      "11. Gotham / Batman TV",
      "12. Titans / Doom Patrol",
      "13. Watchmen",
      "14. Joker",
      "15. DC Elseworlds",
      "16. DC Animation — Other Major Universes",
      "17. Suicide Squad",
      "18. Aquaman",
      "19. Shazam / Magic",
      "20. Green Lantern",
      "21. Constantine / Vertigo",
      "22. Vertigo / DC TV Universe",
      "23. DC Horror / Dark"
    ],
    "watch_modes": [
      {
        "id": "chrono",
        "label": "⏳ Chronological Story Order",
        "desc": "Canonical timeline progression across the DC Multiverse"
      },
      {
        "id": "release",
        "label": "🎞️ Release Date Order",
        "desc": "Theatrical and television release progression from 1943/1978 to 2026+"
      },
      {
        "id": "dceu_release",
        "label": "⚡ A. DCEU — Release Order",
        "desc": "Man of Steel (2013) → Batman v Superman → Suicide Squad ... Lost Kingdom (2023)"
      },
      {
        "id": "dceu_chrono",
        "label": "🔱 B. DCEU — Chronological Order",
        "desc": "Wonder Woman (1918) → WW84 (1984) → Man of Steel → BvS ... Lost Kingdom"
      },
      {
        "id": "dcu_canon",
        "label": "🌌 C. DCU — Release / Canon Order",
        "desc": "Creature Commandos → Superman (2025) → Peacemaker S2 → Supergirl → Lanterns → Clayface"
      },
      {
        "id": "batman_live",
        "label": "🦇 D. Batman — Live-Action Release Order",
        "desc": "Burton/Schumacher (1989–1997) → Dark Knight Trilogy (2005–2012) → The Batman (2022)"
      },
      {
        "id": "dark_knight",
        "label": "🃏 E. Batman — Dark Knight Trilogy",
        "desc": "Batman Begins (2005) → The Dark Knight (2008) → The Dark Knight Rises (2012)"
      },
      {
        "id": "arrowverse",
        "label": "🏹 F. Arrowverse Watch Order",
        "desc": "Arrow → The Flash → Supergirl → Legends of Tomorrow → Black Lightning → Batwoman"
      },
      {
        "id": "dcau",
        "label": "📺 G. DCAU Watch Order",
        "desc": "Batman: TAS → Superman: TAS → Batman Beyond → Static Shock → Justice League & Unlimited"
      },
      {
        "id": "dcamu",
        "label": "⚔️ H. DCAMU Watch Order",
        "desc": "Flashpoint Paradox (2013) → War → Son of Batman → Death of Superman → Apokolips War (2020)"
      },
      {
        "id": "tomorrowverse",
        "label": "🚀 I. Tomorrowverse Watch Order",
        "desc": "Man of Tomorrow (2020) → Long Halloween → Beware My Power → Crisis on Infinite Earths"
      }
    ],
    "timeline": [
      {
        "id": "dcu-commandos",
        "title": "Creature Commandos",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 2024.1,
        "release_order": 2024.12,
        "phase": "DCU Chapter 1 • Gods and Monsters Genesis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "7 Episodes",
        "desc": "Amanda Waller creates a secret covert team of incarcerated monstrous prisoners led by Rick Flag Sr.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "dcu-superman",
        "title": "Superman (2025)",
        "year": 2025,
        "media_type": "movie",
        "chrono_order": 2025.1,
        "release_order": 2025.07,
        "phase": "DCU Chapter 1 • The Theatrical Flagship",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/bLNmTnq3Fh8b5p2604m16kU9K7b.jpg",
        "runtime": "135 min (Expected)",
        "desc": "James Gunn's DCU reboot following Clark Kent reconciling his Kryptonian heritage with his human upbringing.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "04. Superman"
        ]
      },
      {
        "id": "dcu-peacemaker-s2",
        "title": "Peacemaker — Season 2",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 2025.2,
        "release_order": 2025.08,
        "phase": "DCU Chapter 1 • Post-Superman Fallout",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/hE3LRZAY8cuGOP4KR8Yop1ns0CD.jpg",
        "runtime": "8 Episodes",
        "desc": "Christopher Smith transitions fully into the new DCU continuity dealing with the aftermath of Superman.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "17. Suicide Squad"
        ]
      },
      {
        "id": "dcu-supergirl",
        "title": "Supergirl (2026)",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 2026.1,
        "release_order": 2026.06,
        "phase": "DCU Chapter 1 • Cosmic Lore",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/nptqFwH76fV8kK4lG6dFpWv1c7U.jpg",
        "runtime": "In Production",
        "desc": "Kara Zor-El travels the cosmos on a harsh journey of retribution and courage, starring Milly Alcock.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "04. Superman"
        ]
      },
      {
        "id": "dcu-lanterns",
        "title": "Lanterns (2026)",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 2026.2,
        "release_order": 2026.08,
        "phase": "DCU Chapter 1 • Terrestrial Mystery",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "8 Episodes",
        "desc": "Hal Jordan and John Stewart investigate a dark mystery in the heartland of America tied to the overarching DCU mythos.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "20. Green Lantern"
        ]
      },
      {
        "id": "dcu-clayface",
        "title": "Clayface (2026)",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 2026.3,
        "release_order": 2026.1,
        "phase": "DCU Chapter 1 • Body Horror & Tragedy",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/2y1W0i9N4n6Ff5859l4FhVpC9m2.jpg",
        "runtime": "In Development",
        "desc": "Mike Flanagan pens a dark psychological horror exploration of the tragic actor-turned-shapeshifter Basil Karlo.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "23. DC Horror / Dark",
          "03. Batman"
        ]
      },
      {
        "id": "dcu-waller",
        "title": "Waller",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 2026.4,
        "release_order": 2026.11,
        "phase": "DCU Future • Covert Operations",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        "runtime": "Announced Series",
        "desc": "Viola Davis returns as Amanda Waller teaming up with Team Peacemaker in the DCU canon.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "17. Suicide Squad"
        ]
      },
      {
        "id": "dcu-paradise-lost",
        "title": "Paradise Lost",
        "year": 2027,
        "media_type": "series",
        "chrono_order": 2027.1,
        "release_order": 2027.01,
        "phase": "DCU Future • Themyscira Political Drama",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gfJGlJt7GQ5p1F6n997B8q0v6n4.jpg",
        "runtime": "Announced Series",
        "desc": "A Game of Thrones-style political intrigue drama set on the island of Themyscira before the birth of Diana.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "05. Wonder Woman"
        ]
      },
      {
        "id": "dcu-booster-gold",
        "title": "Booster Gold",
        "year": 2027,
        "media_type": "series",
        "chrono_order": 2027.2,
        "release_order": 2027.03,
        "phase": "DCU Future • Time Travel Comedy",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gKzIPn9m8vH64b6e5124bZ5bZ5K.jpg",
        "runtime": "Announced Series",
        "desc": "A loser from the 25th century uses basic future technology to travel back in time and pretend to be a superhero.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters"
        ]
      },
      {
        "id": "dcu-brave-and-bold",
        "title": "The Brave and the Bold",
        "year": 2027,
        "media_type": "movie",
        "chrono_order": 2027.3,
        "release_order": 2027.05,
        "phase": "DCU Future • DCU Bat-Family Canon",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "In Development",
        "desc": "Andy Muschietti directs Bruce Wayne and his assassin son Damian Wayne, introducing the DCU Bat-Family.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "03. Batman"
        ]
      },
      {
        "id": "dcu-swamp-thing",
        "title": "Swamp Thing (Movie)",
        "year": 2027,
        "media_type": "movie",
        "chrono_order": 2027.4,
        "release_order": 2027.08,
        "phase": "DCU Future • Gothic Dark Horror",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/yA0qW4R67e41q38914841981014.jpg",
        "runtime": "In Development",
        "desc": "James Mangold's dark gothic horror investigation into the origins of Alec Holland and the Green.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters",
          "23. DC Horror / Dark"
        ]
      },
      {
        "id": "dcu-authority",
        "title": "The Authority",
        "year": 2027,
        "media_type": "movie",
        "chrono_order": 2027.5,
        "release_order": 2027.11,
        "phase": "DCU Future • Anti-Hero Paradigm",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/3T8yZ0045612347690184712891.jpg",
        "runtime": "In Development",
        "desc": "A wild band of cynical superheroes take justice into their own hands to fix the world by any means necessary.",
        "sub_universe": "01. DC Universe (DCU) — Gods & Monsters",
        "sub_universes": [
          "01. DC Universe (DCU) — Gods & Monsters"
        ]
      },
      {
        "id": "dceu-ww",
        "title": "Wonder Woman",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 1918,
        "release_order": 2017.06,
        "phase": "DCEU • World War I Origins",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zFvI8.jpg",
        "runtime": "141 min",
        "desc": "Diana of Themyscira leaves her secluded paradise to end the Great War and discovers Ares manipulating humanity.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "05. Wonder Woman"
        ]
      },
      {
        "id": "dceu-ww84",
        "title": "Wonder Woman 1984",
        "year": 2020,
        "media_type": "movie",
        "chrono_order": 1984,
        "release_order": 2020.12,
        "phase": "DCEU • Cold War Era",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/8UlWqw29tMiIaur4spYQIiooW0j.jpg",
        "runtime": "151 min",
        "desc": "Diana faces Maxwell Lord and the Cheetah during the vibrant greed and political tensions of the 1980s.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "05. Wonder Woman"
        ]
      },
      {
        "id": "dceu-mos",
        "title": "Man of Steel",
        "year": 2013,
        "media_type": "movie",
        "chrono_order": 2013,
        "release_order": 2013.06,
        "phase": "DCEU • The First Awakening",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7rIPjn5elxsBt0PrJ0qFi0YehBo.jpg",
        "runtime": "143 min",
        "desc": "Zack Snyder's visceral origin of Clark Kent defending Earth from General Zod and Kryptonian annihilation.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "04. Superman"
        ]
      },
      {
        "id": "dceu-bvs",
        "title": "Batman v Superman: Dawn of Justice",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 2015,
        "release_order": 2016.03,
        "phase": "DCEU • Clash of Titans",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
        "runtime": "152 min (Ultimate: 183m)",
        "desc": "Fearing the unchecked power of a god, Gotham's vigilante takes on Metropolis's savior as Lex Luthor schemes.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "03. Batman",
          "04. Superman",
          "06. Justice League"
        ]
      },
      {
        "id": "dceu-ss16",
        "title": "Suicide Squad",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 2016,
        "release_order": 2016.08,
        "phase": "DCEU • Task Force X",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xFw9RXK29v5yaFerGhUrOXcu54Q.jpg",
        "runtime": "123 min",
        "desc": "Amanda Waller recruits imprisoned supervillains Harley Quinn, Deadshot, and El Diablo on a lethal suicide mission.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "17. Suicide Squad",
          "03. Batman"
        ]
      },
      {
        "id": "dceu-jl17",
        "title": "Justice League (2017)",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 2017.1,
        "release_order": 2017.11,
        "phase": "DCEU • Theatrical Cut",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loV2neye8Oi3r.jpg",
        "runtime": "120 min",
        "desc": "Theatrical release by Joss Whedon as Bruce Wayne and Diana Prince recruit metahumans against Steppenwolf.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "06. Justice League"
        ]
      },
      {
        "id": "dceu-zsjl",
        "title": "Zack Snyder's Justice League",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 2017.2,
        "release_order": 2021.03,
        "phase": "DCEU • Definitive Director's Cut",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "242 min",
        "desc": "Snyder's grand 4-hour epic uniting Superman, Batman, Wonder Woman, Flash, Aquaman, and Cyborg against Darkseid.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "06. Justice League"
        ]
      },
      {
        "id": "dceu-aquaman",
        "title": "Aquaman",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 2018,
        "release_order": 2018.12,
        "phase": "DCEU • King of the Seven Seas",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/xLPffWMhZh1PvEum204j4h8xT84.jpg",
        "runtime": "143 min",
        "desc": "Arthur Curry embarks on an underwater quest to claim the Trident of Atlan and prevent war between ocean and land.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "18. Aquaman"
        ]
      },
      {
        "id": "dceu-shazam",
        "title": "Shazam!",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 2019.1,
        "release_order": 2019.04,
        "phase": "DCEU • Magic Champion",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        "runtime": "132 min",
        "desc": "Teenager Billy Batson gains the wisdom of Solomon and power of Zeus from an ancient wizard.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "19. Shazam / Magic"
        ]
      },
      {
        "id": "dceu-bop",
        "title": "Birds of Prey",
        "year": 2020,
        "media_type": "movie",
        "chrono_order": 2020.1,
        "release_order": 2020.02,
        "phase": "DCEU • Harley Quinn's Liberation",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/h4VBaxBdSLmrMtE0XcqAmDCVI2b.jpg",
        "runtime": "109 min",
        "desc": "Harley Quinn splits from the Joker and teams up with Huntress, Black Canary, and Renee Montoya in Gotham.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "03. Batman",
          "17. Suicide Squad"
        ]
      },
      {
        "id": "dceu-tss",
        "title": "The Suicide Squad",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 2021.1,
        "release_order": 2021.08,
        "phase": "DCEU • Corto Maltese Infiltration",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/kb4TN99qGqvRIv9ApIWLNJ8254p.jpg",
        "runtime": "132 min",
        "desc": "James Gunn's wild, bloody assault on Corto Maltese starring Bloodsport, Peacemaker, and Starro the Conqueror.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "17. Suicide Squad"
        ]
      },
      {
        "id": "dceu-peacemaker-s1",
        "title": "Peacemaker (2022–2025)",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 2022.1,
        "release_order": 2022.01,
        "phase": "DCEU • Project Butterfly",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/hE3LRZAY8cuGOP4KR8Yop1ns0CD.jpg",
        "runtime": "8 Episodes",
        "desc": "Christopher Smith is drafted into Project Butterfly to eliminate parasitic alien organisms infiltrating humanity.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "17. Suicide Squad"
        ]
      },
      {
        "id": "dceu-black-adam",
        "title": "Black Adam",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 2022.2,
        "release_order": 2022.1,
        "phase": "DCEU • Kahndaq Unleashed",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "runtime": "125 min",
        "desc": "Dwayne Johnson's Teth-Adam is freed after 5,000 years, clashing with Hawkman and the Justice Society of America.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "19. Shazam / Magic"
        ]
      },
      {
        "id": "dceu-shazam-2",
        "title": "Shazam! Fury of the Gods",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 2023.1,
        "release_order": 2023.03,
        "phase": "DCEU • Daughters of Atlas",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/A3zbZsmsvNGdgm2LKT3P97llRTC.jpg",
        "runtime": "130 min",
        "desc": "The Shazamily defends Philadelphia against the vengeful Daughters of Atlas seeking the Seed of Life.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "19. Shazam / Magic"
        ]
      },
      {
        "id": "dceu-flash",
        "title": "The Flash",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 2023.2,
        "release_order": 2023.06,
        "phase": "DCEU • Multiverse Flashpoint Collision",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        "runtime": "144 min",
        "desc": "Barry Allen runs back in time to save his mother, colliding universes and joining forces with Michael Keaton's Batman.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "03. Batman",
          "06. Justice League"
        ]
      },
      {
        "id": "dceu-blue-beetle",
        "title": "Blue Beetle",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 2023.3,
        "release_order": 2023.08,
        "phase": "DCEU • The Scarab Khaji-Da",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mXLOHHc1Zeuwsl4xYKjKh2280ne.jpg",
        "runtime": "127 min",
        "desc": "Jaime Reyes is chosen by the ancient biotechnology scarab Khaji-Da to become the armored hero Blue Beetle.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe"
        ]
      },
      {
        "id": "dceu-aquaman-2",
        "title": "Aquaman and the Lost Kingdom",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 2023.4,
        "release_order": 2023.12,
        "phase": "DCEU • Final DCEU Chapter",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/8xV47NDrjdZNpkVcCFq0mgxdTxs.jpg",
        "runtime": "124 min",
        "desc": "Black Manta unleashes the ancient cursed Black Trident, forcing Arthur and Orm into an uneasy alliance.",
        "sub_universe": "02. DCEU — DC Extended Universe",
        "sub_universes": [
          "02. DCEU — DC Extended Universe",
          "18. Aquaman"
        ]
      },
      {
        "id": "batman-1943",
        "title": "Batman (1943)",
        "year": 1943,
        "media_type": "series",
        "chrono_order": 1943,
        "release_order": 1943,
        "phase": "Original Classic Batman Serials",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/uUmsu8iZ17z7XyN7eE574sX761R.jpg",
        "runtime": "15 Chapters",
        "desc": "The historic first live-action appearance of the Dark Knight starring Lewis Wilson and Douglas Croft.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-1949",
        "title": "Batman and Robin (1949)",
        "year": 1949,
        "media_type": "series",
        "chrono_order": 1949,
        "release_order": 1949,
        "phase": "Original Classic Batman Serials",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/w06mQxKjYhQp2gQ913Zf1V3P92k.jpg",
        "runtime": "15 Chapters",
        "desc": "Robert Lowery and Johnny Duncan battle the mysterious hooded Wizard in Columbia's second serial.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-1989",
        "title": "Batman (1989)",
        "year": 1989,
        "media_type": "movie",
        "chrono_order": 1989,
        "release_order": 1989,
        "phase": "Burton / Schumacher Gotham Canon",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/2flA1w1AadMv51e3P2p25HhW7d2.jpg",
        "runtime": "126 min",
        "desc": "Tim Burton's landmark gothic masterpiece starring Michael Keaton and Jack Nicholson's iconic Joker.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-returns",
        "title": "Batman Returns",
        "year": 1992,
        "media_type": "movie",
        "chrono_order": 1992,
        "release_order": 1992,
        "phase": "Burton / Schumacher Gotham Canon",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/jKBjeXM7iBBV9UkUcOXx3m7F0YF.jpg",
        "runtime": "126 min",
        "desc": "Keaton returns against Danny DeVito's grostesque Penguin and Michelle Pfeiffer's unforgettable Catwoman.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-forever",
        "title": "Batman Forever",
        "year": 1995,
        "media_type": "movie",
        "chrono_order": 1995,
        "release_order": 1995,
        "phase": "Burton / Schumacher Gotham Canon",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mZZYenwU8v9h3yq8P18e38148m1.jpg",
        "runtime": "121 min",
        "desc": "Val Kilmer takes the cowl with Chris O'Donnell as Robin, battling Jim Carrey's Riddler and Tommy Lee Jones.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-and-robin",
        "title": "Batman & Robin",
        "year": 1997,
        "media_type": "movie",
        "chrono_order": 1997,
        "release_order": 1997,
        "phase": "Burton / Schumacher Gotham Canon",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/bsNm94wDsl3Lspw9G1K4384YQxZ.jpg",
        "runtime": "125 min",
        "desc": "George Clooney, Arnold Schwarzenegger as Mr. Freeze, and Uma Thurman as Poison Ivy in neon Gotham.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-begins",
        "title": "Batman Begins",
        "year": 2005,
        "media_type": "movie",
        "chrono_order": 2005,
        "release_order": 2005,
        "phase": "The Dark Knight Trilogy • Origin",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/1P3QtW1IkivqdxOP6io1mQ1q5h9.jpg",
        "runtime": "140 min",
        "desc": "Christopher Nolan reboots Bruce Wayne's journey from Himalayan training with Ra's al Ghul to Gotham's protector.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "dark-knight",
        "title": "The Dark Knight",
        "year": 2008,
        "media_type": "movie",
        "chrono_order": 2008,
        "release_order": 2008,
        "phase": "The Dark Knight Trilogy • Peak Chaos",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "runtime": "152 min",
        "desc": "Heath Ledger's Oscar-winning Joker tests Batman, Jim Gordon, and Harvey Dent's moral boundaries.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "dark-knight-rises",
        "title": "The Dark Knight Rises",
        "year": 2012,
        "media_type": "movie",
        "chrono_order": 2012,
        "release_order": 2012,
        "phase": "The Dark Knight Trilogy • Finale",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
        "runtime": "165 min",
        "desc": "Eight years after Joker's reign, Bane brings Gotham to its knees, forcing Bruce Wayne out of exile.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "the-batman-2022",
        "title": "The Batman",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 2022.1,
        "release_order": 2022.03,
        "phase": "The Batman Epic Crime Saga • Year Two",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        "runtime": "176 min",
        "desc": "Matt Reeves' noir detective thriller starring Robert Pattinson stalking Gotham's corrupt underworld.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman",
          "15. DC Elseworlds"
        ]
      },
      {
        "id": "the-penguin-2024",
        "title": "The Penguin",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 2024.2,
        "release_order": 2024.09,
        "phase": "The Batman Epic Crime Saga • Mafia War",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/vOWcq62g3Zk9EwPcvx3m1hQyB2w.jpg",
        "runtime": "8 Episodes",
        "desc": "Colin Farrell's transformative portrayal of Oz Cobb seizing control of the Falcone crime syndicate.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman",
          "11. Gotham / Batman TV",
          "15. DC Elseworlds"
        ]
      },
      {
        "id": "the-batman-2004",
        "title": "The Batman (2004–2008)",
        "year": 2004,
        "media_type": "series",
        "chrono_order": 2004.1,
        "release_order": 2004,
        "phase": "Batman Animated • Kid's WB Era",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/9bYjE0Qz5Q3q6P4v9G71b2d5r1T.jpg",
        "runtime": "5 Seasons / 65 Episodes",
        "desc": "A stylized modern look at Bruce Wayne's early twenties defending Gotham with high-tech equipment.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-brave-bold",
        "title": "Batman: The Brave and the Bold (2008–2011)",
        "year": 2008,
        "media_type": "series",
        "chrono_order": 2008.2,
        "release_order": 2008.11,
        "phase": "Batman Animated • Silver Age Team-Ups",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/w06mQxKjYhQp2gQ913Zf1V3P92k.jpg",
        "runtime": "3 Seasons / 65 Episodes",
        "desc": "Diedrich Bader voices Batman teaming up with obscure and beloved DC heroes across fun space and pulp adventures.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "beware-the-batman",
        "title": "Beware the Batman (2013–2014)",
        "year": 2013,
        "media_type": "series",
        "chrono_order": 2013.1,
        "release_order": 2013.07,
        "phase": "Batman Animated • CGI Detective Action",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/eK1tZ0qA4z0b8n7d6e5d4C3b2a1.jpg",
        "runtime": "26 Episodes",
        "desc": "CGI animation featuring Batman partnered with ex-MI6 operative Alfred Pennyworth and martial artist Katana.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "batman-caped-crusader",
        "title": "Batman: Caped Crusader",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 2024.3,
        "release_order": 2024.08,
        "phase": "Batman 1940s Noir Canon",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "10 Episodes",
        "desc": "Bruce Timm, J.J. Abrams, and Matt Reeves craft a 1940s psychological noir revival of Gotham's vigilante.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman",
          "15. DC Elseworlds"
        ]
      },
      {
        "id": "bat-fam-2025",
        "title": "Bat-Fam (2025–)",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 2025.3,
        "release_order": 2025.12,
        "phase": "Batman Animated • Merry Little Batman Spinoff",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/vOWcq62g3Zk9EwPcvx3m1hQyB2w.jpg",
        "runtime": "Upcoming Series",
        "desc": "Follows Batman, Alfred, and young Damian Wayne navigating life in Wayne Manor with an eccentric family dynamic.",
        "sub_universe": "03. Batman",
        "sub_universes": [
          "03. Batman"
        ]
      },
      {
        "id": "superman-1978",
        "title": "Superman (1978)",
        "year": 1978,
        "media_type": "movie",
        "chrono_order": 1978,
        "release_order": 1978,
        "phase": "Christopher Reeve Classic Era",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/d7J0ThpvR12uHn80g6vLp7H1961.jpg",
        "runtime": "143 min",
        "desc": "Richard Donner's iconic superhero masterpiece: 'You'll believe a man can fly' starring Christopher Reeve.",
        "sub_universe": "04. Superman",
        "sub_universes": [
          "04. Superman"
        ]
      },
      {
        "id": "superman-2",
        "title": "Superman II",
        "year": 1980,
        "media_type": "movie",
        "chrono_order": 1980,
        "release_order": 1980,
        "phase": "Christopher Reeve Classic Era",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/q2c04q951e73950146m1841961K.jpg",
        "runtime": "127 min",
        "desc": "Superman relinquishes his powers for Lois Lane just as General Zod, Ursa, and Non conquer Earth.",
        "sub_universe": "04. Superman",
        "sub_universes": [
          "04. Superman"
        ]
      },
      {
        "id": "superman-3",
        "title": "Superman III",
        "year": 1983,
        "media_type": "movie",
        "chrono_order": 1983,
        "release_order": 1983,
        "phase": "Christopher Reeve Classic Era",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/52i3Gz6F659720b5735160m92d9.jpg",
        "runtime": "125 min",
        "desc": "Superman is tainted by synthetic Kryptonite while Richard Pryor's computer genius is manipulated by a billionaire.",
        "sub_universe": "04. Superman",
        "sub_universes": [
          "04. Superman"
        ]
      },
      {
        "id": "superman-4",
        "title": "Superman IV: The Quest for Peace",
        "year": 1987,
        "media_type": "movie",
        "chrono_order": 1987,
        "release_order": 1987,
        "phase": "Christopher Reeve Classic Era",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/q7C3P9x4d07m656910793678121.jpg",
        "runtime": "90 min",
        "desc": "Superman rids the world of nuclear missiles, prompting Lex Luthor to clone Nuclear Man.",
        "sub_universe": "04. Superman",
        "sub_universes": [
          "04. Superman"
        ]
      },
      {
        "id": "superman-returns",
        "title": "Superman Returns",
        "year": 2006,
        "media_type": "movie",
        "chrono_order": 2006,
        "release_order": 2006,
        "phase": "Bryan Singer Homage Sequel",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/h2m35lM6fH59480112941584920.jpg",
        "runtime": "154 min",
        "desc": "Brandon Routh channels Christopher Reeve as the Man of Steel returns to Earth after five years away.",
        "sub_universe": "04. Superman",
        "sub_universes": [
          "04. Superman"
        ]
      },
      {
        "id": "smallville-series",
        "title": "Smallville (2001–2011)",
        "year": 2001,
        "media_type": "series",
        "chrono_order": 2001,
        "release_order": 2001,
        "phase": "Smallville Young Clark Saga",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/h2m35lM6fH59480112941584920.jpg",
        "runtime": "10 Seasons / 217 Episodes",
        "desc": "Tom Welling's definitive journey of Clark Kent growing up in Kansas alongside Michael Rosenbaum's Lex Luthor.",
        "sub_universe": "04. Superman",
        "sub_universes": [
          "04. Superman"
        ]
      },
      {
        "id": "superman-and-lois",
        "title": "Superman & Lois (2021–2024)",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 2021.2,
        "release_order": 2021.02,
        "phase": "Modern TV Masterpiece",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/A3zbZsmsvNGdgm2LKT3P97llRTC.jpg",
        "runtime": "4 Seasons / 53 Episodes",
        "desc": "Tyler Hoechlin and Elizabeth Tulloch balance the pressures of superhero life with raising twin teenage sons.",
        "sub_universe": "04. Superman",
        "sub_universes": [
          "04. Superman",
          "15. DC Elseworlds"
        ]
      },
      {
        "id": "wonder-woman-1975",
        "title": "Wonder Woman (1975–1979) — Series",
        "year": 1975,
        "media_type": "series",
        "chrono_order": 1975,
        "release_order": 1975,
        "phase": "Lynda Carter Classic Era",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zFvI8.jpg",
        "runtime": "3 Seasons / 60 Episodes",
        "desc": "Lynda Carter stars as Diana Prince, fighting for freedom and democracy during WWII and the late 1970s.",
        "sub_universe": "05. Wonder Woman",
        "sub_universes": [
          "05. Wonder Woman"
        ]
      },
      {
        "id": "jl-new-frontier",
        "title": "Justice League: The New Frontier (2008)",
        "year": 2008,
        "media_type": "movie",
        "chrono_order": 2008.1,
        "release_order": 2008.02,
        "phase": "Cold War Golden Age Era",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "75 min",
        "desc": "Darwyn Cooke's Cold War masterpiece uniting America's iconic heroes against the ancient Centre.",
        "sub_universe": "06. Justice League",
        "sub_universes": [
          "06. Justice League"
        ]
      },
      {
        "id": "jl-crisis-two-earths",
        "title": "Justice League: Crisis on Two Earths (2010)",
        "year": 2010,
        "media_type": "movie",
        "chrono_order": 2010.1,
        "release_order": 2010.02,
        "phase": "Multiverse Crime Syndicate Wars",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "75 min",
        "desc": "A heroic Lex Luthor from an alternate dimension recruits the Justice League to defeat the evil Crime Syndicate.",
        "sub_universe": "06. Justice League",
        "sub_universes": [
          "06. Justice League"
        ]
      },
      {
        "id": "jl-doom",
        "title": "Justice League: Doom (2012)",
        "year": 2012,
        "media_type": "movie",
        "chrono_order": 2012.1,
        "release_order": 2012.02,
        "phase": "Tower of Babel Contingencies",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "77 min",
        "desc": "Vandal Savage steals Batman's secret contingency plans to methodically neutralize every member of the Justice League.",
        "sub_universe": "06. Justice League",
        "sub_universes": [
          "06. Justice League"
        ]
      },
      {
        "id": "jl-gods-monsters",
        "title": "Justice League: Gods and Monsters (2015)",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 2015.2,
        "release_order": 2015.07,
        "phase": "Bruce Timm Alternate Universe",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "72 min",
        "desc": "Bruce Timm's alternate reality where Superman is Zod's son, Batman is Kirk Langstrom (vampire), and Wonder Woman is Bekka.",
        "sub_universe": "06. Justice League",
        "sub_universes": [
          "06. Justice League"
        ]
      },
      {
        "id": "jl-fatal-five",
        "title": "Justice League vs. the Fatal Five (2019)",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 2019.2,
        "release_order": 2019.03,
        "phase": "DCAU Canon Continuation",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "77 min",
        "desc": "The Justice League teams up with Star Boy and Jessica Cruz to defend Earth from 31st-century time travelers.",
        "sub_universe": "06. Justice League",
        "sub_universes": [
          "06. Justice League",
          "07. DC Animated Universe — DCAU"
        ]
      },
      {
        "id": "dcau-btas",
        "title": "Batman: The Animated Series (1992–1995)",
        "year": 1992,
        "media_type": "series",
        "chrono_order": 1992.1,
        "release_order": 1992,
        "phase": "DCAU Foundation • Gotham Noir",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/w06mQxKjYhQp2gQ913Zf1V3P92k.jpg",
        "runtime": "4 Seasons / 85 Episodes",
        "desc": "Kevin Conroy and Mark Hamill define Batman and the Joker in Bruce Timm's Emmy-winning art deco masterpiece.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU",
          "03. Batman"
        ]
      },
      {
        "id": "dcau-stas",
        "title": "Superman: The Animated Series (1996–2000)",
        "year": 1996,
        "media_type": "series",
        "chrono_order": 1996,
        "release_order": 1996,
        "phase": "DCAU Expansion • Metropolis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/d7J0ThpvR12uHn80g6vLp7H1961.jpg",
        "runtime": "3 Seasons / 54 Episodes",
        "desc": "Tim Daly voices Clark Kent defending Metropolis from Lex Luthor, Brainiac, and the conqueror Darkseid.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU",
          "04. Superman"
        ]
      },
      {
        "id": "dcau-tnba",
        "title": "The New Batman Adventures (1997–1999)",
        "year": 1997,
        "media_type": "series",
        "chrono_order": 1997.1,
        "release_order": 1997,
        "phase": "DCAU Gotham Evolution",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/w06mQxKjYhQp2gQ913Zf1V3P92k.jpg",
        "runtime": "24 Episodes",
        "desc": "Dick Grayson becomes Nightwing, Tim Drake becomes the new Robin, and Batgirl joins the inner family circle.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU",
          "03. Batman"
        ]
      },
      {
        "id": "dcau-bb",
        "title": "Batman Beyond (1999–2001)",
        "year": 1999,
        "media_type": "series",
        "chrono_order": 2039,
        "release_order": 1999,
        "phase": "DCAU Cyberpunk Future",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/q4M8FzZ2y7pL2X5H7K0b5147m14.jpg",
        "runtime": "3 Seasons / 52 Episodes",
        "desc": "In Neo-Gotham 2039, an elderly Bruce Wayne mentors teenager Terry McGinnis in a flight-capable high-tech batsuit.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU",
          "03. Batman"
        ]
      },
      {
        "id": "dcau-joker",
        "title": "Batman Beyond: Return of the Joker (2000)",
        "year": 2000,
        "media_type": "movie",
        "chrono_order": 2040,
        "release_order": 2000,
        "phase": "DCAU Climactic Mystery",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/q4M8FzZ2y7pL2X5H7K0b5147m14.jpg",
        "runtime": "77 min",
        "desc": "The Clown Prince of Crime returns from the dead to haunt Neo-Gotham, revealing the tragic fate of Tim Drake.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU",
          "03. Batman"
        ]
      },
      {
        "id": "dcau-static",
        "title": "Static Shock (2000–2004)",
        "year": 2000,
        "media_type": "series",
        "chrono_order": 2000.1,
        "release_order": 2000.09,
        "phase": "DCAU Dakota City Canon",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "4 Seasons / 52 Episodes",
        "desc": "Virgil Hawkins gains electromagnetic abilities after the Big Bang chemical gas accident, protecting Dakota City.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU"
        ]
      },
      {
        "id": "dcau-jl",
        "title": "Justice League (2001–2004)",
        "year": 2001,
        "media_type": "series",
        "chrono_order": 2001.2,
        "release_order": 2001.11,
        "phase": "DCAU The Founding Seven",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "2 Seasons / 52 Episodes",
        "desc": "Superman, Batman, Wonder Woman, Flash, Green Lantern, Hawkgirl, and Martian Manhunter unite on the Watchtower.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU",
          "06. Justice League"
        ]
      },
      {
        "id": "dcau-jlu",
        "title": "Justice League Unlimited (2004–2006)",
        "year": 2004,
        "media_type": "series",
        "chrono_order": 2004.2,
        "release_order": 2004.07,
        "phase": "DCAU Grand Finale • Expanded Pantheon",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "3 Seasons / 39 Episodes",
        "desc": "The League expands to over 60 members tackling Project Cadmus and Lex Luthor's Legion of Doom.",
        "sub_universe": "07. DC Animated Universe — DCAU",
        "sub_universes": [
          "07. DC Animated Universe — DCAU",
          "06. Justice League"
        ]
      },
      {
        "id": "dcamu-flashpoint",
        "title": "Justice League: The Flashpoint Paradox",
        "year": 2013,
        "media_type": "movie",
        "chrono_order": 2013.1,
        "release_order": 2013.07,
        "phase": "DCAMU • Inception Event",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        "runtime": "81 min",
        "desc": "Barry Allen wakes up in an altered timeline where Atlanteans and Amazons have decimated Europe.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "06. Justice League"
        ]
      },
      {
        "id": "dcamu-war",
        "title": "Justice League: War",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 2014.1,
        "release_order": 2014.01,
        "phase": "DCAMU • New 52 Formation",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "79 min",
        "desc": "Earth's fledgling superheroes are forced to unite against Darkseid's initial Parademon invasion.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "06. Justice League"
        ]
      },
      {
        "id": "dcamu-son-of-batman",
        "title": "Son of Batman",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 2014.2,
        "release_order": 2014.04,
        "phase": "DCAMU • League of Assassins",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "84 min",
        "desc": "Batman discovers he has a preteen son, Damian Wayne, raised by Talia al Ghul and Deathstroke.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "03. Batman"
        ]
      },
      {
        "id": "dcamu-atlantis",
        "title": "Justice League: Throne of Atlantis",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 2015.1,
        "release_order": 2015.01,
        "phase": "DCAMU • Ocean Monarch",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xLPffWMhZh1PvEum204j4h8xT84.jpg",
        "runtime": "72 min",
        "desc": "Arthur Curry discovers his royal Atlantean heritage as Ocean Master plots a war against the surface world.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "18. Aquaman",
          "06. Justice League"
        ]
      },
      {
        "id": "dcamu-batman-vs-robin",
        "title": "Batman vs. Robin",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 2015.2,
        "release_order": 2015.04,
        "phase": "DCAMU • Court of Owls",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "80 min",
        "desc": "Damian Wayne struggles with Batman's 'no-kill' rule as Gotham's shadowy Court of Owls tries to recruit him.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "03. Batman"
        ]
      },
      {
        "id": "dcamu-bad-blood",
        "title": "Batman: Bad Blood",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 2016.1,
        "release_order": 2016.01,
        "phase": "DCAMU • Bat-Family Unity",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "72 min",
        "desc": "When Batman goes missing, Nightwing, Robin, Batwoman, and Batwing unite to save Gotham from the Heretic.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "03. Batman"
        ]
      },
      {
        "id": "dcamu-jl-vs-titans",
        "title": "Justice League vs. Teen Titans",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 2016.2,
        "release_order": 2016.03,
        "phase": "DCAMU • Trigon's Corruption",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "78 min",
        "desc": "Robin is sent to the Teen Titans, who must fight a possessed Justice League when Trigon invades Earth.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "06. Justice League",
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "dcamu-jl-dark",
        "title": "Justice League Dark",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 2017.1,
        "release_order": 2017.01,
        "phase": "DCAMU • Mystical Occult",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "75 min",
        "desc": "Batman seeks help from John Constantine, Zatanna, Deadman, and Etrigan to defeat supernatural hallucinatory threats.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "06. Justice League",
          "21. Constantine / Vertigo"
        ]
      },
      {
        "id": "dcamu-judas-contract",
        "title": "Teen Titans: The Judas Contract",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 2017.2,
        "release_order": 2017.04,
        "phase": "DCAMU • Betrayal from Within",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "84 min",
        "desc": "Terra infiltrates the Teen Titans on behalf of Deathstroke and Brother Blood in an adaptation of the legendary comic arc.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "dcamu-suicide-squad",
        "title": "Suicide Squad: Hell to Pay",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 2018.1,
        "release_order": 2018.03,
        "phase": "DCAMU • Get Out of Hell Free",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xFw9RXK29v5yaFerGhUrOXcu54Q.jpg",
        "runtime": "86 min",
        "desc": "Amanda Waller dispatches Task Force X to retrieve a mystical black card that guarantees passage directly to Heaven.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "17. Suicide Squad"
        ]
      },
      {
        "id": "dcamu-death-superman",
        "title": "The Death of Superman",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 2018.2,
        "release_order": 2018.07,
        "phase": "DCAMU • Doomsday Cataclysm",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/d7J0ThpvR12uHn80g6vLp7H1961.jpg",
        "runtime": "81 min",
        "desc": "An unstoppable alien juggernaut named Doomsday lands on Earth, culminating in Superman's ultimate sacrifice.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "04. Superman"
        ]
      },
      {
        "id": "dcamu-reign-supermen",
        "title": "Reign of the Supermen",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 2019.1,
        "release_order": 2019.01,
        "phase": "DCAMU • Successor Crisis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/d7J0ThpvR12uHn80g6vLp7H1961.jpg",
        "runtime": "87 min",
        "desc": "Following Superman's burial, four new claimants emerge: Steel, Superboy, Eradicator, and Cyborg Superman.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "04. Superman"
        ]
      },
      {
        "id": "dcamu-constantine-demons",
        "title": "Constantine: City of Demons",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 2018.3,
        "release_order": 2018.1,
        "phase": "DCAMU • Los Angeles Exorcism",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/sN02Y3G2qQ206b1241951016710.jpg",
        "runtime": "90 min",
        "desc": "John Constantine travels to Los Angeles to save his friend Chas's daughter from a coma induced by the demon Beroul.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "21. Constantine / Vertigo"
        ]
      },
      {
        "id": "dcamu-batman-hush",
        "title": "Batman: Hush",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 2019.2,
        "release_order": 2019.07,
        "phase": "DCAMU • The Bandaged Stalker",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "81 min",
        "desc": "A mysterious mastermind wrapped in bandages manipulates Batman's entire rogues gallery to destroy his life.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "03. Batman"
        ]
      },
      {
        "id": "dcamu-wonder-woman-bloodlines",
        "title": "Wonder Woman: Bloodlines",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 2019.3,
        "release_order": 2019.1,
        "phase": "DCAMU • Villainy Inc.",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zFvI8.jpg",
        "runtime": "83 min",
        "desc": "Diana battles Villainy Inc., a coalition of deadly rogues seeking to invade Themyscira and steal mythological relics.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "05. Wonder Woman"
        ]
      },
      {
        "id": "dcamu-apokolips-war",
        "title": "Justice League Dark: Apokolips War",
        "year": 2020,
        "media_type": "movie",
        "chrono_order": 2020,
        "release_order": 2020.05,
        "phase": "DCAMU Grand Finale • Total Annihilation",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "90 min",
        "desc": "Darkseid crushes the League, leaving John Constantine, Superman, and surviving heroes to stage a bloody last stand.",
        "sub_universe": "08. DC Animated Movie Universe — DCAMU",
        "sub_universes": [
          "08. DC Animated Movie Universe — DCAMU",
          "06. Justice League",
          "21. Constantine / Vertigo"
        ]
      },
      {
        "id": "tomorrow-superman",
        "title": "Superman: Man of Tomorrow",
        "year": 2020,
        "media_type": "movie",
        "chrono_order": 2020.1,
        "release_order": 2020.08,
        "phase": "Tomorrowverse Genesis • The Daily Planet",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/d7J0ThpvR12uHn80g6vLp7H1961.jpg",
        "runtime": "86 min",
        "desc": "Clark Kent learns the ropes as a Daily Planet intern, teaming with Martian Manhunter and Lobo against Parasite.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "04. Superman"
        ]
      },
      {
        "id": "tomorrow-jsa",
        "title": "Justice Society: World War II",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 1944,
        "release_order": 2021.04,
        "phase": "Tomorrowverse • Golden Age Speed Force",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "84 min",
        "desc": "Barry Allen accidentally breaches the Speed Force and lands in World War II, fighting alongside the original JSA.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "06. Justice League"
        ]
      },
      {
        "id": "tomorrow-halloween-1",
        "title": "Batman: The Long Halloween Part One",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 2021.1,
        "release_order": 2021.06,
        "phase": "Tomorrowverse • Holiday Killer Mystery",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "85 min",
        "desc": "Batman, Jim Gordon, and Harvey Dent forge a pact to stop the serial killer known as Holiday targeting mobsters.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "03. Batman"
        ]
      },
      {
        "id": "tomorrow-halloween-2",
        "title": "Batman: The Long Halloween Part Two",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 2021.2,
        "release_order": 2021.07,
        "phase": "Tomorrowverse • The Fall of Harvey Dent",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "87 min",
        "desc": "Acid disfigures Harvey Dent into Two-Face as Gotham transforms from mob territory to a madhouse of costumed villains.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "03. Batman"
        ]
      },
      {
        "id": "tomorrow-green-lantern",
        "title": "Green Lantern: Beware My Power",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 2022.1,
        "release_order": 2022.07,
        "phase": "Tomorrowverse • The Ring of Will",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "88 min",
        "desc": "Discharged Marine sniper John Stewart is bestowed a power ring, uncovering a bloody Rann-Thanagar cosmic war.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "20. Green Lantern"
        ]
      },
      {
        "id": "tomorrow-legion",
        "title": "Legion of Super-Heroes",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 2023.1,
        "release_order": 2023.02,
        "phase": "Tomorrowverse • 31st Century Academy",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/d7J0ThpvR12uHn80g6vLp7H1961.jpg",
        "runtime": "83 min",
        "desc": "Supergirl travels to the 31st century to attend the Legion Academy, uncovering a conspiracy led by the Dark Circle.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "04. Superman"
        ]
      },
      {
        "id": "tomorrow-warworld",
        "title": "Justice League: Warworld",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 2023.2,
        "release_order": 2023.07,
        "phase": "Tomorrowverse • The Gladiator Illusion",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "90 min",
        "desc": "Batman, Superman, and Wonder Woman wake up in bizarre simulated realities on Mongul's deadly Warworld.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "06. Justice League"
        ]
      },
      {
        "id": "tomorrow-crisis-1",
        "title": "Justice League: Crisis on Infinite Earths Part One",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 2024.1,
        "release_order": 2024.01,
        "phase": "Tomorrowverse Multiverse Finale • Wave of Antimatter",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "93 min",
        "desc": "The Anti-Monitor begins erasing infinite alternate Earths, forcing the Monitor to recruit heroes across realities.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "06. Justice League"
        ]
      },
      {
        "id": "tomorrow-crisis-2",
        "title": "Justice League: Crisis on Infinite Earths Part Two",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 2024.2,
        "release_order": 2024.04,
        "phase": "Tomorrowverse Multiverse Finale • The Shadow Demons",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "94 min",
        "desc": "Shadow demons assault the remaining earths as Batman, Supergirl, and heroes make heartbreaking defensive stands.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "06. Justice League"
        ]
      },
      {
        "id": "tomorrow-crisis-3",
        "title": "Justice League: Crisis on Infinite Earths Part Three",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 2024.3,
        "release_order": 2024.07,
        "phase": "Tomorrowverse Grand Finale • Universal Rebirth",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "98 min",
        "desc": "The final battle in the Bleed that resets the entire DC animated multiverse, concluding the Tomorrowverse saga.",
        "sub_universe": "09. Tomorrowverse",
        "sub_universes": [
          "09. Tomorrowverse",
          "06. Justice League"
        ]
      },
      {
        "id": "arrowverse-arrow",
        "title": "Arrow",
        "year": 2012,
        "media_type": "series",
        "chrono_order": 2012.1,
        "release_order": 2012.1,
        "phase": "Arrowverse Genesis • Lian Yu",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gKG5QGz5Ngf8fW4qwvl9QIf420V.jpg",
        "runtime": "8 Seasons / 170 Episodes",
        "desc": "Oliver Queen returns home to Starling City after five years on a hellish island to right his father's wrongs as the Green Arrow.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse"
        ]
      },
      {
        "id": "arrowverse-flash",
        "title": "The Flash",
        "year": 2014,
        "media_type": "series",
        "chrono_order": 2014.1,
        "release_order": 2014.1,
        "phase": "Arrowverse • S.T.A.R. Labs",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
        "runtime": "9 Seasons / 184 Episodes",
        "desc": "Barry Allen is struck by dark matter lightning, becoming Central City's Scarlet Speedster alongside Team Flash.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse"
        ]
      },
      {
        "id": "arrowverse-constantine",
        "title": "Constantine (2014–2015)",
        "year": 2014,
        "media_type": "series",
        "chrono_order": 2014.2,
        "release_order": 2014.1,
        "phase": "Arrowverse • Occult Incursion",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/sN02Y3G2qQ206b1241951016710.jpg",
        "runtime": "13 Episodes",
        "desc": "Matt Ryan's definitive John Constantine battles dark demonic forces threatening humanity before joining the Legends.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse",
          "21. Constantine / Vertigo"
        ]
      },
      {
        "id": "arrowverse-vixen",
        "title": "Vixen (2015–2016)",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 2015.1,
        "release_order": 2015.08,
        "phase": "Arrowverse Animated Canon",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "2 Seasons / 12 Episodes",
        "desc": "Mari McCabe inherits the mystical Tantu Totem, channeling the animal kingdom in Detroit with Arrow and Flash cameos.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse"
        ]
      },
      {
        "id": "arrowverse-supergirl",
        "title": "Supergirl",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 2015.2,
        "release_order": 2015.1,
        "phase": "Arrowverse • Earth-38 National City",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/nptqFwH76fV8kK4lG6dFpWv1c7U.jpg",
        "runtime": "6 Seasons / 126 Episodes",
        "desc": "Melissa Benoist embraces her Kryptonian heritage as Supergirl, defending National City from alien despots.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse",
          "04. Superman"
        ]
      },
      {
        "id": "arrowverse-legends",
        "title": "Legends of Tomorrow",
        "year": 2016,
        "media_type": "series",
        "chrono_order": 2016.1,
        "release_order": 2016.01,
        "phase": "Arrowverse • The Waverider Time Travel",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/4nQ1WjC0fW592eR6vW1K8P1d2q9.jpg",
        "runtime": "7 Seasons / 110 Episodes",
        "desc": "Rip Hunter recruits a ragtag team of heroes and misfits to fix temporal anomalies across history aboard the Waverider.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse"
        ]
      },
      {
        "id": "arrowverse-freedom-fighters",
        "title": "Freedom Fighters: The Ray (2017–2018)",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 2017.1,
        "release_order": 2017.12,
        "phase": "Arrowverse Earth-X Prelude",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "2 Seasons / 12 Episodes",
        "desc": "Raymond Terrill gains light-manipulating powers, fighting totalitarian Reich forces on Earth-X.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse"
        ]
      },
      {
        "id": "arrowverse-black-lightning",
        "title": "Black Lightning",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 2018.1,
        "release_order": 2018.01,
        "phase": "Arrowverse • Freeland Guardian",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/h2m35lM6fH59480112941584920.jpg",
        "runtime": "4 Seasons / 58 Episodes",
        "desc": "High school principal Jefferson Pierce comes out of superhero retirement to protect Freeland from the 100 gang.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse"
        ]
      },
      {
        "id": "arrowverse-batwoman",
        "title": "Batwoman",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 2019.1,
        "release_order": 2019.1,
        "phase": "Arrowverse • Gotham Watch",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "3 Seasons / 51 Episodes",
        "desc": "Kate Kane and later Ryan Wilder defend a Batman-less Gotham as the armored vigilante Batwoman.",
        "sub_universe": "10. Arrowverse",
        "sub_universes": [
          "10. Arrowverse"
        ]
      },
      {
        "id": "gotham-tv",
        "title": "Gotham (2014–2019)",
        "year": 2014,
        "media_type": "series",
        "chrono_order": 2014.1,
        "release_order": 2014.09,
        "phase": "Gotham TV • Gordon's Rise",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/iZX5nFj0f353B3C8mP6Y3F9622d.jpg",
        "runtime": "5 Seasons / 100 Episodes",
        "desc": "Rookie detective Jim Gordon navigates a brutally corrupt Gotham City while young Bruce Wayne mourns his murdered parents.",
        "sub_universe": "11. Gotham / Batman TV",
        "sub_universes": [
          "11. Gotham / Batman TV",
          "03. Batman"
        ]
      },
      {
        "id": "pennyworth-tv",
        "title": "Pennyworth (2019–2022)",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 1960,
        "release_order": 2019.07,
        "phase": "Gotham TV • London SAS Origins",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/w06mQxKjYhQp2gQ913Zf1V3P92k.jpg",
        "runtime": "3 Seasons / 30 Episodes",
        "desc": "Former British SAS soldier Alfred Pennyworth forms a security firm in 1960s London and partners with young Thomas Wayne.",
        "sub_universe": "11. Gotham / Batman TV",
        "sub_universes": [
          "11. Gotham / Batman TV"
        ]
      },
      {
        "id": "gotham-knights-tv",
        "title": "Gotham Knights (2023)",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 2023.1,
        "release_order": 2023.03,
        "phase": "Gotham TV • The Post-Batman Accusation",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fR9b26qGzMhP2y35H4j9850117L.jpg",
        "runtime": "13 Episodes",
        "desc": "Bruce Wayne's adopted son Turner Hayes is framed for Batman's murder, allying with children of Batman's enemies.",
        "sub_universe": "11. Gotham / Batman TV",
        "sub_universes": [
          "11. Gotham / Batman TV"
        ]
      },
      {
        "id": "titans-tv",
        "title": "Titans (2018–2023)",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 2018.1,
        "release_order": 2018.1,
        "phase": "Titans • Gritty Live-Action",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/x3A0e7xY2e5e1mF4c8a2b5e9d.jpg",
        "runtime": "4 Seasons / 49 Episodes",
        "desc": "Dick Grayson emerges from Batman's shadow to lead a band of young superheroes including Starfire, Raven, and Beast Boy.",
        "sub_universe": "12. Titans / Doom Patrol",
        "sub_universes": [
          "12. Titans / Doom Patrol"
        ]
      },
      {
        "id": "doom-patrol-tv",
        "title": "Doom Patrol (2019–2023)",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 2019.1,
        "release_order": 2019.02,
        "phase": "Surreal Freak Superheroes",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/8d8bA2nK4qR2e5e8e4c7a2b9f.jpg",
        "runtime": "4 Seasons / 46 Episodes",
        "desc": "DC's most beloved team of traumatized, bizarre outcasts investigate existential phenomena that nobody else dares touch.",
        "sub_universe": "12. Titans / Doom Patrol",
        "sub_universes": [
          "12. Titans / Doom Patrol",
          "23. DC Horror / Dark"
        ]
      },
      {
        "id": "watchmen-2009",
        "title": "Watchmen (2009)",
        "year": 2009,
        "media_type": "movie",
        "chrono_order": 1985,
        "release_order": 2009.03,
        "phase": "Zack Snyder's Graphic Novel Epic",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/aR0c4d214aB5Y4c7d2e9f8a1b.jpg",
        "runtime": "162 min (Ultimate: 215m)",
        "desc": "In an alternate 1985 Cold War America, the murder of the Comedian unravels a doomsday plot by former vigilantes.",
        "sub_universe": "13. Watchmen",
        "sub_universes": [
          "13. Watchmen"
        ]
      },
      {
        "id": "watchmen-2019",
        "title": "Watchmen (2019) — Series",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 2019,
        "release_order": 2019.1,
        "phase": "Damon Lindelof's HBO Sequel",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/vOWcq62g3Zk9EwPcvx3m1hQyB2w.jpg",
        "runtime": "9 Episodes",
        "desc": "Emmy-winning masterpiece exploring white supremacy, systemic racism, and the legacy of Adrian Veidt in modern Tulsa.",
        "sub_universe": "13. Watchmen",
        "sub_universes": [
          "13. Watchmen"
        ]
      },
      {
        "id": "watchmen-ch1-2024",
        "title": "Watchmen Chapter I (2024)",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 1985.1,
        "release_order": 2024.08,
        "phase": "Faithful Animated Adaptation",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/aR0c4d214aB5Y4c7d2e9f8a1b.jpg",
        "runtime": "84 min",
        "desc": "A stylized cell-shaded direct adaptation of the first half of Alan Moore and Dave Gibbons' groundbreaking comic.",
        "sub_universe": "13. Watchmen",
        "sub_universes": [
          "13. Watchmen"
        ]
      },
      {
        "id": "watchmen-ch2-2024",
        "title": "Watchmen Chapter II (2024)",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 1985.2,
        "release_order": 2024.11,
        "phase": "Faithful Animated Adaptation Conclusion",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/aR0c4d214aB5Y4c7d2e9f8a1b.jpg",
        "runtime": "90 min",
        "desc": "The conclusion of the animated adaptation leading up to Adrian Veidt's cataclysmic squid teleportation.",
        "sub_universe": "13. Watchmen",
        "sub_universes": [
          "13. Watchmen"
        ]
      },
      {
        "id": "joker-2019",
        "title": "Joker (2019)",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 1981,
        "release_order": 2019.1,
        "phase": "Todd Phillips Elseworlds Masterpiece",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "runtime": "122 min",
        "desc": "Joaquin Phoenix delivers an Oscar-winning performance as failed clown Arthur Fleck spiraling into nihilistic violence.",
        "sub_universe": "14. Joker",
        "sub_universes": [
          "14. Joker",
          "15. DC Elseworlds"
        ]
      },
      {
        "id": "joker-folie-2024",
        "title": "Joker: Folie à Deux (2024)",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 1983,
        "release_order": 2024.1,
        "phase": "Arkham State Hospital Trial",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
        "runtime": "138 min",
        "desc": "Arthur Fleck stands trial for murder while discovering love and music with Harleen 'Lee' Quinzel (Lady Gaga).",
        "sub_universe": "14. Joker",
        "sub_universes": [
          "14. Joker",
          "15. DC Elseworlds"
        ]
      },
      {
        "id": "teen-titans-2003",
        "title": "Teen Titans (2003–2006)",
        "year": 2003,
        "media_type": "series",
        "chrono_order": 2003,
        "release_order": 2003.07,
        "phase": "Cartoon Network Golden Era",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "5 Seasons / 65 Episodes",
        "desc": "Anime-influenced action series following Robin, Starfire, Cyborg, Raven, and Beast Boy defending Jump City.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "young-justice-tv",
        "title": "Young Justice (2010–2022)",
        "year": 2010,
        "media_type": "series",
        "chrono_order": 2010,
        "release_order": 2010.11,
        "phase": "Prestige Young Heroes Continuity",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/8d8bA2nK4qR2e5e8e4c7a2b9f.jpg",
        "runtime": "4 Seasons / 98 Episodes",
        "desc": "Greg Weisman's deeply serialized covert-ops saga following the teenage sidekicks of the Justice League.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "teen-titans-go-tv",
        "title": "Teen Titans Go! (2013–)",
        "year": 2013,
        "media_type": "series",
        "chrono_order": 2013,
        "release_order": 2013.04,
        "phase": "Comedic Meta Satire",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "8+ Seasons / 400+ Episodes",
        "desc": "Hilarious, self-referential comedy about the ridiculous misadventures of the Titans when they aren't saving the world.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "dc-super-hero-girls",
        "title": "DC Super Hero Girls (2015–2021)",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 2015,
        "release_order": 2015,
        "phase": "Super Hero High Series",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "runtime": "Animated Series",
        "desc": "Teen versions of Wonder Woman, Supergirl, and Batgirl navigate life and high school while mastering their powers.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "harley-quinn-tv",
        "title": "Harley Quinn (2019–)",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 2019,
        "release_order": 2019.11,
        "phase": "Adult Animated Satire",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/vOWcq62g3Zk9EwPcvx3m1hQyB2w.jpg",
        "runtime": "4 Seasons / 47 Episodes",
        "desc": "Kaley Cuoco voices Harley Quinn breaking free from the Joker and conquering Gotham alongside Poison Ivy.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "aquaman-king-atlantis",
        "title": "Aquaman: King of Atlantis (2021)",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 2021,
        "release_order": 2021.1,
        "phase": "Playful Animated Mini-Series",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xLPffWMhZh1PvEum204j4h8xT84.jpg",
        "runtime": "3 Episodes",
        "desc": "James Wan produces this vibrant, humorous three-part animated adventure of Arthur Curry's first week as King.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes",
          "18. Aquaman"
        ]
      },
      {
        "id": "batwheels-tv",
        "title": "Batwheels (2022–)",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 2022,
        "release_order": 2022.09,
        "phase": "Preschool Action Canon",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/w06mQxKjYhQp2gQ913Zf1V3P92k.jpg",
        "runtime": "Animated Series",
        "desc": "The superpowered vehicles of the Bat-Family fight crime in Gotham City led by Bam the Batmobile.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes"
        ]
      },
      {
        "id": "my-adventures-superman",
        "title": "My Adventures with Superman (2023–)",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 2023,
        "release_order": 2023.07,
        "phase": "Anime-Inspired Metropolis",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/d7J0ThpvR12uHn80g6vLp7H1961.jpg",
        "runtime": "2 Seasons / 20 Episodes",
        "desc": "Jack Quaid voices Clark Kent, Lois Lane, and Jimmy Olsen forming their unbreakable bond as cub reporters in Metropolis.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes",
          "04. Superman"
        ]
      },
      {
        "id": "ss-isekai-tv",
        "title": "Suicide Squad ISEKAI (2024)",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 2024.1,
        "release_order": 2024.06,
        "phase": "Wit Studio Japanese Anime",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/kb4TN99qGqvRIv9ApIWLNJ8254p.jpg",
        "runtime": "10 Episodes",
        "desc": "Harley Quinn, Deadshot, Peacemaker, and Clayface are sent through an otherworldly portal into a fantasy realm with swords and magic.",
        "sub_universe": "16. DC Animation — Other Major Universes",
        "sub_universes": [
          "16. DC Animation — Other Major Universes",
          "17. Suicide Squad"
        ]
      },
      {
        "id": "gl-2011",
        "title": "Green Lantern (2011)",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 2011,
        "release_order": 2011.06,
        "phase": "Martin Campbell Live-Action Film",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "114 min",
        "desc": "Test pilot Hal Jordan is chosen by the dying alien Abin Sur to become the first human member of the Green Lantern Corps.",
        "sub_universe": "20. Green Lantern",
        "sub_universes": [
          "20. Green Lantern"
        ]
      },
      {
        "id": "gl-tas",
        "title": "Green Lantern: The Animated Series (2011–2013)",
        "year": 2011,
        "media_type": "series",
        "chrono_order": 2011.1,
        "release_order": 2011.11,
        "phase": "Bruce Timm Frontier CGI Saga",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "26 Episodes",
        "desc": "Hal Jordan and Kilowog patrol the uncharted Frontier Space aboard the Interceptor, facing the Red Lantern Corps.",
        "sub_universe": "20. Green Lantern",
        "sub_universes": [
          "20. Green Lantern"
        ]
      },
      {
        "id": "constantine-2005",
        "title": "Constantine (2005)",
        "year": 2005,
        "media_type": "movie",
        "chrono_order": 2005,
        "release_order": 2005.02,
        "phase": "Francis Lawrence Occult Classic",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/sN02Y3G2qQ206b1241951016710.jpg",
        "runtime": "121 min",
        "desc": "Keanu Reeves' cynical exorcist John Constantine wades through angels and demons in Los Angeles to send half-breeds back to Hell.",
        "sub_universe": "21. Constantine / Vertigo",
        "sub_universes": [
          "21. Constantine / Vertigo",
          "23. DC Horror / Dark"
        ]
      },
      {
        "id": "izombie-tv",
        "title": "iZombie (2015–2019)",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 2015,
        "release_order": 2015.03,
        "phase": "Vertigo Police Procedural",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/8d8bA2nK4qR2e5e8e4c7a2b9f.jpg",
        "runtime": "5 Seasons / 71 Episodes",
        "desc": "Medical resident Olivia 'Liv' Moore becomes a zombie and takes a coroner job to eat brains and solve murder cases.",
        "sub_universe": "22. Vertigo / DC TV Universe",
        "sub_universes": [
          "22. Vertigo / DC TV Universe"
        ]
      },
      {
        "id": "lucifer-tv",
        "title": "Lucifer (2016–2021)",
        "year": 2016,
        "media_type": "series",
        "chrono_order": 2016,
        "release_order": 2016.01,
        "phase": "Vertigo Supernatural Detective",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/x3A0e7xY2e5e1mF4c8a2b5e9d.jpg",
        "runtime": "6 Seasons / 93 Episodes",
        "desc": "Tom Ellis stars as the Lord of Hell who abandons his throne to run a nightclub in Los Angeles and consult for the LAPD.",
        "sub_universe": "22. Vertigo / DC TV Universe",
        "sub_universes": [
          "22. Vertigo / DC TV Universe",
          "23. DC Horror / Dark"
        ]
      },
      {
        "id": "preacher-tv",
        "title": "Preacher (2016–2019)",
        "year": 2016,
        "media_type": "series",
        "chrono_order": 2016.1,
        "release_order": 2016.05,
        "phase": "Garth Ennis Vertigo Adaptation",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/8d8bA2nK4qR2e5e8e4c7a2b9f.jpg",
        "runtime": "4 Seasons / 43 Episodes",
        "desc": "Dominic Cooper stars as Jesse Custer, a conflicted small-town preacher infused with Genesis on a quest to literally find God.",
        "sub_universe": "22. Vertigo / DC TV Universe",
        "sub_universes": [
          "22. Vertigo / DC TV Universe"
        ]
      },
      {
        "id": "y-last-man-tv",
        "title": "Y: The Last Man (2021)",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 2021,
        "release_order": 2021.09,
        "phase": "Post-Apocalyptic Vertigo Comic",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/8d8bA2nK4qR2e5e8e4c7a2b9f.jpg",
        "runtime": "10 Episodes",
        "desc": "A cataclysmic event wipes out every mammal with a Y chromosome except for one cisgender man and his pet monkey.",
        "sub_universe": "22. Vertigo / DC TV Universe",
        "sub_universes": [
          "22. Vertigo / DC TV Universe"
        ]
      },
      {
        "id": "sweet-tooth-tv",
        "title": "Sweet Tooth (2021–2024)",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 2021.1,
        "release_order": 2021.06,
        "phase": "Post-Apocalyptic Hybrid Fairy Tale",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/x3A0e7xY2e5e1mF4c8a2b5e9d.jpg",
        "runtime": "3 Seasons / 24 Episodes",
        "desc": "Gus, a young deer-human hybrid boy, ventures across a post-apocalyptic America searching for his mother.",
        "sub_universe": "22. Vertigo / DC TV Universe",
        "sub_universes": [
          "22. Vertigo / DC TV Universe"
        ]
      },
      {
        "id": "the-sandman-tv",
        "title": "The Sandman (2022–2025)",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 2022,
        "release_order": 2022.08,
        "phase": "Neil Gaiman Vertigo Masterpiece",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/4nQ1WjC0fW592eR6vW1K8P1d2q9.jpg",
        "runtime": "2 Seasons / 23 Episodes",
        "desc": "Morpheus, the King of Dreams, escapes a century-long imprisonment to rebuild his realm and restore order to the universe.",
        "sub_universe": "22. Vertigo / DC TV Universe",
        "sub_universes": [
          "22. Vertigo / DC TV Universe",
          "21. Constantine / Vertigo",
          "23. DC Horror / Dark"
        ]
      },
      {
        "id": "dead-boy-detectives-tv",
        "title": "Dead Boy Detectives (2024)",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 2024,
        "release_order": 2024.04,
        "phase": "The Sandman Universe Spinoff",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/8d8bA2nK4qR2e5e8e4c7a2b9f.jpg",
        "runtime": "8 Episodes",
        "desc": "Two deceased teenage ghosts, Edwin Payne and Charles Rowland, avoid Death and solve supernatural mysteries.",
        "sub_universe": "22. Vertigo / DC TV Universe",
        "sub_universes": [
          "22. Vertigo / DC TV Universe",
          "23. DC Horror / Dark"
        ]
      },
      {
        "id": "swamp-thing-2019",
        "title": "Swamp Thing (2019)",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 2019,
        "release_order": 2019.05,
        "phase": "DC Universe Streaming Gothic Horror",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/yA0qW4R67e41q38914841981014.jpg",
        "runtime": "10 Episodes",
        "desc": "CDC investigator Abby Arcane returns home to Louisiana to research a deadly swamp virus and encounters a monstrous protector.",
        "sub_universe": "23. DC Horror / Dark",
        "sub_universes": [
          "23. DC Horror / Dark"
        ]
      }
    ]
  },
  {
    "id": "star-wars",
    "name": "Star Wars Galactic Canon & Legends",
    "badge": "19 CANON BRANCHES • SKYWALKER SAGA, CLONE WARS, MANDALORIAN & EXPANDED LORE",
    "icon": "⭐",
    "theme_color": "#FFE81F",
    "tagline": "A long time ago in a galaxy far, far away... Explore the High Republic, Fall of the Jedi, Age of Rebellion, New Republic, and First Order.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    "why_watch": "The quintessential space-opera mythology spanning Jedi, Sith, bounty hunters, starfighter dogfights, and revolutionary galactic struggles.",
    "sub_universes": [
      "All Star Wars",
      "01. Skywalker Saga",
      "02. High Republic",
      "03. Fall of the Jedi",
      "04. Reign of the Empire",
      "05. Age of Rebellion",
      "06. Rogue One / Andor",
      "07. New Republic",
      "08. Rise of the First Order",
      "09. Clone Wars Universe",
      "10. Rebels Universe",
      "11. Mandalorian Universe",
      "12. Ahsoka / Thrawn Story",
      "13. Maul / Criminal Underworld",
      "14. Animated Star Wars",
      "15. LEGO Star Wars",
      "16. Star Wars Vintage / Legends",
      "17. Star Wars Anthology Films",
      "18. Star Wars Specials / Shorts",
      "19. Star Wars Documentary / Behind the Scenes"
    ],
    "watch_modes": [
      {
        "id": "chrono",
        "label": "⏳ Complete Canon Chronological",
        "desc": "The Acolyte → Prequel Trilogy → The Clone Wars → Bad Batch → Solo → Kenobi → Andor → Rebels → Rogue One → Original Trilogy → Mandalorian Era → Sequel Trilogy"
      },
      {
        "id": "release",
        "label": "🎞️ Release Date Order",
        "desc": "Theatrical and television release order starting with A New Hope (1977) through 2026"
      },
      {
        "id": "skywalker_release",
        "label": "⚔️ A. Skywalker Saga — Release Order",
        "desc": "Original Trilogy (1977–1983) → Prequel Trilogy (1999–2005) → Sequel Trilogy (2015–2019)"
      },
      {
        "id": "skywalker_chrono",
        "label": "🪐 B. Skywalker Saga — Chronological",
        "desc": "Episode I (The Phantom Menace) through Episode IX (The Rise of Skywalker)"
      },
      {
        "id": "clone_wars_order",
        "label": "🛡️ D. Clone Wars Watch Order",
        "desc": "Attack of the Clones → Clone Wars (Movie) → Clone Wars (Series) → Tales of the Jedi → Revenge of the Sith → The Bad Batch"
      },
      {
        "id": "rebellion_order",
        "label": "✊ E. Rebellion Watch Order",
        "desc": "The Bad Batch → Solo → Obi-Wan Kenobi → Andor → Rebels → Rogue One → Original Trilogy (Episodes IV, V, VI)"
      },
      {
        "id": "mando_order",
        "label": "👶 F. Mandalorian / New Republic Watch Order",
        "desc": "Return of the Jedi → The Mandalorian S1–S2 → Book of Boba Fett → The Mandalorian S3 → Ahsoka → Skeleton Crew → The Mandalorian and Grogu"
      },
      {
        "id": "ahsoka_order",
        "label": "🌀 G. Ahsoka Watch Order",
        "desc": "The Clone Wars → Rebels → The Mandalorian S1–S3 → The Book of Boba Fett → Ahsoka"
      },
      {
        "id": "andor_rogue_order",
        "label": "🎯 H. Andor / Rogue One Watch Order",
        "desc": "Andor Season 1 → Andor Season 2 → Rogue One: A Star Wars Story"
      },
      {
        "id": "animation_order",
        "label": "🎨 I. Animation Watch Order",
        "desc": "The Clone Wars → Rebels → Resistance → Bad Batch → Tales of the Jedi → Tales of the Empire → Underworld → Visions → Maul"
      }
    ],
    "timeline": [
      {
        "id": "sw-young-jedi",
        "title": "Star Wars: Young Jedi Adventures",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 1,
        "release_order": 2023.05,
        "phase": "The High Republic • Jedi Initiates",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/81W08b5f3m7Y6k8a1q0.jpg",
        "runtime": "2 Seasons / 42 Episodes",
        "desc": "Jedi younglings Kai Brightstar, Lys Solay, and Nubs study the ways of the Force and explore the galaxy under Master Yoda.",
        "sub_universe": "02. High Republic",
        "sub_universes": [
          "02. High Republic",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-acolyte",
        "title": "The Acolyte",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 2,
        "release_order": 2024.06,
        "phase": "The High Republic • Twilight of the Golden Age",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/1aB4o7E2f0e0c0d1e2f3g4h5i6j.jpg",
        "runtime": "8 Episodes",
        "desc": "An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past as dark forces emerge.",
        "sub_universe": "02. High Republic",
        "sub_universes": [
          "02. High Republic"
        ]
      },
      {
        "id": "sw-ep1",
        "title": "Star Wars: Episode I - The Phantom Menace",
        "year": 1999,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 1999.05,
        "phase": "Fall of the Jedi • Prequel Trilogy",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6bCplVkhowOj6Kpgh0t079Ej4OX.jpg",
        "runtime": "136 min",
        "desc": "Jedi Master Qui-Gon Jinn and apprentice Obi-Wan Kenobi rescue Queen Amidala and discover young Anakin Skywalker on Tatooine as Darth Maul emerges.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "03. Fall of the Jedi",
          "13. Maul / Criminal Underworld"
        ]
      },
      {
        "id": "sw-ep2",
        "title": "Star Wars: Episode II - Attack of the Clones",
        "year": 2002,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 2002.05,
        "phase": "Fall of the Jedi • Prequel Trilogy",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/oZNPzxqok5ObAnOzxl9M8BhuMG5.jpg",
        "runtime": "142 min",
        "desc": "Ten years after the Naboo crisis, Obi-Wan investigates a bounty hunter while Anakin guards Padmé amid Count Dooku's growing Separatist rebellion.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "03. Fall of the Jedi"
        ]
      },
      {
        "id": "sw-tcw-movie",
        "title": "Star Wars: The Clone Wars (Movie)",
        "year": 2008,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2008.08,
        "phase": "The Clone Wars • Theatrical Genesis",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
        "runtime": "98 min",
        "desc": "Anakin Skywalker and his newly appointed young Padawan Ahsoka Tano are dispatched to rescue Jabba the Hutt's kidnapped son.",
        "sub_universe": "03. Fall of the Jedi",
        "sub_universes": [
          "03. Fall of the Jedi",
          "09. Clone Wars Universe",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-tcw-series",
        "title": "Star Wars: The Clone Wars (Series)",
        "year": 2008,
        "media_type": "series",
        "chrono_order": 6,
        "release_order": 2008.1,
        "phase": "The Clone Wars • The Definitive Galactic War",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
        "runtime": "7 Seasons / 133 Episodes",
        "desc": "Dave Filoni's monumental animated epic chronicling the brutal conflict between the Republic and Separatists, Captain Rex, Mandalore, and Ahsoka's trial.",
        "sub_universe": "03. Fall of the Jedi",
        "sub_universes": [
          "03. Fall of the Jedi",
          "09. Clone Wars Universe",
          "12. Ahsoka / Thrawn Story",
          "13. Maul / Criminal Underworld",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-tales-jedi",
        "title": "Star Wars: Tales of the Jedi",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 7,
        "release_order": 2022.1,
        "phase": "Fall of the Jedi • Dual Destinies",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/uV7093k6q9X3Z8W7v2v7x0k.jpg",
        "runtime": "6 Episodes",
        "desc": "Six animated parables contrasting the tragic fall of Count Dooku alongside Ahsoka Tano's Jedi training and survival after Order 66.",
        "sub_universe": "03. Fall of the Jedi",
        "sub_universes": [
          "03. Fall of the Jedi",
          "09. Clone Wars Universe",
          "13. Maul / Criminal Underworld",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-ep3",
        "title": "Star Wars: Episode III - Revenge of the Sith",
        "year": 2005,
        "media_type": "movie",
        "chrono_order": 8,
        "release_order": 2005.05,
        "phase": "Fall of the Jedi • Prequel Climax",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xfSAoYWiQEgNZUmBk8wJ0bA0wov.jpg",
        "runtime": "140 min",
        "desc": "Seduced by Chancellor Palpatine's dark promises to save Padmé, Anakin betrays the Jedi Order and transforms into Darth Vader under Order 66.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "03. Fall of the Jedi"
        ]
      },
      {
        "id": "sw-tales-empire",
        "title": "Star Wars: Tales of the Empire",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 9,
        "release_order": 2024.05,
        "phase": "Reign of the Empire • Inquisitorius",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/uV7093k6q9X3Z8W7v2v7x0k.jpg",
        "runtime": "6 Episodes",
        "desc": "Explores the harsh choices of two warriors across different eras: Morgan Elsbeth navigating the Imperial navy and former Jedi Barriss Offee joining the Inquisitors.",
        "sub_universe": "04. Reign of the Empire",
        "sub_universes": [
          "04. Reign of the Empire",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-bad-batch",
        "title": "Star Wars: The Bad Batch",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 10,
        "release_order": 2021.05,
        "phase": "Reign of the Empire • Clone Force 99",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/5qht10Z2B0N4h0v8f9024c1.jpg",
        "runtime": "3 Seasons / 47 Episodes",
        "desc": "Clone Force 99, an elite squad of genetically mutated clone troopers, navigate the immediate aftermath of Order 66 while protecting young clone Omega.",
        "sub_universe": "04. Reign of the Empire",
        "sub_universes": [
          "04. Reign of the Empire",
          "09. Clone Wars Universe",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-tales-underworld",
        "title": "Star Wars: Tales of the Underworld",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 11,
        "release_order": 2025.05,
        "phase": "Reign of the Empire • Criminal Syndicates",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/uV7093k6q9X3Z8W7v2v7x0k.jpg",
        "runtime": "6 Episodes",
        "desc": "Short animated parables diving into the shadowy underworld of Coruscant, Crimson Dawn, bounty hunters, and syndicate kingpins.",
        "sub_universe": "04. Reign of the Empire",
        "sub_universes": [
          "04. Reign of the Empire",
          "09. Clone Wars Universe",
          "13. Maul / Criminal Underworld",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-maul-shadow",
        "title": "Star Wars: Maul – Shadow Lord",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 12,
        "release_order": 2026.04,
        "phase": "Reign of the Empire • Crimson Dawn Syndicate",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/6bCplVkhowOj6Kpgh0t079Ej4OX.jpg",
        "runtime": "8 Episodes",
        "desc": "Chronicles Maul's ruthless ascension to the throne of Crimson Dawn, consolidating the Five Syndicates while avoiding the Emperor and Vader.",
        "sub_universe": "04. Reign of the Empire",
        "sub_universes": [
          "04. Reign of the Empire",
          "13. Maul / Criminal Underworld",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-solo",
        "title": "Solo: A Star Wars Story",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 13,
        "release_order": 2018.05,
        "phase": "Reign of the Empire • The Kessel Run",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4o0hG18F0tP8J2Mv39Mv3P1r6f1.jpg",
        "runtime": "135 min",
        "desc": "A young Han Solo meets Chewbacca and Lando Calrissian, pulling off the daring coaxium heist on Kessel and crossing Crimson Dawn.",
        "sub_universe": "04. Reign of the Empire",
        "sub_universes": [
          "04. Reign of the Empire",
          "13. Maul / Criminal Underworld",
          "17. Star Wars Anthology Films"
        ]
      },
      {
        "id": "sw-kenobi",
        "title": "Obi-Wan Kenobi",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 14,
        "release_order": 2022.05,
        "phase": "Reign of the Empire • Tatooine Exile",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/qJXZjAjFiPn7GhMlupNDapxQxMN.jpg",
        "runtime": "6 Episodes",
        "desc": "Ewan McGregor returns as Obi-Wan Kenobi emerges from desert exile on Tatooine to rescue a young Princess Leia from Imperial Inquisitors.",
        "sub_universe": "04. Reign of the Empire",
        "sub_universes": [
          "04. Reign of the Empire"
        ]
      },
      {
        "id": "sw-andor",
        "title": "Andor",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 15,
        "release_order": 2022.09,
        "phase": "Age of Rebellion • Espionage & Revolution",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/59SVNwL2Oumv24pY7x69UmBtQ8V.jpg",
        "runtime": "2 Seasons / 24 Episodes",
        "desc": "Tony Gilroy's critically acclaimed espionage thriller following Cassian Andor's transformation from cynical thief into a passionate rebel martyr.",
        "sub_universe": "05. Age of Rebellion",
        "sub_universes": [
          "05. Age of Rebellion",
          "06. Rogue One / Andor"
        ]
      },
      {
        "id": "sw-rebels",
        "title": "Star Wars Rebels",
        "year": 2014,
        "media_type": "series",
        "chrono_order": 16,
        "release_order": 2014.1,
        "phase": "Age of Rebellion • The Ghost Crew",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/91i5s79m0n14o8721c0029b.jpg",
        "runtime": "4 Seasons / 75 Episodes",
        "desc": "Ezra Bridger, Kanan Jarrus, Hera Syndulla, and the crew of the Ghost strike against Imperial tyranny, clashing with Grand Admiral Thrawn.",
        "sub_universe": "05. Age of Rebellion",
        "sub_universes": [
          "05. Age of Rebellion",
          "10. Rebels Universe",
          "12. Ahsoka / Thrawn Story",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-rogue-one",
        "title": "Rogue One: A Star Wars Story",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 17,
        "release_order": 2016.12,
        "phase": "Age of Rebellion • The Scarif Heist",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/i0yw1mFbB79tmiHilscdmOx9Odo.jpg",
        "runtime": "133 min",
        "desc": "Jyn Erso and Cassian Andor lead a heroic band of resistance fighters on a desperate mission to steal the Death Star plans on Scarif.",
        "sub_universe": "05. Age of Rebellion",
        "sub_universes": [
          "05. Age of Rebellion",
          "06. Rogue One / Andor",
          "10. Rebels Universe",
          "17. Star Wars Anthology Films"
        ]
      },
      {
        "id": "sw-ep4",
        "title": "Star Wars: Episode IV - A New Hope",
        "year": 1977,
        "media_type": "movie",
        "chrono_order": 18,
        "release_order": 1977.05,
        "phase": "Age of Rebellion • Original Trilogy",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "runtime": "121 min",
        "desc": "George Lucas's immortal space opera: Luke Skywalker leaves Tatooine, joins Han Solo and Chewbacca, and destroys the Galactic Empire's Death Star.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "05. Age of Rebellion"
        ]
      },
      {
        "id": "sw-ep5",
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": 1980,
        "media_type": "movie",
        "chrono_order": 19,
        "release_order": 1980.05,
        "phase": "Age of Rebellion • Original Trilogy",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
        "runtime": "124 min",
        "desc": "The Empire assaults Hoth. While Han and Leia flee to Cloud City, Luke trains with Master Yoda on Dagobah and faces Darth Vader's shocking revelation.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "05. Age of Rebellion"
        ]
      },
      {
        "id": "sw-ep6",
        "title": "Star Wars: Episode VI - Return of the Jedi",
        "year": 1983,
        "media_type": "movie",
        "chrono_order": 20,
        "release_order": 1983.05,
        "phase": "Age of Rebellion • Original Trilogy Climax",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mDCBQSuPhA8k24iHqO6L30dG804.jpg",
        "runtime": "131 min",
        "desc": "The Rebels mount a desperate assault on the second Death Star on Endor, while Luke Skywalker faces the Emperor to redeem his father Anakin.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "05. Age of Rebellion"
        ]
      },
      {
        "id": "sw-mando-s1",
        "title": "The Mandalorian — Season 1",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 21,
        "release_order": 2019.11,
        "phase": "The New Republic • The Bounty Hunter & The Child",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07Y9WUr.jpg",
        "runtime": "8 Episodes",
        "desc": "A lone Mandalorian bounty hunter in the outer reaches of the galaxy protects an alien infant of mysterious origins from Imperial remnants.",
        "sub_universe": "07. New Republic",
        "sub_universes": [
          "07. New Republic",
          "11. Mandalorian Universe",
          "12. Ahsoka / Thrawn Story"
        ]
      },
      {
        "id": "sw-mando-s2",
        "title": "The Mandalorian — Season 2",
        "year": 2020,
        "media_type": "series",
        "chrono_order": 22,
        "release_order": 2020.1,
        "phase": "The New Republic • Quest for the Jedi",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07Y9WUr.jpg",
        "runtime": "8 Episodes",
        "desc": "Din Djarin searches for Grogu's people, crossing paths with Bo-Katan Kryze, Boba Fett, and Ahsoka Tano before Luke Skywalker's legendary rescue.",
        "sub_universe": "07. New Republic",
        "sub_universes": [
          "07. New Republic",
          "11. Mandalorian Universe",
          "12. Ahsoka / Thrawn Story"
        ]
      },
      {
        "id": "sw-boba-fett",
        "title": "The Book of Boba Fett",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 23,
        "release_order": 2021.12,
        "phase": "The New Republic • Daimyo of Mos Espa",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gNbdjDi1HamTCZaSNxk2R2yI9Z2.jpg",
        "runtime": "7 Episodes",
        "desc": "Legendary bounty hunter Boba Fett and master assassin Fennec Shand claim Jabba the Hutt's territory on Tatooine, reuniting with Din and Grogu.",
        "sub_universe": "07. New Republic",
        "sub_universes": [
          "07. New Republic",
          "11. Mandalorian Universe"
        ]
      },
      {
        "id": "sw-mando-s3",
        "title": "The Mandalorian — Season 3",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 24,
        "release_order": 2023.03,
        "phase": "The New Republic • Reclamation of Mandalore",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07Y9WUr.jpg",
        "runtime": "8 Episodes",
        "desc": "Din Djarin seeks redemption in the living waters beneath Mandalore, uniting dispersed Mandalorian clans with Bo-Katan against Moff Gideon.",
        "sub_universe": "07. New Republic",
        "sub_universes": [
          "07. New Republic",
          "11. Mandalorian Universe",
          "12. Ahsoka / Thrawn Story"
        ]
      },
      {
        "id": "sw-ahsoka",
        "title": "Ahsoka",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 25,
        "release_order": 2023.08,
        "phase": "The New Republic • The Peridea Pathway",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/laCJxobHoPVaLQTvxc14Y29N3A7.jpg",
        "runtime": "8 Episodes",
        "desc": "Former Jedi Knight Ahsoka Tano investigates an emerging threat to the vulnerable New Republic alongside Sabine Wren, seeking Grand Admiral Thrawn.",
        "sub_universe": "07. New Republic",
        "sub_universes": [
          "07. New Republic",
          "10. Rebels Universe",
          "11. Mandalorian Universe",
          "12. Ahsoka / Thrawn Story"
        ]
      },
      {
        "id": "sw-skeleton-crew",
        "title": "Skeleton Crew",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 26,
        "release_order": 2024.12,
        "phase": "The New Republic • Coming-of-Age Cosmic Adventure",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/1aB4o7E2f0e0c0d1e2f3g4h5i6j.jpg",
        "runtime": "8 Episodes",
        "desc": "Four children make a mysterious discovery on their home planet, get lost in a dangerous galaxy, and encounter a Force user played by Jude Law.",
        "sub_universe": "07. New Republic",
        "sub_universes": [
          "07. New Republic",
          "11. Mandalorian Universe"
        ]
      },
      {
        "id": "sw-mando-grogu-movie",
        "title": "The Mandalorian and Grogu",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 27,
        "release_order": 2026.05,
        "phase": "The New Republic • Theatrical Feature",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07Y9WUr.jpg",
        "runtime": "Feature Film",
        "desc": "Jon Favreau directs the theatrical cinematic debut of Din Djarin and apprentice Grogu working covertly for the New Republic rangers.",
        "sub_universe": "07. New Republic",
        "sub_universes": [
          "07. New Republic",
          "11. Mandalorian Universe"
        ]
      },
      {
        "id": "sw-resistance",
        "title": "Star Wars Resistance",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 28,
        "release_order": 2018.1,
        "phase": "Rise of the First Order • The Colossus Station",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/oZNPzxqok5ObAnOzxl9M8BhuMG5.jpg",
        "runtime": "2 Seasons / 40 Episodes",
        "desc": "Kazuda Xiono is recruited by Poe Dameron to spy on the growing First Order on the ocean refueling platform Colossus.",
        "sub_universe": "08. Rise of the First Order",
        "sub_universes": [
          "08. Rise of the First Order",
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-ep7",
        "title": "Star Wars: Episode VII - The Force Awakens",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 29,
        "release_order": 2015.12,
        "phase": "Rise of the First Order • Sequel Trilogy",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/wqnLdw3cLLGkeOioTRUs6MKIumx.jpg",
        "runtime": "138 min",
        "desc": "Three decades after Endor, scavenger Rey and stormtrooper Finn find BB-8 with the map to Luke Skywalker, hunted by Kylo Ren.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "08. Rise of the First Order"
        ]
      },
      {
        "id": "sw-ep8",
        "title": "Star Wars: Episode VIII - The Last Jedi",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 30,
        "release_order": 2017.12,
        "phase": "Rise of the First Order • Sequel Trilogy",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmY9nrh6STW4q.jpg",
        "runtime": "152 min",
        "desc": "Rey seeks Jedi training from an embittered Luke Skywalker on Ahch-To while General Leia leads the Resistance in a desperate retreat.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "08. Rise of the First Order"
        ]
      },
      {
        "id": "sw-ep9",
        "title": "Star Wars: Episode IX - The Rise of Skywalker",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 31,
        "release_order": 2019.12,
        "phase": "Rise of the First Order • Saga Climax",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "142 min",
        "desc": "Emperor Palpatine returns from Exegol. Rey and the Resistance stage a final stand against the Final Order fleet to end the Sith forever.",
        "sub_universe": "01. Skywalker Saga",
        "sub_universes": [
          "01. Skywalker Saga",
          "08. Rise of the First Order"
        ]
      },
      {
        "id": "sw-visions-1",
        "title": "Star Wars: Visions — Volume 1",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 32,
        "release_order": 2021.09,
        "phase": "Visions Anime Showcase",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/81W08b5f3m7Y6k8a1q0.jpg",
        "runtime": "9 Shorts",
        "desc": "Seven world-renowned Japanese anime studios bring their boldest artistic perspectives to the Star Wars mythology.",
        "sub_universe": "14. Animated Star Wars",
        "sub_universes": [
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-visions-2",
        "title": "Star Wars: Visions — Volume 2",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 33,
        "release_order": 2023.05,
        "phase": "Visions Global Showcase",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/81W08b5f3m7Y6k8a1q0.jpg",
        "runtime": "9 Shorts",
        "desc": "Animation studios across Japan, France, South Africa, Ireland, Spain, and Chile celebrate diverse cultures through the Force.",
        "sub_universe": "14. Animated Star Wars",
        "sub_universes": [
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "sw-visions-ninth-jedi",
        "title": "Star Wars: Visions Presents: The Ninth Jedi",
        "year": 2026,
        "media_type": "series",
        "chrono_order": 34,
        "release_order": 2026.09,
        "phase": "Visions Spinoff Series",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/81W08b5f3m7Y6k8a1q0.jpg",
        "runtime": "Series",
        "desc": "Production I.G. expands their universally acclaimed Visions short into a full serialized anime following Kara and the reforged Jedi.",
        "sub_universe": "14. Animated Star Wars",
        "sub_universes": [
          "14. Animated Star Wars"
        ]
      },
      {
        "id": "lego-sw-padawan-menace",
        "title": "LEGO Star Wars: The Padawan Menace",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 35,
        "release_order": 2011.07,
        "phase": "LEGO Star Wars Special",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "22 min",
        "desc": "Master Yoda leads a Jedi Academy field trip that turns into an unexpected battle against the Sith.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-empire-strikes-out",
        "title": "LEGO Star Wars: The Empire Strikes Out",
        "year": 2012,
        "media_type": "movie",
        "chrono_order": 36,
        "release_order": 2012.09,
        "phase": "LEGO Star Wars Special",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "22 min",
        "desc": "Luke Skywalker is celebrated for destroying the Death Star while Darth Vader deals with sibling rivalry from Darth Maul.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-yoda-chronicles",
        "title": "LEGO Star Wars: The Yoda Chronicles",
        "year": 2013,
        "media_type": "series",
        "chrono_order": 37,
        "release_order": 2013.05,
        "phase": "LEGO Star Wars Miniseries",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "7 Episodes",
        "desc": "Yoda leads Padawans to protect a series of enhanced clones known as the Jek-14 experiments from Count Dooku.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-droid-tales",
        "title": "LEGO Star Wars: Droid Tales",
        "year": 2015,
        "media_type": "series",
        "chrono_order": 38,
        "release_order": 2015.07,
        "phase": "LEGO Star Wars Miniseries",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "5 Episodes",
        "desc": "Following the victory on Endor, C-3PO and R2-D2 recount the entire history of the galaxy while tracking a droid kidnapper.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-freemaker",
        "title": "LEGO Star Wars: The Freemaker Adventures",
        "year": 2016,
        "media_type": "series",
        "chrono_order": 39,
        "release_order": 2016.06,
        "phase": "LEGO Star Wars Series",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "2 Seasons / 26 Episodes",
        "desc": "The Freemakers, a family of scavengers who build starships from debris, discover the ancient Kyber Saber.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-all-stars",
        "title": "LEGO Star Wars: All-Stars",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 40,
        "release_order": 2018.1,
        "phase": "LEGO Star Wars Shorts",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "5 Episodes",
        "desc": "Features LEGO versions of beloved Star Wars heroes and villains spanning from the prequel era to the sequel trilogy.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-holiday-special",
        "title": "LEGO Star Wars Holiday Special",
        "year": 2020,
        "media_type": "movie",
        "chrono_order": 41,
        "release_order": 2020.11,
        "phase": "LEGO Star Wars Seasonal Special",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "45 min",
        "desc": "Rey travels through a temporal crystal on Life Day, visiting memorable moments and cross-era duels across the saga.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-terrifying-tales",
        "title": "LEGO Star Wars Terrifying Tales",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 42,
        "release_order": 2021.1,
        "phase": "LEGO Star Wars Halloween Special",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "45 min",
        "desc": "Poe Dameron and BB-8 land on Mustafar and enter Darth Vader's castle, listening to spooky tales told by Vaneé.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-summer-vacation",
        "title": "LEGO Star Wars Summer Vacation",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 43,
        "release_order": 2022.08,
        "phase": "LEGO Star Wars Summer Special",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "48 min",
        "desc": "Finn organizes a much-needed vacation for his friends aboard the Halcyon luxury starcruiser before they part ways.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-rebuild-galaxy",
        "title": "LEGO Star Wars: Rebuild the Galaxy",
        "year": 2024,
        "media_type": "series",
        "chrono_order": 44,
        "release_order": 2024.09,
        "phase": "LEGO Star Wars Multiverse Mashup",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "4 Episodes",
        "desc": "A nerf-herder unearths an ancient artifact that scrambles the entire galaxy into an upside-down reality where good guys are bad.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-rebuild-pieces",
        "title": "LEGO Star Wars: Rebuild the Galaxy — Pieces of the Past",
        "year": 2025,
        "media_type": "series",
        "chrono_order": 45,
        "release_order": 2025.09,
        "phase": "LEGO Star Wars Multiverse Sequel",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/db32LaOsbwTQnJ87NfP13gK0kS9.jpg",
        "runtime": "4 Episodes",
        "desc": "Sig Greebling and friends continue their hilarious journey across fragmented Star Wars timelines to restore the cosmic building blocks.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "lego-sw-mando-special",
        "title": "LEGO Star Wars: The Mandalorian",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 46,
        "release_order": 2026.08,
        "phase": "LEGO Mandalorian Brick Adventure",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07Y9WUr.jpg",
        "runtime": "Special",
        "desc": "Din Djarin and baby Grogu embark on a lighthearted block-building adventure dealing with Jawa mechanics and stormtrooper blunders.",
        "sub_universe": "15. LEGO Star Wars",
        "sub_universes": [
          "15. LEGO Star Wars"
        ]
      },
      {
        "id": "sw-faithful-wookiee",
        "title": "The Story of the Faithful Wookiee (1978)",
        "year": 1978,
        "media_type": "movie",
        "chrono_order": 47,
        "release_order": 1978.11,
        "phase": "Vintage Holiday Special Animation",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/gNbdjDi1HamTCZaSNxk2R2yI9Z2.jpg",
        "runtime": "11 min",
        "desc": "The historic first on-screen appearance of bounty hunter Boba Fett, animated by Nelvana for the Star Wars Holiday Special.",
        "sub_universe": "16. Star Wars Vintage / Legends",
        "sub_universes": [
          "16. Star Wars Vintage / Legends"
        ]
      },
      {
        "id": "sw-caravan-courage",
        "title": "Caravan of Courage: An Ewok Adventure (1984)",
        "year": 1984,
        "media_type": "movie",
        "chrono_order": 48,
        "release_order": 1984.11,
        "phase": "Vintage Live-Action TV Movie",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mDCBQSuPhA8k24iHqO6L30dG804.jpg",
        "runtime": "96 min",
        "desc": "The Towani family crash lands on the forest moon of Endor, where young Cindel and Mace ally with Ewoks to rescue their parents.",
        "sub_universe": "16. Star Wars Vintage / Legends",
        "sub_universes": [
          "16. Star Wars Vintage / Legends"
        ]
      },
      {
        "id": "sw-battle-for-endor",
        "title": "Ewoks: The Battle for Endor (1985)",
        "year": 1985,
        "media_type": "movie",
        "chrono_order": 49,
        "release_order": 1985.11,
        "phase": "Vintage Live-Action TV Movie",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mDCBQSuPhA8k24iHqO6L30dG804.jpg",
        "runtime": "94 min",
        "desc": "Cindel and Wicket join forces with a hermit named Noa to battle Marauders who have stolen a power crystal.",
        "sub_universe": "16. Star Wars Vintage / Legends",
        "sub_universes": [
          "16. Star Wars Vintage / Legends"
        ]
      },
      {
        "id": "sw-droids",
        "title": "Droids (1985–1986)",
        "year": 1985,
        "media_type": "series",
        "chrono_order": 50,
        "release_order": 1985.09,
        "phase": "Nelvana Classic Vintage Series",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "runtime": "13 Episodes",
        "desc": "R2-D2 and C-3PO navigate adventures with various masters across the galaxy fifteen years before meeting Luke Skywalker.",
        "sub_universe": "16. Star Wars Vintage / Legends",
        "sub_universes": [
          "16. Star Wars Vintage / Legends"
        ]
      },
      {
        "id": "sw-ewoks-series",
        "title": "Ewoks (1985–1986)",
        "year": 1985,
        "media_type": "series",
        "chrono_order": 51,
        "release_order": 1985.09,
        "phase": "Nelvana Classic Vintage Series",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/mDCBQSuPhA8k24iHqO6L30dG804.jpg",
        "runtime": "2 Seasons / 26 Episodes",
        "desc": "Follows Wicket W. Warrick and the Ewok tribe on the forest moon of Endor before the arrival of the Galactic Empire.",
        "sub_universe": "16. Star Wars Vintage / Legends",
        "sub_universes": [
          "16. Star Wars Vintage / Legends"
        ]
      },
      {
        "id": "sw-2d-clone-wars",
        "title": "Star Wars: The Clone Wars — 2D Micro-Series (2003–2005)",
        "year": 2003,
        "media_type": "series",
        "chrono_order": 52,
        "release_order": 2003.11,
        "phase": "Genndy Tartakovsky Vintage Masterpiece",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
        "runtime": "25 Micro-Episodes / 2 Seasons",
        "desc": "Genndy Tartakovsky's Emmy-winning kinetic masterwork introducing General Grievous and Mace Windu's legendary one-man army display.",
        "sub_universe": "16. Star Wars Vintage / Legends",
        "sub_universes": [
          "16. Star Wars Vintage / Legends"
        ]
      },
      {
        "id": "sw-rebels-shorts",
        "title": "Star Wars Rebels Shorts (2014)",
        "year": 2014,
        "media_type": "series",
        "chrono_order": 53,
        "release_order": 2014.08,
        "phase": "Rebels Introductory Shorts",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/91i5s79m0n14o8721c0029b.jpg",
        "runtime": "4 Shorts",
        "desc": "Four character spotlight shorts introducing Ghost crew members Chopper, Zeb, Sabine, and Kanan before the premiere of Star Wars Rebels.",
        "sub_universe": "18. Star Wars Specials / Shorts",
        "sub_universes": [
          "18. Star Wars Specials / Shorts"
        ]
      },
      {
        "id": "sw-forces-destiny",
        "title": "Star Wars: Forces of Destiny (2017–2018)",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 54,
        "release_order": 2017.07,
        "phase": "Heroines Micro-Series",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/wqnLdw3cLLGkeOioTRUs6MKIumx.jpg",
        "runtime": "32 Micro-Episodes",
        "desc": "Celebrates the heroism of iconic characters including Rey, Jyn Erso, Princess Leia, Sabine Wren, Padmé Amidala, and Ahsoka Tano.",
        "sub_universe": "18. Star Wars Specials / Shorts",
        "sub_universes": [
          "18. Star Wars Specials / Shorts"
        ]
      },
      {
        "id": "sw-blips",
        "title": "Star Wars Blips (2017–2019)",
        "year": 2017,
        "media_type": "series",
        "chrono_order": 55,
        "release_order": 2017.09,
        "phase": "Droids Comic Shorts",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/wqnLdw3cLLGkeOioTRUs6MKIumx.jpg",
        "runtime": "8 YouTube Shorts",
        "desc": "Lighthearted comedic animated shorts starring BB-8, R2-D2, Chewbacca, and the porgs causing mischief on the Millennium Falcon.",
        "sub_universe": "18. Star Wars Specials / Shorts",
        "sub_universes": [
          "18. Star Wars Specials / Shorts"
        ]
      },
      {
        "id": "sw-resistance-shorts",
        "title": "Star Wars Resistance Shorts (2018)",
        "year": 2018,
        "media_type": "series",
        "chrono_order": 56,
        "release_order": 2018.12,
        "phase": "Resistance Vignettes",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/oZNPzxqok5ObAnOzxl9M8BhuMG5.jpg",
        "runtime": "12 Shorts",
        "desc": "Bite-sized animated shorts showcasing the ace pilots and mechanics of the Colossus platform.",
        "sub_universe": "18. Star Wars Specials / Shorts",
        "sub_universes": [
          "18. Star Wars Specials / Shorts"
        ]
      },
      {
        "id": "sw-zen-grogu",
        "title": "Zen: Grogu and Dust Bunnies (2022)",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 57,
        "release_order": 2022.11,
        "phase": "Studio Ghibli Hand-Drawn Short",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07Y9WUr.jpg",
        "runtime": "3 min",
        "desc": "Hand-drawn animated short created by legendary anime house Studio Ghibli pairing baby Grogu with soot sprites.",
        "sub_universe": "18. Star Wars Specials / Shorts",
        "sub_universes": [
          "18. Star Wars Specials / Shorts"
        ]
      },
      {
        "id": "sw-young-jedi-shorts",
        "title": "Young Jedi Adventures Shorts (2023–)",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 58,
        "release_order": 2023.03,
        "phase": "High Republic Shorts",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/81W08b5f3m7Y6k8a1q0.jpg",
        "runtime": "Shorts",
        "desc": "Introduction to Kai, Lys, and Nubs as they learn teamwork, discipline, and the fundamentals of the Force.",
        "sub_universe": "18. Star Wars Specials / Shorts",
        "sub_universes": [
          "18. Star Wars Specials / Shorts"
        ]
      },
      {
        "id": "sw-doc-mando",
        "title": "Disney Gallery: The Mandalorian (2020–2021)",
        "year": 2020,
        "media_type": "series",
        "chrono_order": 59,
        "release_order": 2020.05,
        "phase": "Behind the Scenes Docuseries",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07Y9WUr.jpg",
        "runtime": "2 Seasons / 9 Episodes",
        "desc": "Jon Favreau and directors examine the revolutionary StageCraft virtual production technology, practical puppets, and storytelling.",
        "sub_universe": "19. Star Wars Documentary / Behind the Scenes",
        "sub_universes": [
          "19. Star Wars Documentary / Behind the Scenes"
        ]
      },
      {
        "id": "sw-doc-boba-fett",
        "title": "Disney Gallery: The Book of Boba Fett (2022)",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 60,
        "release_order": 2022.05,
        "phase": "Behind the Scenes Special",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gNbdjDi1HamTCZaSNxk2R2yI9Z2.jpg",
        "runtime": "63 min",
        "desc": "Explores the filmmaking, costume design, and creature effects bringing Boba Fett and Cad Bane to life.",
        "sub_universe": "19. Star Wars Documentary / Behind the Scenes",
        "sub_universes": [
          "19. Star Wars Documentary / Behind the Scenes"
        ]
      },
      {
        "id": "sw-doc-light-magic",
        "title": "Light & Magic (2022–)",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 61,
        "release_order": 2022.07,
        "phase": "ILM Definitive History",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "runtime": "6 Episodes",
        "desc": "Lawrence Kasdan directs this definitive six-part docuseries charting the history and visionary artists of Industrial Light & Magic.",
        "sub_universe": "19. Star Wars Documentary / Behind the Scenes",
        "sub_universes": [
          "19. Star Wars Documentary / Behind the Scenes"
        ]
      },
      {
        "id": "sw-doc-kenobi-return",
        "title": "Obi-Wan Kenobi: A Jedi's Return (2022)",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 62,
        "release_order": 2022.09,
        "phase": "Behind the Scenes Special",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/qJXZjAjFiPn7GhMlupNDapxQxMN.jpg",
        "runtime": "60 min",
        "desc": "Ewan McGregor, Hayden Christensen, and director Deborah Chow reflect on reuniting as Obi-Wan Kenobi and Darth Vader.",
        "sub_universe": "19. Star Wars Documentary / Behind the Scenes",
        "sub_universes": [
          "19. Star Wars Documentary / Behind the Scenes"
        ]
      }
    ]
  },
  {
    "id": "wizarding-world",
    "name": "The Wizarding World of Harry Potter",
    "badge": "6 CANON BRANCHES • HARRY POTTER, FANTASTIC BEASTS, HOGWARTS & VOLDEMORT LORE",
    "icon": "🧙",
    "theme_color": "#D3A625",
    "tagline": "The official Wizarding World catalog: J.K. Rowling's 8-film Harry Potter saga, Fantastic Beasts prequels, and Hogwarts lore.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    "why_watch": "The most beloved fantasy franchise of modern literature and cinema, taking viewers into the spells, houses, mysteries, and battles of Hogwarts.",
    "sub_universes": [
      "All Wizarding World",
      "01. Harry Potter",
      "02. Fantastic Beasts",
      "03. Dumbledore & Grindelwald",
      "04. Hogwarts",
      "05. Voldemort",
      "06. Wizarding World Specials"
    ],
    "watch_modes": [
      {
        "id": "hp_release",
        "label": "⚡ Harry Potter Release Order",
        "desc": "Philosopher's Stone (2001) → Chamber of Secrets → Azkaban → Goblet of Fire → Order of the Phoenix → Half-Blood Prince → Deathly Hallows Parts 1 & 2"
      },
      {
        "id": "chrono",
        "label": "⏳ Wizarding World Chronological Order",
        "desc": "Fantastic Beasts 1–3 (1926–1932) → Harry Potter 1–8 (1991–1998) → The Battle of Hogwarts"
      },
      {
        "id": "fb_order",
        "label": "🧳 Fantastic Beasts Order",
        "desc": "Fantastic Beasts and Where to Find Them (2016) → The Crimes of Grindelwald (2018) → The Secrets of Dumbledore (2022)"
      },
      {
        "id": "hp_essential",
        "label": "⭐ Harry Potter Essential Order",
        "desc": "The definitive 8-film journey of the Boy Who Lived from the Sorting Hat to Voldemort's defeat"
      },
      {
        "id": "release",
        "label": "🎞️ Full Theatrical Release Order",
        "desc": "Chronological theatrical progression from 2001 through 2026"
      }
    ],
    "timeline": [
      {
        "id": "hp-fb1",
        "title": "Fantastic Beasts and Where to Find Them",
        "year": 2016,
        "media_type": "movie",
        "chrono_order": 1,
        "release_order": 2016.11,
        "phase": "Fantastic Beasts • 1920s New York Incursion",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/h6NYqnVRv585w6nz2j1Bw9iG1z1.jpg",
        "runtime": "132 min",
        "desc": "Magizoologist Newt Scamander arrives in 1926 New York with a magical leather suitcase, accidentally unleashing creatures as the dark wizard Gellert Grindelwald stirs.",
        "sub_universe": "02. Fantastic Beasts",
        "sub_universes": [
          "02. Fantastic Beasts",
          "03. Dumbledore & Grindelwald"
        ]
      },
      {
        "id": "hp-fb2",
        "title": "Fantastic Beasts: The Crimes of Grindelwald",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 2,
        "release_order": 2018.11,
        "phase": "Fantastic Beasts • The Parisian Rally",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fMMrl8fD9gRCFJvsx0SuFZwND4A.jpg",
        "runtime": "134 min",
        "desc": "Grindelwald escapes MACUSA custody to gather pure-blood followers in Paris. Young Albus Dumbledore enlists Newt to confront the rising threat.",
        "sub_universe": "02. Fantastic Beasts",
        "sub_universes": [
          "02. Fantastic Beasts",
          "03. Dumbledore & Grindelwald"
        ]
      },
      {
        "id": "hp-fb3",
        "title": "Fantastic Beasts: The Secrets of Dumbledore",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 2022.04,
        "phase": "Fantastic Beasts • The Bhutan Confederation",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/jrgifaYeUtqvwh7RWnfV0r06dn8.jpg",
        "runtime": "142 min",
        "desc": "Unable to battle Grindelwald due to a blood pact, Professor Albus Dumbledore entrusts Newt and a brave band of wizards to stop Grindelwald's bid for Supreme Mugwump.",
        "sub_universe": "02. Fantastic Beasts",
        "sub_universes": [
          "02. Fantastic Beasts",
          "03. Dumbledore & Grindelwald"
        ]
      },
      {
        "id": "hp-1",
        "title": "Harry Potter and the Philosopher's Stone",
        "year": 2001,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 2001.11,
        "phase": "Hogwarts Year 1 • Boy Who Lived",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        "runtime": "152 min",
        "desc": "On his eleventh birthday, orphaned Harry Potter discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry with Ron Weasley and Hermione Granger.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts"
        ]
      },
      {
        "id": "hp-2",
        "title": "Harry Potter and the Chamber of Secrets",
        "year": 2002,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2002.11,
        "phase": "Hogwarts Year 2 • The Heir of Slytherin",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        "runtime": "161 min",
        "desc": "Mysterious petrifications terrorize Hogwarts as an ancient chamber is opened. Harry discovers Tom Riddle's preserved diary and battles the Basilisk.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts"
        ]
      },
      {
        "id": "hp-3",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "year": 2004,
        "media_type": "movie",
        "chrono_order": 6,
        "release_order": 2004.06,
        "phase": "Hogwarts Year 3 • The Marauders & Dementors",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/aWx2TeuvvgdfcqenjA4qVz9tC9k.jpg",
        "runtime": "142 min",
        "desc": "Alfonso Cuarón directs this gothic turning point: escaped convict Sirius Black stalks Hogwarts as soul-sucking Dementors patrol the school grounds.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts"
        ]
      },
      {
        "id": "hp-4",
        "title": "Harry Potter and the Goblet of Fire",
        "year": 2005,
        "media_type": "movie",
        "chrono_order": 7,
        "release_order": 2005.11,
        "phase": "Hogwarts Year 4 • Triwizard Tournament & Rebirth",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fECBtftvMlJay0IIvaIIEUCH2tC.jpg",
        "runtime": "157 min",
        "desc": "Harry is mysteriously entered into the perilous Triwizard Tournament, culminating in the Little Hangleton graveyard and Lord Voldemort's terrifying physical rebirth.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts",
          "05. Voldemort"
        ]
      },
      {
        "id": "hp-5",
        "title": "Harry Potter and the Order of the Phoenix",
        "year": 2007,
        "media_type": "movie",
        "chrono_order": 8,
        "release_order": 2007.07,
        "phase": "Hogwarts Year 5 • Dumbledore's Army & Ministry Duel",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxm17Qx5LJumR.jpg",
        "runtime": "138 min",
        "desc": "The Ministry of Magic denies Voldemort's return, installing Dolores Umbridge at Hogwarts. Harry forms Dumbledore's Army before the tragic Department of Mysteries clash.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts",
          "05. Voldemort"
        ]
      },
      {
        "id": "hp-6",
        "title": "Harry Potter and the Half-Blood Prince",
        "year": 2009,
        "media_type": "movie",
        "chrono_order": 9,
        "release_order": 2009.07,
        "phase": "Hogwarts Year 6 • Horcrux Memories & Astronomy Tower",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwlkemZ0DRapwPqB9k.jpg",
        "runtime": "153 min",
        "desc": "Harry uncovers Tom Riddle's Pensieve memories with Dumbledore, unlocking the secret of Voldemort's immortality through Horcruxes as Draco Malfoy's mission unfolds.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts",
          "05. Voldemort"
        ]
      },
      {
        "id": "hp-7",
        "title": "Harry Potter and the Deathly Hallows – Part 1",
        "year": 2010,
        "media_type": "movie",
        "chrono_order": 10,
        "release_order": 2010.11,
        "phase": "The Deathly Hallows • The Horcrux Hunt",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00BmZ4G8i5iTCjl.jpg",
        "runtime": "146 min",
        "desc": "On the run across Britain without the safety of Hogwarts, Harry, Ron, and Hermione race against time to locate and destroy Voldemort's hidden Horcruxes.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts",
          "05. Voldemort"
        ]
      },
      {
        "id": "hp-8",
        "title": "Harry Potter and the Deathly Hallows – Part 2",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 11,
        "release_order": 2011.07,
        "phase": "The Deathly Hallows • The Battle of Hogwarts",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/c54HpQmuwXjHq2C9wMUmzGEl4q5.jpg",
        "runtime": "130 min",
        "desc": "The epic final showdown between the forces of good and evil: the Battle of Hogwarts erupts as Harry makes the ultimate sacrifice to defeat Lord Voldemort forever.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts",
          "05. Voldemort"
        ]
      },
      {
        "id": "hp-tv-2027",
        "title": "Harry Potter TV Series (2027)",
        "year": 2027,
        "media_type": "series",
        "chrono_order": 12,
        "release_order": 2027.01,
        "phase": "HBO Max Decade-Long Faithful Book Adaptation",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        "runtime": "Announced HBO Series",
        "desc": "HBO's upcoming multi-season prestige television adaptation, dedicating a full season to each of J.K. Rowling's seven iconic novels.",
        "sub_universe": "01. Harry Potter",
        "sub_universes": [
          "01. Harry Potter",
          "04. Hogwarts"
        ]
      },
      {
        "id": "hp-special-tournament",
        "title": "Harry Potter: Hogwarts Tournament of Houses (2021)",
        "year": 2021,
        "media_type": "series",
        "chrono_order": 13,
        "release_order": 2021.11,
        "phase": "Wizarding World Special • Helen Mirren Quiz Event",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        "runtime": "4 Episodes",
        "desc": "Dame Helen Mirren hosts an electrifying four-part trivia competition where Gryffindor, Hufflepuff, Ravenclaw, and Slytherin compete for the House Cup.",
        "sub_universe": "06. Wizarding World Specials",
        "sub_universes": [
          "06. Wizarding World Specials"
        ]
      },
      {
        "id": "hp-special-reunion",
        "title": "Harry Potter 20th Anniversary: Return to Hogwarts (2022)",
        "year": 2022,
        "media_type": "movie",
        "chrono_order": 14,
        "release_order": 2022.01,
        "phase": "Wizarding World Special • 20th Anniversary Reunion",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/jntLBq0Jc4L3VfWq0J7L0Zq2q6Q.jpg",
        "runtime": "102 min",
        "desc": "Daniel Radcliffe, Rupert Grint, Emma Watson, and the filmmakers reunite on the original sets at Leavesden to look back on twenty years of cinematic magic.",
        "sub_universe": "06. Wizarding World Specials",
        "sub_universes": [
          "06. Wizarding World Specials"
        ]
      }
    ]
  },
  {
    "id": "middle-earth",
    "name": "The Lord of the Rings & Middle-Earth",
    "badge": "6 CANON BRANCHES • LOTR TRILOGY, THE HOBBIT, RINGS OF POWER & ANIMATION",
    "icon": "🧝",
    "theme_color": "#C5A059",
    "tagline": "J.R.R. Tolkien's legendary legendarium: Peter Jackson's Oscar-winning trilogies, The Rings of Power, and anime lore.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "why_watch": "The crowning achievement of high fantasy cinema, recipient of 17 Academy Awards with unparalleled worldbuilding and score.",
    "sub_universes": [
      "All Middle-Earth",
      "01. The Lord of the Rings",
      "02. The Hobbit",
      "03. The Rings of Power",
      "04. The War of the Rohirrim",
      "05. Middle-Earth Animation",
      "06. Middle-Earth Specials / Documentaries"
    ],
    "watch_modes": [
      {
        "id": "chrono",
        "label": "⏳ Middle-Earth Chronological Order",
        "desc": "The Rings of Power → The War of the Rohirrim → The Hobbit Trilogy → The Lord of the Rings Trilogy"
      },
      {
        "id": "lotr_release",
        "label": "💍 Lord of the Rings Trilogy — Release Order",
        "desc": "The Fellowship of the Ring (2001) → The Two Towers (2002) → The Return of the King (2003)"
      },
      {
        "id": "hobbit_release",
        "label": "🗡️ The Hobbit Trilogy — Release Order",
        "desc": "An Unexpected Journey (2012) → The Desolation of Smaug (2013) → The Battle of the Five Armies (2014)"
      },
      {
        "id": "movie_release",
        "label": "🎞️ Middle-Earth Movie Release Order",
        "desc": "LOTR Trilogy (2001–2003) followed by The Hobbit Trilogy (2012–2014)"
      },
      {
        "id": "essential",
        "label": "⭐ Essential Middle-Earth Order",
        "desc": "The Fellowship of the Ring → The Two Towers → The Return of the King"
      },
      {
        "id": "release",
        "label": "📜 Full Release Progression",
        "desc": "From 1977 vintage animation and 2001 Jackson trilogy to modern day"
      }
    ],
    "timeline": [
      {
        "id": "me-rings-of-power",
        "title": "The Lord of the Rings: The Rings of Power",
        "year": 2022,
        "media_type": "series",
        "chrono_order": 1,
        "release_order": 2022.09,
        "phase": "Second Age • Forging of the Rings & Rise of Sauron",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
        "runtime": "2 Seasons / 16 Episodes",
        "desc": "Set thousands of years before Bilbo and Frodo, this grand epic follows an ensemble cast confronting the long-feared re-emergence of evil in Middle-earth.",
        "sub_universe": "03. The Rings of Power",
        "sub_universes": [
          "03. The Rings of Power"
        ]
      },
      {
        "id": "me-war-of-rohirrim",
        "title": "The Lord of the Rings: The War of the Rohirrim",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 2,
        "release_order": 2024.12,
        "phase": "Third Age • Legend of Helm Hammerhand",
        "is_essential": true,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "runtime": "134 min",
        "desc": "Kenji Kamiyama directs an anime epic set 183 years before the Fellowship, telling the tragic stand of King Helm Hammerhand and Princess Héra at the Hornburg.",
        "sub_universe": "04. The War of the Rohirrim",
        "sub_universes": [
          "04. The War of the Rohirrim",
          "05. Middle-Earth Animation"
        ]
      },
      {
        "id": "me-hobbit-1",
        "title": "The Hobbit: An Unexpected Journey",
        "year": 2012,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 2012.12,
        "phase": "The Hobbit • Quest for Erebor Begins",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5IfcRNY85gEgQw.jpg",
        "runtime": "169 min (Extended: 182m)",
        "desc": "Reluctant hobbit Bilbo Baggins is swept into an epic quest by Gandalf the Grey and Thorin Oakenshield to reclaim the lost Dwarf Kingdom of Erebor.",
        "sub_universe": "02. The Hobbit",
        "sub_universes": [
          "02. The Hobbit"
        ]
      },
      {
        "id": "me-hobbit-2",
        "title": "The Hobbit: The Desolation of Smaug",
        "year": 2013,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 2013.12,
        "phase": "The Hobbit • The Dragon Awakes",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xQYiXsheRCZ91jT9J31qYlQ719K.jpg",
        "runtime": "161 min (Extended: 186m)",
        "desc": "Bilbo and the Dwarves brave Mirkwood and Lake-town to reach the Lonely Mountain, where Bilbo encounters the fearsome dragon Smaug.",
        "sub_universe": "02. The Hobbit",
        "sub_universes": [
          "02. The Hobbit"
        ]
      },
      {
        "id": "me-hobbit-3",
        "title": "The Hobbit: The Battle of the Five Armies",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2014.12,
        "phase": "The Hobbit • Climax of the Mountain War",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRml42QTC2i5.jpg",
        "runtime": "144 min (Extended: 164m)",
        "desc": "Thorin Oakenshield is consumed by dragon-sickness, forcing Men, Elves, and Dwarves to unite against legions of Orcs marching upon Erebor.",
        "sub_universe": "02. The Hobbit",
        "sub_universes": [
          "02. The Hobbit"
        ]
      },
      {
        "id": "me-lotr-1",
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "media_type": "movie",
        "chrono_order": 6,
        "release_order": 2001.12,
        "phase": "The Lord of the Rings • Departure from the Shire",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "runtime": "178 min (Extended: 208m)",
        "desc": "Peter Jackson's cinematic milestone: young hobbit Frodo Baggins inherits the One Ring and journeys toward Mordor with eight companions.",
        "sub_universe": "01. The Lord of the Rings",
        "sub_universes": [
          "01. The Lord of the Rings"
        ]
      },
      {
        "id": "me-lotr-2",
        "title": "The Lord of the Rings: The Two Towers",
        "year": 2002,
        "media_type": "movie",
        "chrono_order": 7,
        "release_order": 2002.12,
        "phase": "The Lord of the Rings • Battle of Helm's Deep",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGHXsB2IIxQv59R.jpg",
        "runtime": "179 min (Extended: 223m)",
        "desc": "The Fellowship is fractured: Frodo and Sam follow Gollum to Mordor while Aragorn, Legolas, and Gimli rally Rohan against Saruman's army at Helm's Deep.",
        "sub_universe": "01. The Lord of the Rings",
        "sub_universes": [
          "01. The Lord of the Rings"
        ]
      },
      {
        "id": "me-lotr-3",
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "media_type": "movie",
        "chrono_order": 8,
        "release_order": 2003.12,
        "phase": "The Lord of the Rings • Victory at Mount Doom",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "runtime": "201 min (Extended: 251m)",
        "desc": "Winner of 11 Academy Awards: Aragorn claims his ancestral throne at Minas Tirith while Frodo and Sam reach Mount Doom for the Ring's final destruction.",
        "sub_universe": "01. The Lord of the Rings",
        "sub_universes": [
          "01. The Lord of the Rings"
        ]
      },
      {
        "id": "me-anim-hobbit-1977",
        "title": "The Hobbit (1977)",
        "year": 1977,
        "media_type": "movie",
        "chrono_order": 9,
        "release_order": 1977.11,
        "phase": "Vintage Animation • Rankin/Bass Classic",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5IfcRNY85gEgQw.jpg",
        "runtime": "77 min",
        "desc": "Rankin/Bass animated musical adaptation of J.R.R. Tolkien's novel starring Orson Bean as Bilbo and John Huston as Gandalf.",
        "sub_universe": "05. Middle-Earth Animation",
        "sub_universes": [
          "05. Middle-Earth Animation",
          "02. The Hobbit"
        ]
      },
      {
        "id": "me-anim-lotr-1978",
        "title": "The Lord of the Rings (1978)",
        "year": 1978,
        "media_type": "movie",
        "chrono_order": 10,
        "release_order": 1978.11,
        "phase": "Vintage Animation • Ralph Bakshi Rotoscoped Epic",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "runtime": "132 min",
        "desc": "Ralph Bakshi's rotoscoped dark fantasy cult classic adapting The Fellowship of the Ring and the first half of The Two Towers.",
        "sub_universe": "05. Middle-Earth Animation",
        "sub_universes": [
          "05. Middle-Earth Animation",
          "01. The Lord of the Rings"
        ]
      },
      {
        "id": "me-anim-rotk-1980",
        "title": "The Return of the King (1980)",
        "year": 1980,
        "media_type": "movie",
        "chrono_order": 11,
        "release_order": 1980.05,
        "phase": "Vintage Animation • Rankin/Bass Musical Sequel",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "runtime": "98 min",
        "desc": "Rankin/Bass animated television musical continuation focusing on Frodo and Sam in Mordor and the final defeat of Sauron.",
        "sub_universe": "05. Middle-Earth Animation",
        "sub_universes": [
          "05. Middle-Earth Animation",
          "01. The Lord of the Rings"
        ]
      },
      {
        "id": "me-doc-beyond-movie",
        "title": "Beyond the Movie: The Lord of the Rings (2001)",
        "year": 2001,
        "media_type": "movie",
        "chrono_order": 12,
        "release_order": 2001.12,
        "phase": "National Geographic Special • Real-World Lore",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "runtime": "52 min",
        "desc": "National Geographic explores the historical, geographical, and mythic parallels between J.R.R. Tolkien's world and real human history.",
        "sub_universe": "06. Middle-Earth Specials / Documentaries",
        "sub_universes": [
          "06. Middle-Earth Specials / Documentaries"
        ]
      },
      {
        "id": "me-doc-symphony",
        "title": "Creating The Lord of the Rings Symphony (2004)",
        "year": 2004,
        "media_type": "movie",
        "chrono_order": 13,
        "release_order": 2004.1,
        "phase": "Music Documentary • Howard Shore's Masterwork",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "runtime": "50 min",
        "desc": "Behind-the-scenes look at Academy Award winner Howard Shore composing and conducting the world tour of The Lord of the Rings Symphony.",
        "sub_universe": "06. Middle-Earth Specials / Documentaries",
        "sub_universes": [
          "06. Middle-Earth Specials / Documentaries"
        ]
      }
    ]
  },
  {
    "id": "fast-and-furious",
    "name": "Fast & Furious Saga",
    "badge": "4 CANON BRANCHES • MAIN SAGA, TOKYO DRIFT CHRONOLOGY, HOBBS & SHAW & ANIMATION",
    "icon": "🏎️",
    "theme_color": "#FF2A00",
    "tagline": "Quarter-mile at a time: Street races, impossible vault heists, supersonic supercars, and the unbreakable code of family.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "why_watch": "The ultimate modern adrenaline franchise that evolved from gritty midnight Los Angeles street racing into billion-dollar globetrotting super-spy action.",
    "sub_universes": [
      "All Fast & Furious",
      "01. Fast & Furious Main Saga",
      "02. Hobbs & Shaw",
      "03. Fast & Furious Animation",
      "04. Fast & Furious Future"
    ],
    "watch_modes": [
      {
        "id": "chrono",
        "label": "⏳ Chronological Story Order",
        "desc": "1 → 2 → 4 → 5 → 6 → Tokyo Drift → 7 → 8 → Hobbs & Shaw → 9 → Fast X"
      },
      {
        "id": "main_release",
        "label": "🏎️ Main Saga — Release Order",
        "desc": "The Fast and the Furious (2001) → 2 Fast 2 Furious → Tokyo Drift (2006) ... Fast X (2023)"
      },
      {
        "id": "hobbs_shaw",
        "label": "💥 Hobbs & Shaw Spinoff",
        "desc": "Fast & Furious Presents: Hobbs & Shaw (2019)"
      },
      {
        "id": "essential",
        "label": "⭐ Essential Fast & Furious Order",
        "desc": "The Fast and the Furious → Fast Five → Fast & Furious 6 → Furious 7 → The Fate of the Furious → F9 → Fast X"
      },
      {
        "id": "release",
        "label": "🎞️ Full Theatrical Release Order",
        "desc": "Exact chronological release order from 2001 through 2026"
      }
    ],
    "timeline": [
      {
        "id": "ff-1",
        "title": "The Fast and the Furious",
        "year": 2001,
        "media_type": "movie",
        "chrono_order": 1,
        "release_order": 2001.06,
        "phase": "Street Racing Era • Los Angeles Undercover",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gq5WiRNFuZdESCYKpSLABTqDcQq.jpg",
        "runtime": "106 min",
        "desc": "LAPD undercover officer Brian O'Conner infiltrates Dominic Toretto's street racing crew to investigate high-speed truck hijackings, forging an unbreakable brotherhood.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-prelude-2fast",
        "title": "The Turbo Charged Prelude for 2 Fast 2 Furious",
        "year": 2003,
        "media_type": "movie",
        "chrono_order": 2,
        "release_order": 2003.06,
        "phase": "Bridge Short • Cross-Country Escape",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6AmZK32qWlK27q4F2dG70b135.jpg",
        "runtime": "6 min",
        "desc": "Canon short connecting the first film to 2 Fast 2 Furious, showing Brian on the run across America winning street races in his Nissan Skyline GT-R.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-2",
        "title": "2 Fast 2 Furious",
        "year": 2003,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 2003.06,
        "phase": "Street Racing Era • Miami Customs",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/6AmZK32qWlK27q4F2dG70b135.jpg",
        "runtime": "107 min",
        "desc": "Ex-cop Brian O'Conner teams up with childhood friend Roman Pearce and customs agent Monica Fuentes in Miami to take down Argentine drug lord Carter Verone.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-los-bandoleros",
        "title": "Los Bandoleros",
        "year": 2009,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 2009.03,
        "phase": "Bridge Short • Dominican Republic Heist",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/Am70Wq9q0b2mG803d2e1b.jpg",
        "runtime": "20 min",
        "desc": "Vin Diesel wrote and directed this prelude short in the Dominican Republic, uniting Dom, Han, Leo, Santos, and Letty before the gas-tanker heist.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-4",
        "title": "Fast & Furious",
        "year": 2009,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2009.04,
        "phase": "Heist Transition • The Return of the Original Crew",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/Am70Wq9q0b2mG803d2e1b.jpg",
        "runtime": "107 min",
        "desc": "Following Letty's apparent murder, fugitive Dom Toretto and FBI agent Brian O'Conner infiltrate heroin kingpin Arturo Braga's underground border tunnels.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-5",
        "title": "Fast Five",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 6,
        "release_order": 2011.04,
        "phase": "Global Heist Masterpiece • The Rio $100M Vault",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/uUmsu8iZ17z7XyN7eE574sX761R.jpg",
        "runtime": "130 min",
        "desc": "Justin Lin's transformative franchise peak: Dom and Brian assemble an all-star crew in Rio de Janeiro for a $100M bank vault heist, hunted by DSS agent Luke Hobbs.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-6",
        "title": "Fast & Furious 6",
        "year": 2013,
        "media_type": "movie",
        "chrono_order": 7,
        "release_order": 2013.05,
        "phase": "Global Espionage • The London Tank & Runway",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/mZZYenwU8v9h3yq8P18e38148m1.jpg",
        "runtime": "130 min",
        "desc": "Hobbs recruits Dom's crew to defeat Owen Shaw's mercenary convoy in exchange for full pardons, discovering Letty is alive with amnesia. Post-credits connects to Tokyo.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-3",
        "title": "The Fast and the Furious: Tokyo Drift",
        "year": 2006,
        "media_type": "movie",
        "chrono_order": 8,
        "release_order": 2006.06,
        "phase": "Chronological Sequence • The Tokyo Underworld",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/cm46f7p3Rk638u2b5o89M3m8.jpg",
        "runtime": "104 min",
        "desc": "American high schooler Sean Boswell is sent to Tokyo and learns the art of drift racing under Han Lue, whose tragic intersection crash is revealed as Deckard Shaw's revenge.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-7",
        "title": "Furious 7",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 9,
        "release_order": 2015.04,
        "phase": "Super-Spy Action • For Paul & God's Eye",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/ktopp6046e8b2b91838.jpg",
        "runtime": "137 min",
        "desc": "Deckard Shaw seeks vengeance for his brother. Dom and Brian partner with Mr. Nobody to recover the God's Eye hacking device, culminating in Paul Walker's emotional farewell.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-8",
        "title": "The Fate of the Furious",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 10,
        "release_order": 2017.04,
        "phase": "Cyber-Warfare • The Betrayal & Submarine Battle",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/dImWM7CcJKUK4rQaq56eWy2Gpmn.jpg",
        "runtime": "136 min",
        "desc": "Cyberterrorist Cipher blackmails Dom into betraying his family with his secret son. The crew must team up with former enemy Deckard Shaw to stop a nuclear submarine.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-spy-racers",
        "title": "Fast & Furious: Spy Racers",
        "year": 2019,
        "media_type": "series",
        "chrono_order": 11,
        "release_order": 2019.12,
        "phase": "Animation • Tony Toretto's Covert Agency",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/81W08b5f3m7Y6k8a1q0.jpg",
        "runtime": "6 Seasons / 52 Episodes",
        "desc": "Dom's younger cousin Tony Toretto and his teenage crew are recruited by a secret government agency to infiltrate SH1FT3R and evil syndicates worldwide.",
        "sub_universe": "03. Fast & Furious Animation",
        "sub_universes": [
          "03. Fast & Furious Animation"
        ]
      },
      {
        "id": "ff-hobbs-shaw",
        "title": "Fast & Furious Presents: Hobbs & Shaw",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 12,
        "release_order": 2019.08,
        "phase": "Spinoff Blockbuster • The Eteon Cyber-Threat",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/keym7MPdua01wHqAzC3Dx8FVRda.jpg",
        "runtime": "137 min",
        "desc": "Unlikely partners Luke Hobbs and Deckard Shaw team up with MI6 agent Hattie Shaw to stop cyber-genetically enhanced anarchist Brixton Lore from unleashing the Snowflake virus.",
        "sub_universe": "02. Hobbs & Shaw",
        "sub_universes": [
          "02. Hobbs & Shaw"
        ]
      },
      {
        "id": "ff-9",
        "title": "F9: The Fast Saga",
        "year": 2021,
        "media_type": "movie",
        "chrono_order": 13,
        "release_order": 2021.06,
        "phase": "The Toretto Bloodline • Jakob & Space Pontiac",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4577vq99Yptz.jpg",
        "runtime": "143 min",
        "desc": "Dom confronts the sins of his past when his estranged assassin brother Jakob Toretto resurfaces, Han returns from the dead, and Roman and Tej blast into low Earth orbit.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-10",
        "title": "Fast X",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 14,
        "release_order": 2023.05,
        "phase": "The Final Ride Genesis • Dante Reyes' Revenge",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "runtime": "141 min",
        "desc": "Jason Momoa's flamboyant psychopath Dante Reyes systematically shatters Dom's family across Rome, Rio, and Portugal in retribution for the Fast Five bank vault heist.",
        "sub_universe": "01. Fast & Furious Main Saga",
        "sub_universes": [
          "01. Fast & Furious Main Saga"
        ]
      },
      {
        "id": "ff-11-future",
        "title": "Fast X: Part 2 / Fast & Furious 11",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 15,
        "release_order": 2026.06,
        "phase": "Main Saga Grand Finale • The Ultimate Family Stand",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "runtime": "In Production",
        "desc": "Louis Leterrier directs the concluding showdown resolving the explosive Fast X cliffhanger at the Hoover Dam, uniting Dom, Hobbs, Gisele, and the global family.",
        "sub_universe": "04. Fast & Furious Future",
        "sub_universes": [
          "04. Fast & Furious Future",
          "01. Fast & Furious Main Saga"
        ]
      }
    ]
  },
  {
    "id": "transformers",
    "name": "Transformers Saga",
    "badge": "5 CANON BRANCHES • BAYVERSE, REBOOT CONTINUITY, CYBERTRON ORIGINS & G1 ANIMATION",
    "icon": "🤖",
    "theme_color": "#0055FF",
    "tagline": "More than meets the eye: Autobots, Decepticons, Maximals, and the battle for the Allspark across millions of years.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/4N4sipl8T72tNE4earcctQa2Kw2.jpg",
    "why_watch": "The quintessential giant-robot spectacle combining high-octane vehicular action, extraterrestrial mythology, and Optimus Prime's legendary leadership.",
    "sub_universes": [
      "All Transformers",
      "01. Transformers Live-Action",
      "02. Michael Bay Transformers",
      "03. Bumblebee & Reboot Continuity",
      "04. Transformers Animated",
      "05. The Original Transformers"
    ],
    "watch_modes": [
      {
        "id": "chrono",
        "label": "⏳ Chronological Story Order",
        "desc": "Transformers One (Cybertron) → Bumblebee (1987) → Rise of the Beasts (1994) → Bayverse (2007–2017)"
      },
      {
        "id": "live_release",
        "label": "🎬 Live-Action Release Order",
        "desc": "Transformers (2007) → Revenge of the Fallen → Dark of the Moon → Age of Extinction → The Last Knight → Bumblebee → Rise of the Beasts"
      },
      {
        "id": "bayverse",
        "label": "💥 Bayverse Order",
        "desc": "The 5-film saga directed by Michael Bay (2007–2017)"
      },
      {
        "id": "reboot",
        "label": "🐝 Reboot / New Continuity",
        "desc": "Bumblebee (1987) → Transformers: Rise of the Beasts (1994)"
      },
      {
        "id": "animated",
        "label": "🎨 Animated Order",
        "desc": "The Transformers: The Movie (1986) & Transformers One (2024)"
      },
      {
        "id": "essential",
        "label": "⭐ Essential Order",
        "desc": "Transformers (2007) → Bumblebee (2018) → Rise of the Beasts (2023)"
      },
      {
        "id": "release",
        "label": "🎞️ Full Theatrical Release Order",
        "desc": "Chronological theatrical progression from 1986 to 2024"
      }
    ],
    "timeline": [
      {
        "id": "tf-bumblebee",
        "title": "Bumblebee",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 1,
        "release_order": 2018.12,
        "phase": "Reboot Era • 1987 California Sanctuary",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg",
        "runtime": "114 min",
        "desc": "Travis Knight's heartfelt reboot: In 1987, battle-damaged B-127 finds refuge in a California junkyard and befriends eighteen-year-old Charlie Watson.",
        "sub_universe": "03. Bumblebee & Reboot Continuity",
        "sub_universes": [
          "01. Transformers Live-Action",
          "03. Bumblebee & Reboot Continuity"
        ]
      },
      {
        "id": "tf-rotb",
        "title": "Transformers: Rise of the Beasts",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 2,
        "release_order": 2023.06,
        "phase": "Reboot Era • 1994 Maximals & Terrorcons",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        "runtime": "127 min",
        "desc": "In 1994, Optimus Prime and the Autobots unite with the ancient animal Maximals led by Optimus Primal in Peru to prevent Unicron from devouring Earth.",
        "sub_universe": "03. Bumblebee & Reboot Continuity",
        "sub_universes": [
          "01. Transformers Live-Action",
          "03. Bumblebee & Reboot Continuity"
        ]
      },
      {
        "id": "tf-2007",
        "title": "Transformers",
        "year": 2007,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 2007.07,
        "phase": "Bayverse • The Allspark Awakening",
        "is_essential": true,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4N4sipl8T72tNE4earcctQa2Kw2.jpg",
        "runtime": "144 min",
        "desc": "Michael Bay's groundbreaking blockbuster: High schooler Sam Witwicky discovers his 1977 Camaro is the Autobot Bumblebee, drawing Optimus Prime and Megatron into war for the Allspark.",
        "sub_universe": "02. Michael Bay Transformers",
        "sub_universes": [
          "01. Transformers Live-Action",
          "02. Michael Bay Transformers"
        ]
      },
      {
        "id": "tf-rotf",
        "title": "Transformers: Revenge of the Fallen",
        "year": 2009,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 2009.06,
        "phase": "Bayverse • Sun Harvester of Egypt",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/1BsGNqNhPcxyCsSRKvM4Qku1UJ0.jpg",
        "runtime": "150 min",
        "desc": "Megatron is resurrected by the ancient Decepticon progenitor The Fallen to harvest Earth's sun with a hidden pyramid machine, forcing NEST and Jetfire to unite with Optimus.",
        "sub_universe": "02. Michael Bay Transformers",
        "sub_universes": [
          "01. Transformers Live-Action",
          "02. Michael Bay Transformers"
        ]
      },
      {
        "id": "tf-dotm",
        "title": "Transformers: Dark of the Moon",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2011.06,
        "phase": "Bayverse • Apollo 11 & The Chicago Invasion",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "runtime": "154 min",
        "desc": "The Autobots learn of a Cybertronian spacecraft on the Moon. Former leader Sentinel Prime betrays humanity, triggering the catastrophic Decepticon siege of Chicago.",
        "sub_universe": "02. Michael Bay Transformers",
        "sub_universes": [
          "01. Transformers Live-Action",
          "02. Michael Bay Transformers"
        ]
      },
      {
        "id": "tf-aoe",
        "title": "Transformers: Age of Extinction",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 6,
        "release_order": 2014.06,
        "phase": "Bayverse • Cemetery Wind & The Dinobots",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
        "runtime": "165 min",
        "desc": "Mark Wahlberg's Cade Yeager discovers a battered Optimus Prime in hiding from black-ops mercenaries and bounty hunter Lockdown, leading to the awakening of the Dinobots.",
        "sub_universe": "02. Michael Bay Transformers",
        "sub_universes": [
          "01. Transformers Live-Action",
          "02. Michael Bay Transformers"
        ]
      },
      {
        "id": "tf-tlk",
        "title": "Transformers: The Last Knight",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 7,
        "release_order": 2017.06,
        "phase": "Bayverse • Quintessa & Unicron Earth Core",
        "is_essential": false,
        "is_animation": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg",
        "runtime": "149 min",
        "desc": "Optimus Prime is brainwashed by creator Quintessa into Nemesis Prime. Cade Yeager, Bumblebee, and Sir Anthony Hopkins uncover Arthurian secret history to save Earth.",
        "sub_universe": "02. Michael Bay Transformers",
        "sub_universes": [
          "01. Transformers Live-Action",
          "02. Michael Bay Transformers"
        ]
      },
      {
        "id": "tf-movie-1986",
        "title": "The Transformers: The Movie (1986)",
        "year": 1986,
        "media_type": "movie",
        "chrono_order": 8,
        "release_order": 1986.08,
        "phase": "G1 Original Animation • The Battle of Autobot City",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/xJ5W0mOAWCVaXmU0pBZh4NjSRv2.jpg",
        "runtime": "84 min",
        "desc": "The iconic animated classic set in 2005: Megatron attacks Autobot City leading to Optimus Prime's tragic passing, Hot Rod claiming the Matrix of Leadership, and the planet-eater Unicron.",
        "sub_universe": "05. The Original Transformers",
        "sub_universes": [
          "04. Transformers Animated",
          "05. The Original Transformers"
        ]
      },
      {
        "id": "tf-one",
        "title": "Transformers One",
        "year": 2024,
        "media_type": "movie",
        "chrono_order": 9,
        "release_order": 2024.09,
        "phase": "Cybertron Origins • Orion Pax & D-16",
        "is_essential": false,
        "is_animation": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/iRCgqpdVE4wyLQvGYU3ZP7pAtUc.jpg",
        "runtime": "104 min",
        "desc": "Josh Cooley directs the animated origin story of how Orion Pax and D-16 went from bonded mining brothers into the sworn enemies Optimus Prime and Megatron.",
        "sub_universe": "04. Transformers Animated",
        "sub_universes": [
          "01. Transformers Live-Action",
          "04. Transformers Animated"
        ]
      }
    ]
  },
  {
    "id": "mission-impossible",
    "name": "Mission: Impossible Saga",
    "badge": "4 CANON BRANCHES • MAIN SAGA, ETHAN HUNT, IMF & CLASSIC TELEVISION",
    "icon": "💥",
    "theme_color": "#E50914",
    "tagline": "Your mission, should you choose to accept it: Tom Cruise's peerless death-defying stunts, IMF global espionage, and mask reveals.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    "why_watch": "The pinnacle of practical cinematic action and espionage thrills, famous for Tom Cruise performing real halo jumps, biplane stunts, and Burj Khalifa climbs.",
    "sub_universes": [
      "All Mission: Impossible",
      "01. Mission: Impossible Main Saga",
      "02. Ethan Hunt Sagas",
      "03. IMF — Impossible Missions Force",
      "04. Mission: Impossible TV Series"
    ],
    "watch_modes": [
      {
        "id": "movie_release",
        "label": "🎬 Main Movie Release Order",
        "desc": "Mission: Impossible (1996) → MI-2 → MI-3 → Ghost Protocol → Rogue Nation → Fallout → Dead Reckoning → The Final Reckoning"
      },
      {
        "id": "ethan_hunt",
        "label": "🕶️ Ethan Hunt Order",
        "desc": "The complete 8-movie saga of impossible agent Ethan Hunt"
      },
      {
        "id": "essential",
        "label": "⭐ Essential Order",
        "desc": "All 8 cinematic milestone blockbusters from 1996 to 2025"
      },
      {
        "id": "chrono",
        "label": "⏳ Ethan Hunt Chronological Story",
        "desc": "Prague NOC list betrayal (1996) through the Sevastopol Arctic submarine climax (2025)"
      },
      {
        "id": "release",
        "label": "🎞️ Full Franchise Release Order",
        "desc": "Classic 1966 & 1988 TV series through modern 2025 blockbuster cinema"
      }
    ],
    "timeline": [
      {
        "id": "mi-1",
        "title": "Mission: Impossible (1996)",
        "year": 1996,
        "media_type": "movie",
        "chrono_order": 1,
        "release_order": 1996.05,
        "phase": "De Palma Era • Prague NOC List Betrayal",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/l5uxY5m5OInWpcExIpKG6AR3rgL.jpg",
        "runtime": "110 min",
        "desc": "Brian De Palma directs the masterwork espionage thriller: Ethan Hunt is framed for the slaughter of his Prague IMF team and must infiltrate CIA Langley headquarters to clear his name.",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-2",
        "title": "Mission: Impossible 2 (2000)",
        "year": 2000,
        "media_type": "movie",
        "chrono_order": 2,
        "release_order": 2000.05,
        "phase": "John Woo Era • Chimera Virus & Nyah Hall",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/hfnrual76gPeNFduhD4xzHWpfTw.jpg",
        "runtime": "123 min",
        "desc": "John Woo's stylized gun-fu action spectacle: Ethan Hunt recruits master thief Nyah Nordoff-Hall to track down rogue IMF operative Sean Ambrose and destroy the deadly synthetic virus Chimera.",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-3",
        "title": "Mission: Impossible III (2006)",
        "year": 2006,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 2006.05,
        "phase": "J.J. Abrams Era • The Rabbit's Foot & Owen Davian",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/vKGYCpmQyV9uHybWDzXuII8Los5.jpg",
        "runtime": "126 min",
        "desc": "J.J. Abrams brings intense personal stakes as retired field agent Ethan Hunt is drawn back to rescue his protégé and confronts ruthless black-market arms dealer Owen Davian (Philip Seymour Hoffman).",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-ghost-protocol",
        "title": "Mission: Impossible – Ghost Protocol (2011)",
        "year": 2011,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 2011.12,
        "phase": "Brad Bird Era • Kremlin Bombing & Burj Khalifa",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/eRZTGx7GsiKqPch96k27LK005ZL.jpg",
        "runtime": "133 min",
        "desc": "Brad Bird revitalizes the franchise: Blamed for the bombing of the Kremlin, the IMF is disavowed. Ethan's unsanctioned four-person team scales the Burj Khalifa to avert nuclear war.",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-rogue-nation",
        "title": "Mission: Impossible – Rogue Nation (2015)",
        "year": 2015,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2015.07,
        "phase": "McQuarrie Era • The Syndicate & Ilsa Faust",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/fRJLXQBHK2wyznK5yZbO7vmsuVK.jpg",
        "runtime": "131 min",
        "desc": "Christopher McQuarrie's director debut: Ethan Hunt faces the Syndicate, a lethal shadow network of rogue intelligence operatives led by Solomon Lane, forging an alliance with disavowed MI6 agent Ilsa Faust.",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-fallout",
        "title": "Mission: Impossible – Fallout (2018)",
        "year": 2018,
        "media_type": "movie",
        "chrono_order": 6,
        "release_order": 2018.07,
        "phase": "McQuarrie Era • The Apostles & HALO Jump",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
        "runtime": "147 min",
        "desc": "Widely acclaimed as an action cinema masterpiece: When plutonium cores are stolen by the Apostles, Ethan Hunt and CIA assassin August Walker enter a relentless race against time across Paris, London, and Kashmir.",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-dead-reckoning",
        "title": "Mission: Impossible – Dead Reckoning (2023)",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 7,
        "release_order": 2023.07,
        "phase": "McQuarrie Era • The Entity AI & Gabriel",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "runtime": "163 min",
        "desc": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: Track down a terrifying rogue artificial intelligence known as the Entity before it falls into the hands of enigmatic ghost Gabriel.",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-final-reckoning",
        "title": "Mission: Impossible – The Final Reckoning (2025)",
        "year": 2025,
        "media_type": "movie",
        "chrono_order": 8,
        "release_order": 2025.05,
        "phase": "McQuarrie Era • The Submarine Sevastopol Climax",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/iKPsC9EFUafRP9SrUznI61getVP.jpg",
        "runtime": "165 min",
        "desc": "Our lives are not our own: The epic culmination of Ethan Hunt's thirty-year crusade as he dives beneath the Arctic ice to the sunken Sevastopol submarine to permanently destroy the Entity.",
        "sub_universe": "01. Mission: Impossible Main Saga",
        "sub_universes": [
          "01. Mission: Impossible Main Saga",
          "02. Ethan Hunt Sagas",
          "03. IMF — Impossible Missions Force"
        ]
      },
      {
        "id": "mi-tv-1966",
        "title": "Mission: Impossible (1966–1973)",
        "year": 1966,
        "media_type": "series",
        "chrono_order": 9,
        "release_order": 1966.09,
        "phase": "Classic Cold War Era • Dan Briggs & Jim Phelps",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/1PnUBKbDR1F2w5qicblLg1QGTif.jpg",
        "runtime": "7 Seasons • 171 Episodes",
        "desc": "Bruce Geller's groundbreaking CBS espionage drama following the covert operations of the Impossible Missions Force, introducing self-destructing tape recordings and Lalo Schifrin's theme.",
        "sub_universe": "04. Mission: Impossible TV Series",
        "sub_universes": [
          "03. IMF — Impossible Missions Force",
          "04. Mission: Impossible TV Series"
        ]
      },
      {
        "id": "mi-tv-1988",
        "title": "Mission: Impossible (1988–1990)",
        "year": 1988,
        "media_type": "series",
        "chrono_order": 10,
        "release_order": 1988.1,
        "phase": "Revival Era • Jim Phelps Modern Missions",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/4AZwDa0RZLIVsOgZxlgOqNUw3U6.jpg",
        "runtime": "2 Seasons • 35 Episodes",
        "desc": "Jim Phelps returns to head a new generation of high-tech IMF agents solving international crises, rogue dictatorial regimes, and espionage conspiracies across Australia and Europe.",
        "sub_universe": "04. Mission: Impossible TV Series",
        "sub_universes": [
          "03. IMF — Impossible Missions Force",
          "04. Mission: Impossible TV Series"
        ]
      }
    ]
  },
  {
    "id": "john-wick",
    "name": "John Wick Universe",
    "badge": "3 CANON BRANCHES • MAIN SAGA, BALLERINA & THE CONTINENTAL",
    "icon": "🎯",
    "theme_color": "#F59E0B",
    "tagline": "Yeah, I'm thinking I'm back: Gun-fu mastery, the High Table underworld, gold coins, and legendary oaths of the Continental.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "why_watch": "The gold standard of 21st-century martial arts and stunt cinema, reinventing Hollywood action with Keanu Reeves, Chad Stahelski, and breathtaking worldbuilding.",
    "sub_universes": [
      "All John Wick",
      "01. John Wick Main Saga",
      "02. John Wick Spin-Offs",
      "03. The Continental"
    ],
    "watch_modes": [
      {
        "id": "chrono",
        "label": "⏳ Universe Chronological Order",
        "desc": "The Continental (1970s) → John Wick 1–4 → Ballerina (2025)"
      },
      {
        "id": "main_release",
        "label": "🎯 Main Saga — Release Order",
        "desc": "John Wick (2014) → Chapter 2 (2017) → Chapter 3 (2019) → Chapter 4 (2023)"
      },
      {
        "id": "essential",
        "label": "⭐ Essential Order",
        "desc": "The core 4-film Baba Yaga quadrilogy"
      },
      {
        "id": "release",
        "label": "🎞️ Full Franchise Release Order",
        "desc": "Theatrical and television releases from 2014 to 2026"
      }
    ],
    "timeline": [
      {
        "id": "jw-continental",
        "title": "The Continental: From the World of John Wick",
        "year": 2023,
        "media_type": "series",
        "chrono_order": 1,
        "release_order": 2023.09,
        "phase": "1970s Prequel • Young Winston & Charon",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg",
        "runtime": "3 Episodes • 260 min",
        "desc": "Set in 1970s gritty New York: Young Winston Scott charts a deadly course through the hotel's mysterious underworld to seize control of the haven for the world's most dangerous criminals.",
        "sub_universe": "03. The Continental",
        "sub_universes": [
          "02. John Wick Spin-Offs",
          "03. The Continental"
        ]
      },
      {
        "id": "jw-1",
        "title": "John Wick (2014)",
        "year": 2014,
        "media_type": "movie",
        "chrono_order": 2,
        "release_order": 2014.1,
        "phase": "Baba Yaga Awakening • The Daisy Vendetta",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
        "runtime": "101 min",
        "desc": "Chad Stahelski directs the modern action classic: Retired hitman John Wick seeks vengeance against the Russian mobsters who broke into his home and killed the puppy gifted by his late wife.",
        "sub_universe": "01. John Wick Main Saga",
        "sub_universes": [
          "01. John Wick Main Saga"
        ]
      },
      {
        "id": "jw-2",
        "title": "John Wick: Chapter 2 (2017)",
        "year": 2017,
        "media_type": "movie",
        "chrono_order": 3,
        "release_order": 2017.02,
        "phase": "Blood Oath Marker • Rome & Excommunicado",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
        "runtime": "122 min",
        "desc": "Bound by an unbreakable blood oath to Italian crime lord Santino D'Antonio, John travels to Rome, only to be betrayed and declared Excommunicado on Continental grounds.",
        "sub_universe": "01. John Wick Main Saga",
        "sub_universes": [
          "01. John Wick Main Saga"
        ]
      },
      {
        "id": "jw-3",
        "title": "John Wick: Chapter 3 – Parabellum (2019)",
        "year": 2019,
        "media_type": "movie",
        "chrono_order": 4,
        "release_order": 2019.05,
        "phase": "Parabellum • $14M Open Contract & The Elder",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
        "runtime": "131 min",
        "desc": "With a $14 million global bounty on his head, John battles the High Table's elite adjudicators and legions of assassins across Manhattan with the help of Sofia and the Bowery King.",
        "sub_universe": "01. John Wick Main Saga",
        "sub_universes": [
          "01. John Wick Main Saga"
        ]
      },
      {
        "id": "jw-4",
        "title": "John Wick: Chapter 4 (2023)",
        "year": 2023,
        "media_type": "movie",
        "chrono_order": 5,
        "release_order": 2023.03,
        "phase": "High Table Duel • Marquis de Gramont & Sacré-Cœur",
        "is_essential": true,
        "poster_url": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "runtime": "169 min",
        "desc": "John Wick uncovers a path to defeating the High Table by challenging the sadistic Marquis de Gramont to single combat at sunrise on the steps of the Sacré-Cœur alongside Caine.",
        "sub_universe": "01. John Wick Main Saga",
        "sub_universes": [
          "01. John Wick Main Saga"
        ]
      },
      {
        "id": "jw-ballerina",
        "title": "From the World of John Wick: Ballerina (2025)",
        "year": 2025,
        "media_type": "movie",
        "chrono_order": 6,
        "release_order": 2025.06,
        "phase": "Ruska Roma Sagas • Eve Macarro & Baba Yaga",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
        "runtime": "125 min",
        "desc": "Ana de Armas stars as Eve Macarro, a vengeful assassin trained in the assassin traditions of the Ruska Roma syndicate, featuring an appearance from Keanu Reeves' John Wick.",
        "sub_universe": "02. John Wick Spin-Offs",
        "sub_universes": [
          "02. John Wick Spin-Offs"
        ]
      },
      {
        "id": "jw-caine",
        "title": "Caine: John Wick Spin-Off (Upcoming)",
        "year": 2026,
        "media_type": "movie",
        "chrono_order": 7,
        "release_order": 2026.12,
        "phase": "High Table Aftermath • The Blind Assassin",
        "is_essential": false,
        "poster_url": "https://image.tmdb.org/t/p/w500/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg",
        "runtime": "In Development",
        "desc": "Donnie Yen reprises his fan-favorite role as the lethal blind assassin Caine following the climactic events of Chapter 4 as he confronts the ghosts of his past to protect his daughter.",
        "sub_universe": "02. John Wick Spin-Offs",
        "sub_universes": [
          "02. John Wick Spin-Offs"
        ]
      }
    ]
  },
  {
    "id": "sci-fi-hub",
    "name": "Sci-Fi Hub & Titan Universes",
    "badge": "ALIEN, PREDATOR, MATRIX, MONSTERVERSE & DUNE",
    "icon": "👽",
    "theme_color": "#00E5FF",
    "tagline": "The pinnacles of visionary science fiction, extraterrestrial terror, giant kaiju clashes, and cyberpunk revolutions.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke72dHplvknRVsMGf.jpg",
    "why_watch": "Masterpieces of world-building, genre-defining visual effects, and iconic philosophical storytelling.",
    "sub_universes": [
      "All Sci-Fi",
      "Alien & Predator",
      "The Matrix Cyberpunk",
      "MonsterVerse Titans",
      "Denis Villeneuve Dune"
    ],
    "timeline": [
      {
        "id": "sci-alien1",
        "sub_universe": "Alien & Predator",
        "title": "Alien",
        "year": 1979,
        "chrono_order": 1,
        "release_order": 1,
        "phase": "Ridley Scott • Nostromo Xenomorph Genesis",
        "poster_url": "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9RzcuOF0NBFLS.jpg",
        "runtime": "117 min",
        "desc": "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission."
      },
      {
        "id": "sci-aliens",
        "sub_universe": "Alien & Predator",
        "title": "Aliens",
        "year": 1986,
        "chrono_order": 2,
        "release_order": 2,
        "phase": "James Cameron • Colonial Marines War",
        "poster_url": "https://image.tmdb.org/t/p/w500/oxWq2bK4Wn6Zp4wL1m3Z5e7x.jpg",
        "runtime": "137 min",
        "desc": "Ellen Ripley returns to the planet where her crew encountered the hostile Alien creature, this time accompanied by a unit of colonial marines."
      },
      {
        "id": "sci-romulus",
        "sub_universe": "Alien & Predator",
        "title": "Alien: Romulus",
        "year": 2024,
        "chrono_order": 3,
        "release_order": 7,
        "phase": "Fede Álvarez • Abandoned Renaissance Station",
        "poster_url": "https://image.tmdb.org/t/p/w500/b33nnKl12v654zp2hV2v7x0BqD.jpg",
        "runtime": "119 min",
        "desc": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form."
      },
      {
        "id": "sci-pred1",
        "sub_universe": "Alien & Predator",
        "title": "Predator",
        "year": 1987,
        "chrono_order": 4,
        "release_order": 3,
        "phase": "Schwarzenegger • Jungle Yautja Hunter",
        "poster_url": "https://image.tmdb.org/t/p/w500/w71a0B9C1A7x0BqD9L343p5M9e.jpg",
        "runtime": "107 min",
        "desc": "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior."
      },
      {
        "id": "sci-prey",
        "sub_universe": "Alien & Predator",
        "title": "Prey",
        "year": 2022,
        "chrono_order": 5,
        "release_order": 6,
        "phase": "Dan Trachtenberg • 1719 Comanche Warrior Naru",
        "poster_url": "https://image.tmdb.org/t/p/w500/ujr5pztcNmLEea9091v2Z5kZ0.jpg",
        "runtime": "99 min",
        "desc": "Naru, a fierce and highly skilled Comanche warrior, protects her people from one of the first highly-evolved Predators to land on Earth."
      },
      {
        "id": "sci-matrix1",
        "sub_universe": "The Matrix Cyberpunk",
        "title": "The Matrix",
        "year": 1999,
        "chrono_order": 6,
        "release_order": 4,
        "phase": "Wachowskis Masterpiece • The Red Pill & Neo",
        "poster_url": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        "runtime": "136 min",
        "desc": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth: his life is an elaborate deception."
      },
      {
        "id": "sci-godz",
        "sub_universe": "MonsterVerse Titans",
        "title": "Godzilla",
        "year": 2014,
        "chrono_order": 7,
        "release_order": 5,
        "phase": "Gareth Edwards • King of the Monsters Reawakens",
        "poster_url": "https://image.tmdb.org/t/p/w500/il7X5a92u0BGmKH8nVLkhiCbTw.jpg",
        "runtime": "123 min",
        "desc": "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity: Godzilla."
      },
      {
        "id": "sci-gvk",
        "sub_universe": "MonsterVerse Titans",
        "title": "Godzilla vs. Kong",
        "year": 2021,
        "chrono_order": 8,
        "release_order": 8,
        "phase": "Hollow Earth • Clash of the Alpha Titans",
        "poster_url": "https://image.tmdb.org/t/p/w500/pgqgaUx1cJb5oZeko5FEh0R9i4.jpg",
        "runtime": "113 min",
        "desc": "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other."
      },
      {
        "id": "sci-dune1",
        "sub_universe": "Denis Villeneuve Dune",
        "title": "Dune",
        "year": 2021,
        "chrono_order": 9,
        "release_order": 9,
        "phase": "Arrakis Spice Genesis • Paul Atreides Awakening",
        "poster_url": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "runtime": "155 min",
        "desc": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe."
      },
      {
        "id": "sci-dune2",
        "sub_universe": "Denis Villeneuve Dune",
        "title": "Dune: Part Two",
        "year": 2024,
        "chrono_order": 10,
        "release_order": 10,
        "phase": "Muad'Dib Holy War • Sandworm Riding Climax",
        "poster_url": "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke72dHplvknRVsMGf.jpg",
        "runtime": "166 min",
        "desc": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
      }
    ]
  },
  {
    "id": "anime-hub",
    "name": "Anime Master IP Universes",
    "badge": "DRAGON BALL, NARUTO, ONE PIECE, AOT, DEMON SLAYER & JJK",
    "icon": "🇯🇵",
    "theme_color": "#FF6F00",
    "tagline": "Legendary battle shonen, psychological thrillers, and multi-generational Japanese anime sagas.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    "why_watch": "The most passionate, emotionally gripping, and visually inventive storytelling in modern entertainment.",
    "sub_universes": [
      "All Anime",
      "Dragon Ball",
      "Naruto & Boruto",
      "One Piece",
      "Attack on Titan",
      "Demon Slayer",
      "Jujutsu Kaisen",
      "Dark Fantasy Legends"
    ],
    "timeline": [
      {
        "id": "ani-dbz",
        "sub_universe": "Dragon Ball",
        "title": "Dragon Ball Z",
        "year": 1989,
        "chrono_order": 1,
        "release_order": 1,
        "phase": "Akira Toriyama • Saiyan to Buu Sagas",
        "poster_url": "https://image.tmdb.org/t/p/w500/dJyGSmZfH6jOq8uL7v6a1m3Z5e.jpg",
        "runtime": "Anime Series",
        "desc": "With the help of the powerful Dragonballs, a team of fighters led by the saiyan Goku defend Earth against alien enemies."
      },
      {
        "id": "ani-db-broly",
        "sub_universe": "Dragon Ball",
        "title": "Dragon Ball Super: Broly",
        "year": 2018,
        "chrono_order": 2,
        "release_order": 2,
        "phase": "Toriyama Canon • Legendary Super Saiyan",
        "poster_url": "https://image.tmdb.org/t/p/w500/f03RzI64j3hg9p8w5Z7kX7eY6e.jpg",
        "runtime": "100 min",
        "desc": "Goku and Vegeta encounter Broly, a Saiyan warrior unlike any fighter they have faced before."
      },
      {
        "id": "ani-naruto",
        "sub_universe": "Naruto & Boruto",
        "title": "Naruto: Shippuden",
        "year": 2007,
        "chrono_order": 3,
        "release_order": 3,
        "phase": "Pain Arc & Fourth Great Ninja War",
        "poster_url": "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
        "runtime": "Anime Series",
        "desc": "Naruto Uzumaki searches for recognition, as well as to become Hokage, while protecting the village against the Akatsuki."
      },
      {
        "id": "ani-op",
        "sub_universe": "One Piece",
        "title": "One Piece",
        "year": 1999,
        "chrono_order": 4,
        "release_order": 4,
        "phase": "Eiichiro Oda • Grand Line Odyssey",
        "poster_url": "https://image.tmdb.org/t/p/w500/fcXdJlhTErAcJ07v6a1m3Z5e7x.jpg",
        "runtime": "Anime Series",
        "desc": "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left: One Piece."
      },
      {
        "id": "ani-aot",
        "sub_universe": "Attack on Titan",
        "title": "Attack on Titan",
        "year": 2013,
        "chrono_order": 5,
        "release_order": 5,
        "phase": "Hajime Isayama • The Rumbling Climax",
        "poster_url": "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
        "runtime": "Anime Series",
        "desc": "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans."
      },
      {
        "id": "ani-ds-mugen",
        "sub_universe": "Demon Slayer",
        "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train",
        "year": 2020,
        "chrono_order": 6,
        "release_order": 6,
        "phase": "Ufotable • Flame Hashira Rengoku",
        "poster_url": "https://image.tmdb.org/t/p/w500/h8Rb99v9WNxAcJ07v6a1m3Z5e.jpg",
        "runtime": "117 min",
        "desc": "Tanjiro and the Demon Slayer Corps join Flame Hashira Kyojuro Rengoku aboard the Infinity Train to battle Lower Moon Enmu."
      },
      {
        "id": "ani-jjk0",
        "sub_universe": "Jujutsu Kaisen",
        "title": "Jujutsu Kaisen 0",
        "year": 2021,
        "chrono_order": 7,
        "release_order": 7,
        "phase": "MAPPA • Yuta Okkotsu Origin Prequel",
        "poster_url": "https://image.tmdb.org/t/p/w500/3pTwMUEavOB94aL7v6a1m3Z5e.jpg",
        "runtime": "105 min",
        "desc": "Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit, enrolls in Tokyo Jujutsu High School."
      },
      {
        "id": "ani-deathnote",
        "sub_universe": "Dark Fantasy Legends",
        "title": "Death Note",
        "year": 2006,
        "chrono_order": 8,
        "release_order": 8,
        "phase": "Light Yagami vs L Masterpiece",
        "poster_url": "https://image.tmdb.org/t/p/w500/iigTJJskN0r12vL7v6a1m3Z5e.jpg",
        "runtime": "Anime Series",
        "desc": "An intelligent student goes on a crusade to eliminate criminals after discovering a notebook capable of killing anyone whose name is written into it."
      }
    ]
  },
  {
    "id": "indian-universes",
    "name": "Indian Blockbuster Universes",
    "badge": "YRF SPY, LOKESH LCU, MADDOCK & PRASHANTH NEEL",
    "icon": "🇮🇳",
    "theme_color": "#FF9933",
    "tagline": "Tiger, Pathaan, Kabir, Vikram, Leo, Stree, and Rocky Bhai: India's biggest box-office phenomenon universes.",
    "banner_poster": "https://image.tmdb.org/t/p/w500/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",
    "why_watch": "Unprecedented mass hysteria, record-smashing action choreography, and exhilarating character crossovers across Hindi, Tamil, Telugu, and Kannada cinema.",
    "sub_universes": [
      "All Indian Universes",
      "YRF Spy Universe",
      "Lokesh Cinematic Universe (LCU)",
      "Maddock Supernatural",
      "Prashanth Neel Universe",
      "Kalki & Astraverse"
    ],
    "timeline": [
      {
        "id": "yrf-1",
        "sub_universe": "YRF Spy Universe",
        "title": "Ek Tha Tiger",
        "year": 2012,
        "chrono_order": 1,
        "release_order": 1,
        "phase": "Tiger & Zoya in Dublin",
        "poster_url": "https://image.tmdb.org/t/p/w500/jGTyeAH5KZuCX6Qat1VcTBXnqth.jpg",
        "runtime": "132 min",
        "desc": "India's top spy Tiger is sent to Dublin to observe an Indian scientist, where he falls in love with his caretaker Zoya."
      },
      {
        "id": "yrf-2",
        "sub_universe": "YRF Spy Universe",
        "title": "Tiger Zinda Hai",
        "year": 2017,
        "chrono_order": 2,
        "release_order": 2,
        "phase": "Iraq Hostage Rescue Mission",
        "poster_url": "https://image.tmdb.org/t/p/w500/mdzNLFfCfuBoJz43l0SmMWWdu5t.jpg",
        "runtime": "161 min",
        "desc": "When a group of Indian and Pakistani nurses are held hostage in Iraq by a terrorist organization, a secret agent is called out of hiding."
      },
      {
        "id": "yrf-war",
        "sub_universe": "YRF Spy Universe",
        "title": "War",
        "year": 2019,
        "chrono_order": 3,
        "release_order": 3,
        "phase": "Major Kabir & Khalid Master Agent Duel",
        "poster_url": "https://image.tmdb.org/t/p/w500/yUtaHkL2SDIAZhRApZAyQrAXygn.jpg",
        "runtime": "154 min",
        "desc": "An Indian soldier is assigned to eliminate his former mentor and boss, who has gone rogue after assassinating key officials."
      },
      {
        "id": "yrf-pathaan",
        "sub_universe": "YRF Spy Universe",
        "title": "Pathaan",
        "year": 2023,
        "chrono_order": 4,
        "release_order": 4,
        "phase": "Shah Rukh Khan Return & Tiger Cameo",
        "poster_url": "https://image.tmdb.org/t/p/w500/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",
        "runtime": "146 min",
        "desc": "An exiled RAW field operative Pathaan is assigned to take down Outfit X, a private terrorist organization."
      },
      {
        "id": "yrf-tiger3",
        "sub_universe": "YRF Spy Universe",
        "title": "Tiger 3",
        "year": 2023,
        "chrono_order": 5,
        "release_order": 5,
        "phase": "Treason Accusation & Pathaan Train Rescue",
        "poster_url": "https://image.tmdb.org/t/p/w500/7wgED7Yx9VLcNWSO91VgwicHmMD.jpg",
        "runtime": "156 min",
        "desc": "Following the events of Tiger Zinda Hai and Pathaan, Tiger and Zoya are framed as traitors by an ex-ISI terrorist."
      },
      {
        "id": "lcu-kaithi",
        "sub_universe": "Lokesh Cinematic Universe (LCU)",
        "title": "Kaithi",
        "year": 2019,
        "chrono_order": 6,
        "release_order": 6,
        "phase": "The Biryani Night • Dilli's Prison Transport",
        "poster_url": "https://image.tmdb.org/t/p/w500/hOF9CgPsy9aLr5GJEBESC8MEXFy.jpg",
        "runtime": "145 min",
        "desc": "A recently released prisoner drives a truck full of poisoned cops to the hospital while evading criminals."
      },
      {
        "id": "lcu-vikram",
        "sub_universe": "Lokesh Cinematic Universe (LCU)",
        "title": "Vikram",
        "year": 2022,
        "chrono_order": 7,
        "release_order": 7,
        "phase": "The Ghost Arrives • Rolex Revelation",
        "poster_url": "https://image.tmdb.org/t/p/w500/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg",
        "runtime": "174 min",
        "desc": "A special investigator is assigned a case of serial killings, uncovering a war led by Vikram against Santhanam's syndicate."
      },
      {
        "id": "lcu-leo",
        "sub_universe": "Lokesh Cinematic Universe (LCU)",
        "title": "Leo",
        "year": 2023,
        "chrono_order": 8,
        "release_order": 8,
        "phase": "Parthiban Identity • Bloody Sweet",
        "poster_url": "https://image.tmdb.org/t/p/w500/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg",
        "runtime": "164 min",
        "desc": "A gentle cafe owner in Himachal Pradesh becomes a local hero after thwarting an armed attack, attracting ruthless gangsters."
      },
      {
        "id": "mad-stree1",
        "sub_universe": "Maddock Supernatural",
        "title": "Stree",
        "year": 2018,
        "chrono_order": 9,
        "release_order": 9,
        "phase": "Chanderi Horror Comedy Genesis",
        "poster_url": "https://image.tmdb.org/t/p/w500/euhgW6hpDYw7nxFDjqHn0eKvQPX.jpg",
        "runtime": "128 min",
        "desc": "In the small town of Chanderi, the menfolk live in fear of an evil spirit named Stree who abducts men in the night."
      },
      {
        "id": "mad-bhediya",
        "sub_universe": "Maddock Supernatural",
        "title": "Bhediya",
        "year": 2022,
        "chrono_order": 10,
        "release_order": 10,
        "phase": "Arunachal Jungle Lycanthrope",
        "poster_url": "https://image.tmdb.org/t/p/w500/iZtq44ZmxBW0E3tAeLG6UdJe9aj.jpg",
        "runtime": "156 min",
        "desc": "Set in the forests of Arunachal, Bhaskar gets bitten by a mythical wolf and begins transforming into the creature."
      },
      {
        "id": "mad-munjya",
        "sub_universe": "Maddock Supernatural",
        "title": "Munjya",
        "year": 2024,
        "chrono_order": 11,
        "release_order": 11,
        "phase": "Konkan Folklore & Chetuk Wadi",
        "poster_url": "https://image.tmdb.org/t/p/w500/ylYdXu0SM79Qs7vOz6q7mBxanVD.jpg",
        "runtime": "123 min",
        "desc": "A young man's visit to his native village unveils a vengeful male spirit who wants to possess a bride."
      },
      {
        "id": "mad-stree2",
        "sub_universe": "Maddock Supernatural",
        "title": "Stree 2",
        "year": 2024,
        "chrono_order": 12,
        "release_order": 12,
        "phase": "Sarkata Menace • All-Time Bollywood Blockbuster",
        "poster_url": "https://image.tmdb.org/t/p/w500/iwEJp4WBM8b3AjCeNcgvv86FEFr.jpg",
        "runtime": "147 min",
        "desc": "After the events of Stree, the town of Chanderi is being haunted again by a headless entity named Sarkata."
      },
      {
        "id": "neel-kgf1",
        "sub_universe": "Prashanth Neel Universe",
        "title": "K.G.F: Chapter 1",
        "year": 2018,
        "chrono_order": 13,
        "release_order": 13,
        "phase": "Rocky Bhai Rises in Kolar Gold Fields",
        "poster_url": "https://image.tmdb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
        "runtime": "156 min",
        "desc": "In the 1970s, a fierce rebel rises against brutal oppression and becomes the symbol of hope to legion of downtrodden people."
      },
      {
        "id": "neel-kgf2",
        "sub_universe": "Prashanth Neel Universe",
        "title": "K.G.F: Chapter 2",
        "year": 2022,
        "chrono_order": 14,
        "release_order": 14,
        "phase": "Rocky Bhai vs Adheera & Indian Government",
        "poster_url": "https://image.tmdb.org/t/p/w500/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
        "runtime": "168 min",
        "desc": "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear into his foes."
      },
      {
        "id": "neel-salaar",
        "sub_universe": "Prashanth Neel Universe",
        "title": "Salaar",
        "year": 2023,
        "chrono_order": 15,
        "release_order": 15,
        "phase": "Khansaar Dynasties • Deva & Varadha Brotherhood",
        "poster_url": "https://image.tmdb.org/t/p/w500/nlu9WbcetNFRGXXPWITr30ob7W6.jpg",
        "runtime": "175 min",
        "desc": "A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs in the ruthless city of Khansaar."
      },
      {
        "id": "kalki-1",
        "sub_universe": "Kalki & Astraverse",
        "title": "Kalki 2898 AD",
        "year": 2024,
        "chrono_order": 16,
        "release_order": 16,
        "phase": "Mahabharata 3102 BC to Dystopian 2898 AD Kasi",
        "poster_url": "https://image.tmdb.org/t/p/w500/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg",
        "runtime": "181 min",
        "desc": "A modern-day avatar of Vishnu who is believed to have descended to earth to protect the world in a dystopian future."
      }
    ]
  }
];
