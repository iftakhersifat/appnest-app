import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AUthContext } from '../Firebase/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { IoIosEyeOff } from 'react-icons/io';

const Register = () => {
  useEffect(() => {
      document.title = "Register | AppNest";
    }, []);

  const {createUser, UpdateUser, setUser, googleProvider} =use(AUthContext);

  const navigate =useNavigate();

  // password show
  const [showPassword, setPassword] = useState(false);

  // check password
  const checkPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  // error check
  const [error, setError]= useState('');

  // 
  const provider = new GoogleAuthProvider();

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
            toast.success("Account created successfully!");
          })
          .catch(() => {
            toast.error("Profile update failed.");
            setUser(user);
          });
          navigate("/");
           
        })
        .catch(error=>{
          toast.error(error.message);
        })
    }

    const handelGoogle =()=>{
      googleProvider(provider)
      .then(()=>{
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch(error=>{
        toast.error(error.message);
    })
    }  
    return (
        <div className="hero mb-10">
    <div className="hero-content flex-col">
    <div className="card w-[500px] shadow-lg">
      <div className="card-body bg-gradient-to-r from-blue-100 via-gray-50 to-gray-200">

        <form onSubmit={handelRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Enter your name" name='name' />

          <label className="label">Photo URL</label>
          <input type="text" className="input w-full" placeholder="Enter your photo URL" name='photo' />

          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Enter your valid Email" name='email' />

          <label className="label">Password</label>
          <div className="relative">
          <input type={showPassword ? "text" : "password"} className="input w-full" placeholder="Enter Correct Password" name='password' />
          <button type='button' onClick={()=>setPassword(!showPassword)} className="absolute right-4 top-2">
            {
              showPassword ? <IoIosEyeOff size={20} /> : <FaEye size={20} />
            }
          </button>
          </div>

          {
            error && <p className='text-red-500'>{error}</p>
          }

          <button className="btn bg-gradient-to-b from-blue-400 to-blue-700 text-white mt-4 mb-2">Register</button>

          {/* Google */}
          <button onClick={handelGoogle} className="btn bg-white text-black border-1 border-[#e5e5e5]">
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