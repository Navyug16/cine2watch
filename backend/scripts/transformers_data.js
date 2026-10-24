// Definitive Transformers Data Catalog for cine2watch
// All 5 Sub-Universes, Canonical Timelines, and Watch Orders

export const TRANSFORMERS_SUB_UNIVERSES = [
  "All Transformers",
  "01. Transformers Live-Action",
  "02. Michael Bay Transformers",
  "03. Bumblebee & Reboot Continuity",
  "04. Transformers Animated",
  "05. The Original Transformers"
];

export const TRANSFORMERS_TIMELINE = [
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
];
