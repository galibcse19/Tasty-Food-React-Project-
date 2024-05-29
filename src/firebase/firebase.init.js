// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIPet62zDZtl6oCpfGRw8E8f3uQrHU3TE",
  authDomain: "tasty-food-83b3c.firebaseapp.com",
  projectId: "tasty-food-83b3c",
  storageBucket: "tasty-food-83b3c.appspot.com",
  messagingSenderId: "566222677101",
  appId: "1:566222677101:web:f5a69f80fcdf158b5d0b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;