import os
import sys
import json
import csv
import io
import re
import sqlite3
import urllib.request
import urllib.parse
import time

if sys.stdout and hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if sys.stderr and hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(PROJECT_DIR, "data")
BACKEND_DATA_DIR = os.path.join(PROJECT_DIR, "backend", "data")
DB_PATH = os.path.join(PROJECT_DIR, "movies_master.db")

PRIMARY_CSV_URL = "https://raw.githubusercontent.com/fakhruddin2012/Oscar-Award-Analysis/main/the_oscar_award.csv"
FALLBACK_CSV_URL = "https://raw.githubusercontent.com/antrikshmisri/academy-awards-dataset/master/the_oscar_award.csv"
EXTENDED_CSV_URL = "https://raw.githubusercontent.com/DLu/oscar_data/main/oscars.csv"

LOCAL_OSCAR_CSV = os.path.join(DATA_DIR, "the_oscar_award.csv")
LOCAL_EXTENDED_CSV = os.path.join(DATA_DIR, "oscars_extended.csv")
OUTPUT_JSON_PATH = os.path.join(DATA_DIR, "oscar_winners.json")
BACKEND_OUTPUT_JSON_PATH = os.path.join(BACKEND_DATA_DIR, "oscar_winners.json")

SUPABASE_REST_URL = "https://enqufpimptgjsbztkcns.supabase.co/rest/v1/movies"
SUPABASE_ANON_KEY = "sb_publishable_lPmZk0qPiGmIzgUqVWpliw_t4uAInF7"

def format_category_name(cat_str):
    if not cat_str:
        return ""
    cat = cat_str.strip()
    upper = cat.upper()
    if "BEST PICTURE" in upper or "OUTSTANDING PRODUCTION" in upper or "BEST MOTION PICTURE" in upper or upper == "BEST PICTURE":
        return "Best Picture"
    if "DIRECTING" in upper or "DIRECTOR" in upper:
        return "Directing"
    if "ACTOR IN A LEADING ROLE" in upper or upper == "ACTOR":
        return "Actor in a Leading Role"
    if "ACTRESS IN A LEADING ROLE" in upper or upper == "ACTRESS":
        return "Actress in a Leading Role"
    if "ACTOR IN A SUPPORTING ROLE" in upper:
        return "Actor in a Supporting Role"
    if "ACTRESS IN A SUPPORTING ROLE" in upper:
        return "Actress in a Supporting Role"
    if "ANIMATED FEATURE" in upper:
        return "Animated Feature Film"
    if "CINEMATOGRAPHY" in upper:
        return "Cinematography"
    if "COSTUME DESIGN" in upper:
        return "Costume Design"
    if "FILM EDITING" in upper:
        return "Film Editing"
    if "INTERNATIONAL FEATURE" in upper or "FOREIGN LANGUAGE" in upper:
        return "International Feature Film"
    if "MAKEUP" in upper:
        return "Makeup and Hairstyling"
    if "MUSIC (ORIGINAL SCORE)" in upper or "ORIGINAL SCORE" in upper:
        return "Music (Original Score)"
    if "MUSIC (ORIGINAL SONG)" in upper or "ORIGINAL SONG" in upper:
        return "Music (Original Song)"
    if "PRODUCTION DESIGN" in upper or "ART DIRECTION" in upper:
        return "Production Design"
    if "SOUND EDITING" in upper or "SOUND EFFECTS" in upper:
        return "Sound Editing"
    if "SOUND MIXING" in upper or upper == "SOUND":
        return "Sound"
    if "VISUAL EFFECTS" in upper or "SPECIAL EFFECTS" in upper:
        return "Visual Effects"
    if "WRITING (ADAPTED SCREENPLAY)" in upper or "SCREENPLAY - BASED ON" in upper:
        return "Writing (Adapted Screenplay)"
    if "WRITING (ORIGINAL SCREENPLAY)" in upper or "ORIGINAL SCREENPLAY" in upper:
        return "Writing (Original Screenplay)"
    
    cleaned = re.sub(r'\s+', ' ', cat).strip()
    words = cleaned.split(' ')
    formatted_words = []
    for w in words:
        if w.startswith('(') and w.endswith(')'):
            formatted_words.append('(' + w[1:-1].capitalize() + ')')
        elif w.upper() in ['IN', 'A', 'AN', 'THE', 'OF', 'FOR', 'AND']:
            formatted_words.append(w.lower())
        else:
            formatted_words.append(w.capitalize())
    res = ' '.join(formatted_words)
    return res[0].upper() + res[1:] if res else cat

