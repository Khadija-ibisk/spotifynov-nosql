-- Data insertion executed manually in cqlsh


USE spotifynov_analytics;

-- Insert a listening event

INSERT INTO listening_by_user_day (
  user_id,
  listen_date,
  listen_time,
  track_id,
  track_title,
  artist,
  duration_seconds,
  completion_percent,
  device,
  country
) VALUES (
  11111111-1111-1111-1111-111111111111,
  '2026-01-20',
  toTimestamp(now()),
  22222222-2222-2222-2222-222222222222,
  'Blinding Lights',
  'The Weeknd',
  200,
  90,
  'mobile',
  'FR'
);

-- Update statistics by country

UPDATE stats_by_country_day
SET total_listens = total_listens + 1
WHERE country = 'FR'
AND listen_date = '2026-01-20';

-- Update daily top tracks counter

UPDATE top_tracks_by_day
SET total_listens = total_listens + 1
WHERE listen_date = '2026-01-20'
AND track_id = 22222222-2222-2222-2222-222222222222;
