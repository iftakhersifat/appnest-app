import React from 'react';

const Login = () => {
    const handelForm=(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero mb-10">
  <div className="hero-content flex-col">
    <div className="card w-[500px] shadow-2xl">
      <div className="card-body">

        <form onSubmit={handelForm} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" name='password' />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>

      </div>
    </div>
  </div>
</div>
    );
};

export default Login;