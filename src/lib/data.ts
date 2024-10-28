import { getFirestore, collection, getDocs, query, where, getDoc, doc } from "firebase/firestore/lite";
import { firebaseApp } from "../lib/firebase";
import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: string;
  title: string;
  color?: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export interface Song {
  id: number | string;
  albumId: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
  href?: string | null;
}

const db = getFirestore(firebaseApp);

export const fetchPlaylists = async (): Promise<Playlist[]> => {
  const playlistsCollection = collection(db, "playlists");
  const playlistSnapshot = await getDocs(playlistsCollection);
  const playlistsData = playlistSnapshot.docs.map((doc) => ({
    id: doc.id,
    albumId: doc.data().albumId,
    title: doc.data().title,
    color: colors.blue, 
    cover: doc.data().cover,
    artists: doc.data().artists,
  }));
  return playlistsData;
};

export const fetchSongs = async (): Promise<Song[]> => {
  const songsCollection = collection(db, "songs");
  const songSnapshot = await getDocs(songsCollection);
  const songsData = songSnapshot.docs.map((doc) => ({
    id: doc.id,
    albumId: doc.data().albumId,
    title: doc.data().title,
    image: doc.data().image,
    artists: doc.data().artists,
    album: doc.data().album,
    duration: doc.data().duration,
    href: doc.data().href || null,
  }));
  return songsData;
};

export async function fetchPlaylistById(id: string): Promise<Playlist | null> {
  try {
    const docRef = doc(db, "playlists", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Playlist;
    } else {
      console.error("No se encontró la playlist con ID:", id);
      return null;
    }
  } catch (error) {
    console.error("Error al obtener la playlist:", error);
    return null;
  }
}

export async function fetchSongsByAlbumId(albumId: string): Promise<Song[]> {
  try {
    const songsRef = collection(db, "songs");
    const q = query(songsRef, where("albumId", "==", albumId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Song[];
  } catch (error) {
    console.error("Error al obtener las canciones:", error);
    return [];
  }
}

export async function fetchAllPlaylists(): Promise<Playlist[]> {
  try {
    const playlistsRef = collection(db, "playlists");
    const querySnapshot = await getDocs(playlistsRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Playlist[];
  } catch (error) {
    console.error("Error al obtener las playlists:", error);
    return [];
  }
}
