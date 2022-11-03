import { app, auth, db } from "./firebaseconfig.js"

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";


        let login = document.querySelector("#login-button")
        login.addEventListener("click", loginUser)
        async function loginUser() {
            let email = document.querySelector("#email")
            let password = document.querySelector("#password")
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email.value, Password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Signed in Succesfully")
        window.location ="./pages/main.html"

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Failed To SignIn ")
                });
        }





