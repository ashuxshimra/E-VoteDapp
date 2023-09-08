import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHMsPQwszUkVXEpUasd-YKZxISXtTPUpY",
  authDomain: "e-votedapp.firebaseapp.com",
  projectId: "e-votedapp",
  storageBucket: "e-votedapp.appspot.com",
  messagingSenderId: "110791872072",
  appId: "1:110791872072:web:a09a01558b6a7012c1127d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
