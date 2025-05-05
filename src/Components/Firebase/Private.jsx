import React, { use } from 'react';
import { AUthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const Private = ({children}) => {
    const {user, isLoading} = use(AUthContext);

    if(isLoading){
        return <span className="loading loading-bars loading-xl ml-50"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>

};

export default Private;