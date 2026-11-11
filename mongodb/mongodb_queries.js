use("spotifynov");

/* 1. Trouver tous les albums sortis après une date donnée triés par date décroissante */

db.albums.find(
  { release_date: { $gt: ISODate("2015-01-01") } }
).sort({ release_date: -1 });

/* 2. Mettre à jour les statistiques d'écoute d'un artiste */

db.artists.updateOne(
  { name: "Coldplay" },
  {
    $inc: {
      "stats.total_listens": 1000000,
      "stats.monthly_listeners": 50000
    }
  }
);

/* 3. Ajouter un nouveau membre à un groupe musical */

db.artists.updateOne(
  { name: "Coldplay" },
  { $addToSet: { members: "New Member" } }
);

/* 4. Supprimer les playlists inactives Critère : moins de 100 followers */

db.playlists.deleteMany(
  { followers_count: { $lt: 100 } }
);

/* 5. Trouver tous les albums contenant des pistes dépassant une durée spécifique (6 min) */

db.albums.find({
  tracks: {
    $elemMatch: { duration: { $gt: 360 } }
  }
});
