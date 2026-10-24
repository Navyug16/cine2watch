// Definitive Wizarding World Data Catalog for cine2watch
// All 6 Sub-Universes, Canonical Timelines, and Watch Orders

export const WIZARDING_WORLD_SUB_UNIVERSES = [
  "All Wizarding World",
  "01. Harry Potter",
  "02. Fantastic Beasts",
  "03. Dumbledore & Grindelwald",
  "04. Hogwarts",
  "05. Voldemort",
  "06. Wizarding World Specials"
];

export const WIZARDING_WORLD_TIMELINE = [
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
];
