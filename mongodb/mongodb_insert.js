use("spotifynov");

db.artists.drop();
db.albums.drop();
db.playlists.drop();

// CREATION D ARTISTS (15)

db.artists.insertMany([
  {
    name: "Coldplay",
    country: "UK",
    genres: ["Rock", "Pop"],
    biography: "British rock band formed in London",
    formation_year: 1996,
    members: ["Chris Martin", "Jonny Buckland", "Guy Berryman", "Will Champion"],
    social_links: { instagram: "@coldplay", twitter: "@coldplay" },
    stats: { total_listens: 500000000, monthly_listeners: 45000000 }
  },
  {
    name: "Daft Punk",
    country: "France",
    genres: ["Electronic"],
    biography: "French electronic music duo",
    formation_year: 1993,
    members: ["Thomas Bangalter", "Guy-Manuel de Homem-Christo"],
    social_links: { instagram: "@daftpunk", twitter: "@daftpunk" },
    stats: { total_listens: 300000000, monthly_listeners: 12000000 }
  },
  {
    name: "Adele",
    country: "UK",
    genres: ["Pop", "Soul"],
    biography: "English singer-songwriter",
    formation_year: 2006,
    members: ["Adele Adkins"],
    social_links: { instagram: "@adele", twitter: "@adele" },
    stats: { total_listens: 400000000, monthly_listeners: 38000000 }
  },
  {
    name: "Drake",
    country: "Canada",
    genres: ["Rap", "Hip-Hop"],
    biography: "Canadian rapper and singer",
    formation_year: 2006,
    members: ["Drake"],
    social_links: { instagram: "@champagnepapi", twitter: "@drake" },
    stats: { total_listens: 700000000, monthly_listeners: 65000000 }
  },
  {
    name: "The Weeknd",
    country: "Canada",
    genres: ["R&B", "Pop"],
    biography: "Canadian singer",
    formation_year: 2010,
    members: ["Abel Tesfaye"],
    social_links: { instagram: "@theweeknd", twitter: "@theweeknd" },
    stats: { total_listens: 600000000, monthly_listeners: 72000000 }
  },
  {
    name: "Imagine Dragons",
    country: "USA",
    genres: ["Rock"],
    biography: "American pop rock band",
    formation_year: 2008,
    members: ["Dan Reynolds", "Wayne Sermon"],
    social_links: { instagram: "@imaginedragons", twitter: "@imaginedragons" },
    stats: { total_listens: 550000000, monthly_listeners: 41000000 }
  },
  {
    name: "Taylor Swift",
    country: "USA",
    genres: ["Pop"],
    biography: "American singer-songwriter",
    formation_year: 2004,
    members: ["Taylor Swift"],
    social_links: { instagram: "@taylorswift", twitter: "@taylorswift13" },
    stats: { total_listens: 900000000, monthly_listeners: 80000000 }
  },
  {
    name: "Ed Sheeran",
    country: "UK",
    genres: ["Pop"],
    biography: "English singer-songwriter",
    formation_year: 2005,
    members: ["Ed Sheeran"],
    social_links: { instagram: "@teddysphotos", twitter: "@edsheeran" },
    stats: { total_listens: 850000000, monthly_listeners: 78000000 }
  },
  {
    name: "Rihanna",
    country: "Barbados",
    genres: ["Pop", "R&B"],
    biography: "Singer and actress",
    formation_year: 2003,
    members: ["Rihanna"],
    social_links: { instagram: "@badgalriri", twitter: "@rihanna" },
    stats: { total_listens: 820000000, monthly_listeners: 62000000 }
  },
  {
    name: "Eminem",
    country: "USA",
    genres: ["Rap"],
    biography: "American rapper",
    formation_year: 1996,
    members: ["Marshall Mathers"],
    social_links: { instagram: "@eminem", twitter: "@eminem" },
    stats: { total_listens: 950000000, monthly_listeners: 58000000 }
  },
  { name: "Linkin Park", country: "USA", genres: ["Rock"], biography: "Rock band", formation_year: 1996, members: ["Chester Bennington"], stats: { total_listens: 480000000, monthly_listeners: 27000000 }},
  { name: "Maroon 5", country: "USA", genres: ["Pop"], biography: "Pop rock band", formation_year: 1994, members: ["Adam Levine"], stats: { total_listens: 510000000, monthly_listeners: 35000000 }},
  { name: "Bruno Mars", country: "USA", genres: ["Pop"], biography: "Singer-songwriter", formation_year: 2004, members: ["Bruno Mars"], stats: { total_listens: 620000000, monthly_listeners: 52000000 }},
  { name: "Billie Eilish", country: "USA", genres: ["Pop"], biography: "Singer-songwriter", formation_year: 2015, members: ["Billie Eilish"], stats: { total_listens: 420000000, monthly_listeners: 60000000 }},
  { name: "Khalid", country: "USA", genres: ["R&B"], biography: "Singer-songwriter", formation_year: 2016, members: ["Khalid"], stats: { total_listens: 300000000, monthly_listeners: 28000000 }}
]);


// ALBUMS (30)

