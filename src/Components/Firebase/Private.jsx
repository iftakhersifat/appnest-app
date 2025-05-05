import React, { use } from 'react';
import { AUthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const Private = ({children}) => {
    const {user} = use(AUthContext);

    if(user){
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>

};

export default Private;