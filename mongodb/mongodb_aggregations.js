use("spotifynov");

/* 1. Top artistes par nombre d'albums */

db.albums.aggregate([
  { $group: { _id: "$artist_name", album_count: { $sum: 1 } } },
  { $sort: { album_count: -1 } }
]);

/* 2. Statistiques par genre : Durée totale de musique par genre (en heures) */

db.albums.aggregate([
  { $unwind: "$genres" },
  {
    $group: {
      _id: "$genres",
      total_duration_sec: { $sum: "$total_duration" }
    }
  },
  {
    $project: {
      genre: "$_id",
      total_duration_hours: {
        $round: [{ $divide: ["$total_duration_sec", 3600] }, 2]
      },
      _id: 0
    }
  }
]);

/* 3. Analyse géographique : Nombre d'artistes par pays et taille moyenne des groupes */

db.artists.aggregate([
  {
    $project: {
      country: 1,
      group_size: { $size: "$members" }
    }
  },
  {
    $group: {
      _id: "$country",
      artist_count: { $sum: 1 },
      avg_group_size: { $avg: "$group_size" }
    }
  },
  {
    $project: {
      country: "$_id",
      artist_count: 1,
      avg_group_size: { $round: ["$avg_group_size", 1] },
      _id: 0
    }
  }
]);

/* 4. Pipeline complexe avec jointure : Playlists enrichies avec infos artistes */

db.playlists.aggregate([
  { $unwind: "$tracks" },
  {
    $lookup: {
      from: "artists",
      localField: "tracks.artist_name",
      foreignField: "name",
      as: "artist_info"
    }
  },
  { $unwind: "$artist_info" },
  {
    $project: {
      playlist: "$name",
      track: "$tracks.track_title",
      artist: "$artist_info.name",
      country: "$artist_info.country",
      genres: "$artist_info.genres"
    }
  }
]);
