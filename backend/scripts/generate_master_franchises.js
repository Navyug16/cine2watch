import fs from 'fs';
import path from 'path';

// Generator script for comprehensive Master Franchise Taxonomy & Canon Watch Orders
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Complete dataset definition
const masterCode = `// Master Cinematic Universes, Franchise Hubs & Canon Watch Orders
// Generated for cine2watch v2 Production Platform

export const FRANCHISE_HUBS = [
  { id: 'all', name: 'All Universes', icon: '🌐' },
  { id: 'marvel', name: 'Marvel', icon: '🦸' },
  { id: 'dc', name: 'DC', icon: '🦇' },
  { id: 'star-wars', name: 'Star Wars', icon: '⭐' },
  { id: 'wizarding-world', name: 'Wizarding World', icon: '🧙' },
  { id: 'middle-earth', name: 'Middle-Earth', icon: '🧝' },
  { id: 'action', name: 'Action & Speed', icon: '🏎️' },
  { id: 'sci-fi', name: 'Sci-Fi Hub', icon: '👽' },
  { id: 'fantasy', name: 'Fantasy & Lore', icon: '⚔️' },
  { id: 'horror', name: 'Horror Hub', icon: '👻' },
  { id: 'gaming', name: 'Video Games', icon: '🎮' },
  { id: 'animation', name: 'Animation Studios', icon: '🎨' },
  { id: 'anime', name: 'Anime Master IP', icon: '🇯🇵' },
  { id: 'indian', name: 'Indian Universes', icon: '🇮🇳' }
];

export const FRANCHISES = [
  {
    id: 'marvel',
    hub: 'marvel',
    name: 'Marvel Cinematic Multiverse',
    badge: 'MCU, X-MEN, SPIDER-MAN & DEFENDERS',
    icon: '🦸',
    theme_color: '#E62429',
    tagline: 'From Earth\\'s Mightiest Heroes in the MCU to the X-Men, Spider-Verse, and street-level Defenders.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    why_watch: 'The largest cinematic storytelling universe in existence, with over 50 interconnected blockbuster chapters across dimensions.',
    sub_universes: ['All Marvel', 'MCU', 'X-Men Universe', 'Spider-Man & SSU', 'Spider-Verse', 'Defenders', 'Legacy Marvel'],
    timeline: [
      // MCU Phases 1 to 5
      { id: 'mcu-cap1', sub_universe: 'MCU', title: 'Captain America: The First Avenger', year: 2011, chrono_order: 1, release_order: 5, phase: 'MCU Phase 1 • WWII Genesis (1942–1945)', poster_url: 'https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpqjqDIfj6.jpg', runtime: '124 min', desc: 'Steve Rogers volunteers for a top-secret research project that turns him into Captain America during World War II.' },
      { id: 'mcu-cm', sub_universe: 'MCU', title: 'Captain Marvel', year: 2019, chrono_order: 2, release_order: 21, phase: 'MCU Phase 3 • Cosmic Genesis (1995)', poster_url: 'https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TDC.jpg', runtime: '123 min', desc: 'Carol Danvers becomes one of the universe\\'s most powerful heroes when Earth is caught in a galactic war between two alien races.' },
      { id: 'mcu-im1', sub_universe: 'MCU', title: 'Iron Man', year: 2008, chrono_order: 3, release_order: 1, phase: 'MCU Phase 1 • Birth of MCU', poster_url: 'https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg', runtime: '126 min', desc: 'After being held captive in an Afghan cave, billionaire Tony Stark creates a unique weaponized suit of armor.' },
      { id: 'mcu-hulk', sub_universe: 'MCU', title: 'The Incredible Hulk', year: 2008, chrono_order: 4, release_order: 2, phase: 'MCU Phase 1 • Gamma Genesis', poster_url: 'https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg', runtime: '112 min', desc: 'Bruce Banner, a scientist on the run from the U.S. government, must find a cure for a monster he turns into whenever he loses his temper.' },
      { id: 'mcu-im2', sub_universe: 'MCU', title: 'Iron Man 2', year: 2010, chrono_order: 5, release_order: 3, phase: 'MCU Phase 1 • Stark Legacy', poster_url: 'https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg', runtime: '124 min', desc: 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful rival.' },
      { id: 'mcu-thor1', sub_universe: 'MCU', title: 'Thor', year: 2011, chrono_order: 6, release_order: 4, phase: 'MCU Phase 1 • Asgardian Exile', poster_url: 'https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg', runtime: '115 min', desc: 'The powerful but arrogant god Thor is cast out of Asgard to live among humans in Midgard, where he becomes one of their finest defenders.' },
      { id: 'mcu-av1', sub_universe: 'MCU', title: 'The Avengers', year: 2012, chrono_order: 7, release_order: 6, phase: 'MCU Phase 1 • Assembly Climax', poster_url: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg', runtime: '143 min', desc: 'Nick Fury brings together an elite team of superheroes to pull the world back from the brink of disaster when Loki steals the Tesseract.' },
      { id: 'mcu-im3', sub_universe: 'MCU', title: 'Iron Man 3', year: 2013, chrono_order: 8, release_order: 7, phase: 'MCU Phase 2 • PTSD & Extremis', poster_url: 'https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg', runtime: '130 min', desc: 'When Tony Stark\\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.' },
      { id: 'mcu-thor2', sub_universe: 'MCU', title: 'Thor: The Dark World', year: 2013, chrono_order: 9, release_order: 8, phase: 'MCU Phase 2 • The Aether', poster_url: 'https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg', runtime: '112 min', desc: 'When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey.' },
      { id: 'mcu-cap2', sub_universe: 'MCU', title: 'Captain America: The Winter Soldier', year: 2014, chrono_order: 10, release_order: 9, phase: 'MCU Phase 2 • Espionage Noir', poster_url: 'https://image.tmdb.org/t/p/w500/tVFRpFw3xTed5nGQqW0SdKGMWPA.jpg', runtime: '136 min', desc: 'Steve Rogers struggles to embrace his role in the modern world while battling a shadowy assassin who turns out to be his closest friend.' },
      { id: 'mcu-gotg1', sub_universe: 'MCU', title: 'Guardians of the Galaxy', year: 2014, chrono_order: 11, release_order: 10, phase: 'MCU Phase 2 • Cosmic Outlaws', poster_url: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXOsLbtMAW.jpg', runtime: '121 min', desc: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe using the Power Stone.' },
      { id: 'mcu-gotg2', sub_universe: 'MCU', title: 'Guardians of the Galaxy Vol. 2', year: 2017, chrono_order: 12, release_order: 15, phase: 'MCU Phase 3 • Celestial Heritage', poster_url: 'https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9MFbBOKi9GDT.jpg', runtime: '136 min', desc: 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\\'s encounter with his father.' },
      { id: 'mcu-av2', sub_universe: 'MCU', title: 'Avengers: Age of Ultron', year: 2015, chrono_order: 13, release_order: 11, phase: 'MCU Phase 2 • AI Reckoning', poster_url: 'https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg', runtime: '141 min', desc: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong.' },
      { id: 'mcu-ant1', sub_universe: 'MCU', title: 'Ant-Man', year: 2015, chrono_order: 14, release_order: 12, phase: 'MCU Phase 2 • Heist Capers', poster_url: 'https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg', runtime: '117 min', desc: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero.' },
      { id: 'mcu-cap3', sub_universe: 'MCU', title: 'Captain America: Civil War', year: 2016, chrono_order: 15, release_order: 13, phase: 'MCU Phase 3 • Fracture', poster_url: 'https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg', runtime: '147 min', desc: 'Political involvement in the Avengers\\' affairs causes a rift between former allies Captain America and Iron Man.' },
      { id: 'mcu-bw', sub_universe: 'MCU', title: 'Black Widow', year: 2021, chrono_order: 16, release_order: 24, phase: 'MCU Phase 4 • Red Room Odyssey', poster_url: 'https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg', runtime: '134 min', desc: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.' },
      { id: 'mcu-bp1', sub_universe: 'MCU', title: 'Black Panther', year: 2018, chrono_order: 17, release_order: 18, phase: 'MCU Phase 3 • Wakanda Forever', poster_url: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg', runtime: '134 min', desc: 'T\\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future against Killmonger.' },
      { id: 'mcu-sm1', sub_universe: 'MCU', title: 'Spider-Man: Homecoming', year: 2017, chrono_order: 18, release_order: 16, phase: 'MCU Phase 3 • Queens Hero', poster_url: 'https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg', runtime: '133 min', desc: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man.' },
      { id: 'mcu-ds1', sub_universe: 'MCU', title: 'Doctor Strange', year: 2016, chrono_order: 19, release_order: 14, phase: 'MCU Phase 3 • Mystic Arts', poster_url: 'https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg', runtime: '115 min', desc: 'While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.' },
      { id: 'mcu-thor3', sub_universe: 'MCU', title: 'Thor: Ragnarok', year: 2017, chrono_order: 20, release_order: 17, phase: 'MCU Phase 3 • Taika Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg', runtime: '130 min', desc: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world.' },
      { id: 'mcu-ant2', sub_universe: 'MCU', title: 'Ant-Man and the Wasp', year: 2018, chrono_order: 21, release_order: 20, phase: 'MCU Phase 3 • Quantum Realm', poster_url: 'https://image.tmdb.org/t/p/w500/cFQEO687n1K6umXbInzocxcnAQz.jpg', runtime: '118 min', desc: 'As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission.' },
      { id: 'mcu-iw', sub_universe: 'MCU', title: 'Avengers: Infinity War', year: 2018, chrono_order: 22, release_order: 19, phase: 'MCU Phase 3 • The Snap', poster_url: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', runtime: '149 min', desc: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation.' },
      { id: 'mcu-endgame', sub_universe: 'MCU', title: 'Avengers: Endgame', year: 2019, chrono_order: 23, release_order: 22, phase: 'Infinity Saga Climax', poster_url: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg', runtime: '181 min', desc: 'After the devastating events of Infinity War, the universe is in ruins. The surviving Avengers assemble once more to reverse Thanos\\' actions.' },
      { id: 'mcu-sm2', sub_universe: 'MCU', title: 'Spider-Man: Far From Home', year: 2019, chrono_order: 24, release_order: 23, phase: 'MCU Phase 3 • Post-Blip Epilogue', poster_url: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg', runtime: '129 min', desc: 'Following the events of Endgame, Spider-Man must step up to take on new threats in a world that has changed forever during a European trip.' },
      { id: 'mcu-shangchi', sub_universe: 'MCU', title: 'Shang-Chi and the Legend of the Ten Rings', year: 2021, chrono_order: 25, release_order: 25, phase: 'MCU Phase 4 • Wuxia Marvel', poster_url: 'https://image.tmdb.org/t/p/w500/9f2Q0U3IOsLgrI2HkvldwSABZy5.jpg', runtime: '132 min', desc: 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.' },
      { id: 'mcu-eternals', sub_universe: 'MCU', title: 'Eternals', year: 2021, chrono_order: 26, release_order: 26, phase: 'MCU Phase 4 • Celestial Gods', poster_url: 'https://image.tmdb.org/t/p/w500/lFByFSLV5WDJEv3KabbdAF959F2.jpg', runtime: '156 min', desc: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations for 7,000 years.' },
      { id: 'mcu-sm3', sub_universe: 'MCU', title: 'Spider-Man: No Way Home', year: 2021, chrono_order: 27, release_order: 27, phase: 'MCU Phase 4 • Multiverse Assembly', poster_url: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', runtime: '148 min', desc: 'With Spider-Man\\'s identity now revealed, Peter asks Doctor Strange for help, unleashing villains from alternate dimensions.' },
      { id: 'mcu-ds2', sub_universe: 'MCU', title: 'Doctor Strange in the Multiverse of Madness', year: 2022, chrono_order: 28, release_order: 28, phase: 'MCU Phase 4 • Sam Raimi Horror', poster_url: 'https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg', runtime: '126 min', desc: 'Doctor Strange teams up with a mysterious teenage girl who can travel across the multiverse to battle alternate-reality threats.' },
      { id: 'mcu-thor4', sub_universe: 'MCU', title: 'Thor: Love and Thunder', year: 2022, chrono_order: 29, release_order: 29, phase: 'MCU Phase 4 • God Butcher', poster_url: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg', runtime: '119 min', desc: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.' },
      { id: 'mcu-bp2', sub_universe: 'MCU', title: 'Black Panther: Wakanda Forever', year: 2022, chrono_order: 30, release_order: 30, phase: 'MCU Phase 4 • Talokan War', poster_url: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg', runtime: '161 min', desc: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T\\'Challa.' },
      { id: 'mcu-ant3', sub_universe: 'MCU', title: 'Ant-Man and the Wasp: Quantumania', year: 2023, chrono_order: 31, release_order: 31, phase: 'MCU Phase 5 • Kang Dynasty', poster_url: 'https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg', runtime: '125 min', desc: 'Scott Lang and Hope van Dyne find themselves exploring the Quantum Realm, interacting with strange new creatures and Kang the Conqueror.' },
      { id: 'mcu-gotg3', sub_universe: 'MCU', title: 'Guardians of the Galaxy Vol. 3', year: 2023, chrono_order: 32, release_order: 32, phase: 'MCU Phase 5 • James Gunn Finale', poster_url: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg', runtime: '150 min', desc: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own in an emotional swansong.' },
      { id: 'mcu-marvels', sub_universe: 'MCU', title: 'The Marvels', year: 2023, chrono_order: 33, release_order: 33, phase: 'MCU Phase 5 • Quantum Entanglement', poster_url: 'https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg', runtime: '105 min', desc: 'Carol Danvers, Kamala Khan and Monica Rambeau begin swapping places every time they use their powers and must team up.' },
      { id: 'mcu-dp3', sub_universe: 'MCU', title: 'Deadpool & Wolverine', year: 2024, chrono_order: 34, release_order: 34, phase: 'MCU Phase 5 • Mutant Multiverse', poster_url: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg', runtime: '128 min', desc: 'Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.' },
      { id: 'mcu-cap4', sub_universe: 'MCU', title: 'Captain America: Brave New World', year: 2025, chrono_order: 35, release_order: 35, phase: 'MCU Phase 5 • Red Hulk International Crisis', poster_url: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', runtime: '135 min', desc: 'Sam Wilson finds himself in the middle of an international incident and must discover the motive behind a nefarious global plot.' },
      { id: 'mcu-ff', sub_universe: 'MCU', title: 'The Fantastic Four: First Steps', year: 2025, chrono_order: 36, release_order: 36, phase: 'MCU Phase 6 • Retro-Futuristic 1960s', poster_url: 'https://image.tmdb.org/t/p/w500/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg', runtime: '130 min', desc: 'Marvel\\'s First Family—Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm—face off against the cosmic entity Galactus.' },
      { id: 'mcu-doomsday', sub_universe: 'MCU', title: 'Avengers: Doomsday', year: 2026, chrono_order: 37, release_order: 37, phase: 'MCU Phase 6 • Doctor Doom Sovereign', poster_url: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg', runtime: '175 min', desc: 'The Avengers assemble once more to battle Robert Downey Jr.\\'s Victor Von Doom in the catastrophic prelude to Secret Wars.' },

      // X-Men Universe
      { id: 'xm-1', sub_universe: 'X-Men Universe', title: 'X-Men', year: 2000, chrono_order: 38, release_order: 38, phase: 'Fox X-Men • The Mutant Awakening', poster_url: 'https://image.tmdb.org/t/p/w500/bRDAcK07vUvWKn5LkhN57U0d1L9.jpg', runtime: '104 min', desc: 'In a world where mutants exist, two groups take opposing sides in the fight between peaceful coexistence and mutant supremacy.' },
      { id: 'xm-2', sub_universe: 'X-Men Universe', title: 'X2: X-Men United', year: 2003, chrono_order: 39, release_order: 39, phase: 'Fox X-Men • Stryker & Weapon X Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/1Xdd321Xw57x0BqD9L343p5M9e.jpg', runtime: '134 min', desc: 'When the anti-mutant Colonel William Stryker attacks Professor X\\'s school, the X-Men must unite with their enemy Magneto.' },
      { id: 'xm-fc', sub_universe: 'X-Men Universe', title: 'X-Men: First Class', year: 2011, chrono_order: 40, release_order: 40, phase: 'Fox X-Men • 1962 Cuban Missile Crisis', poster_url: 'https://image.tmdb.org/t/p/w500/bJk4tU7q8uL7v6a1m3Z5e7x0B9C.jpg', runtime: '131 min', desc: 'In the 1960s, superhuman humans Charles Xavier and Erik Lensherr work together to find others like them before turning into rivals.' },
      { id: 'xm-dofp', sub_universe: 'X-Men Universe', title: 'X-Men: Days of Future Past', year: 2014, chrono_order: 41, release_order: 41, phase: 'Fox X-Men • Time Travel Sentinel Odyssey', poster_url: 'https://image.tmdb.org/t/p/w500/tK1yL7v6a1m3Z5e7x0BqD9L343p.jpg', runtime: '132 min', desc: 'The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.' },
      { id: 'xm-dp1', sub_universe: 'X-Men Universe', title: 'Deadpool', year: 2016, chrono_order: 42, release_order: 42, phase: 'Fox X-Men • The Merc with a Mouth', poster_url: 'https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg', runtime: '108 min', desc: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.' },
      { id: 'xm-logan', sub_universe: 'X-Men Universe', title: 'Logan', year: 2017, chrono_order: 43, release_order: 43, phase: 'Fox X-Men • Noir Western Swansong', poster_url: 'https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg', runtime: '137 min', desc: 'In a future where mutants are nearly extinct, an aging and weary Logan cares for Professor X while protecting a young mutant girl.' },
      { id: 'xm-dp2', sub_universe: 'X-Men Universe', title: 'Deadpool 2', year: 2018, chrono_order: 44, release_order: 44, phase: 'Fox X-Men • X-Force & Cable', poster_url: 'https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg', runtime: '119 min', desc: 'Foul-mouthed mutant mercenary Wade Wilson assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from Cable.' },

      // Spider-Man & Sony
      { id: 'sm-r1', sub_universe: 'Spider-Man & SSU', title: 'Spider-Man', year: 2002, chrono_order: 45, release_order: 45, phase: 'Sam Raimi Era • Tobey Maguire Origin', poster_url: 'https://image.tmdb.org/t/p/w500/gh4c2ubi18A51sm7y3jP5k.jpg', runtime: '121 min', desc: 'When bitten by a genetically modified spider, nerdy high school student Peter Parker gains spider-like abilities that he must use to fight evil.' },
      { id: 'sm-r2', sub_universe: 'Spider-Man & SSU', title: 'Spider-Man 2', year: 2004, chrono_order: 46, release_order: 46, phase: 'Sam Raimi Era • Doc Ock Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/olxpyq94ca934Lp5ozvmdgsmbQ.jpg', runtime: '127 min', desc: 'Peter Parker is beset with troubles in his personal life as he battles a brilliant scientist named Doctor Otto Octavius.' },
      { id: 'sm-asm1', sub_universe: 'Spider-Man & SSU', title: 'The Amazing Spider-Man', year: 2012, chrono_order: 47, release_order: 47, phase: 'Marc Webb Era • Andrew Garfield', poster_url: 'https://image.tmdb.org/t/p/w500/fSbqPbcfq8PtUK9e979qNuSil.jpg', runtime: '136 min', desc: 'After Peter Parker is bitten by a genetically altered spider, he gains newfound powers and ventures to solve his parents\\' mysterious disappearance.' },
      { id: 'sm-venom1', sub_universe: 'Spider-Man & SSU', title: 'Venom', year: 2018, chrono_order: 48, release_order: 48, phase: 'Sony Spider-Man Universe • Lethal Protector', poster_url: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL2544aKQiGhMv2mFu.jpg', runtime: '112 min', desc: 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth, and together they become Venom.' },
      { id: 'sm-venom3', sub_universe: 'Spider-Man & SSU', title: 'Venom: The Last Dance', year: 2024, chrono_order: 49, release_order: 49, phase: 'Sony Spider-Man Universe • Knull & Symbiote Climax', poster_url: 'https://image.tmdb.org/t/p/w500/k42OwCU899W41V93g24gX2Mh.jpg', runtime: '110 min', desc: 'Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision.' },

      // Spider-Verse Animation
      { id: 'sv-1', sub_universe: 'Spider-Verse', title: 'Spider-Man: Into the Spider-Verse', year: 2018, chrono_order: 50, release_order: 50, phase: 'Spider-Verse Animation • Miles Morales Oscar Winner', poster_url: 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg', runtime: '117 min', desc: 'Teen Miles Morales becomes the new Spider-Man and joins other Spider-Heroes from various parallel dimensions to stop Kingpin.' },
      { id: 'sv-2', sub_universe: 'Spider-Verse', title: 'Spider-Man: Across the Spider-Verse', year: 2023, chrono_order: 51, release_order: 51, phase: 'Spider-Verse Animation • Miguel O\\'Hara & Spider-Society', poster_url: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg', runtime: '140 min', desc: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.' },

      // Defenders / Street-Level TV
      { id: 'def-dd', sub_universe: 'Defenders', title: 'Daredevil', year: 2015, chrono_order: 52, release_order: 52, phase: 'Hell\\'s Kitchen Noir • The Man Without Fear', poster_url: 'https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2vSu10v9LqL7aL.jpg', runtime: 'TV Series', desc: 'A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil.' },
      { id: 'def-punisher', sub_universe: 'Defenders', title: 'The Punisher', year: 2017, chrono_order: 53, release_order: 53, phase: 'Frank Castle Vigilante War', poster_url: 'https://image.tmdb.org/t/p/w500/s8Z0g0b9L7v6a1m3Z5e7x0BqD9.jpg', runtime: 'TV Series', desc: 'After the murder of his family, Marine veteran Frank Castle becomes a vigilante known as "The Punisher".' }
    ]
  },
  {
    id: 'dc',
    hub: 'dc',
    name: 'DC Multiverse & Batman Gothamverse',
    badge: 'DCEU, NOLAN TRILOGY, REEVES & ELSEWORLDS',
    icon: '🦇',
    theme_color: '#0047BA',
    tagline: 'From Christopher Nolan\\'s gritty Gotham noir to Zack Snyder\\'s mythic deities and Matt Reeves\\' detective vision.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    why_watch: 'Cinematic psychological depth, operatic visual scale, and the definitive live-action adaptations of comic lore\\'s greatest legends.',
    sub_universes: ['All DC', 'DC Extended Universe (DCEU)', 'Batman Gothamverse', 'Elseworlds', 'DC Animated'],
    timeline: [
      { id: 'dc-bb', sub_universe: 'Batman Gothamverse', title: 'Batman Begins', year: 2005, chrono_order: 1, release_order: 1, phase: 'Nolan Trilogy • Awakening', poster_url: 'https://image.tmdb.org/t/p/w500/4MpN4Cwhvua1DYR4R4kzW8d9ZtM.jpg', runtime: '140 min', desc: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.' },
      { id: 'dc-tdk', sub_universe: 'Batman Gothamverse', title: 'The Dark Knight', year: 2008, chrono_order: 2, release_order: 2, phase: 'Nolan Trilogy • Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', runtime: '152 min', desc: 'When the menace known as the Joker wreaks havoc and chaos on Gotham, Batman must accept one of the greatest tests.' },
      { id: 'dc-tdkr', sub_universe: 'Batman Gothamverse', title: 'The Dark Knight Rises', year: 2012, chrono_order: 3, release_order: 3, phase: 'Nolan Trilogy • Finale', poster_url: 'https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg', runtime: '164 min', desc: 'Eight years after the Joker\\'s reign of chaos, Batman is forced from his exile by the brutal terrorist Bane.' },
      { id: 'dc-mos', sub_universe: 'DC Extended Universe (DCEU)', title: 'Man of Steel', year: 2013, chrono_order: 4, release_order: 4, phase: 'DCEU • Snyderverse Genesis', poster_url: 'https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZJyUI2Fl025.jpg', runtime: '143 min', desc: 'An alien child is evacuated from his dying world and sent to Earth, where he must become humanity\\'s protector against General Zod.' },
      { id: 'dc-bvs', sub_universe: 'DC Extended Universe (DCEU)', title: 'Batman v Superman: Dawn of Justice', year: 2016, chrono_order: 5, release_order: 5, phase: 'DCEU • Clash of Titans', poster_url: 'https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg', runtime: '151 min', desc: 'Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel while Lex Luthor schemes.' },
      { id: 'dc-ww1', sub_universe: 'DC Extended Universe (DCEU)', title: 'Wonder Woman', year: 2017, chrono_order: 6, release_order: 6, phase: 'DCEU • WWI Origin (1918)', poster_url: 'https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zFvI8.jpg', runtime: '141 min', desc: 'When a pilot crashes and tells of conflict in the outside world, Diana leaves home to fight in World War I.' },
      { id: 'dc-zsjl', sub_universe: 'DC Extended Universe (DCEU)', title: 'Zack Snyder\\'s Justice League', year: 2021, chrono_order: 7, release_order: 7, phase: 'DCEU • Epic 4-Hour Cut', poster_url: 'https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg', runtime: '242 min', desc: 'Determined to ensure Superman\\'s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince to recruit metahumans.' },
      { id: 'dc-aqua1', sub_universe: 'DC Extended Universe (DCEU)', title: 'Aquaman', year: 2018, chrono_order: 8, release_order: 8, phase: 'DCEU • Atlantis Visual Splendor', poster_url: 'https://image.tmdb.org/t/p/w500/xLP5876BsmO4W6t5o7x43bK435k.jpg', runtime: '143 min', desc: 'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between ocean and land.' },
      { id: 'dc-tss', sub_universe: 'DC Extended Universe (DCEU)', title: 'The Suicide Squad', year: 2021, chrono_order: 9, release_order: 9, phase: 'James Gunn • Corto Maltese Mission', poster_url: 'https://image.tmdb.org/t/p/w500/kb4gv4M509w6a4fKxVq7e1x0B9.jpg', runtime: '132 min', desc: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join Task Force X.' },
      { id: 'dc-flash', sub_universe: 'DC Extended Universe (DCEU)', title: 'The Flash', year: 2023, chrono_order: 10, release_order: 10, phase: 'DCEU • Multiverse Paradox', poster_url: 'https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg', runtime: '144 min', desc: 'Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without superheroes.' },
      { id: 'dc-aqua2', sub_universe: 'DC Extended Universe (DCEU)', title: 'Aquaman and the Lost Kingdom', year: 2023, chrono_order: 11, release_order: 11, phase: 'DCEU Finale • Black Manta Reckoning', poster_url: 'https://image.tmdb.org/t/p/w500/7lTnndQzgAEN9VqRNIjJ9urwI2L.jpg', runtime: '124 min', desc: 'Black Manta seeks revenge on Aquaman for his father\\'s death. Using the Black Trident\\'s power, he unleashes an ancient evil.' },
      { id: 'dc-joker1', sub_universe: 'Elseworlds', title: 'Joker', year: 2019, chrono_order: 12, release_order: 12, phase: 'Elseworlds • Oscar Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', runtime: '122 min', desc: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City.' },
      { id: 'dc-batman2022', sub_universe: 'Batman Gothamverse', title: 'The Batman', year: 2022, chrono_order: 13, release_order: 13, phase: 'Reeves Gotham • Year Two Detective Noir', poster_url: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg', runtime: '176 min', desc: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing the Riddler.' },
      { id: 'dc-joker2', sub_universe: 'Elseworlds', title: 'Joker: Folie à Deux', year: 2024, chrono_order: 14, release_order: 14, phase: 'Elseworlds • Musical Madness', poster_url: 'https://image.tmdb.org/t/p/w500/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg', runtime: '138 min', desc: 'Struggling with his dual identity, Arthur Fleck meets the love of his life, Harleen Quinzel, while incarcerated at Arkham State Hospital.' }
    ]
  },
  {
    id: 'star-wars',
    hub: 'star-wars',
    name: 'Star Wars Galactic Canon',
    badge: 'SKYWALKER SAGA, MANDALORIAN & ANTHOLOGY',
    icon: '⭐',
    theme_color: '#FFE81F',
    tagline: 'A long time ago in a galaxy far, far away... the definitive multi-generational space opera.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    why_watch: 'The foundational myth of global popular culture, spanning prequels, original classics, and spin-off anthologies.',
    sub_universes: ['All Star Wars', 'Skywalker Saga', 'Anthologies', 'Mandalorian Era', 'Animation'],
    timeline: [
      { id: 'sw-1', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode I - The Phantom Menace', year: 1999, chrono_order: 1, release_order: 4, phase: 'Prequel • Duel of the Fates', poster_url: 'https://image.tmdb.org/t/p/w500/6FlfZWjPqH79Qf2U39H1Y0LzU4j.jpg', runtime: '136 min', desc: 'Two Jedi escape a hostile blockade and encounter young Anakin Skywalker who may bring balance to the Force.' },
      { id: 'sw-2', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode II - Attack of the Clones', year: 2002, chrono_order: 2, release_order: 5, phase: 'Prequel • Clone Wars Outbreak', poster_url: 'https://image.tmdb.org/t/p/w500/bFvNxM2l9y2l1M1Y0LzU4j7x0B.jpg', runtime: '142 min', desc: 'Ten years after the invasion of Naboo, the galaxy is on the brink of civil war, as the Republic deploys a secret clone army.' },
      { id: 'sw-3', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode III - Revenge of the Sith', year: 2005, chrono_order: 3, release_order: 6, phase: 'Prequel • Fall of Anakin & Rise of Vader', poster_url: 'https://image.tmdb.org/t/p/w500/xfSAoB4TGvB39ZG2Q05v9g3g0uJ.jpg', runtime: '140 min', desc: 'Three years into the Clone Wars, the Jedi rescue Palpatine as Anakin falls prey to the Dark Side and executes Order 66.' },
      { id: 'sw-solo', sub_universe: 'Anthologies', title: 'Solo: A Star Wars Story', year: 2018, chrono_order: 4, release_order: 10, phase: 'Anthology • Kessel Run & Millennium Falcon', poster_url: 'https://image.tmdb.org/t/p/w500/3IKJuX7v6a1m3Z5e7x0BqD9L34.jpg', runtime: '135 min', desc: 'Board the Millennium Falcon and journey to a galaxy far, far away in an all-new adventure with the most beloved scoundrel.' },
      { id: 'sw-andor', sub_universe: 'Mandalorian Era', title: 'Andor', year: 2022, chrono_order: 5, release_order: 12, phase: 'Pre-Rebellion Espionage Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/59SVBrHGUSx5cwvrKs0neE293Z5.jpg', runtime: 'TV Series', desc: 'Prequel series to Rogue One. In an era filled with danger, deception and intrigue, Cassian will embark on the path that is destined to turn him into a rebel hero.' },
      { id: 'sw-rogue', sub_universe: 'Anthologies', title: 'Rogue One: A Star Wars Story', year: 2016, chrono_order: 6, release_order: 8, phase: 'Anthology • Stealing the Death Star Plans', poster_url: 'https://image.tmdb.org/t/p/w500/5jX3b674z892zB3eXv762V337B2.jpg', runtime: '133 min', desc: 'In a time of conflict, a group of unlikely heroes band together on a daring mission to steal the plans to the Death Star.' },
      { id: 'sw-4', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode IV - A New Hope', year: 1977, chrono_order: 7, release_order: 1, phase: 'Original Trilogy • Genesis Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', runtime: '121 min', desc: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and two droids to save the galaxy from the Empire\\'s world-destroying battle station.' },
      { id: 'sw-5', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, chrono_order: 8, release_order: 2, phase: 'Original Trilogy • Dagobah & "I Am Your Father"', poster_url: 'https://image.tmdb.org/t/p/w500/2l05TqKFzkqp0Ki7OhUbRYurAOa.jpg', runtime: '124 min', desc: 'After the Rebels are brutally overpowered by the Empire, Luke Skywalker trains with Jedi Master Yoda while his friends are pursued by Darth Vader.' },
      { id: 'sw-6', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983, chrono_order: 9, release_order: 3, phase: 'Original Trilogy • Redemption of Anakin', poster_url: 'https://image.tmdb.org/t/p/w500/xxQk2e7o1uYw1j8oUoU3iTq0p5C.jpg', runtime: '131 min', desc: 'Luke Skywalker attempts to bring his father back to the light side of the Force as the Rebel Alliance makes its final stand.' },
      { id: 'sw-mando', sub_universe: 'Mandalorian Era', title: 'The Mandalorian', year: 2019, chrono_order: 10, release_order: 13, phase: 'Post-Empire Outer Rim Bounty Odyssey', poster_url: 'https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1R07YF7o5.jpg', runtime: 'TV Series', desc: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.' },
      { id: 'sw-7', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode VII - The Force Awakens', year: 2015, chrono_order: 11, release_order: 7, phase: 'Sequel Trilogy • The Resistance Awakes', poster_url: 'https://image.tmdb.org/t/p/w500/wqnLenSmQv7x0BqD9L343p5M9e.jpg', runtime: '138 min', desc: 'As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo to search for Luke Skywalker.' },
      { id: 'sw-8', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode VIII - The Last Jedi', year: 2017, chrono_order: 12, release_order: 9, phase: 'Sequel Trilogy • The Force Connection', poster_url: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E08ipYTg5X4q0b9L7.jpg', runtime: '152 min', desc: 'The Resistance prepares for battle with the First Order as Rey develops her newly discovered abilities with the guidance of Luke Skywalker.' },
      { id: 'sw-9', sub_universe: 'Skywalker Saga', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, chrono_order: 13, release_order: 11, phase: 'Sequel Trilogy • The Final Battle', poster_url: 'https://image.tmdb.org/t/p/w500/db32LaOsbwpg8gLd3X5e7x0BqD.jpg', runtime: '141 min', desc: 'The surviving members of the Resistance face the First Order once more, and the legendary conflict reaches its climax.' }
    ]
  },
  {
    id: 'action-sagas',
    hub: 'action',
    name: 'Adrenaline & Blockbuster Action Sagas',
    badge: 'FAST & FURIOUS, MISSION: IMPOSSIBLE, TRANSFORMERS, BOND & JOHN WICK',
    icon: '🏎️',
    theme_color: '#FF4500',
    tagline: 'High-octane physics-defying stunts, IMF spycraft, Cybertronian warfare, and High Table Gun-Fu.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
    why_watch: 'The pinnacle of practical stunt work and adrenaline entertainment designed for the biggest screens possible.',
    sub_universes: ['All Action', 'Fast & Furious', 'Mission: Impossible', 'Transformers', 'John Wick', 'James Bond / 007'],
    timeline: [
      // Fast & Furious
      { id: 'ff-1', sub_universe: 'Fast & Furious', title: 'The Fast and the Furious', year: 2001, chrono_order: 1, release_order: 1, phase: 'LA Quarter-Mile Underground', poster_url: 'https://image.tmdb.org/t/p/w500/gqY0ITBgT7A82poL9jv851qdnIb.jpg', runtime: '106 min', desc: 'Los Angeles police officer Brian O\\'Conner must decide where his loyalty really lies when he infiltrates Dominic Toretto\\'s street racing crew.' },
      { id: 'ff-5', sub_universe: 'Fast & Furious', title: 'Fast Five', year: 2011, chrono_order: 2, release_order: 5, phase: 'Rio Vault Heist • Franchise Peak', poster_url: 'https://image.tmdb.org/t/p/w500/gEfQjjQwY7fh5bI4GlG0RrBu7Pz.jpg', runtime: '130 min', desc: 'Dominic Toretto and his crew of street racers plan a massive vault heist in Rio de Janeiro to buy their freedom while hunted by Luke Hobbs.' },
      { id: 'ff-7', sub_universe: 'Fast & Furious', title: 'Furious 7', year: 2015, chrono_order: 3, release_order: 7, phase: 'Abu Dhabi Sky Scrapers & Paul Walker Tribute', poster_url: 'https://image.tmdb.org/t/p/w500/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg', runtime: '137 min', desc: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for putting his brother into a coma.' },
      { id: 'ff-10', sub_universe: 'Fast & Furious', title: 'Fast X', year: 2023, chrono_order: 4, release_order: 11, phase: 'Dante Reyes Vengeance Climax', poster_url: 'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg', runtime: '141 min', desc: 'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes, Dante, who is determined to shatter Dom\\'s world.' },

      // Mission: Impossible
      { id: 'mi-1', sub_universe: 'Mission: Impossible', title: 'Mission: Impossible', year: 1996, chrono_order: 5, release_order: 12, phase: 'Brian De Palma • Langley Vault Suspense', poster_url: 'https://image.tmdb.org/t/p/w500/AkGQQUjS7q8uL7v6a1m3Z5e7x0B.jpg', runtime: '110 min', desc: 'An American agent, falsely suspected of disloyalty, must discover and expose the real spy without the help of his organization.' },
      { id: 'mi-gp', sub_universe: 'Mission: Impossible', title: 'Mission: Impossible - Ghost Protocol', year: 2011, chrono_order: 6, release_order: 13, phase: 'Brad Bird • Burj Khalifa Ascent', poster_url: 'https://image.tmdb.org/t/p/w500/eRZTGx7GsiKqPch96k27LK005ZL.jpg', runtime: '132 min', desc: 'The IMF is shut down when implicated in the bombing of the Kremlin, causing Ethan Hunt and his team to go rogue.' },
      { id: 'mi-fallout', sub_universe: 'Mission: Impossible', title: 'Mission: Impossible - Fallout', year: 2018, chrono_order: 7, release_order: 14, phase: 'Action Masterpiece • HALO Jump & Helicopter Chase', poster_url: 'https://image.tmdb.org/t/p/w500/AkGQQUjS7q8uL7v6a1m3Z5e7x0B.jpg', runtime: '147 min', desc: 'Ethan Hunt and his IMF team, along with CIA assassin August Walker, race against time after plutonium cores are stolen.' },
      { id: 'mi-dr', sub_universe: 'Mission: Impossible', title: 'Mission: Impossible - Dead Reckoning Part One', year: 2023, chrono_order: 8, release_order: 15, phase: 'The Rogue AI Entity & Motorbike Cliff Jump', poster_url: 'https://image.tmdb.org/t/p/w500/NNxYkU7q8uL7v6a1m3Z5e7x0B9C.jpg', runtime: '163 min', desc: 'Ethan Hunt and his IMF team track down a terrifying new rogue AI weapon that threatens all of humanity before it falls into the wrong hands.' },

      // Transformers
      { id: 'tf-one', sub_universe: 'Transformers', title: 'Transformers One', year: 2024, chrono_order: 9, release_order: 16, phase: 'Origin Prequel • Cybertron Brotherhood', poster_url: 'https://image.tmdb.org/t/p/w500/iRCgqpdVE4wyLQvGYU3ZP7pAtUc.jpg', runtime: '104 min', desc: 'The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once friends bonded like brothers.' },
      { id: 'tf-bb', sub_universe: 'Transformers', title: 'Bumblebee', year: 2018, chrono_order: 10, release_order: 17, phase: '1987 Origin Arc • Heartfelt Sci-Fi', poster_url: 'https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg', runtime: '114 min', desc: 'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town where Charlie Watson finds him.' },
      { id: 'tf-1', sub_universe: 'Transformers', title: 'Transformers', year: 2007, chrono_order: 11, release_order: 18, phase: 'Bay Era • First Contact (2007)', poster_url: 'https://image.tmdb.org/t/p/w500/lkZ9gqCEjzX85lKR6Jjd1uGAXNp.jpg', runtime: '144 min', desc: 'An ancient struggle between two Cybertronian warrior clans, the heroic Autobots and evil Decepticons, comes to Earth.' },

      // John Wick
      { id: 'jw-1', sub_universe: 'John Wick', title: 'John Wick', year: 2014, chrono_order: 12, release_order: 19, phase: 'The Puppy & The Legend Awakening', poster_url: 'https://image.tmdb.org/t/p/w500/p5ozvmdgsmbQAOwa8uq94ca934L.jpg', runtime: '101 min', desc: 'An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.' },
      { id: 'jw-4', sub_universe: 'John Wick', title: 'John Wick: Chapter 4', year: 2023, chrono_order: 13, release_order: 20, phase: 'Paris Sunrise & High Table Duel', poster_url: 'https://image.tmdb.org/t/p/w500/vZloFAK75b87vL0A9p5x6K7eX7e.jpg', runtime: '169 min', desc: 'John Wick uncovers a path to defeating The High Table, but must face a new enemy with powerful alliances across the globe.' },

      // James Bond
      { id: 'jb-cr', sub_universe: 'James Bond / 007', title: 'Casino Royale', year: 2006, chrono_order: 14, release_order: 21, phase: 'Daniel Craig Era • 00 Status Rebirth', poster_url: 'https://image.tmdb.org/t/p/w500/i0hpn0R0Dq6yJm3Z5e7x0BqD9L.jpg', runtime: '144 min', desc: 'After earning 00 status and a licence to kill, secret agent James Bond sets out on his first mission as 007 to defeat a private banker.' },
      { id: 'jb-skyfall', sub_universe: 'James Bond / 007', title: 'Skyfall', year: 2012, chrono_order: 15, release_order: 22, phase: 'Daniel Craig Era • 50th Anniversary Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/171500wE0I6efAW4cDDmZQWtwZM.jpg', runtime: '143 min', desc: 'James Bond\\'s loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down the threat.' }
    ]
  },
  {
    id: 'sci-fi-hub',
    hub: 'sci-fi',
    name: 'Sci-Fi Hub & Titan Universes',
    badge: 'ALIEN, PREDATOR, MATRIX, MONSTERVERSE, AVATAR & DUNE',
    icon: '👽',
    theme_color: '#00F0FF',
    tagline: 'Deep space horror, cybernetic simulations, Kaiju planetary titans, and Arrakis spice wars.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg',
    why_watch: 'Visionary speculative cinema exploring existential threats, artificial intelligence, cosmic horror, and monumental visual majesty.',
    sub_universes: ['All Sci-Fi', 'Alien Universe', 'Predator Universe', 'The Matrix', 'MonsterVerse', 'Avatar', 'Dune Universe'],
    timeline: [
      { id: 'scifi-alien1', sub_universe: 'Alien Universe', title: 'Alien', year: 1979, chrono_order: 1, release_order: 1, phase: 'Ridley Scott • Nostromo Cosmic Horror', poster_url: 'https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzmu2u0B9.jpg', runtime: '117 min', desc: 'The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.' },
      { id: 'scifi-alienrom', sub_universe: 'Alien Universe', title: 'Alien: Romulus', year: 2024, chrono_order: 2, release_order: 2, phase: 'Fede Álvarez • Renaissance Space Station Horror', poster_url: 'https://image.tmdb.org/t/p/w500/b33nnKl12vfEi4SoAOdaC3Kg0b.jpg', runtime: '119 min', desc: 'While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.' },
      { id: 'scifi-pred1', sub_universe: 'Predator Universe', title: 'Predator', year: 1987, chrono_order: 3, release_order: 3, phase: 'Schwarzenegger Jungle Survival', poster_url: 'https://image.tmdb.org/t/p/w500/k3mW4qCrTfeCyvF0H7x0BqD9L.jpg', runtime: '107 min', desc: 'A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.' },
      { id: 'scifi-prey', sub_universe: 'Predator Universe', title: 'Prey', year: 2022, chrono_order: 4, release_order: 4, phase: 'Comanche Nation 1719 Origin', poster_url: 'https://image.tmdb.org/t/p/w500/ujr5pztcVOLEoSYWXY8JjZCEv.jpg', runtime: '99 min', desc: 'Naru, a skilled warrior of the Comanche Nation, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.' },
      { id: 'scifi-matrix1', sub_universe: 'The Matrix', title: 'The Matrix', year: 1999, chrono_order: 5, release_order: 5, phase: 'Wachowski Cyberpunk Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', runtime: '136 min', desc: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is an elaborate deception.' },
      { id: 'scifi-gz1', sub_universe: 'MonsterVerse', title: 'Godzilla', year: 2014, chrono_order: 6, release_order: 6, phase: 'MonsterVerse • Titans Awaken', poster_url: 'https://image.tmdb.org/t/p/w500/il7V2bY6P0w5Z7kX7eY6eZ8B9.jpg', runtime: '123 min', desc: 'The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.' },
      { id: 'scifi-gvk2', sub_universe: 'MonsterVerse', title: 'Godzilla x Kong: The New Empire', year: 2024, chrono_order: 7, release_order: 7, phase: 'MonsterVerse • Hollow Earth Skar King War', poster_url: 'https://image.tmdb.org/t/p/w500/bQ7p8w5Z7kX7eY6eZ8B9C1A7x.jpg', runtime: '115 min', desc: 'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world.' },
      { id: 'scifi-dune1', sub_universe: 'Dune Universe', title: 'Dune: Part One', year: 2021, chrono_order: 8, release_order: 8, phase: 'Denis Villeneuve • Arrakis Genesis', poster_url: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', runtime: '155 min', desc: 'Paul Atreides arrives on Arrakis, the most dangerous and planet in the universe, to ensure the future of his family and his people.' },
      { id: 'scifi-dune2', sub_universe: 'Dune Universe', title: 'Dune: Part Two', year: 2024, chrono_order: 9, release_order: 9, phase: 'Denis Villeneuve • Holy War Climax', poster_url: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', runtime: '166 min', desc: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.' }
    ]
  },
  {
    id: 'anime-hub',
    hub: 'anime',
    name: 'Anime Master IP Universes',
    badge: 'DRAGON BALL, NARUTO, ONE PIECE, AOT, DEMON SLAYER & JJK',
    icon: '🇯🇵',
    theme_color: '#FF6F00',
    tagline: 'Legendary battle shonen, psychological thrillers, and multi-generational Japanese anime sagas.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg',
    why_watch: 'The most passionate, emotionally gripping, and visually inventive storytelling in modern entertainment.',
    sub_universes: ['All Anime', 'Dragon Ball', 'Naruto & Boruto', 'One Piece', 'Attack on Titan', 'Demon Slayer', 'Jujutsu Kaisen', 'Dark Fantasy Legends'],
    timeline: [
      { id: 'ani-dbz', sub_universe: 'Dragon Ball', title: 'Dragon Ball Z', year: 1989, chrono_order: 1, release_order: 1, phase: 'Akira Toriyama • Saiyan to Buu Sagas', poster_url: 'https://image.tmdb.org/t/p/w500/dJyGSmZfH6jOq8uL7v6a1m3Z5e.jpg', runtime: 'Anime Series', desc: 'With the help of the powerful Dragonballs, a team of fighters led by the saiyan Goku defend Earth against alien enemies.' },
      { id: 'ani-db-broly', sub_universe: 'Dragon Ball', title: 'Dragon Ball Super: Broly', year: 2018, chrono_order: 2, release_order: 2, phase: 'Toriyama Canon • Legendary Super Saiyan', poster_url: 'https://image.tmdb.org/t/p/w500/f03RzI64j3hg9p8w5Z7kX7eY6e.jpg', runtime: '100 min', desc: 'Goku and Vegeta encounter Broly, a Saiyan warrior unlike any fighter they\\'ve faced before.' },
      { id: 'ani-naruto', sub_universe: 'Naruto & Boruto', title: 'Naruto: Shippuden', year: 2007, chrono_order: 3, release_order: 3, phase: 'Pain Arc & Fourth Great Ninja War', poster_url: 'https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg', runtime: 'Anime Series', desc: 'Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage.' },
      { id: 'ani-op', sub_universe: 'One Piece', title: 'One Piece', year: 1999, chrono_order: 4, release_order: 4, phase: 'Eiichiro Oda • Grand Line Odyssey', poster_url: 'https://image.tmdb.org/t/p/w500/fcXdJlhTErAcJ07v6a1m3Z5e7x.jpg', runtime: 'Anime Series', desc: 'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.' },
      { id: 'ani-aot', sub_universe: 'Attack on Titan', title: 'Attack on Titan', year: 2013, chrono_order: 5, release_order: 5, phase: 'Hajime Isayama • The Rumbling Climax', poster_url: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg', runtime: 'Anime Series', desc: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans.' },
      { id: 'ani-ds-mugen', sub_universe: 'Demon Slayer', title: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train', year: 2020, chrono_order: 6, release_order: 6, phase: 'Ufotable • Flame Hashira Rengoku', poster_url: 'https://image.tmdb.org/t/p/w500/h8Rb99v9WNxAcJ07v6a1m3Z5e.jpg', runtime: '117 min', desc: 'After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado\\'s journey as a demon slayer began.' },
      { id: 'ani-jjk0', sub_universe: 'Jujutsu Kaisen', title: 'Jujutsu Kaisen 0', year: 2021, chrono_order: 7, release_order: 7, phase: 'MAPPA • Yuta Okkotsu Origin Prequel', poster_url: 'https://image.tmdb.org/t/p/w500/3pTwMUEavOB94aL7v6a1m3Z5e.jpg', runtime: '105 min', desc: 'Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School.' },
      { id: 'ani-deathnote', sub_universe: 'Dark Fantasy Legends', title: 'Death Note', year: 2006, chrono_order: 8, release_order: 8, phase: 'Light Yagami vs L Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/iigTJJskN0r12vL7v6a1m3Z5e.jpg', runtime: 'Anime Series', desc: 'An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.' }
    ]
  },
  {
    id: 'indian-universes',
    hub: 'indian',
    name: 'Indian Blockbuster Universes',
    badge: 'YRF SPY, LOKESH LCU, MADDOCK & PRASHANTH NEEL',
    icon: '🇮🇳',
    theme_color: '#FF9933',
    tagline: 'Tiger, Pathaan, Vikram, Leo, Stree, and Rocky Bhai: India\\'s biggest box-office phenomenon universes.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg',
    why_watch: 'Unprecedented mass hysteria, record-smashing action choreography, and exhilarating character crossovers across Hindi, Tamil, Telugu, and Kannada cinema.',
    sub_universes: ['All Indian Universes', 'YRF Spy Universe', 'Lokesh Cinematic Universe (LCU)', 'Maddock Supernatural', 'Prashanth Neel Universe', 'Kalki & Astraverse'],
    timeline: [
      // YRF Spy
      { id: 'yrf-1', sub_universe: 'YRF Spy Universe', title: 'Ek Tha Tiger', year: 2012, chrono_order: 1, release_order: 1, phase: 'Tiger & Zoya in Dublin', poster_url: 'https://image.tmdb.org/t/p/w500/jGTyeAH5KZuCX6Qat1VcTBXnqth.jpg', runtime: '132 min', desc: 'India\\'s top spy Tiger is sent to Dublin to observe an Indian scientist, where he falls in love with his caretaker Zoya.' },
      { id: 'yrf-pathaan', sub_universe: 'YRF Spy Universe', title: 'Pathaan', year: 2023, chrono_order: 2, release_order: 4, phase: 'Shah Rukh Khan Return & Tiger Cameo', poster_url: 'https://image.tmdb.org/t/p/w500/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg', runtime: '146 min', desc: 'An exiled RAW field operative Pathaan is assigned to take down Outfit X, a private terrorist organization.' },
      { id: 'yrf-tiger3', sub_universe: 'YRF Spy Universe', title: 'Tiger 3', year: 2023, chrono_order: 3, release_order: 5, phase: 'Treason Accusation & Pathaan Train Rescue', poster_url: 'https://image.tmdb.org/t/p/w500/7wgED7Yx9VLcNWSO91VgwicHmMD.jpg', runtime: '156 min', desc: 'Following the events of Tiger Zinda Hai and Pathaan, Tiger and Zoya are framed as traitors by an ex-ISI terrorist.' },

      // LCU
      { id: 'lcu-kaithi', sub_universe: 'Lokesh Cinematic Universe (LCU)', title: 'Kaithi', year: 2019, chrono_order: 4, release_order: 6, phase: 'The Biryani Night • Dilli\\'s Prison Transport', poster_url: 'https://image.tmdb.org/t/p/w500/hOF9CgPsy9aLr5GJEBESC8MEXFy.jpg', runtime: '145 min', desc: 'A recently released prisoner drives a truck full of poisoned cops to the hospital while evading criminals.' },
      { id: 'lcu-vikram', sub_universe: 'Lokesh Cinematic Universe (LCU)', title: 'Vikram', year: 2022, chrono_order: 5, release_order: 7, phase: 'The Ghost Arrives • Rolex Revelation', poster_url: 'https://image.tmdb.org/t/p/w500/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg', runtime: '174 min', desc: 'A special investigator is assigned a case of serial killings, only to uncover a much deeper war led by Vikram against Santhanam\\'s syndicate.' },
      { id: 'lcu-leo', sub_universe: 'Lokesh Cinematic Universe (LCU)', title: 'Leo', year: 2023, chrono_order: 6, release_order: 8, phase: 'Parthiban Identity • Bloody Sweet', poster_url: 'https://image.tmdb.org/t/p/w500/2XUHC4lp3tDsgfFLFygNZ2x2Um9.jpg', runtime: '164 min', desc: 'A gentle cafe owner in Himachal Pradesh becomes a local hero after thwarting an armed attack, attracting ruthless gangsters.' },

      // Maddock Supernatural
      { id: 'mad-stree1', sub_universe: 'Maddock Supernatural', title: 'Stree', year: 2018, chrono_order: 7, release_order: 9, phase: 'Chanderi Horror Comedy Genesis', poster_url: 'https://image.tmdb.org/t/p/w500/euhgW6hpDYw7nxFDjqHn0eKvQPX.jpg', runtime: '128 min', desc: 'In the small town of Chanderi, the menfolk live in fear of an evil spirit named Stree who abducts men in the night.' },
      { id: 'mad-stree2', sub_universe: 'Maddock Supernatural', title: 'Stree 2', year: 2024, chrono_order: 8, release_order: 10, phase: 'Sarkata Menace • All-Time Bollywood Blockbuster', poster_url: 'https://image.tmdb.org/t/p/w500/iwEJp4WBM8b3AjCeNcgvv86FEFr.jpg', runtime: '147 min', desc: 'After the events of Stree, the town of Chanderi is being haunted again. This time by a headless entity named Sarkata who abducts modern women.' },

      // Prashanth Neel
      { id: 'neel-kgf1', sub_universe: 'Prashanth Neel Universe', title: 'K.G.F: Chapter 1', year: 2018, chrono_order: 9, release_order: 11, phase: 'Rocky Bhai Rises in Kolar Gold Fields', poster_url: 'https://image.tmdb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg', runtime: '156 min', desc: 'In the 1970s, a fierce rebel rises against brutal oppression and becomes the symbol of hope to legion of downtrodden people.' },
      { id: 'neel-kgf2', sub_universe: 'Prashanth Neel Universe', title: 'K.G.F: Chapter 2', year: 2022, chrono_order: 10, release_order: 12, phase: 'Rocky Bhai vs Adheera & Indian Government', poster_url: 'https://image.tmdb.org/t/p/w500/khNVygolU0TxLIDWff5tQlAhZ23.jpg', runtime: '168 min', desc: 'The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear into his foes.' },

      // Kalki 2898 AD
      { id: 'kalki-1', sub_universe: 'Kalki & Astraverse', title: 'Kalki 2898 AD', year: 2024, chrono_order: 11, release_order: 13, phase: 'Mahabharata 3102 BC to Dystopian 2898 AD Kasi', poster_url: 'https://image.tmdb.org/t/p/w500/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg', runtime: '181 min', desc: 'A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to the earth to protect the world from evil forces in a dystopian future.' }
    ]
  },
  {
    id: 'wizarding-world',
    hub: 'wizarding-world',
    name: 'The Wizarding World of Harry Potter',
    badge: 'HOGWARTS & THE DARK LORD',
    icon: '🧙',
    theme_color: '#740001',
    tagline: 'The timeless coming-of-age journey of the Boy Who Lived against Lord Voldemort.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
    why_watch: 'Immersive world-building, beloved characters, and a seamless evolution from childhood wonder into dark magical war.',
    sub_universes: ['All Wizarding World', 'Harry Potter Saga', 'Fantastic Beasts Prequels'],
    timeline: [
      { id: 'fb-1', sub_universe: 'Fantastic Beasts Prequels', title: 'Fantastic Beasts and Where to Find Them', year: 2016, chrono_order: 1, release_order: 9, phase: 'Prequel • 1926 New York City', poster_url: 'https://image.tmdb.org/t/p/w500/h6NYAqtlrUvKQC7e1X0B9C1A7x.jpg', runtime: '132 min', desc: 'The adventures of writer Newt Scamander in New York\\'s secret community of witches and wizards seventy years before Harry reads his book.' },
      { id: 'fb-2', sub_universe: 'Fantastic Beasts Prequels', title: 'Fantastic Beasts: The Crimes of Grindelwald', year: 2018, chrono_order: 2, release_order: 10, phase: 'Prequel • Paris & Young Dumbledore', poster_url: 'https://image.tmdb.org/t/p/w500/uy0B9C1A7x0BqD9L343p5M9eZ8.jpg', runtime: '134 min', desc: 'In an effort to thwart Grindelwald\\'s plans of raising pure-blood wizards, Albus Dumbledore enlists his former student Newt Scamander.' },
      { id: 'hp-1', sub_universe: 'Harry Potter Saga', title: 'Harry Potter and the Sorcerer\\'s Stone', year: 2001, chrono_order: 3, release_order: 1, phase: 'Year 1 • The Discovery & Hogwarts Express', poster_url: 'https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg', runtime: '152 min', desc: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself and his family.' },
      { id: 'hp-3', sub_universe: 'Harry Potter Saga', title: 'Harry Potter and the Prisoner of Azkaban', year: 2004, chrono_order: 4, release_order: 3, phase: 'Year 3 • Alfonso Cuarón Noir & Sirius Black', poster_url: 'https://image.tmdb.org/t/p/w500/aWxHgvNq25yYpM7w14Xh7a92u0B.jpg', runtime: '142 min', desc: 'Harry Potter, Ron and Hermione return to Hogwarts for their third year, where they delve into the mystery of Sirius Black.' },
      { id: 'hp-4', sub_universe: 'Harry Potter Saga', title: 'Harry Potter and the Goblet of Fire', year: 2005, chrono_order: 5, release_order: 4, phase: 'Year 4 • Triwizard Tournament & Dark Lord Returns', poster_url: 'https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBX899c0g.jpg', runtime: '157 min', desc: 'Harry finds himself mysteriously selected to compete in the dangerous Triwizard Tournament between rival magic schools.' },
      { id: 'hp-6', sub_universe: 'Harry Potter Saga', title: 'Harry Potter and the Half-Blood Prince', year: 2009, chrono_order: 6, release_order: 6, phase: 'Year 6 • Horcruxes & The Memory Vial', poster_url: 'https://image.tmdb.org/t/p/w500/z7uo9zmQdQwlkemZ06rfphM7N98.jpg', runtime: '153 min', desc: 'As Harry begins his sixth year at Hogwarts, he discovers an old book marked mysteriously as "property of the Half-Blood Prince".' },
      { id: 'hp-8', sub_universe: 'Harry Potter Saga', title: 'Harry Potter and the Deathly Hallows: Part 2', year: 2011, chrono_order: 7, release_order: 8, phase: 'The Battle of Hogwarts Grand Finale', poster_url: 'https://image.tmdb.org/t/p/w500/da22ZBmrZE0HQLE9Riz5AAvhA70.jpg', runtime: '130 min', desc: 'Harry, Ron, and Hermione search for Voldemort\\'s remaining Horcruxes in their final stand against the Dark Lord at Hogwarts.' }
    ]
  },
  {
    id: 'middle-earth',
    hub: 'middle-earth',
    name: 'Middle-Earth: The Lord of the Rings',
    badge: 'PETER JACKSON TRILOGY & THE HOBBIT',
    icon: '🧝',
    theme_color: '#D4AF37',
    tagline: 'One Ring to rule them all: J.R.R. Tolkien\\'s immortal mythological masterpiece.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cDK6.jpg',
    why_watch: 'The crowning achievement of fantasy cinema, winning 17 Academy Awards and defining high-fantasy cinematic worldbuilding.',
    sub_universes: ['All Middle-Earth', 'The Lord of the Rings', 'The Hobbit', 'Rings of Power & Rohirrim'],
    timeline: [
      { id: 'lotr-rop', sub_universe: 'Rings of Power & Rohirrim', title: 'The Lord of the Rings: The Rings of Power', year: 2022, chrono_order: 1, release_order: 7, phase: 'Second Age • Forging of the Rings', poster_url: 'https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg', runtime: 'TV Series', desc: 'Epic drama set thousands of years before the events of J.R.R. Tolkien\\'s The Hobbit and The Lord of the Rings.' },
      { id: 'lotr-h1', sub_universe: 'The Hobbit', title: 'The Hobbit: An Unexpected Journey', year: 2012, chrono_order: 2, release_order: 4, phase: 'Bilbo Baggins & Erebor Quest', poster_url: 'https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5MegiugHIRdy44.jpg', runtime: '169 min', desc: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home from Smaug.' },
      { id: 'lotr-1', sub_universe: 'The Lord of the Rings', title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, chrono_order: 3, release_order: 1, phase: 'The Fellowship Assembles', poster_url: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cDK6.jpg', runtime: '178 min', desc: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from Sauron.' },
      { id: 'lotr-2', sub_universe: 'The Lord of the Rings', title: 'The Lord of the Rings: The Two Towers', year: 2002, chrono_order: 4, release_order: 2, phase: 'Battle of Helm\\'s Deep', poster_url: 'https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg', runtime: '179 min', desc: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand at Helm\\'s Deep.' },
      { id: 'lotr-3', sub_universe: 'The Lord of the Rings', title: 'The Lord of the Rings: The Return of the King', year: 2003, chrono_order: 5, release_order: 3, phase: '11 Oscar Winner • Battle of Pelennor Fields Climax', poster_url: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg', runtime: '201 min', desc: 'Gandalf and Aragorn lead the World of Men against Sauron\\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom.' }
    ]
  },
  {
    id: 'horror-hub',
    hub: 'horror',
    name: 'Horror Multiverse Hub',
    badge: 'CONJURING, SCREAM, SAW & WALKING DEAD',
    icon: '👻',
    theme_color: '#8B0000',
    tagline: 'Paranormal case files, slasher whodunits, elaborate psychological traps, and zombie survival.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg',
    why_watch: 'The most visceral adrenaline-inducing horror franchises with deep shared lore and terrifying practical effects.',
    sub_universes: ['All Horror', 'The Conjuring Universe', 'Scream', 'Saw', 'The Walking Dead'],
    timeline: [
      { id: 'hor-nun1', sub_universe: 'The Conjuring Universe', title: 'The Nun', year: 2018, chrono_order: 1, release_order: 5, phase: '1952 Romania Monastery Origin', poster_url: 'https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3x099N14.jpg', runtime: '96 min', desc: 'A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania.' },
      { id: 'hor-conj1', sub_universe: 'The Conjuring Universe', title: 'The Conjuring', year: 2013, chrono_order: 2, release_order: 1, phase: 'James Wan • Ed & Lorraine Warren Case File', poster_url: 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg', runtime: '112 min', desc: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.' },
      { id: 'hor-scream1', sub_universe: 'Scream', title: 'Scream', year: 1996, chrono_order: 3, release_order: 2, phase: 'Wes Craven • Ghostface Woodsboro Meta Slasher', poster_url: 'https://image.tmdb.org/t/p/w500/rZshio1A1ePmsX6LSmHjG39mJ.jpg', runtime: '111 min', desc: 'A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends using scary movies as a game.' },
      { id: 'hor-scream6', sub_universe: 'Scream', title: 'Scream VI', year: 2023, chrono_order: 4, release_order: 4, phase: 'Ghostface in New York City Subway', poster_url: 'https://image.tmdb.org/t/p/w500/wDWwt8QCGulTCnfioQu8Sl4bYio.jpg', runtime: '122 min', desc: 'In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.' },
      { id: 'hor-saw1', sub_universe: 'Saw', title: 'Saw', year: 2004, chrono_order: 5, release_order: 3, phase: 'James Wan • The Jigsaw Bathroom Trap', poster_url: 'https://image.tmdb.org/t/p/w500/dPtL7v6a1m3Z5e7x0BqD9L343p.jpg', runtime: '103 min', desc: 'Two strangers awaken in a room with no recollection of how they got there, and soon discover they are pawns in a deadly game perpetrated by a notorious serial killer.' },
      { id: 'hor-twd', sub_universe: 'The Walking Dead', title: 'The Walking Dead', year: 2010, chrono_order: 6, release_order: 6, phase: 'Rick Grimes Atlanta Hospital Awakening', poster_url: 'https://image.tmdb.org/t/p/w500/w21LGK21v3LL3tFhP19aL7x0B.jpg', runtime: 'TV Series', desc: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.' }
    ]
  },
  {
    id: 'gaming-hub',
    hub: 'gaming',
    name: 'Video Game Cinematic Universes',
    badge: 'THE LAST OF US, FALLOUT, MARIO, SONIC & RESIDENT EVIL',
    icon: '🎮',
    theme_color: '#00E676',
    tagline: 'Award-winning interactive video game masterpieces adapted into prestige cinema and TV.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    why_watch: 'The golden age of gaming adaptations: critically acclaimed HBO drama, blockbuster animation, and loyal lore.',
    sub_universes: ['All Video Games', 'The Last of Us & Fallout', 'Sonic & Mario', 'Resident Evil & Uncharted'],
    timeline: [
      { id: 'game-tlou', sub_universe: 'The Last of Us & Fallout', title: 'The Last of Us', year: 2023, chrono_order: 1, release_order: 1, phase: 'HBO Masterpiece • Joel & Ellie Cordyceps Odyssey', poster_url: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', runtime: 'TV Series', desc: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\\'s last hope.' },
      { id: 'game-fallout', sub_universe: 'The Last of Us & Fallout', title: 'Fallout', year: 2024, chrono_order: 2, release_order: 2, phase: 'Vault 33 & Wasteland Ghoul Odyssey', poster_url: 'https://image.tmdb.org/t/p/w500/AnsZuL7v6a1m3Z5e7x0BqD9L34.jpg', runtime: 'TV Series', desc: 'In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground subterranean hazards.' },
      { id: 'game-mario', sub_universe: 'Sonic & Mario', title: 'The Super Mario Bros. Movie', year: 2023, chrono_order: 3, release_order: 3, phase: 'Nintendo & Illumination • Mushroom Kingdom Heist', poster_url: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg', runtime: '92 min', desc: 'A Brooklyn plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.' },
      { id: 'game-sonic1', sub_universe: 'Sonic & Mario', title: 'Sonic the Hedgehog', year: 2020, chrono_order: 4, release_order: 4, phase: 'SEGA • Blue Blur vs Dr. Robotnik', poster_url: 'https://image.tmdb.org/t/p/w500/aQvJ5GzGLAtviw7uoxk15JLPm7.jpg', runtime: '99 min', desc: 'After settling in Green Hills, Sonic is ready for more freedom, and Tom and Maddie agree to leave him home while they go on vacation.' },
      { id: 'game-re1', sub_universe: 'Resident Evil & Uncharted', title: 'Resident Evil', year: 2002, chrono_order: 5, release_order: 5, phase: 'Capcom • The Hive & T-Virus Outbreak', poster_url: 'https://image.tmdb.org/t/p/w500/pT0L7v6a1m3Z5e7x0BqD9L343p.jpg', runtime: '100 min', desc: 'A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures.' }
    ]
  },
  {
    id: 'animation-studios',
    hub: 'animation',
    name: 'Animation Studios Master Hall of Fame',
    badge: 'PIXAR, DREAMWORKS, STUDIO GHIBLI & ILLUMINATION',
    icon: '🎨',
    theme_color: '#FF4081',
    tagline: 'Timeless storytelling, emotional tears, and boundary-pushing artistic animation.',
    banner_poster: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    why_watch: 'Universal stories that resonate equally with children and adults, from Pixar emotional genius to Hayao Miyazaki\\'s hand-drawn magic.',
    sub_universes: ['All Animation', 'Pixar Studios', 'DreamWorks Animation', 'Studio Ghibli', 'Illumination'],
    timeline: [
      { id: 'anim-ghibli-spirited', sub_universe: 'Studio Ghibli', title: 'Spirited Away', year: 2001, chrono_order: 1, release_order: 1, phase: 'Hayao Miyazaki • Oscar Winning Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sMyRUHLkWBcuVCM.jpg', runtime: '125 min', desc: 'During her family\\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits.' },
      { id: 'anim-pixar-toy', sub_universe: 'Pixar Studios', title: 'Toy Story', year: 1995, chrono_order: 2, release_order: 2, phase: 'The First Feature CGI Film in History', poster_url: 'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrFu1buCqc.jpg', runtime: '81 min', desc: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\\'s room.' },
      { id: 'anim-pixar-io2', sub_universe: 'Pixar Studios', title: 'Inside Out 2', year: 2024, chrono_order: 3, release_order: 3, phase: 'Anxiety Arrives • Highest-Grossing Animated Film of All Time', poster_url: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg', runtime: '96 min', desc: 'Joy, Sadness, Anger, Fear and Disgust have been running a successful operation. However, when Anxiety, Envy, Ennui and Embarrassment show up, things get chaotic.' },
      { id: 'anim-dream-shrek', sub_universe: 'DreamWorks Animation', title: 'Shrek', year: 2001, chrono_order: 4, release_order: 4, phase: 'Satirical Fairy Tale • First Best Animated Feature Oscar', poster_url: 'https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqW2QitE.jpg', runtime: '90 min', desc: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a spirited princess for the lord.' },
      { id: 'anim-dream-puss', sub_universe: 'DreamWorks Animation', title: 'Puss in Boots: The Last Wish', year: 2022, chrono_order: 5, release_order: 5, phase: 'The Wolf / Death • Stylistic 2.5D Masterpiece', poster_url: 'https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVgvicvEKhZ6YsP.jpg', runtime: '102 min', desc: 'When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he sets out on an epic journey.' },
      { id: 'anim-illum-dm4', sub_universe: 'Illumination', title: 'Despicable Me 4', year: 2024, chrono_order: 6, release_order: 6, phase: 'Gru Jr. & Mega Minions', poster_url: 'https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0IOH.jpg', runtime: '94 min', desc: 'Gru and Lucy and their girls welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad.' }
    ]
  }
];
`;

fs.writeFileSync(path.join(__dirname, '../data/franchises.js'), masterCode, 'utf8');
console.log('Successfully written master franchises code!');
