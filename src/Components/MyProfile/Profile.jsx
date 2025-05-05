import React, { use, useEffect } from 'react';
import { AUthContext } from '../Firebase/AuthProvider';
import NotFound from '../NotFound/NotFound';

const Profile = () => {
    useEffect(() => {
        document.title = "Profile | AppNest";
      }, []);

    const {user} =use(AUthContext);
    return (
        <div className='container mx-auto mb-28'>
            {
                user ? 
                <div className='text-center space-y-2'>
                    <img className='mx-auto' src={user.photoURL} alt="" />
                    <h1 className='text-2xl font-bold'>{user.displayName}</h1>
                    <h3>{user.email}</h3>
                </div> : <NotFound></NotFound>
            }
            
        </div>
    );
};

export default Profile;