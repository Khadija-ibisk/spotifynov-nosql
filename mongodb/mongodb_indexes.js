use("spotifynov");

/*
Index 1 : Recherche d'artistes par genre
Optimise : db.artists.find({ genres: "Rock" })
*/
db.artists.createIndex({ genres: 1 });

/*
Index 2 : Recherche textuelle sur noms d'artistes et biographies
Optimise : recherche plein texte
*/
db.artists.createIndex(
  { name: "text", biography: "text" },
  { name: "artist_text_search" }
);

/*
Index 3 : Recherche d'albums par date de sortie
Optimise : albums récents / filtres temporels
*/
db.albums.createIndex({ release_date: -1 });

/*
Index 4 : Contrainte unicité sur le nom de artiste
Évite les doublons
*/
db.artists.createIndex(
  { name: 1 },
  { unique: true }
);
