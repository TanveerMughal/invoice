// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs4l-OuSsx3mXepi0r1KSv7O2y2Yvz9Qw",
  authDomain: "invoice-b1878.firebaseapp.com",
  projectId: "invoice-b1878",
  storageBucket: "invoice-b1878.appspot.com",
  messagingSenderId: "935517859696",
  appId: "1:935517859696:web:3cdeed6120863062fee9b5",
  measurementId: "G-0R5L67V2QS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
