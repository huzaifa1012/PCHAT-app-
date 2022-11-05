import { auth,db} from "./firebaseconfig.js";
import {getAuth,onAuthStateChanged,  deleteUser} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";


// variables 
let name = document.querySelector("#user-name-h1")
let email = document.querySelector("#user-email-h2")


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    




    const q = query(collection(db, "user"), where("uid", "==", uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data()
        name.innerHTML = data.name      
        email.innerHTML = data.email      
        email.innerHTML = data.email      
      });
    });
let deleteAccount = document.querySelector("#delete-account")
deleteAccount.addEventListener("click", delteteUserFunction)
function delteteUserFunction (){

  const auth = getAuth();
  const user = auth.currentUser;
  
deleteUser(user).then(() => {
  console.log("userDeleted")
}).catch((error) => {
  // An error ocurred
  // ...
});
}



  } else {
    location="../index.html"
  }
});
