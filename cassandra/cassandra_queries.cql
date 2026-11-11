-- Validation queries executed in cqlsh

-- Check listening history for a user and a specific day

SELECT *
FROM listening_by_user_day
WHERE user_id = 11111111-1111-1111-1111-111111111111
AND listen_date = '2026-01-20';

-- Filter by device (requires ALLOW FILTERING)

SELECT *
FROM listening_by_user_day
WHERE user_id = 11111111-1111-1111-1111-111111111111
AND listen_date = '2026-01-20'
AND device = 'mobile'
ALLOW FILTERING;

-- Check statistics per country

SELECT *
FROM stats_by_country_day
WHERE country = 'FR';

-- Check top tracks per day

SELECT *
FROM top_tracks_by_day
WHERE listen_date = '2026-01-20';