db.albums.insertMany([
  { title: "Random Access Memories", artist_name: "Daft Punk", release_date: ISODate("2013-05-17"), total_duration: 4460, genres: ["Electronic"], tracks: [{ title: "Get Lucky", duration: 369 }] },
  { title: "Discovery", artist_name: "Daft Punk", release_date: ISODate("2001-03-12"), total_duration: 3660, genres: ["Electronic"], tracks: [{ title: "One More Time", duration: 320 }] },

  { title: "Parachutes", artist_name: "Coldplay", release_date: ISODate("2000-07-10"), total_duration: 2520, genres: ["Rock"], tracks: [{ title: "Yellow", duration: 269 }] },
  { title: "A Rush of Blood to the Head", artist_name: "Coldplay", release_date: ISODate("2002-08-26"), total_duration: 3270, genres: ["Rock"], tracks: [{ title: "Clocks", duration: 307 }] },

  { title: "21", artist_name: "Adele", release_date: ISODate("2011-01-24"), total_duration: 2800, genres: ["Pop"], tracks: [{ title: "Rolling in the Deep", duration: 228 }] },
  { title: "25", artist_name: "Adele", release_date: ISODate("2015-11-20"), total_duration: 2900, genres: ["Pop"], tracks: [{ title: "Hello", duration: 295 }] },

  { title: "Scorpion", artist_name: "Drake", release_date: ISODate("2018-06-29"), total_duration: 5400, genres: ["Rap"], tracks: [{ title: "God's Plan", duration: 198 }] },
  { title: "CLB", artist_name: "Drake", release_date: ISODate("2021-09-03"), total_duration: 5200, genres: ["Rap"], tracks: [{ title: "Way 2 Sexy", duration: 257 }] },

  { title: "After Hours", artist_name: "The Weeknd", release_date: ISODate("2020-03-20"), total_duration: 3400, genres: ["R&B"], tracks: [{ title: "Blinding Lights", duration: 200 }] },
  { title: "Starboy", artist_name: "The Weeknd", release_date: ISODate("2016-11-25"), total_duration: 4100, genres: ["R&B"], tracks: [{ title: "Starboy", duration: 230 }] },

  { title: "1989", artist_name: "Taylor Swift", release_date: ISODate("2014-10-27"), total_duration: 3500, genres: ["Pop"], tracks: [{ title: "Shake It Off", duration: 219 }] },
  { title: "Midnights", artist_name: "Taylor Swift", release_date: ISODate("2022-10-21"), total_duration: 3200, genres: ["Pop"], tracks: [{ title: "Anti-Hero", duration: 200 }] },

  { title: "Divide", artist_name: "Ed Sheeran", release_date: ISODate("2017-03-03"), total_duration: 3900, genres: ["Pop"], tracks: [{ title: "Shape of You", duration: 233 }] },
  { title: "Equals", artist_name: "Ed Sheeran", release_date: ISODate("2021-10-29"), total_duration: 3600, genres: ["Pop"], tracks: [{ title: "Bad Habits", duration: 231 }] },

  { title: "Extra Album 1", artist_name: "Rihanna" },
  { title: "Extra Album 2", artist_name: "Eminem" },
  { title: "Extra Album 3", artist_name: "Bruno Mars" },
  { title: "Extra Album 4", artist_name: "Billie Eilish" },
  { title: "Extra Album 5", artist_name: "Linkin Park" },
  { title: "Extra Album 6", artist_name: "Maroon 5" },
  { title: "Extra Album 7", artist_name: "Khalid" },
  { title: "Extra Album 8", artist_name: "Imagine Dragons" },
  { title: "Extra Album 9", artist_name: "Coldplay" },
  { title: "Extra Album 10", artist_name: "Adele" },
  { title: "Extra Album 11", artist_name: "Drake" },
  { title: "Extra Album 12", artist_name: "Taylor Swift" },
  { title: "Extra Album 13", artist_name: "Ed Sheeran" },
  { title: "Extra Album 14", artist_name: "The Weeknd" },
  { title: "Extra Album 15", artist_name: "Daft Punk" },
  { title: "Extra Album 16", artist_name: "Rihanna" }
]);


// PLAYLISTS (10)

db.playlists.insertMany([
  { name: "Chill Vibes", creator: "user1", visibility: "public", tracks: [{ track_title: "Get Lucky", artist_name: "Daft Punk" }], followers_count: 1200 },
  { name: "Workout Hits", creator: "user2", visibility: "public", tracks: [{ track_title: "Blinding Lights", artist_name: "The Weeknd" }], followers_count: 3500 },
  { name: "Pop Essentials", creator: "admin", visibility: "public", tracks: [{ track_title: "Hello", artist_name: "Adele" }], followers_count: 5400 },
  { name: "Rap Legends", creator: "user3", visibility: "public", tracks: [{ track_title: "God's Plan", artist_name: "Drake" }], followers_count: 4100 },
  { name: "Late Night", creator: "user4", visibility: "private", tracks: [{ track_title: "Clocks", artist_name: "Coldplay" }], followers_count: 800 },
  { name: "Top 2024", creator: "admin", visibility: "public", tracks: [{ track_title: "Anti-Hero", artist_name: "Taylor Swift" }], followers_count: 6200 },
  { name: "Road Trip", creator: "user5", visibility: "public", tracks: [{ track_title: "Shape of You", artist_name: "Ed Sheeran" }], followers_count: 2900 },
  { name: "Focus", creator: "user6", visibility: "private", tracks: [{ track_title: "Yellow", artist_name: "Coldplay" }], followers_count: 600 },
  { name: "Party Time", creator: "user7", visibility: "public", tracks: [{ track_title: "Starboy", artist_name: "The Weeknd" }], followers_count: 4800 },
  { name: "Classic Hits", creator: "user8", visibility: "public", tracks: [{ track_title: "One More Time", artist_name: "Daft Punk" }], followers_count: 5100 }
]);

print("Database spotifynov donné insert successfully");
