import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXLCtyUG5WYMq2kl59z542Z09obnp5EEM",
  authDomain: "ziltoweb-870d7.firebaseapp.com",
  databaseURL:
    "https://ziltoweb-870d7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ziltoweb-870d7",
  storageBucket: "ziltoweb-870d7.firebasestorage.app",
  messagingSenderId: "134464618700",
  appId: "1:134464618700:web:2d6559247210c7e20c4269",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);