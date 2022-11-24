// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAStLehBVz582-hBaYQOQCx4KyaLa_A69w",
  authDomain: "auth-test-d7825.firebaseapp.com",
  projectId: "auth-test-d7825",
  storageBucket: "auth-test-d7825.appspot.com",
  messagingSenderId: "69027398706",
  appId: "1:69027398706:web:5fed2c306490415663e82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
