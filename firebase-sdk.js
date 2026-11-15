// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOMcVVEnSo5jMVv2jwmN8JjGMJpsUjL8Y",
  authDomain: "am-store-12b7d.firebaseapp.com",
  projectId: "am-store-12b7d",
  storageBucket: "am-store-12b7d.firebasestorage.app",
  messagingSenderId: "612243983909",
  appId: "1:612243983909:web:488642ebbe7a9bebb639cc",
  measurementId: "G-CSGE1XE0LN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
