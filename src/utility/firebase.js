// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtPmJZMLWnY2h6ENMV3n_1SdE4ioba2TM",
  authDomain: "portfolio-b3b8e.firebaseapp.com",
  projectId: "portfolio-b3b8e",
  storageBucket: "portfolio-b3b8e.appspot.com",
  messagingSenderId: "806310158941",
  appId: "1:806310158941:web:e4d43d3d006e4d9ee723b4",
  measurementId: "G-59M55VVSYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
