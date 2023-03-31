import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoRGSKV5OStOWOjpur6zxtzX43jPJf-lo",
  authDomain: "finalproject-5656a.firebaseapp.com",
  projectId: "finalproject-5656a",
  storageBucket: "finalproject-5656a.appspot.com",
  messagingSenderId: "906517995228",
  appId: "1:906517995228:web:3c924109ea1a2b14065e19"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  const authProvider = new GoogleAuthProvider();

  export function signInWithGoogle() : void {
    signInWithPopup(auth, authProvider);
  }

  export function signInWithPassword(email:string, password:string){
    signInWithEmailAndPassword(auth, email, password);
  }

  export function signOut() : void {
    auth.signOut();
  }