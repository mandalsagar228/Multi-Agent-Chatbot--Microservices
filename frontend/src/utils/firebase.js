// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "autochat-8ee8b.firebaseapp.com",
  projectId: "autochat-8ee8b",
  storageBucket: "autochat-8ee8b.firebasestorage.app",
  messagingSenderId: "561498638948",
  appId: "1:561498638948:web:398126d6e18270d0a16d71",
  measurementId: "G-11E1PDHPMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