def download_file(url, target_path):
    print(f"Downloading dataset from: {url}")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    with urllib.request.urlopen(req) as resp, open(target_path, "wb") as f:
        f.write(resp.read())
    print(f"Saved to: {target_path} ({os.path.getsize(target_path):,} bytes)")

def load_oscar_dataset():
    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(BACKEND_DATA_DIR, exist_ok=True)
    
    if not os.path.exists(LOCAL_OSCAR_CSV) or os.path.getsize(LOCAL_OSCAR_CSV) == 0:
        try:
            download_file(PRIMARY_CSV_URL, LOCAL_OSCAR_CSV)
        except Exception as e:
            print(f"Primary URL failed ({e}), attempting fallback...")
            download_file(FALLBACK_CSV_URL, LOCAL_OSCAR_CSV)
    else:
        print(f"Using local primary dataset: {LOCAL_OSCAR_CSV}")

    if not os.path.exists(LOCAL_EXTENDED_CSV) or os.path.getsize(LOCAL_EXTENDED_CSV) == 0:
        try:
            download_file(EXTENDED_CSV_URL, LOCAL_EXTENDED_CSV)
        except Exception as e:
            print(f"Extended dataset download failed: {e}")
    else:
        print(f"Using local extended dataset: {LOCAL_EXTENDED_CSV}")

    movies_dict = {}

    def add_winner(raw_title, year_val, cat_str, imdb_id=None):
        if not raw_title or not raw_title.strip():
            return
        
        title = raw_title.strip().rstrip(';')
        if not title:
            return
            
        try:
            if '/' in str(year_val):
                year = int(str(year_val).split('/')[0])
            else:
                year = int(re.sub(r'\D', '', str(year_val)[:4]))
        except Exception:
            return

        cat_formatted = format_category_name(cat_str)
        if not cat_formatted:
            return

        norm_title = title.lower()
        key = (norm_title, year)

        if key not in movies_dict:
            movies_dict[key] = {
                "title": title,
                "year": year,
                "categories_won": [],
                "imdb_id": imdb_id or None
            }
        
        if imdb_id and not movies_dict[key]["imdb_id"]:
            movies_dict[key]["imdb_id"] = imdb_id

        if cat_formatted not in movies_dict[key]["categories_won"]:
            movies_dict[key]["categories_won"].append(cat_formatted)

    # 1. Parse primary the_oscar_award.csv
    print(f"Parsing primary dataset: {LOCAL_OSCAR_CSV} ...")
    with open(LOCAL_OSCAR_CSV, "r", encoding="utf-8", errors="ignore") as f:
        reader = csv.DictReader(f)
        for row in reader:
            winner_val = str(row.get("winner", "")).strip().lower()
            if winner_val in ["true", "1"]:
                film = row.get("film", "")
                year_film = row.get("year_film", "") or row.get("year_ceremony", "")
                category = row.get("category", "")
                add_winner(film, year_film, category)

    # 2. Parse extended dataset (DLu oscars.csv)
    if os.path.exists(LOCAL_EXTENDED_CSV):
        print(f"Parsing extended dataset: {LOCAL_EXTENDED_CSV} ...")
        with open(LOCAL_EXTENDED_CSV, "r", encoding="utf-8", errors="ignore") as f:
            reader = csv.DictReader(f, delimiter="\t")
            for row in reader:
                winner_val = str(row.get("Winner", "")).strip().lower()
                if winner_val in ["true", "1"]:
                    film = row.get("Film", "")
                    year = row.get("Year", "")
                    cat = row.get("CanonicalCategory", "") or row.get("Category", "")
                    film_id = row.get("FilmId", "")
                    add_winner(film, year, cat, imdb_id=film_id)

    winners_list = []
    for key, data in movies_dict.items():
        data["total_wins"] = len(data["categories_won"])
        data["won_best_picture"] = any("Best Picture" in c for c in data["categories_won"])
        winners_list.append(data)

    print(f"Total unique Oscar-winning films compiled: {len(winners_list):,}")
    return winners_list

