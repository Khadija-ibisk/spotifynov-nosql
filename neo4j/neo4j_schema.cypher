@'
//neo4j_schema.cypher
// CONSTRAINTS (INTÉGRITÉ DES DONNÉES)

// Chaque utilisateur a un identifiant unique

CREATE CONSTRAINT user_id_unique IF NOT EXISTS
FOR (u:User)
REQUIRE u.id IS UNIQUE;

// Chaque piste est identifiée par un ISRC unique

CREATE CONSTRAINT track_isrc_unique IF NOT EXISTS
FOR (t:Track)
REQUIRE t.isrc IS UNIQUE;

// Chaque genre est unique par son nom

CREATE CONSTRAINT genre_name_unique IF NOT EXISTS
FOR (g:Genre)
REQUIRE g.name IS UNIQUE;
'@ | Out-File neo4j_schema.cypher -Encoding utf8