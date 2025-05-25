// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrutb4T41jHx-HRGqYXdsX62zilOKHwk",
  authDomain: "pizzahut-orders-1.firebaseapp.com",
  databaseURL: "https://pizzahut-orders-1-default-rtdb.firebaseio.com",
  projectId: "pizzahut-orders-1",
  storageBucket: "pizzahut-orders-1.firebasestorage.app",
  messagingSenderId: "374583144178",
  appId: "1:374583144178:web:a76a2132648e2d8fe72a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);