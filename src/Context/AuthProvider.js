import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBaseInit/FireBaseInit';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [loader,setLoader]=useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        setLoader(true)
        return signOut(auth)
    }
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }
    const googleLogin=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    const forgetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoader(false)
    });
    return ()=>unsubscribe();
},[])


    const authInfo = {
        auth,
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        loader,
        googleLogin,
        forgetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;