import fs from 'fs';
import path from 'path';

const nolanFranchise = {
  id: "christopher-nolan",
  name: "Christopher Nolan Collection",
  badge: "12 MASTERPIECES • MIND-BENDING CINEMA & ACADEMY AWARD TRIUMPHS",
  icon: "⏳",
  theme_color: "#D4AF37",
  tagline: "The auteur cinema of Christopher Nolan: practical effects, non-linear timelines, soundscapes, and cinematic grandeur.",
  banner_poster: "https://image.tmdb.org/t/p/w1280/rAiYTnrZYRomVmC7KyKOXAqR7Qn.jpg",
  why_watch: "From indie neo-noir to gargantuan IMAX blockbusters, Christopher Nolan has reshaped modern blockbuster cinema through intellectual storytelling and unprecedented practical spectacle.",
  sub_universes: [
    "All Masterpieces",
    "01. The Dark Knight Trilogy",
    "02. Mind-Bending Sci-Fi",
    "03. Historical Epics & Noir"
  ],
  watch_modes: [
    {
      id: "chrono",
      label: "⏳ Theatrical Release Timeline",
      desc: "Experience Christopher Nolan's evolutionary cinematic journey from Following (1998) to Oppenheimer (2023)"
    },
    {
      id: "release",
      label: "⭐ Highest IMDb Rating",
      desc: "Ranked by critical acclaim (The Dark Knight, Inception, Interstellar, The Prestige, Memento)"
    }
  ],
  timeline: [
    {
      id: "nolan-1998",
      title: "Following",
      year: 1998,
      media_type: "movie",
      chrono_order: 1,
      release_order: 12,
      phase: "London Neo-Noir • Debut Feature",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/3bX6VVSMf0dvzk5pMT4ALG5A92d.jpg",
      runtime: "70 min",
      desc: "A young writer who follows strangers for material meets a thief who takes him under his wing.",
      sub_universe: "03. Historical Epics & Noir",
      sub_universes: ["All Masterpieces", "03. Historical Epics & Noir"]
    },
    {
      id: "nolan-2000",
      title: "Memento",
      year: 2000,
      media_type: "movie",
      chrono_order: 2,
      release_order: 5,
      phase: "Reverse-Chronology Mystery",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/nzlv62aC0octS5AklAiWpXLX9Z0.jpg",
      runtime: "113 min",
      desc: "A man with short-term memory loss attempts to track down his wife's murderer using Polaroid photos and tattoos.",
      sub_universe: "03. Historical Epics & Noir",
      sub_universes: ["All Masterpieces", "03. Historical Epics & Noir"]
    },
    {
      id: "nolan-2002",
      title: "Insomnia",
      year: 2002,
      media_type: "movie",
      chrono_order: 3,
      release_order: 11,
      phase: "Midnight Sun Psychological Thriller",
      is_essential: false,
      poster_url: "https://image.tmdb.org/t/p/w500/riVXh3EimGO0y5dgQxEWPRy5Itg.jpg",
      runtime: "118 min",
      desc: "Two Los Angeles homicide detectives are dispatched to a northern town where the sun doesn't set to investigate the methodical murder of a local teen.",
      sub_universe: "03. Historical Epics & Noir",
      sub_universes: ["All Masterpieces", "03. Historical Epics & Noir"]
    },
    {
      id: "nolan-2005",
      title: "Batman Begins",
      year: 2005,
      media_type: "movie",
      chrono_order: 4,
      release_order: 7,
      phase: "The Dark Knight Trilogy • Part 1",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/sPX89Td70IDDjVr85jdSBb4rWGr.jpg",
      runtime: "140 min",
      desc: "After witnessing his parents' death, Bruce Wayne travels the world to seek the means to fight injustice and turn fear against those who prey on the fearful.",
      sub_universe: "01. The Dark Knight Trilogy",
      sub_universes: ["All Masterpieces", "01. The Dark Knight Trilogy"]
    },
    {
      id: "nolan-2006",
      title: "The Prestige",
      year: 2006,
      media_type: "movie",
      chrono_order: 5,
      release_order: 4,
      phase: "Victorian Illusionist Rivalry",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
      runtime: "130 min",
      desc: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      sub_universe: "03. Historical Epics & Noir",
      sub_universes: ["All Masterpieces", "03. Historical Epics & Noir"]
    },
    {
      id: "nolan-2008",
      title: "The Dark Knight",
      year: 2008,
      media_type: "movie",
      chrono_order: 6,
      release_order: 1,
      phase: "The Dark Knight Trilogy • Part 2",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      runtime: "152 min",
      desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      sub_universe: "01. The Dark Knight Trilogy",
      sub_universes: ["All Masterpieces", "01. The Dark Knight Trilogy"]
    },
    {
      id: "nolan-2010",
      title: "Inception",
      year: 2010,
      media_type: "movie",
      chrono_order: 7,
      release_order: 2,
      phase: "Dream Architecture & Subconscious Heist",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
      runtime: "148 min",
      desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      sub_universe: "02. Mind-Bending Sci-Fi",
      sub_universes: ["All Masterpieces", "02. Mind-Bending Sci-Fi"]
    },
    {
      id: "nolan-2012",
      title: "The Dark Knight Rises",
      year: 2012,
      media_type: "movie",
      chrono_order: 8,
      release_order: 6,
      phase: "The Dark Knight Trilogy • Part 3",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
      runtime: "164 min",
      desc: "Eight years after the Joker's reign of anarchy, Batman is forced from his exile with the help of the mysterious Selina Kyle in order to save Gotham City from the brutal guerrilla terrorist Bane.",
      sub_universe: "01. The Dark Knight Trilogy",
      sub_universes: ["All Masterpieces", "01. The Dark Knight Trilogy"]
    },
    {
      id: "nolan-2014",
      title: "Interstellar",
      year: 2014,
      media_type: "movie",
      chrono_order: 9,
      release_order: 3,
      phase: "Relativistic Space-Time Odyssey",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
      runtime: "169 min",
      desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
      sub_universe: "02. Mind-Bending Sci-Fi",
      sub_universes: ["All Masterpieces", "02. Mind-Bending Sci-Fi"]
    },
    {
      id: "nolan-2017",
      title: "Dunkirk",
      year: 2017,
      media_type: "movie",
      chrono_order: 10,
      release_order: 9,
      phase: "Triptych WWII Survival (Land, Sea, Air)",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/b4Oe15CGLL61Ped0RAS9JpqdmCt.jpg",
      runtime: "106 min",
      desc: "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
      sub_universe: "03. Historical Epics & Noir",
      sub_universes: ["All Masterpieces", "03. Historical Epics & Noir"]
    },
    {
      id: "nolan-2020",
      title: "Tenet",
      year: 2020,
      media_type: "movie",
      chrono_order: 11,
      release_order: 10,
      phase: "Entropy Inversion & Temporal Warfare",
      is_essential: false,
      poster_url: "https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
      runtime: "150 min",
      desc: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      sub_universe: "02. Mind-Bending Sci-Fi",
      sub_universes: ["All Masterpieces", "02. Mind-Bending Sci-Fi"]
    },
    {
      id: "nolan-2023",
      title: "Oppenheimer",
      year: 2023,
      media_type: "movie",
      chrono_order: 12,
      release_order: 8,
      phase: "7 Academy Awards • Manhattan Project Biopic",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      runtime: "180 min",
      desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
      sub_universe: "03. Historical Epics & Noir",
      sub_universes: ["All Masterpieces", "03. Historical Epics & Noir"]
    }
  ]
};

