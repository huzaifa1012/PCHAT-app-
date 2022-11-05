import {app,auth} from"./firebaseconfig.js"
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";






let sendPasswordReset = document.querySelector("#reset-password-button")
sendPasswordReset.addEventListener("click",passwordResetFunction)
function passwordResetFunction() {
    
    let email = document.querySelector("#email")
    email= email.value
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        swal("Reset Link Send", "check your mail Now!", "success");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("sprry")
      });
}