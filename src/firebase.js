import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyABAax8we06zBeTkc6EGMMJgFFN-7jBbfM",
    authDomain: "discord-clone-cc188.firebaseapp.com",
    projectId: "discord-clone-cc188",
    storageBucket: "discord-clone-cc188.appspot.com",
    messagingSenderId: "367314622895",
    appId: "1:367314622895:web:d94666a4edbc1e5449f75a"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore()
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  export default app;
  export { auth, provider, db }