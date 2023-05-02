// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArx8-YfKy7Yx_Bcm6lR-uQk3SgRJ6b6GM",
  authDomain: "secret-chef-hunter.firebaseapp.com",
  projectId: "secret-chef-hunter",
  storageBucket: "secret-chef-hunter.appspot.com",
  messagingSenderId: "552679676498",
  appId: "1:552679676498:web:6268a29fe0959482391d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;