const potcFranchise = {
  id: "pirates-of-the-caribbean",
  name: "Pirates of the Caribbean Saga",
  badge: "5 VOYAGES • CAPTAIN JACK SPARROW & THE CURSED SPANISH MAIN",
  icon: "🏴‍☠️",
  theme_color: "#C5A059",
  tagline: "The legendary swashbuckling saga of Captain Jack Sparrow, the Black Pearl, and mythical oceanic curses.",
  banner_poster: "https://image.tmdb.org/t/p/w1280/8tH9B62i1xN30uM8gK1c4G6q8YV.jpg",
  why_watch: "Gore Verbinski and Johnny Depp created one of modern cinema's most entertaining and visually ambitious adventure franchises, featuring Hans Zimmer's iconic symphonies.",
  sub_universes: [
    "All Voyages",
    "01. The Original Gore Verbinski Trilogy",
    "02. Standalone Quests & Expanding Lore"
  ],
  watch_modes: [
    {
      id: "chrono",
      label: "⏳ High-Seas Chronological Voyage",
      desc: "The Curse of the Black Pearl (2003) → Dead Men Tell No Tales (2017)"
    },
    {
      id: "release",
      label: "⭐ Highest IMDb Rating",
      desc: "Ranked by critical acclaim (Curse of the Black Pearl, Dead Man's Chest, At World's End)"
    }
  ],
  timeline: [
    {
      id: "potc-2003",
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      year: 2003,
      media_type: "movie",
      chrono_order: 1,
      release_order: 1,
      phase: "The Aztec Gold Curse & The Black Pearl",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
      runtime: "143 min",
      desc: "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
      sub_universe: "01. The Original Gore Verbinski Trilogy",
      sub_universes: ["All Voyages", "01. The Original Gore Verbinski Trilogy"]
    },
    {
      id: "potc-2006",
      title: "Pirates of the Caribbean: Dead Man's Chest",
      year: 2006,
      media_type: "movie",
      chrono_order: 2,
      release_order: 2,
      phase: "Davy Jones' Locker & The Flying Dutchman",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
      runtime: "151 min",
      desc: "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda.",
      sub_universe: "01. The Original Gore Verbinski Trilogy",
      sub_universes: ["All Voyages", "01. The Original Gore Verbinski Trilogy"]
    },
    {
      id: "potc-2007",
      title: "Pirates of the Caribbean: At World's End",
      year: 2007,
      media_type: "movie",
      chrono_order: 3,
      release_order: 3,
      phase: "The Brethren Court & The Maerlstrom War",
      is_essential: true,
      poster_url: "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
      runtime: "169 min",
      desc: "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
      sub_universe: "01. The Original Gore Verbinski Trilogy",
      sub_universes: ["All Voyages", "01. The Original Gore Verbinski Trilogy"]
    },
    {
      id: "potc-2011",
      title: "Pirates of the Caribbean: On Stranger Tides",
      year: 2011,
      media_type: "movie",
      chrono_order: 4,
      release_order: 4,
      phase: "The Fountain of Youth & Blackbeard's Queen Anne's Revenge",
      is_essential: false,
      poster_url: "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
      runtime: "136 min",
      desc: "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
      sub_universe: "02. Standalone Quests & Expanding Lore",
      sub_universes: ["All Voyages", "02. Standalone Quests & Expanding Lore"]
    },
    {
      id: "potc-2017",
      title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      year: 2017,
      media_type: "movie",
      chrono_order: 5,
      release_order: 5,
      phase: "Capitan Salazar & The Trident of Poseidon",
      is_essential: false,
      poster_url: "https://image.tmdb.org/t/p/w500/6lAPOAFYFWIO3SQRemEY2wInQMC.jpg",
      runtime: "129 min",
      desc: "Captain Jack Sparrow is pursued by old rival Armando Salazar, who escaped the Devil's Triangle determined to kill every pirate at sea.",
      sub_universe: "02. Standalone Quests & Expanding Lore",
      sub_universes: ["All Voyages", "02. Standalone Quests & Expanding Lore"]
    }
  ]
};

async function main() {
  const filePath = path.resolve('backend/data/franchises.js');
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already added
  if (content.includes('christopher-nolan')) {
    console.log('Already includes christopher-nolan');
    return;
  }

  // Remove trailing ];
  const lastBracketIndex = content.lastIndexOf('];');
  if (lastBracketIndex === -1) {
    console.error('Could not find closing bracket in franchises.js');
    return;
  }

  const before = content.slice(0, lastBracketIndex).trimEnd();
  const appendString = `,\n  ${JSON.stringify(nolanFranchise, null, 2)},\n  ${JSON.stringify(potcFranchise, null, 2)}\n];\n`;

  const updated = before + appendString;
  fs.writeFileSync(filePath, updated, 'utf-8');
  console.log('Successfully appended Christopher Nolan and Pirates of the Caribbean to backend/data/franchises.js!');
}

main().catch(console.error);
