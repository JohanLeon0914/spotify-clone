import { fetchAllPlaylists, fetchSongsByAlbumId } from "@/lib/data";

export async function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  const playlists = await fetchAllPlaylists();
  const playlist = playlists.find((playlist) => playlist.id === id);

  let songs = [];
  if (playlist) {
    songs = await fetchSongsByAlbumId(playlist.id);
  }

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}
