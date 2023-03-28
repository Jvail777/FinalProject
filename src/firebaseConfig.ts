import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCp--BHiLUIBuUkU-s183cgIr9Un99FdCw",
    authDomain: "fantasybuilder.firebaseapp.com",
    projectId: "fantasybuilder",
    storageBucket: "fantasybuilder.appspot.com",
    messagingSenderId: "190607453230",
    appId: "1:190607453230:web:eccc1a96977421dea843bf"
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