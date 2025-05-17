// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjlEgX25QMxn58oVTIB_UV8lHDOxnTTzA",
  authDomain: "allaboutoptions-1acca.firebaseapp.com",
  projectId: "allaboutoptions-1acca",
  storageBucket: "allaboutoptions-1acca.firebasestorage.app",
  messagingSenderId: "115181365241",
  appId: "1:115181365241:web:b2ed2c55d4e03ff37eff28",
  measurementId: "G-TZ5ZDPQXMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);