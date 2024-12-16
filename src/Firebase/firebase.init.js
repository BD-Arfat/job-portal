// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-N2M_s30IHdN9WMVhKRnyp17bsQ4XpEE",
  authDomain: "job-portal-3444a.firebaseapp.com",
  projectId: "job-portal-3444a",
  storageBucket: "job-portal-3444a.firebasestorage.app",
  messagingSenderId: "298776612706",
  appId: "1:298776612706:web:83d47f1294ba7ca56fa63b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
