import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnZrLRo7zyk0o3EnZJtB_8oCsSHCJfJZA",
  authDomain: "instagram-clone-11ccf.firebaseapp.com",
  projectId: "instagram-clone-11ccf",
  storageBucket: "instagram-clone-11ccf.appspot.com",
  messagingSenderId: "425201199949",
  appId: "1:425201199949:web:d3629832243f6a37e6e504",
  measurementId: "G-26D82800Y3",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
