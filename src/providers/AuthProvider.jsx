import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
   const[user, setUser] = useState(null)
   const [loader, setLoader] = useState(true)

    const  createUser = (email, password) =>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password)
    
    }

    const signUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

       

    const profileUpdate = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            
            displayName: name, photoURL: photo
           
        })
       
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) =>{
            console.log('hello', loggedUser)
           setUser(loggedUser)
           setLoader(false)
           

        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        signUser,
        profileUpdate,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;