def enrich_from_supabase(winners_list):
    """Batch fetch official TMDB posters and metadata from Supabase for all Oscar winners."""
    print("Fetching verified TMDB posters and metadata from Supabase...")
    
    # Collect titles needing enrichment
    titles_to_fetch = set()
    for w in winners_list:
        titles_to_fetch.add(w["title"])

    title_list = list(titles_to_fetch)
    chunk_size = 50
    supabase_data = {}

    for i in range(0, len(title_list), chunk_size):
        chunk = title_list[i:i + chunk_size]
        # Clean titles for REST in.(...) query: remove quotes or special symbols
        clean_chunk = [re.sub(r'["\',()]', '', t).strip() for t in chunk if len(t.strip()) > 1]
        if not clean_chunk:
            continue

        in_filter = f"in.({','.join(clean_chunk)})"
        params = urllib.parse.urlencode({
            "title": in_filter,
            "select": "id,imdb_id,title,year,poster_path,rating,votes,overview,genres,director"
        })

        req = urllib.request.Request(
            f"{SUPABASE_REST_URL}?{params}",
            headers={
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": f"Bearer {SUPABASE_ANON_KEY}"
            }
        )
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                rows = json.loads(resp.read().decode("utf-8"))
                for r in rows:
                    t_lower = r.get("title", "").lower()
                    y = r.get("year")
                    k = (t_lower, y)
                    if k not in supabase_data or (r.get("votes") or 0) > (supabase_data[k].get("votes") or 0):
                        supabase_data[k] = r
                    # Also keep generic by title with highest votes
                    if t_lower not in supabase_data or (r.get("votes") or 0) > (supabase_data[t_lower].get("votes") or 0):
                        supabase_data[t_lower] = r
        except Exception as e:
            # Continue on any individual batch failure
            pass

    print(f"Supabase returned records for {len(supabase_data):,} titles.")

    # Apply to winners
    enriched_count = 0
    for w in winners_list:
        t_lower = w["title"].lower()
        y = w["year"]

        match = supabase_data.get((t_lower, y))
        if not match:
            # Check ±1 year
            match = supabase_data.get((t_lower, y - 1)) or supabase_data.get((t_lower, y + 1))
        if not match:
            match = supabase_data.get(t_lower)

        if match:
            if match.get("poster_path"):
                w["poster_path"] = match["poster_path"]
            if match.get("rating"):
                w["rating"] = match["rating"]
            if match.get("votes"):
                w["votes"] = match["votes"]
            if match.get("overview") and not w.get("overview"):
                w["overview"] = match["overview"]
            if match.get("genres") and not w.get("genres"):
                w["genres"] = match["genres"]
            if match.get("director") and not w.get("director"):
                w["director"] = match["director"]
            if match.get("imdb_id") and not w.get("imdb_id"):
                w["imdb_id"] = match["imdb_id"]
            if match.get("id"):
                w["supabase_id"] = match["id"]
            enriched_count += 1

    print(f"Enriched {enriched_count:,} Oscar winners with Supabase data.")
    return winners_list

