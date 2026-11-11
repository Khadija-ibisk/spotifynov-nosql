@'
//insert.cypher
// INSERTION DES DONNÉES MERGE

//       UTILISATEURS
UNWIND range(1,20) AS i
MERGE (u:User {id: i})
SET u.username = "user" + i,
    u.country = CASE WHEN i % 2 = 0 THEN "FR" ELSE "MA" END,
    u.premium = i % 3 = 0,
    u.signup_date = date("2024-01-01");

//       GENRES
UNWIND ["Pop","Rock","Hip-Hop","Jazz","Electronic","Classical","R&B","Afro"] AS g
MERGE (:Genre {name: g});

//       PISTES
UNWIND range(1,50) AS i
MERGE (t:Track {isrc: "ISRC" + i})
SET t.title = "Track " + i,
    t.artist = "Artist " + (i % 10),
    t.duration = 180 + i;

//       PISTES → GENRES
MATCH (t:Track), (g:Genre)
WHERE t.duration % size(g.name) = 0
MERGE (t)-[:IN_GENRE]->(g);

//       PRÉFÉRENCES UTILISATEURS → GENRES
MATCH (u:User), (g:Genre)
WHERE u.id % size(g.name) = 0
MERGE (u)-[:LIKES]->(g);

//       RELATIONS SOCIALES

MATCH (u1:User), (u2:User)
WHERE u1.id <> u2.id AND u1.id % 2 = u2.id % 3
MERGE (u1)-[:FOLLOWS]->(u2);

//       HISTORIQUE DÉCOUTE

MATCH (u:User), (t:Track)
WHERE u.id % 2 = t.duration % 2
MERGE (u)-[l:LISTENED_TO]->(t)
SET l.count = 1 + (u.id % 5),
    l.last_listen = datetime();
'@ | Out-File neo4j_insert.cypher -Encoding utf8
