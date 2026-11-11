-- Cassandra schema executed in cqlsh


-- Keyspace creation (environment: local / exam)
CREATE KEYSPACE IF NOT EXISTS spotifynov_analytics
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};

USE spotifynov_analytics;


-- Listening analytics per user and per day

CREATE TABLE listening_by_user_day (
  user_id UUID,
  listen_date DATE,
  listen_time TIMESTAMP,
  track_id UUID,
  track_title TEXT,
  artist TEXT,
  duration_seconds INT,
  completion_percent INT,
  device TEXT,
  country TEXT,
  PRIMARY KEY ((user_id, listen_date), listen_time)
) WITH CLUSTERING ORDER BY (listen_time DESC);

-- Statistics per country and per day (counter table)

CREATE TABLE stats_by_country_day (
  country TEXT,
  listen_date DATE,
  total_listens COUNTER,
  PRIMARY KEY ((country), listen_date)
);

-- Daily top tracks (counter table)
-- Note: counter-only table (no non-counter columns)

CREATE TABLE top_tracks_by_day (
  listen_date DATE,
  track_id UUID,
  total_listens COUNTER,
  PRIMARY KEY (listen_date, track_id)
);
