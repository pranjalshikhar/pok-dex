// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCowYrf1lxf_wTkW4nJTW6jsfiphm-21QI",
  authDomain: "pokedex-f028c.firebaseapp.com",
  projectId: "pokedex-f028c",
  storageBucket: "pokedex-f028c.appspot.com",
  messagingSenderId: "869195458389",
  appId: "1:869195458389:web:fb16effbde18c0be2df1dc",
  measurementId: "G-QF0859F79D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
