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
    "title": "佐咲紗花｜ 『ID-0』MV Full size",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/bf/76/81/bf7681ec-6108-2817-c963-6a7c71ce39e1/4062994001155_cover.jpg/400x400cc.jpg",
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
]