import React, { use, useEffect, useState } from 'react';
import { AUthContext } from '../Firebase/AuthProvider';
import toast from 'react-hot-toast';
import NotFound from '../NotFound/NotFound';

const Profile = () => {
  useEffect(() => {
    document.title = "Profile | AppNest";
  }, []);

  const { user, UpdateUser, setUser } = use(AUthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  if (!user) return <NotFound />;

  const handleUpdate = (e) => {
    e.preventDefault();

    UpdateUser({
      displayName: name,
      photoURL: photoURL
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Profile update failed.");
      });
  };

  return (
    <div className="hero mb-10">
      <div className="hero-content flex-col">
        <div className="card w-[500px] shadow-2xl">
          <div className="card-body">

            <div className="text-center mb-6">
              <img className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto" src={photoURL} alt="Profile" />
              <h2 className="text-2xl font-bold mt-2">{name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
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
