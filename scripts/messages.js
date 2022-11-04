import { auth, db, app } from "./firebaseconfig.js";
import { collection, query, where, onSnapshot, addDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";


const uids = (user1, user2) => {
  if (user1 > user2) {
    printUid = user1 + user2;
    return printUid
  }
  else {
    printUid = user2 + user1
    return printUid
  }
}





// Variables
let user1
let user2
let headName = document.querySelector("#name")
let headEmail = document.querySelector("#email")
let ul = document.querySelector("#ul")
let text = document.querySelector("#textInput")
let sendChat = document.querySelector("#sendChat")
// const uids = ""
let printUid

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid
    user1 = auth.currentUser.uid
    uids(user1, user2)
    getChats()
  } else {
    alert("Please Sign in First")
  }



  async function addChats() {
    const docRef = await addDoc(collection(db, "messages"), {
      user1: text.value,
      uid: uids (user1, user2)
    });
    text.value = ""
  }
  sendChat.addEventListener("click", addChats)
  // console.log(user1, user2)




  
  function getChats() {
    const q = query(collection(db, "messages"), where("uid", "==", printUid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.size > 0) {
        ul.innerHTML = ""
        querySnapshot.forEach((doc) => {
          let data = doc.data()
          ul.innerHTML +=
            `<li>${data.user1}</li>`

        });
      }
    });
  }
});

user2 = localStorage.getItem("userUid")
user2 = JSON.parse(user2)
const q = query(collection(db, "user"), where("uid", "==", user2));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    let data = doc.data()

    headName.innerHTML = data.name
    headEmail.innerHTML = data.email

  });
});
// Head Complete
