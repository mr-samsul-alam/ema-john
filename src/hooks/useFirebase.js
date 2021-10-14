import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../FireBase/Firebase.init";
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const auth = getAuth()
    const GoogleProvider = new GoogleAuthProvider();
    const SignInUsingGoogle = () => {
       return signInWithPopup(auth, GoogleProvider)  
    }
    const logOut = () => {
        signOut(auth)
        .then(() => { 
            setUser({})
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                console.log(user);
            }
        })
        }, [])

        return {
            user, error, SignInUsingGoogle, logOut
        }

    }
export default useFirebase;