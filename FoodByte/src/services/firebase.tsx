// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZF0g_-aUgrsw7pnsVMXAfyXCIGWIf6rc",
  authDomain: "foodbyte-a27b3.firebaseapp.com",
  projectId: "foodbyte-a27b3",
  storageBucket: "foodbyte-a27b3.appspot.com",
  messagingSenderId: "294529328744",
  appId: "1:294529328744:web:c75ce4a111ad3ef1d97ddd",
  measurementId: "G-NGYH1BQFRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);