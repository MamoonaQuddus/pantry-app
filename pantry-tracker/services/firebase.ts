// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfy_6jSeAVH15ZTHmGlhJUwwaNyXBra6I",
  authDomain: "pantry-app-2ce3e.firebaseapp.com",
  projectId: "pantry-app-2ce3e",
  storageBucket: "pantry-app-2ce3e.appspot.com",
  messagingSenderId: "359490993128",
  appId: "1:359490993128:web:06e2aa101ea99f0615025d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);