// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoXS9bClwC5iakW1GNHaqwJPWPrB6fwTQ",
  authDomain: "expert-job-demo.firebaseapp.com",
  projectId: "expert-job-demo",
  storageBucket: "expert-job-demo.appspot.com",
  messagingSenderId: "553797185367",
  appId: "1:553797185367:web:aa184724ef70ae3aead812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;