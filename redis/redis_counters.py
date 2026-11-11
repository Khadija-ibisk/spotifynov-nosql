import redis

# Connexion Redis  Docker side
r = redis.Redis(host="localhost", port=6379, decode_responses=True)


# 1. UTILISATEURS ACTIFS


def user_connected(user_id):
    r.incr("active_users")
    print(f"User {user_id} connected")

def user_disconnected(user_id):
    r.decr("active_users")
    print(f"User {user_id} disconnected")


# 2. STATS PAR TRACK (TTL)


def track_play(track_id):
    """
    Compteur journalier avec expiration (24h)
    """
    key = f"plays:{track_id}"
    r.incr(key)
    r.expire(key, 86400)
    print(f"Track {track_id} played (daily counter updated)")


# 3. TOP TRACKS (ZSET)


def update_top_tracks(track_id):
    """
    Classement temps réel des titres les plus écoutés
    """
    r.zincrby("top_tracks", 1, track_id)
    print(f"Top tracks updated for {track_id}")


# 4. FILE D'ÉVÉNEMENTS


def push_event(event):
    r.lpush("events_queue", event)
    print(f"Event pushed: {event}")


# 5. TESTS


if __name__ == "__main__":
    print(" Redis Counters Test ")

    # utilisateurs
    user_connected("user1")
    user_connected("user2")

    # écoutes
    update_top_tracks("track_1")
    update_top_tracks("track_1")
    update_top_tracks("track_1")

    update_top_tracks("track_2")
    update_top_tracks("track_2")

    update_top_tracks("track_3")

    # stats journalières
    track_play("track_1")
    track_play("track_2")

    # événements
    push_event("user1 listened track_1")
    push_event("user2 listened track_2")

    print(" End Test ")
