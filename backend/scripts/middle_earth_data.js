// Definitive Middle-Earth Data Catalog for cine2watch
// All 6 Sub-Universes, Canonical Timelines, and Watch Orders

export const MIDDLE_EARTH_SUB_UNIVERSES = [
  "All Middle-Earth",
  "01. The Lord of the Rings",
  "02. The Hobbit",
  "03. The Rings of Power",
  "04. The War of the Rohirrim",
  "05. Middle-Earth Animation",
  "06. Middle-Earth Specials / Documentaries"
];

export const MIDDLE_EARTH_TIMELINE = [
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
];
