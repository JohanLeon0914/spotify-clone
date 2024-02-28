import { usePlayerStore } from "../store/playerStore";
import { Pause, Play } from "./Player";

export function CardPlayButton({ id, size = "small", song_position = 0 }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic, setIsPlayingSong } =
    usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlaying) {
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
        setCurrentMusic({ songs, playlist, song: songs[song_position] });
      });
  };

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}
