import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "@/components/Player";
import { useEffect } from "react";
const TimeIcon = () => (
  <svg
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
  </svg>
);

const PlaylistTable = ({ songs, playlist }) => {
  const {
    isPlayingSong,
    setIsPlayingSong,
    setCurrentMusic,
    currentMusic,
    setIsSongEnded,
    isSongEnded,
    isPlaying,
    setCurrentAudioTime,
    randomModeIds,
  } = usePlayerStore((state) => state);

  const isCurrentSongPlayed = (song) => {
    return (
      song.id === currentMusic.song?.id &&
      playlist.id === currentMusic.playlist.id
    );
  };

  const playNextSongInThePlaylist = () => {
    if (randomModeIds.includes(playlist.id)) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * songs.length);
      } while (randomIndex === songs.indexOf(currentMusic.song));

      setCurrentMusic({ songs, playlist, song: songs[randomIndex] });
    } else {
      const currentSong = currentMusic.song;
      const currentIndexSong = songs.indexOf(currentSong);

      if (currentIndexSong === songs.length - 1) {
        setCurrentMusic({ songs, playlist, song: songs[0] });
      } else {
        setCurrentMusic({ songs, playlist, song: songs[currentIndexSong + 1] });
      }
    }
  };

  useEffect(() => {
    if ((isSongEnded && isPlayingSong) || (isSongEnded && isPlaying)) {
      playNextSongInThePlaylist();
      setIsSongEnded(false);
    }
  }, [isSongEnded]);

  const selectSongOfTheTable = (song, index) => {
    // If a song is currently playing
    if (isPlayingSong) {
      // Pause the playback
      setIsPlayingSong(false);

      // If the user selects a different song to play, reset the playback time and selects the new song
      if (!isCurrentSongPlayed(song)) {
        setIsPlayingSong(true);
        setCurrentAudioTime(null);
        setCurrentMusic({ songs, playlist, song: songs[index] });
      } else {
        // If the same song is selected again, resume playback
        setIsPlayingSong(!isPlayingSong);
      }
    } else {
      // If no song is currently playing
      // Start playback
      setIsPlayingSong(true);
      // Set the selected song for playback
      setCurrentMusic({ songs, playlist, song: songs[index] });

      // If the user selects a different song, reset the playback time
      if (!isCurrentSongPlayed(song)) {
        setCurrentAudioTime(null);
      }
    }
  };

  return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
      <thead className="">
        <tr className="text-zinc-400 text-sm">
          <th className="px-4 py-2 font-light">#</th>
          <th className="px-4 py-2 font-light">Título</th>
          <th className="hidden md:table-cell px-4 py-2 font-light">Álbum</th>
          <th className="hidden md:table-cell px-4 py-2 font-light">
            <TimeIcon />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="h-[16px]"></tr>
        {songs.map((song, index) => (
          <tr
            className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 hover:cursor-pointer overflow-hidden transition duration-300"
            onClick={() => selectSongOfTheTable(song, index)}
            key={index}
          >
            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
              {isCurrentSongPlayed(song) ? (
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
                <h3 className="text-white text-base font-normal overflow-hidden md:overflow-visible whitespace-nowrap md:whitespace-normal">
                  {song.title.length > 20 && window.innerWidth < 768
                    ? `${song.title.substring(0, 20)}...`
                    : song.title}
                </h3>
                <span>{song.artists.join(", ")}</span>
              </div>
            </td>
            <td className="hidden md:table-cell px-4 py-2">{song.album}</td>
            <td className="hidden md:table-cell px-4 py-2 rounded-tr-lg rounded-br-lg">
              {song.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlaylistTable;
