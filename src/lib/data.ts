import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover:
      "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Omaña playlist",
    color: colors.blue,
    cover:
      "https://i.scdn.co/image/ab67616d00001e02303d8545fce8302841c39859",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "My Mix",
    color: colors.blue,
    cover:
      "https://i.scdn.co/image/ab67616d0000b273675e743561da0c0ca16d6245",
    artists: ["Raimu"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
  href?: string | null;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Moonlit Walk",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Fluxxwave",
    "image": "https://m.media-amazon.com/images/I/51ei4ZDnklL._UXNaN_FMjpg_QL85_.jpg",
    "artists": ["Clovis Reyes"],
    "album": "Omaña Playlist",
    "duration": "2:29"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "「ひぃふぅみぃ夜 ーわたげのことー」wasurene “HiFuMii-YO”",
    "image": "https://i.ytimg.com/vi/AjKETjOQpQg/maxresdefault.jpg",
    "artists": ["HiFuMii-YO"],
    "album": "Omaña Playlist",
    "duration": "2:53"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "米津玄師 Kenshi Yonezu - KICKBACK",
    "image": "https://i.scdn.co/image/ab67616d00001e02303d8545fce8302841c39859",
    "artists": ["Kenshi Yonezu"],
    "album": "Omaña Playlist",
    "duration": "3:47"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Glass Animals - Heat Waves",
    "image": "https://i.scdn.co/image/ab67616d0000b273ca715be1bb97fc0129955123",
    "artists": ["Clovis Reyes"],
    "album": "Omaña Playlist",
    "duration": "4:20"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Breaking the Habit Linkin Park",
    "image": "https://i.ytimg.com/vi/v2H4l9RpkwM/maxresdefault.jpg",
    "artists": ["Linkin Park"],
    "album": "Omaña Playlist",
    "duration": "3:18"
  },
  {
    "id": 6,
    "albumId": 5,
    "title": "L Étoile D afrique",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/88/2b/03/882b0352-53b5-e7ed-6eb4-41e2baa32f53/106.jpg/1200x1200bb.jpg",
    "artists": ["VDYCD"],
    "album": "Omaña Playlist",
    "duration": "1:45"
  },
  {
    "id": 7,
    "albumId": 5,
    "title": "Pick of the Litter",
    "image": "https://i.ytimg.com/vi/6yac66h6oj4/mqdefault.jpg",
    "artists": ["Clovis Reyes"],
    "album": "Omaña Playlist",
    "duration": "1:54"
  },
  {
    "id": 8,
    "albumId": 5,
    "title": "佐咲紗花｜ 『ID-0』",
    "image": "https://i.ytimg.com/vi/Uezc8O5csno/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSC7kBQy6yfm21YZWRn28n6ZR3dA",
    "artists": ["Kokonoku"],
    "album": "Omaña Playlist",
    "duration": "1:48"
  },
  {
    "id": 9,
    "albumId": 5,
    "title": "TUCA DONKA + HAKARI DANCE",
    "image": "https://i.ytimg.com/vi/34Pl2DTuwoQ/maxresdefault.jpg",
    "artists": ["Hakari"],
    "album": "Omaña Playlist",
    "duration": "1:16"
  },
  {
    "id": 10,
    "albumId": 5,
    "title": "24K Magic - Bruno Mars",
    "image": "https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png",
    "artists": ["Bruno Mars"],
    "album": "Omaña Playlist",
    "duration": "3:45"
  },
  {
    "id": 11,
    "albumId": 5,
    "title": "Awesome City Club -「SUNNY GIRL",
    "image": "https://i.scdn.co/image/ab67616d0000b27364831e6a63beaeff1ed2b0a8",
    "artists": ["Awesome City Club"],
    "album": "Omaña Playlist",
    "duration": "1:22"
  },
  {
    "id": 12,
    "albumId": 5,
    "title": "Xylitol",
    "image": "https://i1.sndcdn.com/artworks-C49pP2zA6CBEb15Q-dJywMA-t500x500.jpg",
    "artists": ["Sythion"],
    "album": "Omaña Playlist",
    "duration": "3:25"
  },
  {
    "id": 13,
    "albumId": 5,
    "title": "Still Into You pluggnb",
    "image": "https://i.ytimg.com/vi/2CD_if-bCdA/maxresdefault.jpg",
    "artists": ["cadenkala"],
    "album": "Omaña Playlist",
    "duration": "2:33"
  },
  {
    "id": 14,
    "albumId": 5,
    "title": "EEYUH! X FLUXXWAVE (Irokz Remix)",
    "image": "https://i.ytimg.com/vi/NDK37w82n90/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGYgGih_MA8=&rs=AOn4CLAwuR4QZe9ee8Ue4Q1AmIM17NblPA",
    "artists": ["Irokz"],
    "album": "Omaña Playlist",
    "duration": "1:38"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "ひぃふぅみぃ夜 ーわたげのことー」wasurene “HiFuMii-YO”",
    "image": "https://i.ytimg.com/vi/AjKETjOQpQg/maxresdefault.jpg",
    "artists": ["HiFuMii-YO"],
    "album": "My Mix",
    "duration": "2:53",
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "RISE (Remix)",
    "image": "https://i.scdn.co/image/ab67616d0000b273675e743561da0c0ca16d6245",
    "artists": ["Mako"],
    "album": "My Mix",
    "duration": "2:53"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "米津玄師 Kenshi Yonezu - KICKBACK",
    "image": "https://i.scdn.co/image/ab67616d00001e02303d8545fce8302841c39859",
    "artists": ["Kenshi Yonezu"],
    "album": "My Mix",
    "duration": "3:47"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Fuego",
    "image": "https://i.scdn.co/image/ab67616d0000b27387925046bbaf692f3878972d",
    "artists": ["Timmy Trumpet"],
    "album": "My Mix",
    "duration": "2:34"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "BoyWithUke 'Toxic'",
    "image": "https://i.scdn.co/image/ab67616d0000b2731084caebe531beef538d2312",
    "artists": ["BoyWithUke"],
    "album": "My Mix",
    "duration": "3:00"
  },
  {
    "id": 6,
    "albumId": 6,
    "title": "Legends never die",
    "image": "https://pics.filmaffinity.com/League_of_Legends_Legends_Never_Die_Vaideo_musical-172041920-large.jpg",
    "artists": ["LOL"],
    "album": "My Mix",
    "duration": "3:55"
  },
  {
    "id": 7,
    "albumId": 6,
    "title": "Mary on a cross",
    "image": "https://i.scdn.co/image/ab67616d0000b273bef9b0a348ea8dd18a581025",
    "artists": ["Ghost"],
    "album": "My Mix",
    "duration": "4:04"
  },
  {
    "id": 8,
    "albumId": 6,
    "title": "Unmei no Hi: Tamashi tai Tamashi ",
    "image": "https://i1.sndcdn.com/artworks-000189314953-abrfkq-t500x500.jpg",
    "artists": ["Tamashi tai"],
    "album": "My Mix",
    "duration": "4:55"
  },
  {
    "id": 9,
    "albumId": 6,
    "title": "David Guetta & Bebe Rexha - I'm Good (Blue)",
    "image": "https://i.scdn.co/image/ab67616d0000b2736c9986f55f4ddb5b5f3418ae",
    "artists": ["David Guetta", "Bebe Rexha"],
    "album": "My Mix",
    "duration": "2:57"
  },
  {
    "id": 10,
    "albumId": 6,
    "title": "R3HAB, INNA, Sash! - Rock My Body (W&W x R3HAB VIP Remix",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/12/3e/ec/123eec2f-7458-b186-ad8b-4c0adab226cf/5054197766015.jpg/600x600bf-60.jpg",
    "artists": ["R3HAB"],
    "album": "My Mix",
    "duration": "2:56"
  },
  {
    "id": 11,
    "albumId": 6,
    "title": "Gods LOL",
    "image": "https://i.ytimg.com/vi/jdzKPUhXa-o/sddefault.jpg",
    "artists": ["NewJeans"],
    "album": "My Mix",
    "duration": "3:41"
  },
]