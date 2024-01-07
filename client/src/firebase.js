// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d2afa.firebaseapp.com",
  projectId: "mern-estate-d2afa",
  storageBucket: "mern-estate-d2afa.appspot.com",
  messagingSenderId: "823649062500",
  appId: "1:823649062500:web:f0b25211eb79076213d971"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);