def match_with_sqlite_and_tag(winners_list):
    if not os.path.exists(DB_PATH):
        print(f"SQLite database not found at {DB_PATH}, skipping SQLite tagging.")
        return winners_list

    print(f"Matching & updating SQLite database: {DB_PATH} ...")
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1. Add columns to movies table if needed
    cursor.execute("PRAGMA table_info(movies);")
    cols = [row[1] for row in cursor.fetchall()]
    if "oscar_wins" not in cols:
        cursor.execute("ALTER TABLE movies ADD COLUMN oscar_wins INTEGER DEFAULT 0;")
    if "oscar_categories" not in cols:
        cursor.execute("ALTER TABLE movies ADD COLUMN oscar_categories TEXT;")
    conn.commit()

    # 2. Create oscar_winners table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS oscar_winners (
            id TEXT,
            imdb_id TEXT,
            title TEXT NOT NULL,
            year INTEGER NOT NULL,
            total_wins INTEGER NOT NULL,
            won_best_picture INTEGER DEFAULT 0,
            categories_won TEXT NOT NULL,
            poster_path TEXT,
            rating REAL,
            votes INTEGER,
            overview TEXT,
            genres TEXT,
            director TEXT,
            PRIMARY KEY (title, year)
        );
    """)
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_oscar_wins_count ON oscar_winners(total_wins DESC);")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_oscar_best_pic ON oscar_winners(won_best_picture);")
    conn.commit()

    # Match each winner using indexed queries
    matched_count = 0
    updated_movies_count = 0

    for w in winners_list:
        title = w["title"]
        year = w["year"]
        imdb_id = w.get("imdb_id")
        categories_json = json.dumps(w["categories_won"])
        total_wins = w["total_wins"]
        won_bp = 1 if w["won_best_picture"] else 0

        matched_row = None
        # 1. Try exact indexed imdb_id match
        if imdb_id:
            cursor.execute("""
                SELECT id, imdb_id, title, year, poster_path, rating, votes, overview, genres, director
                FROM movies
                WHERE imdb_id = ?
                LIMIT 1
            """, (imdb_id,))
            matched_row = cursor.fetchone()

        # 2. Try exact indexed title match
        if not matched_row:
            cursor.execute("""
                SELECT id, imdb_id, title, year, poster_path, rating, votes, overview, genres, director
                FROM movies
                WHERE title = ?
                ORDER BY votes DESC LIMIT 1
            """, (title,))
            row = cursor.fetchone()
            if row and abs(row[3] - year) <= 2:
                matched_row = row

        if matched_row:
            matched_count += 1
            w["id"] = matched_row[0]
            if not w.get("imdb_id"):
                w["imdb_id"] = matched_row[1]
            if not w.get("poster_path"):
                w["poster_path"] = matched_row[4]
            if not w.get("rating"):
                w["rating"] = matched_row[5]
            if not w.get("votes"):
                w["votes"] = matched_row[6]
            if not w.get("overview"):
                w["overview"] = matched_row[7]
            if not w.get("genres"):
                w["genres"] = matched_row[8]
            if not w.get("director"):
                w["director"] = matched_row[9]

            # Update existing row in movies table
            cursor.execute("""
                UPDATE movies
                SET oscar_wins = ?, oscar_categories = ?
                WHERE id = ?
            """, (total_wins, categories_json, matched_row[0]))
            updated_movies_count += 1
        else:
            w["id"] = imdb_id or f"oscar_{abs(hash(title + str(year)))}"
            
            # If movie was not in movies table (e.g. pre-1975 classics like Casablanca, Ben-Hur, etc.),
            # insert into movies table as well!
            cursor.execute("""
                INSERT OR IGNORE INTO movies
                (id, imdb_id, title, original_title, media_type, year, runtime_minutes, genres, rating, votes, poster_path, overview, director, oscar_wins, oscar_categories)
                VALUES (?, ?, ?, ?, 'movie', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                w["id"],
                w.get("imdb_id"),
                title,
                title,
                year,
                120,
                w.get("genres") or "Drama",
                w.get("rating") or 8.0,
                w.get("votes") or 50000,
                w.get("poster_path") or "",
                w.get("overview") or "",
                w.get("director") or "",
                total_wins,
                categories_json
            ))

        # Insert or update in oscar_winners table
        cursor.execute("""
            INSERT OR REPLACE INTO oscar_winners 
            (id, imdb_id, title, year, total_wins, won_best_picture, categories_won, poster_path, rating, votes, overview, genres, director)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            w["id"],
            w.get("imdb_id"),
            title,
            year,
            total_wins,
            won_bp,
            categories_json,
            w.get("poster_path"),
            w.get("rating"),
            w.get("votes"),
            w.get("overview"),
            w.get("genres"),
            w.get("director")
        ))

    conn.commit()
    conn.close()
    print(f"SQLite Update Complete:")
    print(f"- Total Oscar Winners: {len(winners_list):,}")
    print(f"- Matched/Updated in `movies` table: {matched_count:,}")
    print(f"- Stored in `oscar_winners` table: {len(winners_list):,}")
    return winners_list

def main():
    start_time = time.time()
    print("=== Step 1: Loading & Compiling Academy Awards Dataset ===")
    winners = load_oscar_dataset()

    print("\n=== Step 2: Enriching with Official TMDB Posters from Supabase ===")
    winners = enrich_from_supabase(winners)

    print("\n=== Step 3: Tagging SQLite Database ===")
    winners = match_with_sqlite_and_tag(winners)

    # Sort winners: total_wins DESC, then year DESC
    winners.sort(key=lambda x: (x["total_wins"], x["year"]), reverse=True)

    # Save to data/oscar_winners.json & backend/data/oscar_winners.json
    print(f"\n=== Step 4: Exporting Clean Datasets ===")
    print(f"Saving to {OUTPUT_JSON_PATH} ...")
    with open(OUTPUT_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(winners, f, indent=2, ensure_ascii=False)

    print(f"Saving to {BACKEND_OUTPUT_JSON_PATH} ...")
    with open(BACKEND_OUTPUT_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(winners, f, indent=2, ensure_ascii=False)

    print("\n🏆 Top 15 All-Time Oscar Winners:")
    for idx, w in enumerate(winners[:15], 1):
        bp_tag = " 🌟[Best Picture]" if w["won_best_picture"] else ""
        print(f"{idx:2d}. {w['title']} ({w['year']}) — {w['total_wins']} Oscars{bp_tag} (Poster: {w.get('poster_path') or 'N/A'})")

    best_picture_count = sum(1 for w in winners if w["won_best_picture"])
    print(f"\nSummary:")
    print(f"- Total Oscar-winning films: {len(winners):,}")
    print(f"- Best Picture winners: {best_picture_count}")
    print(f"- Total execution time: {time.time() - start_time:.2f}s")
    print("Done!")

if __name__ == "__main__":
    main()
