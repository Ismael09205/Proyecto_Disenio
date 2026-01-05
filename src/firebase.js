// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN0SONW5l8LkeOz8NVv3-OaoKk6nXb494",
  authDomain: "smartmaquet-de639.firebaseapp.com",
  projectId: "smartmaquet-de639",
  storageBucket: "smartmaquet-de639.firebasestorage.app",
  messagingSenderId: "798515935782",
  appId: "1:798515935782:web:d30d9cd2949272633644e7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const authFirebase=getAuth();
export const dbFirebase=getFirestore(appFirebase);
export default appFirebase;
