import { app, db,auth } from "./firebaseconfig.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js" 
import { collection, addDoc,} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";


// To Image 
let profileImg = document.querySelector("#profile-image")
profileImg = profileImg.files[0]



let register = document.querySelector("#register-button")
register.addEventListener("click", addToFirestore)
async function addToFirestore() {
  let name = document.querySelector("#name")
  let email = document.querySelector("#email")
  let password = document.querySelector("#password")
  
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email.value, Password.value)
      .then((userCredential) => {
         
        const user = userCredential.user;
        console.log("user Created")
        saveDataToFirestore()
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Sorry we failed to register user")
      });


      async function saveDataToFirestore(){
      const docRef = await addDoc(collection(db, "user"), {
        name: name.value,
        email: email.value,
        uid: auth.currentUser.uid
        
      });
      console.log("Document written with ID: ", docRef.id); 
      window.location="./main.html"
    }
    }

    
    
    
    
    