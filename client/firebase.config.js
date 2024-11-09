// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJlcHFnNCKpIRpDOJHh3LmN3Ab6TGl-U4",
  authDomain: "college-650ac.firebaseapp.com",
  projectId: "college-650ac",
  storageBucket: "college-650ac.firebasestorage.app",
  messagingSenderId: "810140153465",
  appId: "1:810140153465:web:b9f7a3d0105e91bb4a86a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Auth instance
const auth = getAuth(app);

export { auth };