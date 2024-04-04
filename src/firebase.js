// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbSFVh9USi9Zr8BRCzUJLm6PjYkg_BKo8",
  authDomain: "uplift-me-9b5e3.firebaseapp.com",
  projectId: "uplift-me-9b5e3",
  storageBucket: "uplift-me-9b5e3.appspot.com",
  messagingSenderId: "21789647042",
  appId: "1:21789647042:web:d39b53bd0163a53c5bdb5b",
  measurementId: "G-MNTYR62QZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};
