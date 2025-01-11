import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4TJDrPJZe_YGt65fu8rR8HFBzX54F8Z4",
  authDomain: "paystream-6d065.firebaseapp.com",
  projectId: "paystream-6d065",
  storageBucket: "paystream-6d065.firebasestorage.app",
  messagingSenderId: "606799763691",
  appId: "1:606799763691:web:4c67e044d96609381fc6ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, signInWithEmailAndPassword, db };