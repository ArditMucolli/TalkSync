import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5GLzU8mVclTh4lgKTL5oCDWJuF2mkrDk",
  authDomain: "talksync-5512e.firebaseapp.com",
  projectId: "talksync-5512e",
  storageBucket: "talksync-5512e.appspot.com",
  messagingSenderId: "848142795777",
  appId: "1:848142795777:web:2a41e20ea10693485c6c00",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
