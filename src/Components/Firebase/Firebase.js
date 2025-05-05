// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOBJnWeglpN5LV33cUUVTfsAQTf51o6ac",
  authDomain: "simple-firebase-auth-7d620.firebaseapp.com",
  projectId: "simple-firebase-auth-7d620",
  storageBucket: "simple-firebase-auth-7d620.firebasestorage.app",
  messagingSenderId: "1029321316915",
  appId: "1:1029321316915:web:3f6770da46eca4e841a146"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
