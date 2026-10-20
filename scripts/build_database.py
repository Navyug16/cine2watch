import os
import sys
import gzip
import csv
import sqlite3
import urllib.request
import time

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(PROJECT_DIR, "data")
DB_PATH = os.path.join(PROJECT_DIR, "movies_master.db")

BASICS_URL = "https://datasets.imdbws.com/title.basics.tsv.gz"
RATINGS_URL = "https://datasets.imdbws.com/title.ratings.tsv.gz"

BASICS_FILE = os.path.join(DATA_DIR, "title.basics.tsv.gz")
RATINGS_FILE = os.path.join(DATA_DIR, "title.ratings.tsv.gz")

def download_file(url, target_path):
    print(f"Downloading {url} -> {target_path} ...")
    start_time = time.time()
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    with urllib.request.urlopen(req) as response, open(target_path, "wb") as out_file:
        length = response.headers.get("Content-Length")
        total_bytes = int(length) if length else None
        downloaded = 0
        chunk_size = 1024 * 1024  # 1MB chunks
        
        while True:
            chunk = response.read(chunk_size)
            if not chunk:
                break
            out_file.write(chunk)
            downloaded += len(chunk)
            if total_bytes:
                percent = (downloaded / total_bytes) * 100
                print(f"\rProgress: {percent:.1f}% ({downloaded // (1024*1024)}MB / {total_bytes // (1024*1024)}MB)", end="", flush=True)
            else:
                print(f"\rDownloaded: {downloaded // (1024*1024)}MB", end="", flush=True)
    print(f"\nDownload completed in {time.time() - start_time:.2f} seconds.")

def load_ratings(ratings_gz_path):
    print("Loading ratings dataset into memory...")
    ratings_map = {}
    with gzip.open(ratings_gz_path, mode="rt", encoding="utf-8") as f:
        reader = csv.reader(f, delimiter="\t", quoting=csv.QUOTE_NONE)
        header = next(reader)  # tconst, averageRating, numVotes
        count = 0
        for row in reader:
            if len(row) >= 3:
                tconst, avg_rating, num_votes = row[0], row[1], row[2]
                try:
                    ratings_map[tconst] = (float(avg_rating), int(num_votes))
                    count += 1
                except ValueError:
                    continue
    print(f"Loaded ratings for {count:,} titles.")
    return ratings_map

def build_database():
    os.makedirs(DATA_DIR, exist_ok=True)
    
    # Step 1: Download raw datasets if missing
    if not os.path.exists(RATINGS_FILE) or os.path.getsize(RATINGS_FILE) == 0:
        download_file(RATINGS_URL, RATINGS_FILE)
    else:
        print(f"Found existing ratings file at {RATINGS_FILE}")

    if not os.path.exists(BASICS_FILE) or os.path.getsize(BASICS_FILE) == 0:
        download_file(BASICS_URL, BASICS_FILE)
    else:
        print(f"Found existing basics file at {BASICS_FILE}")

    # Step 2: Load ratings
    ratings_map = load_ratings(RATINGS_FILE)

    # Step 3: Parse basics & filter (1975 to today)
    print(f"Creating/resetting database at {DB_PATH} ...")
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE movies (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            original_title TEXT,
            year INTEGER NOT NULL,
            runtime_minutes INTEGER,
            genres TEXT,
            rating REAL,
            votes INTEGER
        )
    """)

    print("Processing basics dataset and inserting filtered movies (1975 to present)...")
    batch = []
    batch_size = 10000
    total_inserted = 0

    with gzip.open(BASICS_FILE, mode="rt", encoding="utf-8") as f:
        reader = csv.reader(f, delimiter="\t", quoting=csv.QUOTE_NONE)
        header = next(reader)
        # Expected header: tconst, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes, genres

        for row in reader:
            if len(row) < 9:
                continue
            tconst, title_type, primary_title, orig_title, is_adult, start_year, end_year, runtime, genres = row[:9]

            # Filter 1: Type must be movie or tvMovie
            if title_type not in ("movie", "tvMovie"):
                continue

            # Filter 2: Non-adult content only
            if is_adult != "0":
                continue

            # Filter 3: Release year >= 1975
            try:
                year = int(start_year)
                if year < 1975:
                    continue
            except ValueError:
                continue

            # Parse runtime
            try:
                runtime_mins = int(runtime)
            except ValueError:
                runtime_mins = None

            # Get rating data
            rating, votes = ratings_map.get(tconst, (None, 0))

            # Filter 4: Filter out obscure titles with fewer than 20 votes if rated
            if votes < 20 and rating is not None:
                continue

            clean_genres = genres if genres != r"\N" else None

            batch.append((
                tconst,
                primary_title,
                orig_title if orig_title != r"\N" else None,
                year,
                runtime_mins,
                clean_genres,
                rating,
                votes
            ))

            if len(batch) >= batch_size:
                cursor.executemany("""
                    INSERT INTO movies (id, title, original_title, year, runtime_minutes, genres, rating, votes)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """, batch)
                total_inserted += len(batch)
                batch.clear()
                print(f"\rProcessed and inserted {total_inserted:,} movies...", end="", flush=True)

        if batch:
            cursor.executemany("""
                INSERT INTO movies (id, title, original_title, year, runtime_minutes, genres, rating, votes)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """, batch)
            total_inserted += len(batch)
            batch.clear()

    print(f"\nTotal inserted: {total_inserted:,} movies.")

    print("Creating database indexes...")
    cursor.execute("CREATE INDEX idx_movies_year ON movies(year)")
    cursor.execute("CREATE INDEX idx_movies_rating ON movies(rating)")
    cursor.execute("CREATE INDEX idx_movies_votes ON movies(votes)")

    conn.commit()

    # Database summary
    cursor.execute("SELECT COUNT(*), MIN(year), MAX(year), AVG(rating) FROM movies")
    count, min_yr, max_yr, avg_rat = cursor.fetchone()
    print("\n--- DATABASE SUMMARY ---")
    print(f"Total Movies: {count:,}")
    print(f"Year Range: {min_yr} - {max_yr}")
    print(f"Average Rating: {avg_rat:.2f}" if avg_rat else "Average Rating: N/A")
    print(f"Database File: {DB_PATH} ({os.path.getsize(DB_PATH) / (1024*1024):.2f} MB)")

    conn.close()

if __name__ == "__main__":
    build_database()
