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
  id: number | string;
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
    "albumId": 6,
    "title": "wasurene “HiFuMii-YO”",
    "image": "https://images.genius.com/bee7bb361f5375742bafbd57a08f69c9.630x630x1.jpg",
    "artists": ["HiFuMii-YO"],
    "album": "My Mix",
    "duration": "2:53",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/1.mp3"	
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "RISE (Remix)",
    "image": "https://i.scdn.co/image/ab67616d0000b273675e743561da0c0ca16d6245",
    "artists": ["Mako"],
    "album": "My Mix",
    "duration": "2:53",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/2.mp3"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "米津玄師 Kenshi Yonezu - KICKBACK",
    "image": "https://i.scdn.co/image/ab67616d00001e02303d8545fce8302841c39859",
    "artists": ["Kenshi Yonezu"],
    "album": "My Mix",
    "duration": "3:47",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/3.mp3"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Fuego",
    "image": "https://i.scdn.co/image/ab67616d0000b27387925046bbaf692f3878972d",
    "artists": ["Timmy Trumpet"],
    "album": "My Mix",
    "duration": "2:34",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/4.mp3"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "BoyWithUke 'Toxic'",
    "image": "https://i.scdn.co/image/ab67616d0000b2731084caebe531beef538d2312",
    "artists": ["BoyWithUke"],
    "album": "My Mix",
    "duration": "3:00",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/5.mp3"
  },
  {
    "id": 6,
    "albumId": 6,
    "title": "Legends never die",
    "image": "https://i.scdn.co/image/ab67616d0000b2731578debc0e6bb047dd20a02b",
    "artists": ["LOL"],
    "album": "My Mix",
    "duration": "3:55",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/6.mp3"
  },
  {
    "id": 7,
    "albumId": 6,
    "title": "Mary on a cross",
    "image": "https://i.scdn.co/image/ab67616d0000b273bef9b0a348ea8dd18a581025",
    "artists": ["Ghost"],
    "album": "My Mix",
    "duration": "4:04",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/7.mp3"
  },
  {
    "id": 8,
    "albumId": 6,
    "title": "Unmei no Hi: Tamashi tai Tamashi ",
    "image": "https://i1.sndcdn.com/artworks-000189314953-abrfkq-t500x500.jpg",
    "artists": ["Tamashi tai"],
    "album": "My Mix",
    "duration": "4:55",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/8.mp3"
  },
  {
    "id": 9,
    "albumId": 6,
    "title": "David Guetta & Bebe Rexha - I'm Good (Blue)",
    "image": "https://i.scdn.co/image/ab67616d0000b2736c9986f55f4ddb5b5f3418ae",
    "artists": ["David Guetta", "Bebe Rexha"],
    "album": "My Mix",
    "duration": "2:57",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/9.mp3"
  },
  {
    "id": 10,
    "albumId": 6,
    "title": "R3HAB, INNA, Sash! - Rock My Body (W&W x R3HAB VIP Remix",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/12/3e/ec/123eec2f-7458-b186-ad8b-4c0adab226cf/5054197766015.jpg/600x600bf-60.jpg",
    "artists": ["R3HAB"],
    "album": "My Mix",
    "duration": "2:56",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/10.mp3"
  },
  {
    "id": 11,
    "albumId": 6,
    "title": "Gods LOL",
    "image": "https://i.ytimg.com/vi/jdzKPUhXa-o/sddefault.jpg",
    "artists": ["NewJeans"],
    "album": "My Mix",
    "duration": "3:41",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/11.mp3"
  },
  {
    "id": "Fire __ Water (mashup)",
    "albumId": 6,
    "title": "Fire __ Water (mashup)",
    "image": "https://upload.wikimedia.org/wikipedia/en/c/c7/Blood_Water_Grandson.jpg",
    "artists": ["Grandson", "Imagine Dragons"],
    "album": "My Mix",
    "duration": "3:46",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/Fire+__+Water+(mashup).mp3"
  },
  {
    "id": "The Greatest - SIA  Sped Up - Tiktok Version",
    "albumId": 6,
    "title": "The Greatest - SIA Sped Up",
    "image": "https://pics.filmaffinity.com/Sia_The_Greatest_Music_Video-938224633-large.jpg",
    "artists": ["Sia",],
    "album": "My Mix",
    "duration": "2:57",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/The+Greatest+-+SIA++Sped+Up+-+Tiktok+Version.mp3"
  },
  {
    "id": "SINAMOTO - YOUNG GIRL A (SLOWED  REVERB) GOHAN FUTURO EDIT",
    "albumId": 6,
    "title": "SINAMOTO - YOUNG GIRL A (SLOWED  REVERB) GOHAN FUTURO EDIT",
    "image": "https://i.scdn.co/image/ab67616d00001e022b8ad0729c8d7a6570642ad5",
    "artists": ["SINAMOTO",],
    "album": "My Mix",
    "duration": "4:44",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/SINAMOTO+-+YOUNG+GIRL+A+(SLOWED++REVERB)+GOHAN+FUTURO+EDIT.mp3"
  },
  {
    "id": "League of legends - Warriors (Lyrics) feat. Imagine Dragons",
    "albumId": 6,
    "title": "League of legends - Warriors",
    "image": "https://i.scdn.co/image/ab67616d0000b273f8fa082806184fcb032d8e0a",
    "artists": ["Imagine Dragons",],
    "album": "My Mix",
    "duration": "2:49",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/League+of+legends+-+Warriors+(Lyrics)+feat.+Imagine+Dragons.mp3"
  },
  {
    "id": "royalty - egzod (sped up_tiktok song)",
    "albumId": 6,
    "title": "royalty - egzod (sped up song)",
    "image": "https://cdns-images.dzcdn.net/images/cover/af13c95019e53b3e259163c95e679785/500x500.jpg",
    "artists": ["Royalty",],
    "album": "My Mix",
    "duration": "3:03",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/royalty+-+egzod+(sped+up_tiktok+song).mp3"
  },
  {
    "id": "David Guetta - Hey Mama (Official Video) ft Nicki Minaj, Bebe Rexha & Afrojack",
    "albumId": 6,
    "title": "Hey Mama - David Guetta ft Nicki Minaj",
    "image": "https://m.media-amazon.com/images/M/MV5BN2Y3YTRkOWEtNGVjZS00OTZkLWE2NzctZjFhNjg3MzExMGRhXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
    "artists": ["David Guetta", "Nicki Minaj"],
    "album": "My Mix",
    "duration": "3:19",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/David+Guetta+-+Hey+Mama+(Official+Video)+ft+Nicki+Minaj%2C+Bebe+Rexha+%26+Afrojack.mp3"
  },
  {
    "id": "Aaron Smith - Dancin (KRONO Remix) - Lyrics",
    "albumId": 6,
    "title": "Aaron Smith - Dancin (KRONO Remix)",
    "image": "https://lastfm.freetls.fastly.net/i/u/ar0/04b8b1c39b2a39875d4c7936c33f845e.jpg",
    "artists": ["Aaron Smith ", "KRONO"],
    "album": "My Mix",
    "duration": "3:14",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/Aaron+Smith+-+Dancin+(KRONO+Remix)+-+Lyrics.mp3"
  },
  {
    "id": "Lil Nas X - MONTERO (Call Me By Your Name) (Lyrics)",
    "albumId": 6,
    "title": "Lil Nas X - MONTERO (Call Me By Your Name)",
    "image": "https://cdns-images.dzcdn.net/images/cover/72f18412d9c36fe32cdc460a5e34be80/500x500.jpg",
    "artists": ["Lil Nas", "MONTERO"],
    "album": "My Mix",
    "duration": "2:18",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/Lil+Nas+X+-+MONTERO+(Call+Me+By+Your+Name)+(Lyrics).mp3"
  },
  {
    "id": "Alan Walker - Sing Me To Sleep",
    "albumId": 6,
    "title": "Alan Walker - Sing Me To Sleep",
    "image": "https://i1.sndcdn.com/artworks-000208554311-mi95hd-t500x500.jpg",
    "artists": ["Alan Walker",],
    "album": "My Mix",
    "duration": "3:11",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/Alan+Walker+-+Sing+Me+To+Sleep.mp3"
  },
  {
    "id": "Billie Eilish, Khalid - lovely (Official Music Video)",
    "albumId": 6,
    "title": "Billie Eilish, Khalid - lovely",
    "image": "https://i1.sndcdn.com/artworks-000344377479-prcevs-t500x500.jpg",
    "artists": ["Billie Eilish", "Khalid"],
    "album": "My Mix",
    "duration": "3:20",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/Billie+Eilish%2C+Khalid+-+lovely+(Official+Music+Video).mp3"
  },
  {
    "id": "Imagine Dragons - ENEMY BONES __ Mashup",
    "albumId": 6,
    "title": "Imagine Dragons - ENEMY BONES",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Imagine_Dragons_Bones_cover.jpg/220px-Imagine_Dragons_Bones_cover.jpg",
    "artists": ["Imagine Dragons",],
    "album": "My Mix",
    "duration": "2:32",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/Imagine+Dragons+-+ENEMY+BONES+__+Mashup.mp3"
  },
  {
    "id": "Imagine Dragons x JID - Enemy (Lyrics)",
    "albumId": 6,
    "title": "Imagine Dragons x JID - Enemy",
    "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0cd265130636097.61842df318d10.jpg",
    "artists": ["Imagine Dragons", "JID"],
    "album": "My Mix",
    "duration": "2:50",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/Imagine+Dragons+x+JID+-+Enemy+(Lyrics).mp3"
  },
  {
    "id": "David Kushner - Daylight",
    "albumId": 6,
    "title": "David Kushner - Daylight",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/29/b8/41/29b84156-2edb-692d-329b-8faf1d076054/23SYMIM06332.rgb.jpg/1200x1200bb.jpg",
    "artists": ["Imagine Dragons", "JID"],
    "album": "My Mix",
    "duration": "2:50",
    "href": "https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/MyMix/David+Kushner+-+Daylight.mp3"
  },
]