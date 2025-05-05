import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from './Firebase';
export const AUthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authData ={
        user,
        setUser,

        createUser,
    }

    return <AUthContext value={authData}>
        {children}
    </AUthContext>
};

export default AuthProvider;