// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9_1gFiHPHxOgNZEcsrP41moSrKh-ghW4",
  authDomain: "capstone-aab02.firebaseapp.com",
  projectId: "capstone-aab02",
  storageBucket: "capstone-aab02.firebasestorage.app",
  messagingSenderId: "729906644873",
  appId: "1:729906644873:web:0da8aabbab1ec2af190358",
  measurementId: "G-4CW1L5WM7P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
