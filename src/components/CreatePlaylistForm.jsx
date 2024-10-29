import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { firebaseApp, uploadFile } from "../lib/firebase";
import { colors } from "@/lib/colors"; 

const db = getFirestore(firebaseApp);

const CreatePlaylistForm = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [artists, setArtists] = useState("");
  const [color, setColor] = useState("gray"); // Almacena el nombre del color
  const [loading, setLoading] = useState(false);

  const handleCoverChange = (e) => setCover(e.target.files[0]);

  const handleColorChange = (e) => setColor(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const coverUrl = await uploadFile(cover);
      const playlist = {
        title,
        cover: coverUrl,
        artists: artists.split(",").map((artist) => artist.trim()),
        color: colors[color], // Guarda el objeto de color correspondiente
      };
      const docRef = await addDoc(collection(db, "playlists"), playlist);
      console.log("Playlist añadida con ID:", docRef.id);
      window.location.href = `/playlist/${docRef.id}`;
    } catch (error) {
      console.log("Error al agregar playlist:", error);
    }
    setLoading(false);
    setTitle("");
    setCover(null);
    setArtists("");
    setColor("gray"); // Restablece el color a su valor predeterminado
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

        {/* Imagen de portada */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Imagen de portada:</label>
          <input type="file" accept="image/*" onChange={handleCoverChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading} />
        </div>

        {/* Tematicas */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Tematicas (separadas por comas):</label>
          <input type="text" value={artists} onChange={(e) => setArtists(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading} />
        </div>

        {/* Selector de Color */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
          <select value={color} onChange={handleColorChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required disabled={loading}>
            {Object.keys(colors).map((colorName, index) => (
              <option key={index} value={colorName}>{colorName}</option>
            ))}
          </select>
        </div>

        <button type="submit" className={`w-full py-2 px-4 rounded-lg focus:outline-none ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-blue-600 text-white"}`} disabled={loading}>
          {loading ? "Enviando..." : "Crear Playlist"}
        </button>
      </form>
    </div>
  );
};

export default CreatePlaylistForm;
