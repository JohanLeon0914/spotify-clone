import { usePlayerStore } from "../store/playerStore";
import { Pause, Play } from "./Player";

export function CardPlayButton({ id, size = "small" }) {
  const {
    currentMusic,
    setIsPlaying,
    setCurrentMusic,
    setIsPlayingSong,
    isPlayingSong,
    currentSong,
    setCurrentAudioTime,
  } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlayingSong && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (!currentMusic) {
      return;
    }
    if (isPlayingSong && isPlayingPlaylist) {
      setIsPlaying(false);
      setIsPlayingSong(false);
      return;
    } 
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setIsPlayingSong(true);
        setIsPlaying(true);
        if (currentMusic?.playlist?.id === id) {
          setCurrentMusic({ songs, playlist, song: currentSong });
        } else {
          setCurrentAudioTime(null);
          setCurrentMusic({ songs, playlist, song: songs[0] });
        }
      });
  };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}
