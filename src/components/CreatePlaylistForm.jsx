import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { firebaseApp, uploadFile } from "../lib/firebase";
import { colors } from "@/lib/colors";
import { fetchSongsByAlbumId } from "@/lib/data";

const db = getFirestore(firebaseApp);

const DeleteIcon = ({ className }) => (
  <svg fill="#ff0000" width="28px" height="28px" viewBox="0 0 482.428 482.429">
    <g>
      <g>
        <path
          d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
			c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
			h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
			C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
			C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
			c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
			c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
			V115.744z"
        />
        <path
          d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"
        />
        <path
          d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"
        />
        <path
          d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
			c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"
        />
      </g>
    </g>
  </svg>
);

const CreatePlaylistForm = ({ playlistId }) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [artists, setArtists] = useState("");
  const [color, setColor] = useState("gray");
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      if (playlistId) {
        const playlistRef = doc(db, "playlists", playlistId);
        const playlistSnapshot = await getDoc(playlistRef);

        if (playlistSnapshot.exists()) {
          const playlistData = playlistSnapshot.data();
          setTitle(playlistData.title);
          setArtists(playlistData.artists.join(", "));
          setColor(playlistData.color);
        }
      }
    };

    const fetchSongs = async () => {
      if (playlistId) {
        const fetchedSongs = await fetchSongsByAlbumId(playlistId);
        setSongs(fetchedSongs);
      }
    };

    fetchPlaylistData();
    fetchSongs();
  }, [playlistId]);

  const handleCoverChange = (e) => setCover(e.target.files[0]);

  const handleColorChange = (e) => setColor(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const playlist = {
        title,
        artists: artists.split(",").map((artist) => artist.trim()),
        color: colors[color],
      };

      if (cover) {
        playlist.cover = await uploadFile(cover);
      }

      if (playlistId) {
        const playlistRef = doc(db, "playlists", playlistId);
        await updateDoc(playlistRef, playlist);
        console.log("Playlist actualizada con ID:", playlistId);
      } else {
        const docRef = await addDoc(collection(db, "playlists"), playlist);
        console.log("Playlist añadida con ID:", docRef.id);
        window.location.href = `/playlist/${docRef.id}`;
      }
    } catch (error) {
      console.log("Error al guardar playlist:", error);
    }
    setLoading(false);
    setTitle("");
    setCover(null);
    setArtists("");
    setColor("gray");
  };

  const handleDeleteSong = async (songId) => {
    const confirmation = window.confirm(
      "¿Estás seguro de que deseas eliminar esta canción?"
    );
    if (confirmation) {
      try {
        await deleteDoc(doc(db, "songs", songId));
        setSongs(songs.filter((song) => song.id !== songId));
        alert("Canción eliminada con éxito.");
      } catch (error) {
        console.error("Error al eliminar la canción:", error);
        alert(
          "Hubo un error al eliminar la canción. Intenta de nuevo más tarde."
        );
      }
    }
  };

  return (
    <div className="relative m-5 text-black">
      {loading && (
        <div className="absolute inset-0 bg-opacity-75 flex items-center justify-center z-50">
          <div className="loader border-4 border-t-4 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-zinc-200 p-6 rounded-lg shadow-lg"
        disabled={loading}
      >
        {/* Título */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Título:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
            disabled={loading}
          />
        </div>

        {/* Imagen de portada */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Imagen de portada:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            disabled={loading}
          />
        </div>

        {/* Temáticas */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Temáticas (separadas por comas):
          </label>
          <input
            type="text"
            value={artists}
            onChange={(e) => setArtists(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
            disabled={loading}
          />
        </div>

        {/* Selector de Color */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Color:
          </label>
          <select
            value={color}
            onChange={handleColorChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
            disabled={loading}
          >
            {Object.keys(colors).map((colorName, index) => (
              <option key={index} value={colorName}>
                {colorName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg focus:outline-none ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-blue-600 text-white"
          }`}
          disabled={loading}
        >
          {loading
            ? "Enviando..."
            : playlistId
            ? "Actualizar Playlist"
            : "Crear Playlist"}
        </button>
      </form>

      {/* Listado de canciones */}
      {songs.length && (
        <div className="mt-6 max-w-md mx-auto bg-zinc-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Canciones en la Playlist</h2>
          {songs.map((song) => (
            <div
              key={song.id}
              className="flex justify-between items-center mb-2"
            >
              <span>
                {song.title.length > 20
                  ? song.title.slice(0, 20) + "..."
                  : song.title}
              </span>
              <div>
                <button
                  onClick={() => handleDeleteSong(song.id)}
                  className="text-red-500"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreatePlaylistForm;
