import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const TAXONOMY = {
  'Marvel (MCU, X-Men, Sony, Defenders)': [
    // MCU
    'Iron Man', 'The Incredible Hulk', 'Iron Man 2', 'Thor', 'Captain America: The First Avenger', 'The Avengers',
    'Iron Man 3', 'Thor: The Dark World', 'Captain America: The Winter Soldier', 'Guardians of the Galaxy',
    'Avengers: Age of Ultron', 'Ant-Man', 'Captain America: Civil War', 'Doctor Strange', 'Guardians of the Galaxy Vol. 2',
    'Spider-Man: Homecoming', 'Thor: Ragnarok', 'Black Panther', 'Avengers: Infinity War', 'Ant-Man and the Wasp',
    'Captain Marvel', 'Avengers: Endgame', 'Spider-Man: Far From Home', 'Black Widow', 'Shang-Chi and the Legend of the Ten Rings',
    'Eternals', 'Spider-Man: No Way Home', 'Doctor Strange in the Multiverse of Madness', 'Thor: Love and Thunder',
    'Black Panther: Wakanda Forever', 'Ant-Man and the Wasp: Quantumania', 'Guardians of the Galaxy Vol. 3', 'The Marvels',
    'Deadpool & Wolverine', 'Captain America: Brave New World', 'Thunderbolts*', 'The Fantastic Four: First Steps', 'Avengers: Doomsday',
    // X-Men
    'X-Men', 'X2', 'X-Men: The Last Stand', 'X-Men Origins: Wolverine', 'X-Men: First Class', 'The Wolverine',
    'X-Men: Days of Future Past', 'Deadpool', 'X-Men: Apocalypse', 'Logan', 'Deadpool 2', 'Dark Phoenix', 'The New Mutants',
    // Spider-Man Live Action & Sony
    'Spider-Man', 'Spider-Man 2', 'Spider-Man 3', 'The Amazing Spider-Man', 'The Amazing Spider-Man 2',
    'Venom', 'Venom: Let There Be Carnage', 'Morbius', 'Madame Web', 'Venom: The Last Dance', 'Kraven the Hunter',
    // Spider-Verse
    'Spider-Man: Into the Spider-Verse', 'Spider-Man: Across the Spider-Verse',
    // Blade & Ghost Rider
    'Blade', 'Blade II', 'Blade: Trinity', 'Ghost Rider', 'Ghost Rider: Spirit of Vengeance',
    // Marvel TV / Defenders
    'Daredevil', 'Jessica Jones', 'Luke Cage', 'Iron Fist', 'The Defenders', 'The Punisher'
  ],
  'DC (DCU, DCEU, Batman, Joker, Animated, TV)': [
    // Nolan Batman
    'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises',
    // DCEU
    'Man of Steel', 'Batman v Superman: Dawn of Justice', 'Suicide Squad', 'Wonder Woman', 'Zack Snyder\'s Justice League',
    'Aquaman', 'Shazam!', 'Birds of Prey', 'Wonder Woman 1984', 'The Suicide Squad', 'Black Adam', 'Shazam! Fury of the Gods',
    'The Flash', 'Blue Beetle', 'Aquaman and the Lost Kingdom',
    // Elseworlds
    'Joker', 'The Batman', 'Joker: Folie à Deux', 'The Penguin',
    // Classics
    'Batman', 'Batman Returns', 'Batman Forever', 'Batman & Robin', 'Superman', 'Superman Returns',
    // Animated & TV
    'Justice League: The Flashpoint Paradox', 'Justice League: War', 'Justice League Dark', 'Justice League Dark: Apokolips War',
    'Batman: The Long Halloween', 'Arrow', 'The Flash', 'Supergirl'
  ],
  'Star Wars Galactic Canon': [
    'Star Wars: Episode IV - A New Hope', 'Star Wars: Episode V - The Empire Strikes Back', 'Star Wars: Episode VI - Return of the Jedi',
    'Star Wars: Episode I - The Phantom Menace', 'Star Wars: Episode II - Attack of the Clones', 'Star Wars: Episode III - Revenge of the Sith',
    'Star Wars: Episode VII - The Force Awakens', 'Star Wars: Episode VIII - The Last Jedi', 'Star Wars: Episode IX - The Rise of Skywalker',
    'Rogue One: A Star Wars Story', 'Solo: A Star Wars Story',
    'The Mandalorian', 'The Book of Boba Fett', 'Andor', 'Obi-Wan Kenobi', 'Ahsoka', 'The Acolyte', 'Star Wars: The Clone Wars', 'Star Wars Rebels'
  ],
  'Wizarding World (Harry Potter & Fantastic Beasts)': [
    'Harry Potter and the Sorcerer\'s Stone', 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire', 'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Half-Blood Prince',
    'Harry Potter and the Deathly Hallows: Part 1', 'Harry Potter and the Deathly Hallows: Part 2',
    'Fantastic Beasts and Where to Find Them', 'Fantastic Beasts: The Crimes of Grindelwald', 'Fantastic Beasts: The Secrets of Dumbledore'
  ],
  'Middle-Earth (Lord of the Rings & Hobbit)': [
    'The Lord of the Rings: The Fellowship of the Ring', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King',
    'The Hobbit: An Unexpected Journey', 'The Hobbit: The Desolation of Smaug', 'The Hobbit: The Battle of the Five Armies',
    'The Lord of the Rings: The Rings of Power', 'The Lord of the Rings: The War of the Rohirrim'
  ],
  'Jurassic Park & Jurassic World': [
    'Jurassic Park', 'The Lost World: Jurassic Park', 'Jurassic Park III',
    'Jurassic World', 'Jurassic World: Fallen Kingdom', 'Jurassic World Dominion',
    'Jurassic World: Camp Cretaceous'
  ],
  'Transformers Saga': [
    'Transformers', 'Transformers: Revenge of the Fallen', 'Transformers: Dark of the Moon', 'Transformers: Age of Extinction', 'Transformers: The Last Knight',
    'Bumblebee', 'Transformers: Rise of the Beasts', 'Transformers One', 'The Transformers: The Movie'
  ],
  'Fast & Furious Saga': [
    'The Fast and the Furious', '2 Fast 2 Furious', 'The Fast and the Furious: Tokyo Drift', 'Fast & Furious',
    'Fast Five', 'Fast & Furious 6', 'Furious 7', 'The Fate of the Furious', 'Fast & Furious Presents: Hobbs & Shaw',
    'F9: The Fast Saga', 'Fast X'
  ],
  'James Bond / 007': [
    'Dr. No', 'Goldfinger', 'The Spy Who Loved Me', 'GoldenEye', 'Tomorrow Never Dies',
    'Casino Royale', 'Quantum of Solace', 'Skyfall', 'Spectre', 'No Time to Die'
  ],
  'Mission: Impossible': [
    'Mission: Impossible', 'Mission: Impossible II', 'Mission: Impossible III', 'Mission: Impossible - Ghost Protocol',
    'Mission: Impossible - Rogue Nation', 'Mission: Impossible - Fallout', 'Mission: Impossible - Dead Reckoning Part One'
  ],
  'John Wick Universe': [
    'John Wick', 'John Wick: Chapter 2', 'John Wick: Chapter 3 - Parabellum', 'John Wick: Chapter 4', 'The Continental'
  ],
  'Sci-Fi Hub (Alien, Predator, Matrix, Terminator, Avatar, Planet of the Apes, MonsterVerse, Dune)': [
    // Alien & Predator
    'Alien', 'Aliens', 'Alien 3', 'Alien Resurrection', 'Prometheus', 'Alien: Covenant', 'Alien: Romulus',
    'Predator', 'Predator 2', 'Predators', 'The Predator', 'Prey', 'Alien vs. Predator',
    // Terminator & Matrix
    'The Terminator', 'Terminator 2: Judgment Day', 'Terminator 3: Rise of the Machines', 'Terminator Salvation', 'Terminator Genisys', 'Terminator: Dark Fate',
    'The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions', 'The Animatrix', 'The Matrix Resurrections',
    // Avatar & Apes & MonsterVerse & Dune
    'Avatar', 'Avatar: The Way of Water',
    'Rise of the Planet of the Apes', 'Dawn of the Planet of the Apes', 'War for the Planet of the Apes', 'Kingdom of the Planet of the Apes',
    'Godzilla', 'Kong: Skull Island', 'Godzilla: King of the Monsters', 'Godzilla vs. Kong', 'Godzilla x Kong: The New Empire', 'Monarch: Legacy of Monsters',
    'Dune', 'Dune: Part Two', 'Dune: Prophecy'
  ],
  'Fantasy Hub (Game of Thrones, Witcher, Narnia, Percy Jackson)': [
    'Game of Thrones', 'House of the Dragon', 'The Witcher', 'The Witcher: Nightmare of the Wolf', 'The Witcher: Blood Origin',
    'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', 'The Chronicles of Narnia: Prince Caspian', 'The Chronicles of Narnia: The Voyage of the Dawn Treader',
    'Percy Jackson & the Olympians: The Lightning Thief', 'Percy Jackson: Sea of Monsters', 'Percy Jackson and the Olympians'
  ],
  'Horror Hub (Conjuring, Scream, Saw, Halloween, Evil Dead, Walking Dead)': [
    'The Conjuring', 'The Conjuring 2', 'The Conjuring: The Devil Made Me Do It', 'Annabelle', 'Annabelle: Creation', 'Annabelle Comes Home', 'The Nun', 'The Nun II',
    'Scream', 'Scream 2', 'Scream 3', 'Scream 4', 'Scream VI',
    'Saw', 'Saw II', 'Saw III', 'Jigsaw', 'Spiral', 'Saw X',
    'Halloween', 'Halloween Kills', 'Halloween Ends',
    'The Evil Dead', 'Evil Dead II', 'Army of Darkness', 'Evil Dead Rise',
    'The Walking Dead', 'Fear the Walking Dead', 'The Walking Dead: Dead City', 'The Walking Dead: Daryl Dixon', 'The Walking Dead: The Ones Who Live',
    'Child\'s Play', 'Chucky', 'Final Destination', 'Final Destination 2', 'Final Destination 3', 'Final Destination 5'
  ],
  'Video Game Adaptations': [
    'Resident Evil', 'Sonic the Hedgehog', 'Sonic the Hedgehog 2', 'Sonic the Hedgehog 3', 'Detective Pikachu',
    'The Super Mario Bros. Movie', 'Five Nights at Freddy\'s', 'Uncharted', 'Mortal Kombat', 'The Last of Us', 'Fallout',
    'Tomb Raider', 'Lara Croft: Tomb Raider', 'Silent Hill', 'Warcraft', 'Assassin\'s Creed', 'Prince of Persia: The Sands of Time'
  ],
  'Animation Studios (Pixar, DreamWorks, Illumination, Ghibli)': [
    'Toy Story', 'Toy Story 2', 'Toy Story 3', 'Toy Story 4', 'The Incredibles', 'Incredibles 2', 'Monsters, Inc.', 'Finding Nemo', 'Finding Dory', 'Inside Out', 'Inside Out 2', 'Coco', 'WALL-E', 'Up',
    'Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Kung Fu Panda', 'Kung Fu Panda 2', 'Kung Fu Panda 3', 'Kung Fu Panda 4', 'How to Train Your Dragon', 'How to Train Your Dragon 2', 'How to Train Your Dragon: The Hidden World', 'Puss in Boots', 'Puss in Boots: The Last Wish',
    'Despicable Me', 'Despicable Me 2', 'Despicable Me 3', 'Despicable Me 4', 'Minions', 'Minions: The Rise of Gru', 'Sing', 'Sing 2',
    'Spirited Away', 'Princess Mononoke', 'Howl\'s Moving Castle', 'My Neighbor Totoro', 'The Boy and the Heron'
  ],
  'Anime IP Hubs': [
    'Dragon Ball', 'Dragon Ball Z', 'Dragon Ball GT', 'Dragon Ball Super', 'Dragon Ball Daima', 'Dragon Ball Super: Broly', 'Dragon Ball Super: Super Hero',
    'Naruto', 'Naruto: Shippuden', 'Boruto: Naruto Next Generations',
    'One Piece', 'One Piece Film: Red',
    'Attack on Titan', 'Demon Slayer: Kimetsu no Yaiba', 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train',
    'Jujutsu Kaisen', 'Jujutsu Kaisen 0', 'Bleach', 'Bleach: Thousand-Year Blood War',
    'Death Note', 'Fullmetal Alchemist: Brotherhood', 'Hunter x Hunter', 'Chainsaw Man', 'Solo Leveling', 'Frieren: Beyond Journey\'s End', 'Vinland Saga', 'Neon Genesis Evangelion', 'Spy x Family'
  ],
  'Indian Cinema Universes (YRF Spy, LCU, Maddock, Neel, Kalki)': [
    'Ek Tha Tiger', 'Tiger Zinda Hai', 'War', 'Pathaan', 'Tiger 3',
    'Kaithi', 'Vikram', 'Leo',
    'Stree', 'Bhediya', 'Munjya', 'Stree 2',
    'K.G.F: Chapter 1', 'K.G.F: Chapter 2', 'Salaar: Part 1 - Ceasefire',
    'Baahubali: The Beginning', 'Baahubali 2: The Conclusion',
    'Brahmastra Part One: Shiva', 'Kalki 2898 AD', 'RRR', 'Kantara'
  ]
};

