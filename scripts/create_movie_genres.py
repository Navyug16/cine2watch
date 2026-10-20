import os
import sqlite3
import time

DB_PATH = r"E:\LDRP\movie-decision-tool\movies_master.db"

def main():
    print("=== STEP 1: Creating movie_genres Table ===")
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("PRAGMA synchronous = OFF;")
    cursor.execute("PRAGMA journal_mode = MEMORY;")

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS movie_genres (
        movie_id TEXT NOT NULL,
        genre TEXT NOT NULL,
        PRIMARY KEY (movie_id, genre)
    );
    """)
    conn.commit()

    print("=== STEP 2: Extracting & Unnesting Genres ===")
    start_extract = time.time()
    cursor.execute("SELECT id, genres FROM movies WHERE genres IS NOT NULL AND genres != ''")
    rows = cursor.fetchall()

    genre_pairs = []
    for movie_id, genres_str in rows:
        genres = [g.strip() for g in genres_str.split(',') if g.strip()]
        for genre in genres:
            genre_pairs.append((movie_id, genre))

    extract_time = time.time() - start_extract
    print(f"Extracted {len(genre_pairs):,} (movie_id, genre) pairs from {len(rows):,} movies in {extract_time:.2f}s.")

    print("=== STEP 3: Bulk Inserting into movie_genres ===")
    start_insert = time.time()
    cursor.execute("BEGIN TRANSACTION;")
    cursor.executemany("INSERT OR IGNORE INTO movie_genres (movie_id, genre) VALUES (?, ?);", genre_pairs)
    conn.commit()
    insert_time = time.time() - start_insert
    print(f"Inserted {len(genre_pairs):,} pairs in {insert_time:.2f}s.")

    print("=== STEP 4: Creating Compound Index idx_genres_genre_movie ===")
    start_idx = time.time()
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_genres_genre_movie ON movie_genres(genre, movie_id);")
    conn.commit()
    idx_time = time.time() - start_idx
    print(f"Created index in {idx_time:.2f}s.")

    print("=== STEP 5: Resetting Pragmas (WAL + NORMAL) ===")
    cursor.execute("PRAGMA journal_mode = WAL;")
    cursor.execute("PRAGMA synchronous = NORMAL;")
    conn.commit()

    print("\n=== STEP 6: BENCHMARK VERIFICATION ===")

    legacy_sql = """
    SELECT id, title, year, rating, poster_path
    FROM movies
    WHERE media_type = 'movie'
      AND year BETWEEN 2010 AND 2020
      AND votes >= 50
      AND genres LIKE '%Action%'
      AND genres LIKE '%Sci-Fi%'
      AND genres LIKE '%Thriller%'
    ORDER BY rating DESC, votes DESC
    LIMIT 15;
    """

    t0 = time.time()
    cursor.execute(legacy_sql)
    legacy_results = cursor.fetchall()
    t_legacy_ms = (time.time() - t0) * 1000

    junction_sql = """
    SELECT m.id, m.title, m.year, m.rating, m.poster_path
    FROM movies m
    JOIN movie_genres g ON m.id = g.movie_id
    WHERE m.media_type = 'movie'
      AND m.year BETWEEN 2010 AND 2020
      AND m.votes >= 50
      AND g.genre IN ('Action', 'Sci-Fi', 'Thriller')
    GROUP BY m.id
    HAVING COUNT(DISTINCT g.genre) = 3
    ORDER BY m.rating DESC, m.votes DESC
    LIMIT 15;
    """

    t1 = time.time()
    cursor.execute(junction_sql)
    junction_results = cursor.fetchall()
    t_junction_ms = (time.time() - t1) * 1000

    print(f"Legacy Query (LIKE) Time: {t_legacy_ms:.2f} ms")
    print(f"Junction Query (INDEXED) Time: {t_junction_ms:.2f} ms")
    speedup = (t_legacy_ms / t_junction_ms) if t_junction_ms > 0 else 0
    print(f"Speedup Factor: {speedup:.1f}x FASTER!")

    print("\nTop 3 Sample Results from Junction Query:")
    for r in junction_results[:3]:
        print(f" - {r[1]} ({r[2]}) | Rating: {r[3]} | ID: {r[0]} | Poster: {r[4]}")

    conn.close()

if __name__ == "__main__":
    main()
