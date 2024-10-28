import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore/lite";
import { firebaseApp, uploadFile } from "../lib/firebase";
import { uploadMP3 } from "../lib/s3";

const db = getFirestore(firebaseApp);

const CreateSongForm = ({ playlistId }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [mp3File, setMp3File] = useState(null);
  const [artists, setArtists] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [playlists, setPlaylists] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const playlistsCollection = collection(db, "playlists");
      const playlistSnapshot = await getDocs(playlistsCollection);
      const playlistList = playlistSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
      }));
      setPlaylists(playlistList);

      if (playlistId) {
        const selectedPlaylist = playlistList.find((playlist) => playlist.id === playlistId);
        if (selectedPlaylist) {
          setAlbumId(selectedPlaylist.id);
          setAlbumTitle(selectedPlaylist.title);
        }
      }
    };

    fetchPlaylists();
  }, [playlistId]);

  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handleMp3Change = (e) => setMp3File(e.target.files[0]);

  const handleAlbumChange = (e) => {
    const selectedAlbum = playlists.find(playlist => playlist.id === e.target.value);
    setAlbumId(selectedAlbum.id);
    setAlbumTitle(selectedAlbum.title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const imageUrl = await uploadFile(image);
      const mp3Url = await uploadMP3(mp3File, albumTitle);
      const song = {
        title,
        image: imageUrl,
        href: mp3Url,
        artists: artists.split(",").map(artist => artist.trim()),
        album: albumTitle,
        albumId,
        duration,
      };
      const docRef = await addDoc(collection(db, "songs"), song);
      console.log("Documento añadido con ID:", docRef.id);

      window.location.href = `/playlist/${albumId}`;
      
    } catch (error) {
      console.log("Error al agregar canción:", error);
    }
    setLoading(false);
    setTitle("");
    setImage(null);
    setMp3File(null);
    setArtists("");
    setAlbumId("");
    setAlbumTitle("");
    setDuration("");
  };

  return (
    <div className="relative m-5 text-black">
      {loading && (
        <div className="absolute inset-0 bg-opacity-75 flex items-center justify-center z-50">
          <div className="loader border-4 border-t-4 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-zinc-200 p-6 rounded-lg shadow-lg" disabled={loading}>
        {/* Título */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading} />
        </div>

        {/* Imagen */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Imagen de la canción:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading} />
        </div>

        {/* Archivo MP3 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Archivo MP3 de la canción:</label>
          <input type="file" accept="audio/mpeg" onChange={handleMp3Change} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading} />
        </div>

        {/* Artistas */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Artistas (separados por comas):</label>
          <input type="text" value={artists} onChange={(e) => setArtists(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading} />
        </div>

        {/* Selector de Álbum */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Playlist:</label>
          <select value={albumId} onChange={handleAlbumChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading}>
            <option value="">Selecciona un playlist</option>
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>{playlist.title}</option>
            ))}
          </select>
        </div>

        {/* Duración */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Duración (formato: mm:ss):</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading} />
        </div>

        <button type="submit" className={`w-full py-2 px-4 rounded-lg focus:outline-none ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-blue-600 text-white"}`} disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default CreateSongForm;
