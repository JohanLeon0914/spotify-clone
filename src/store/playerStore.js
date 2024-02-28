import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 1,
    isPlayingSong: false,
    isSongEnded: false,
    currentAudioTime: null,
    currentSong: null,
    setIsPlayingSong: (isPlayingSong) => set({ isPlayingSong }),
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setIsSongEnded: (isSongEnded) => set({ isSongEnded }),
    setCurrentAudioTime: (currentAudioTime) => set({ currentAudioTime }),
    setCurrentSong: (currentSong) => set({ currentSong }),
}))