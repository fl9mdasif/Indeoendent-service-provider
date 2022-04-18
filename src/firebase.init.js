// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOGC5dODK-9cByDWkVPO3nusQSFX_0epw",
  authDomain: "capturedmoment.firebaseapp.com",
  projectId: "capturedmoment",
  storageBucket: "capturedmoment.appspot.com",
  messagingSenderId: "1043378845993",
  appId: "1:1043378845993:web:77cf65b0360e4f133f9f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;