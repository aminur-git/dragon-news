// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6MR96HfeKFg74kv9VfBbGd353zVBp9uU",
  authDomain: "dragon-news-824be.firebaseapp.com",
  projectId: "dragon-news-824be",
  storageBucket: "dragon-news-824be.firebasestorage.app",
  messagingSenderId: "1074387864495",
  appId: "1:1074387864495:web:1e4aa3b38c19fb2796fd5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app