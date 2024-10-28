import { usePlayerStore } from "../store/playerStore";
import { useEffect, useRef, useState } from "react";
import { Slider } from "./Slider";

export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const VolumeSilence = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen apagado"
    viewBox="0 0 16 16"
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
);

export const Volume = () => (
  <svg
    fill="currentColor"
    role="presentation"
    height="16"
    width="16"
    aria-hidden="true"
    aria-label="Volumen alto"
    id="volume-icon"
    viewBox="0 0 16 16"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

export const NextIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" stroke="#2c3e50" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    />
  </svg>
);

export const PrevIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" stroke="#2c3e50" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z"
      strokeWidth="0"
      fill="currentColor"
    />
    <path
      d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    />
  </svg>
);

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div
      className={`
          flex items-center gap-5 relative
          overflow-hidden
        `}
    >
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img className="" src={image} alt={title} />
      </picture>

      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">{title}</h3>
        <span className="text-xs opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

const SongControl = ({ audio, song }) => {
  const { setIsSongEnded } = usePlayerStore((state) => state);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = audio?.current?.duration ?? 0;

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audio.current.currentTime === audio?.current?.duration) {
      setIsSongEnded(true);
    }
    setCurrentTime(audio.current.currentTime);
  };

  const formatTime = (time) => {
    if (time == null) return `0:00`;

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="md:flex md:flex-row gap-x-3 text-xs pt-2 md:ml-4">
      <span className="hidden text-[14px] md:block opacity-50 w-12 text-right">
            {formatTime(currentTime)}
          </span>
      <Slider
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-[360px] md:w-[500px]"
        onValueChange={(value) => {
          const [newCurrentTime] = value;
          if (!song) return;
          audio.current.currentTime = newCurrentTime;
        }}
      />

      <span className="opacity-50 w-12 hidden md:block text-[14px]">
        {duration ? formatTime(duration) : "0:00"}
      </span>

      <div className="flex md:hidden gap-[300px] mt-1.5 text-[14px]">
        <div className="min-w-8">
          <span className="opacity-50 w-12 text-right">
            {formatTime(currentTime)}
          </span>
        </div>

        <div>
          <span className="opacity-50 w-12 md:hidden">
            {duration ? formatTime(duration) : "0:00"}
          </span>
        </div>
      </div>
    </div>
  );
};

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeSilenced = volume < 0.1;

  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex justify-center gap-x-2 text-white">
      <button
        className="opacity-70 hover:opacity-100 transition"
        onClick={handleClickVolumen}
      >
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[95px]"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
};

export function Player() {
  const {
    currentMusic,
    volume,
    isPlayingSong,
    setIsPlayingSong,
    setCurrentAudioTime,
    currentAudioTime,
    setCurrentSong,
    setCurrentMusic,
    currentSong,
  } = usePlayerStore((state) => state);
  const audioRef = useRef();

  useEffect(() => {
    isPlayingSong ? audioRef.current.play() : audioRef.current.pause();
    setCurrentAudioTime(audioRef.current.currentTime);
  }, [isPlayingSong]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song } = currentMusic;
    if (song) {
      setCurrentSong(song);
      const src = song.href; 
      audioRef.current.src = src;
      audioRef.current.volume = volume;
  
      if (currentAudioTime) {
        audioRef.current.currentTime = currentAudioTime;
      }
  
      setCurrentAudioTime(null);
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    if (!currentSong) return;
    setIsPlayingSong(!isPlayingSong);
  };

  const SelectPrevSong = () => {
    const { song, songs } = currentMusic;
    if (!song) {
      return;
    }

    const currentIndex = songs.findIndex((s) => s.id === song.id);
    let newIndex;
    if (currentIndex === 0) {
      // if is the first song on the playlist, select the last one
      newIndex = songs.length - 1;
    } else {
      // else, select the previous
      newIndex = currentIndex - 1;
    }

    const prevSong = songs[newIndex];
    setCurrentMusic({ ...currentMusic, song: prevSong });
    setCurrentAudioTime(null);
    setIsPlayingSong(true);
  };

  const SelectNextSong = () => {
    const { song, songs } = currentMusic;
    if (!song) {
      return;
    }
    const currentIndex = songs.findIndex((s) => s.id === song.id);

    let newIndex;
    if (currentIndex === songs.length - 1) {
      // if is the last song on the playlist, select the first one
      newIndex = 0;
    } else {
      // else, select the previous
      newIndex = currentIndex + 1;
    }

    const nextSong = songs[newIndex];
    setCurrentMusic({ ...currentMusic, song: nextSong });
    setCurrentAudioTime(null);
    setIsPlayingSong(true);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-4 z-50 md:items-center mx-auto gap-4">
      <div className="ml-4 mt-2 max-w-[300px] md:min-w-[300px]">
        <CurrentSong {...currentMusic.song} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-4 justify-center">
          <div className="flex justify-center md:mt-2">
            <SongControl audio={audioRef} song={currentMusic.song} />
          </div>

          <div className="flex flex-row gap-x-9">
            <button onClick={SelectPrevSong}>
              <PrevIcon />
            </button>
            <button className="bg-white rounded-full p-4" onClick={handleClick}>
              {!isPlayingSong ? <Play /> : <Pause />}
            </button>
            <button onClick={SelectNextSong}>
              <NextIcon />
            </button>
          </div>

          <audio ref={audioRef} />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <VolumeControl />
      </div>
    </div>
  );
}
