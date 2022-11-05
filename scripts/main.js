import {app,auth,db} from "./firebaseconfig.js"
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
   
    const q = query(collection(db, "user"), where("uid", "!=", auth.currentUser.uid));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
   let data = doc.data()
   console.log(data.name)
   let div = document.querySelector(".div")
   
   

   div.innerHTML += `
   <ul id="main-ul">
   <li id="li-name" onclick="clickedUserUid('${data.uid}')" > ${data.name}</li>
   <li id="li-email"> ${data.email}</li>
   </ul>
   `
   

    console.log("We've get Data ");
  });
});
  } else {
    location="../index.html"
  }
});

function clickedUserUid(userUid){
  localStorage.setItem("userUid", JSON.stringify(userUid))
  location="../pages/messages.html"

}
window.clickedUserUid = clickedUserUid


let logOut = document.querySelector("#logout-icon")
logOut.addEventListener('click',logOutUserFunction)
function logOutUserFunction () {
  // const auth = getAuth();
  const user = auth.currentUser;
auth.signOut().then(() =>{
  console.log("logged Out").then(
    ()=> {
      location="../index.html"
    }
  )
}

)
  

    

}


