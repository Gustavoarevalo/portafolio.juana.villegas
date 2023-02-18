import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJF8BKeFcOkfxu2CajRyHlXcqx1choSdQ",
  authDomain: "portafolio-juana-villegas.firebaseapp.com",
  projectId: "portafolio-juana-villegas",
  storageBucket: "portafolio-juana-villegas.appspot.com",
  messagingSenderId: "622413454826",
  appId: "1:622413454826:web:8a12473bf3e2a65308a693",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
