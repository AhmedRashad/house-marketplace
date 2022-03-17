// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVXijUWYHkjlsExRmsQqP5XDID6etb9Rk",
  authDomain: "house-marketplace-app-db053.firebaseapp.com",
  projectId: "house-marketplace-app-db053",
  storageBucket: "house-marketplace-app-db053.appspot.com",
  messagingSenderId: "83591075834",
  appId: "1:83591075834:web:c2f82b8f10e8f92fdd7643",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
