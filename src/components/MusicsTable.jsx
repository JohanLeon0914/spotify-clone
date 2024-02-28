import Time from "@/icons/Time.astro";
import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "@/components/Player";

const PlaylistTable = ({ songs, playlist }) => {
  const {
    isPlayingSong,
    setIsPlayingSong,
    setCurrentMusic,
    currentMusic,
    setIsPlaying,
  } = usePlayerStore((state) => state);

  const isCurrentSongPlayed = (song_id) => {
    return song_id === currentMusic.song?.id;
  };

  return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
      <thead className="">
        <tr className="text-zinc-400 text-sm">
          <th className="px-4 py-2 font-light">#</th>
          <th className="px-4 py-2 font-light">Título</th>
          <th className="px-4 py-2 font-light">Álbum</th>
        </tr>
      </thead>

      <tbody>
        <tr className="h-[16px]"></tr>
        {songs.map((song, index) => (
          <tr
            className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 hover:cursor-pointer overflow-hidden transition duration-300"
            onClick={() => {
              const currentSongIsSound = song.id === currentMusic.song?.id;
              if (currentSongIsSound && isPlayingSong) {
                setIsPlayingSong(false);
              } else {
                setIsPlayingSong(true);
                setCurrentMusic({ songs, playlist, song: songs[index] });
              }
              setIsPlaying(false);
            }}
            key={index}
          >
            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
              {isCurrentSongPlayed(song.id) ? (
                isPlayingSong ? (
                  <button className="card-play-button rounded-full bg-green-500 p-2">
                    <Pause />
                  </button>
                  
                ) : (
                  <button className="card-play-button rounded-full bg-green-500 p-2">
                    <Play className="text-green-500" />
                  </button>
                )
              ) : (
                <>{index + 1}</>
              )}
            </td>
            <td className="px-4 py-2 flex gap-3">
              <picture className="">
                <img src={song.image} alt={song.title} className="w-11 h-11" />
              </picture>
              <div className="flex flex-col">
                <h3 className="text-white text-base font-normal">
                  {song.title}
                </h3>
                <span>{song.artists.join(", ")}</span>
              </div>
            </td>
            <td className="px-4 py-2">{song.album}</td>
            <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
              {song.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlaylistTable;
