import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handelRegister=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const photo =e.target.photo.value;
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(name, photo, email, password);
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
          <label className="label">Password</label>
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Enter your valid Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Enter Correct Password" name='password' />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center mt-4'>Do you have an account ? <Link to="/auth/login"><span className='text-red-500 underline'>Login</span></Link></p>
        </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default Register;