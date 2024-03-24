// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //beacuase of using vite we need import.meta.env
  authDomain: "mern-blog-8132b.firebaseapp.com",
  projectId: "mern-blog-8132b",
  storageBucket: "mern-blog-8132b.appspot.com",
  messagingSenderId: "98335077881",
  appId: "1:98335077881:web:5607d189e03a1ec6787928",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
