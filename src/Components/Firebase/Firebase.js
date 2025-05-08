// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ynVmBeGOhf_ow4FXfi4DDhKr-j43Qx4",
  authDomain: "appnest-8286d.firebaseapp.com",
  projectId: "appnest-8286d",
  storageBucket: "appnest-8286d.firebasestorage.app",
  messagingSenderId: "172877523003",
  appId: "1:172877523003:web:82beb228fb402a89c6941e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);