async function audit() {
  const report = {};
  let totalTitles = 0;
  let totalFound = 0;
  let totalMissing = 0;

  for (const [hub, titles] of Object.entries(TAXONOMY)) {
    report[hub] = { found: [], missing: [] };
    for (const title of titles) {
      totalTitles++;
      const searchKey = title.split(':')[0].replace(/\(.*?\)/g, '').trim();

      const { data, error } = await supabase
        .from('movies')
        .select('id, title, year, poster_path, rating, votes, media_type')
        .ilike('title', '%' + searchKey + '%')
        .order('votes', { ascending: false })
        .limit(3);

      let bestMatch = null;
      if (data && data.length > 0) {
        bestMatch = data.find(d => d.votes > 100);
      }

      if (bestMatch) {
        report[hub].found.push({
          requested: title,
          matchedTitle: bestMatch.title,
          year: bestMatch.year,
          votes: bestMatch.votes,
          rating: bestMatch.rating,
          hasPoster: !!bestMatch.poster_path,
          id: bestMatch.id
        });
        totalFound++;
      } else {
        report[hub].missing.push(title);
        totalMissing++;
      }
    }
  }

  fs.writeFileSync('franchise_audit_results.json', JSON.stringify({
    totalTitles,
    totalFound,
    totalMissing,
    matchRate: Math.round((totalFound / totalTitles) * 100) + '%',
    report
  }, null, 2));

  console.log('AUDIT COMPLETED:');
  console.log(`Total: ${totalTitles} | Found: ${totalFound} (${Math.round((totalFound / totalTitles) * 100)}%) | Missing: ${totalMissing}`);
}

audit().catch(console.error);
