// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIQkbd4A6-11Xo03BSHL_eqQQp5cWWHVk",
  authDomain: "dtisk-59323.firebaseapp.com",
  projectId: "dtisk-59323",
  storageBucket: "dtisk-59323.appspot.com",
  messagingSenderId: "245122628733",
  appId: "1:245122628733:web:aadd94b1ac114f89d80514",
  measurementId: "G-YGVDGZLV31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const getData = () => getFirestore(app);