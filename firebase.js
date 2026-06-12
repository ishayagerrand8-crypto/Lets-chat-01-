// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBqfgZ5viIKnzhXMVYctbf-L3NTaSo6bSI",
  authDomain: "let-s-chat-3f5c2.firebaseapp.com",
  projectId: "let-s-chat-3f5c2",
  storageBucket: "let-s-chat-3f5c2.firebasestorage.app",
  messagingSenderId: "870798798773",
  appId: "1:870798798773:web:4bf5120353b75fcff073fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make available globally
window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;