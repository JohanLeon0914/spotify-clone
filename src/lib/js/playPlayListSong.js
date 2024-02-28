import { usePlayerStore } from '@/store/playerStore'; 

export function updateMusicAndPlay(newMusic) {
    usePlayerStore.setState(state => ({
        currentMusic: newMusic,
        isPlaying: true
    }));
}