import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMJm0HI71nZkp-_vnY9NQETO3g53uhK5w",
  authDomain: "homeland-33e1f.firebaseapp.com",
  projectId: "homeland-33e1f",
  storageBucket: "homeland-33e1f.appspot.com",
  messagingSenderId: "646426358742",
  appId: "1:646426358742:web:da815cbab4360c56792a77",
  measurementId: "G-LW981YXKF8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
const auth = getAuth;
export { app, analytics, auth };
