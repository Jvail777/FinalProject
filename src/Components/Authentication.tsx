import { signInWithGoogle, signOut } from "../firebaseConfig"
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import "../css/Authentication.css"

export function Authentication(){
    const { user } = useContext(AuthContext);

    return(
    <div>
        {
            user == null ? 
            <button className="AuthBtn" onClick={signInWithGoogle}>Sign in with Google</button>
            :
            <button className="AuthBtn" onClick={signOut}>Sign Out</button>
        }
    </div>)
}