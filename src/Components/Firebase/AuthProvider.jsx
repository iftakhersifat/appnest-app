import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Firebase';
export const AUthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    console.log(user)

    // new user
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // hold login info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    // login
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }



    const authData ={
        user,
        setUser,

        createUser,
        signIn,
    }

    return <AUthContext value={authData}>
        {children}
    </AUthContext>
};

export default AuthProvider;