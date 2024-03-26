// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-ab0ce.firebaseapp.com",
  projectId: "mern-estate-ab0ce",
  storageBucket: "mern-estate-ab0ce.appspot.com",
  messagingSenderId: "478651550637",
  appId: "1:478651550637:web:acea0182ba128211076f24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);