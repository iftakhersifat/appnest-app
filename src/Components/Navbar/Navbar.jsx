import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-between items-center'>
            <div>
                <img className='w-38' src="/assets/logo.png" alt="" />
            </div>
            <div className='space-x-6'>
                <NavLink to="/apps" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>Apps</NavLink>
                <NavLink to="/profile">My Profile</NavLink>
            </div>
            <div>
                <button className='btn bg-gradient-to-b from-blue-400 to-blue-700 text-white px-6 rounded-lg text-[16px]'>Login</button>
            </div>
        </div>
        </div>
    );
};

export default Navbar;