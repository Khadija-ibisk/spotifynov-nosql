import redis
import json
import time

r = redis.Redis(host="localhost", port=6379, decode_responses=True)


# SESSIONS


def create_session(user_id):
    session_key = f"session:{user_id}"
    session = {
        "user_id": user_id,
        "premium": True,
        "current_track": "Blinding Lights",
        "last_activity": time.time()
    }
    r.setex(session_key, 120, json.dumps(session))
    print(f"Session créée pour {user_id}")

def get_session(user_id):
    session_key = f"session:{user_id}"
    data = r.get(session_key)

    if data:
        r.expire(session_key, 120)  # prolongation TTL
        print(f"Session active pour {user_id}")
        return json.loads(data)

    print(f"Session expirée pour {user_id}")
    return None

def logout(user_id):
    r.delete(f"session:{user_id}")
    print(f"Session supprimée pour {user_id}")



# TESTS


if __name__ == "__main__":
    print(" Redis Sessions Test ")

    create_session("user1")
    get_session("user1")
    time.sleep(2)
    get_session("user1")
    logout("user1")
    get_session("user1")

    print(" End Sessions Test ")
