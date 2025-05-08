import React, { useContext, useEffect, useState } from 'react';
import { AUthContext } from '../Firebase/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const Profile = () => {
  const { user, UpdateUser, setUser } = useContext(AUthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    document.title = "Profile | AppNest";
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <div className="bg-gradient-to-r from-blue-100 via-gray-50 to-gray-200 shadow-lg rounded-xl p-8 max-w-md text-center">
          <img
            src="/assets/user.png"
            alt="No User"
            className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-blue-300"
          />
          <h1 className="text-2xl font-bold text-red-600 mb-2">No User Found</h1>
          <p className="text-gray-600 mb-6">You need to be logged in to access this page.</p>
          <Link
            to="/auth/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    UpdateUser({ displayName: name, photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Profile update failed.");
      });
  };

  return (
    <div className="hero mb-10">
      <div className="hero-content flex-col">
        <div className="card md:w-[500px] w-[350px] shadow-2xl">
          <div className="card-body bg-linear-to-r/increasing from-indigo-500 to-teal-400 rounded-lg">
            <div className="text-center mb-6">
              <img className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto" src={photoURL || "/assets/user.png"} alt="Profile" />
              <h2 className="text-2xl text-white font-bold mt-2">{name}</h2>
              <p className="text-sm text-white">{user.email}</p>
            </div>
            <form onSubmit={handleUpdate} className='space-y-4'>
              <label className="label">Edit Name</label>
              <input
                type="text"
                className="input w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="label">Edit Photo URL</label>
              <input
                type="text"
                className="input w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
              <button type="submit" className="btn btn-neutral mt-4 mb-2 w-full">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
