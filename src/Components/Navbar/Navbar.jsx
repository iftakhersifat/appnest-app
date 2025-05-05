import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AUthContext } from '../Firebase/AuthProvider';

const Navbar = () => {
    const {user, logOut} =use(AUthContext);
    const handelLogout=()=>{
        logOut()
        .then(()=>{
            alert("LogOut Successfully")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-between items-center'>
            <div>
                <img className='w-42 -ml-4' src="/assets/logo.png" alt="" />
            </div>
            <div className='space-x-6'>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>Home</NavLink>
                <NavLink to="/apps" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>Apps</NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>My Profile</NavLink>
            </div>
            <div className='flex gap-4'>
                <img src="/assets/user.png" alt="" />
                {
                    user ? <button onClick={handelLogout} className='btn bg-gradient-to-b from-red-400 to-red-700 text-white px-6 rounded-lg text-[16px]'>Log Out</button> : <Link to="/auth/login" className='btn bg-gradient-to-b from-blue-400 to-blue-700 text-white px-6 rounded-lg text-[16px]'>Login</Link>
                }
            </div>
        </div>
        </div>
    );
};

export default Navbar;