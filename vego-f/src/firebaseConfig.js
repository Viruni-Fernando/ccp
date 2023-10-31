// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsrEdNyqqhl36_ALAP6mWkopRZ89a7jaA",
  authDomain: "churn-prediction-839b2.firebaseapp.com",
  projectId: "churn-prediction-839b2",
  storageBucket: "churn-prediction-839b2.appspot.com",
  messagingSenderId: "956284273348",
  appId: "1:956284273348:web:c48a9ef9f7743fd9f57f91",
  measurementId: "G-BH7RLRZPB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);