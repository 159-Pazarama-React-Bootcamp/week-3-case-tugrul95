
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDOivKN7VZO10TfFdbA2R9OES4fSxjHSB4",
    authDomain: "odev-react.firebaseapp.com",
    projectId: "odev-react",
    storageBucket: "odev-react.appspot.com",
    messagingSenderId: "87962040951",
    appId: "1:87962040951:web:4ef412378d015227972472",
    measurementId: "G-9446FYPMX6"
};

// Initialize firebase with config object
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const projectFirestore = getFirestore(app)
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        //save name, email and profile picture to local storage

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

export { auth, projectFirestore, getAuth, signInWithGoogle}