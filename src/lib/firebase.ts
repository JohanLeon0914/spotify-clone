import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAsAs5NRYISDh4I91INi3OGa3uCF-DZOVo",
    authDomain: "playlists-aws-s3.firebaseapp.com",
    projectId: "playlists-aws-s3",
    storageBucket: "playlists-aws-s3.appspot.com",
    messagingSenderId: "398801009012",
    appId: "1:398801009012:web:d4bcc5b8d032685526d421"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);

export async function uploadFile(file: any) {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}