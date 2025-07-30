// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCowzfbkdbl7NEokrR7DX6rOgkHSg0fQE4",
  authDomain: "store-in-a-link-saas.firebaseapp.com",
  projectId: "store-in-a-link-saas",
  storageBucket: "store-in-a-link-saas.firebasestorage.app",
  messagingSenderId: "524578981747",
  appId: "1:524578981747:web:6b7beccea2767b631c2706"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
