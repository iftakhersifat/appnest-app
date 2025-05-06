import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AUthContext } from '../Firebase/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user, logOut} =use(AUthContext);
    const handelLogout=()=>{
        logOut()
        .then(()=>{
            toast.success("Logout successfully!")
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-between items-center flex-wrap'>
            {/* image section */}
                <div className="navbar-start">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                      </div>
                
                    <ul tabIndex={0} className="menu menu-sm dropdown-content border-1 border-blue-200 bg-gradient-to-b from-blue-400 to-blue-700 text-white bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-green-500 underline text-[18px]" : "text-[18px]"}>Home</NavLink>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "text-green-500 underline text-[18px]" : "text-[18px]"}>My Profile</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-500 underline text-[18px]" : "text-[18px]"}>About Us</NavLink>
                    </ul>
                
                    </div>
                
                    {/* image sections */}
                    <div>
                        <img className='w-42 -ml-4' src="/assets/logo.png" alt="logo" />
                    </div>
                
                  </div>

            {/* link section */}
            <div className='-ml-[650px]'>
            <div className='space-x-6 lg:flex hidden'>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>Home</NavLink>
                <NavLink to="/apps" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>Apps</NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>My Profile</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 underline text-[18px]" : "text-[18px]"}>About Us</NavLink>
            </div>
            </div>
            {/* button section */}
            <div className='flex gap-4'>
                <img className='w-12 rounded-xl -mt-1' src={user ? user.photoURL : "/assets/user.png"} alt="photoURL" />
                {
                    user ? <button onClick={handelLogout} className='btn bg-gradient-to-b from-red-400 to-red-700 text-white px-6 rounded-lg text-[16px]'>Log Out</button> : <Link to="/auth/login" className='btn bg-gradient-to-b from-blue-400 to-blue-700 text-white px-6 rounded-lg text-[16px]'>Login</Link>
                }
            </div>

        </div>
        </div>
    );
};

export default Navbar;