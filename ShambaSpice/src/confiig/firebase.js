// src/config/firebase.js
import { initializeApp } from "Firebase/app";
import { getAnalytics } from "Firebase/analytics";
import { getAuth } from "Firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8aM0CJxrR-KMLtEwhbRL5Jo84RRLKZH0",
  authDomain: "shambaspice.firebaseapp.com",
  projectId: "shambaspice",
  storageBucket: "shambaspice.firebasestorage.app",
  messagingSenderId: "988620475570",
  appId: "1:988620475570:web:0c58caeffb57b880b08dab",
  measurementId: "G-E5QT4NXBH1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
