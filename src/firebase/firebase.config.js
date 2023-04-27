// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwYsThtuWUxziP_yt89jahy0ZxtoBX9pA",
  authDomain: "the-news-dragon-e9daa.firebaseapp.com",
  projectId: "the-news-dragon-e9daa",
  storageBucket: "the-news-dragon-e9daa.appspot.com",
  messagingSenderId: "1042521505421",
  appId: "1:1042521505421:web:cbf716ab43d656b0f66cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;