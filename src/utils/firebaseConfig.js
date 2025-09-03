// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbMYuOCAgzXtlnpvNTWAXSOkfTOOl37sw",
  authDomain: "netflix-d88a6.firebaseapp.com",
  projectId: "netflix-d88a6",
  storageBucket: "netflix-d88a6.firebasestorage.app",
  messagingSenderId: "306702872518",
  appId: "1:306702872518:web:fa27d0ee9334b4b8ef4cc7",
  measurementId: "G-YX20DBGESP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();