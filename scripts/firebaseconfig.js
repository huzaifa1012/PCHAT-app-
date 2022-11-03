import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBSLcnsdwl55KtK4RG4flH_0TvqjlkwxA",
    authDomain: "todo-app-by-huzaifa.firebaseapp.com",
    projectId: "todo-app-by-huzaifa",
    storageBucket: "todo-app-by-huzaifa.appspot.com",
    messagingSenderId: "833379649635",
    appId: "1:833379649635:web:510b6c7eb415b6a27b9056"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 