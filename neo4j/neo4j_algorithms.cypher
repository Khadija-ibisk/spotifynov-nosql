@'
// ANALYSES AVANCÉES

MATCH (u:User)
OPTIONAL MATCH (u)<-[:FOLLOWS]-(direct)
OPTIONAL MATCH (direct)<-[:FOLLOWS]-(indirect)
RETURN u.username,
       count(DISTINCT direct) + 0.5 * count(DISTINCT indirect) AS influence
ORDER BY influence DESC;

MATCH (u1:User {id: 1})-[:LISTENED_TO]->(t)<-[:LISTENED_TO]-(u2:User)
WHERE u1 <> u2
RETURN u2.username, count(t) AS common_tracks
ORDER BY common_tracks DESC
LIMIT 5;

MATCH (u:User {id: 1})-[:FOLLOWS]->(f)-[:LIKES]->(g)
WHERE NOT (u)-[:LIKES]->(g)
RETURN DISTINCT g.name
LIMIT 5;
'@ | Out-File neo4j_algorithms.cypher -Encoding utf8
