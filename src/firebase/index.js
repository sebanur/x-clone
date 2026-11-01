// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3hwTRDwyLdsJYda__LifngKYbvrSUbDM",
  authDomain: "twitter-eb224.firebaseapp.com",
  projectId: "twitter-eb224",
  storageBucket: "twitter-eb224.firebasestorage.app",
  messagingSenderId: "818802784933",
  appId: "1:818802784933:web:8888f714019ec1a1916b4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlaycısının kurulum
export const provider = new GoogleAuthProvider();

// firestore veritabanı referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);
