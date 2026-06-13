import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqfgZ5viIKnzhXMVYctbf-L3NTaSo6bSI",
  authDomain: "let-s-chat-3f5c2.firebaseapp.com",
  projectId: "let-s-chat-3f5c2",
  storageBucket: "let-s-chat-3f5c2.firebasestorage.app",
  messagingSenderId: "870798798773",
  appId: "1:870798798773:web:4bf5120353b75fcff073fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase + Firestore Connected!");
