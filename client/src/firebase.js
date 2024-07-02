// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ab1cf.firebaseapp.com",
  projectId: "mern-blog-ab1cf",
  storageBucket: "mern-blog-ab1cf.appspot.com",
  messagingSenderId: "584906743696",
  appId: "1:584906743696:web:b7d5958e031d1d3bc31d15",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
