from redis_cache import get_artist, increment_track
from redis_sessions import create_session, get_session
from redis_counters import user_connected, track_play

get_artist("a1")
get_artist("a1")

create_session("user1")
print(get_session("user1"))

user_connected()
track_play("track1")
