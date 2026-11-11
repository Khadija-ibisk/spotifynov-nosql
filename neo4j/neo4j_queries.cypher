@'

// REQUÊTES CYPHER

MATCH (u:User)-[:FOLLOWS]->(f:User)
WHERE u.premium = true AND u.country = "FR"
WITH u, count(f) AS nb
WHERE nb >= 2
RETURN u.username, nb;

MATCH (u:User {id: 1})-[:FOLLOWS]->(friend)-[:LISTENED_TO]->(t:Track)
WHERE NOT (u)-[:LISTENED_TO]->(t)
RETURN DISTINCT t.title
LIMIT 5;

MATCH (u1:User {id: 1}), (u2:User {id: 10})
MATCH p = shortestPath((u1)-[:FOLLOWS*]-(u2))
RETURN p;

MATCH (u:User)-[:LIKES]->(g:Genre)
RETURN g.name, count(u) AS popularity
ORDER BY popularity DESC;

MATCH (:User)-[:FOLLOWS]->(u:User)
RETURN u.username, count(*) AS followers
ORDER BY followers DESC
LIMIT 5;

MATCH (a:User)-[:FOLLOWS]->(b:User)-[:FOLLOWS]->(c:User)-[:FOLLOWS]->(a)
RETURN a.username, b.username, c.username
LIMIT 5;
'@ | Out-File neo4j_queries.cypher -Encoding utf8
