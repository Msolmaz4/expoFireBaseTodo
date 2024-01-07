import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
        apiKey: "AIzaSyDDwGa9Eln6VFNHRh_b8yMWraKq7otuw2s",
        authDomain: "uplifted-matrix-408901.firebaseapp.com",
        projectId: "uplifted-matrix-408901",
        storageBucket: "uplifted-matrix-408901.appspot.com",
        messagingSenderId: "619494028961",
        appId: "1:619494028961:web:3a220ef88ef225279da2e0"
      };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

