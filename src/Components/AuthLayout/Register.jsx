import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AUthContext } from '../Firebase/AuthProvider';

const Register = () => {

  const {createUser, UpdateUser, setUser} =use(AUthContext);

  const navigate =useNavigate();

  // check password
  const checkPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  // error check
  const [error, setError]= useState('');

    const handelRegister=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const photo =e.target.photo.value;
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(name, photo, email, password);

        if(checkPassword.test(password) != true){
          setError("Must have an Uppercase letter in the password. Must have a Lowercase letter in the password. Length must be at least 6 character");
          return;
        }

        // createUser
        createUser(email, password)
        .then(result=>{
          const user = result.user;
          UpdateUser({displayName: name, photoURL: photo})
          .then(()=>{
            setUser({...user, displayName: name, photoURL: photo});
          })
          .catch((error) => {
            setError(error);
            setUser(user);
          });
          navigate("/");
           
        })
        .catch(error=>{
            setError(error.message);
        })


    }
    return (
        <div className="hero mb-10">
    <div className="hero-content flex-col">
    <div className="card w-[500px] shadow-2xl">
      <div className="card-body">

        <form onSubmit={handelRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Enter your name" name='name' />

          <label className="label">Photo URL</label>
          <input type="text" className="input w-full" placeholder="Enter your photo URL" name='photo' />

          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Enter your valid Email" name='email' />

          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Enter Correct Password" name='password' />

          {
            error && <p className='text-red-500'>{error}</p>
          }

          <button className="btn btn-neutral mt-4 mb-2">Login</button>

          {/* Google */}
          <button className="btn bg-white text-black border-1 border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>

          <p className='text-center mt-4'>Do you have an account ? <Link to="/auth/login"><span className='text-red-500 underline'>Login</span></Link></p>
        </form>

        

      </div>
    </div>
  </div>
</div>
    );
};

export default Register;