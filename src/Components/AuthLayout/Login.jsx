import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AUthContext } from '../Firebase/AuthProvider';

const Login = () => {
  const {signIn} =use(AUthContext);

  const navigate =useNavigate();

    const handelLogin=(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email, password);

        // signIn
        signIn(email, password)
        .then(result=>{
          console.log(result)
          navigate("/")
        })
        .catch(error=>{
          console.log(error)
        })
    }
    return (
        <div className="hero mb-10">
    <div className="hero-content flex-col">
    <div className="card w-[500px] shadow-2xl">
      <div className="card-body">

        <form onSubmit={handelLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" name='password' />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center mt-4'>Don’t Have An Account ? <Link to="/auth/register"><span className='text-red-500 underline'>Register</span></Link></p>
        </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default Login;