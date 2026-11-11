import redis
import json
import time

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

# CACHE ASIDE : ARTIST

def get_artist(artist_id):
    cache_key = f"artist:{artist_id}"
    cached = r.get(cache_key)

    if cached:
        print("CACHE HIT")
        return json.loads(cached)

    print("CACHE MISS → DB")
    artist = {
        "id": artist_id,
        "name": "The Weeknd",
        "country": "CA",
        "genre": "Pop"
    }

    # TTL 60 secondes
    r.setex(cache_key, 60, json.dumps(artist))
    return artist


# TOP TRACKS (ZSET)

def increment_track(track_id):
    r.zincrby("top_tracks", 1, track_id)
    print(f"Track {track_id} incremented")


# TESTS


if __name__ == "__main__":
    print("Redis Cache Test")

    # Cache test
    get_artist("a1")
    time.sleep(1)
    get_artist("a1")

    # Top tracks
    increment_track("track_1")
    increment_track("track_1")
    increment_track("track_2")

    print("End Cache Test")
