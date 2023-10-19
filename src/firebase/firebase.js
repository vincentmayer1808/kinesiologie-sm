require('dotenv').config()
import firebase from "firebase/compat/app";

import 'firebase/compat/firestore';
const apiKey=process.env.FB_APIKEY

// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "kinesiologie-sm.firebaseapp.com",
  projectId: "kinesiologie-sm",
  storageBucket: "kinesiologie-sm.appspot.com",
  messagingSenderId: "680867401694",
  appId: "1:680867401694:web:5038e384477778437ad74f",
  measurementId: "G-CR1FSTKEH8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

// const analytics = getAnalytics(app);