import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Firebase';
export const AUthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    console.log(user)


    // for private jsx
    const [isLoading, setLoading] =useState(true);


    // for google login
    const googleProvider = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }


    // new user
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // hold login info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])


    // login
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // logout
    const logOut =()=>{
        return signOut(auth);
    }


    // update user
    const UpdateUser =(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }


    const authData ={
        user,
        setUser,


        createUser,
        signIn,
        logOut,
        UpdateUser,
        googleProvider,


        isLoading,
        setLoading,
    }


    return <AUthContext.Provider value={authData}>
        {children}
    </AUthContext.Provider>
};


export default AuthProvider;
