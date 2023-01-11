import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");

    const handleLogin=data =>{
        console.log(data);
        // console.log(errors);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className="text-xl">Login</h1>
                
    <form onSubmit={handleSubmit(handleLogin)}>
      
     
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>   
  </label>
  <input {...register("email" ,{required : "Email Address is required"})} 
  aria-invalid={errors.email ? "true" : "false"} className="input input-bordered w-full max-w-xs" type="email" placeholder="username or email" />
  {errors.email && <p className='text-red-600  text-xs text-left' role="alert">{errors.email?.message}</p>}
</div>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>   
  </label>
  <input {...register("password",{ required: "password is required" })} 
     aria-invalid={errors.password ? "true" : "false"}
   className="input input-bordered w-full max-w-xs" type="password" placeholder="password" />
  {errors.password && <p className='text-red-600  text-xs text-left' role="alert">{errors.password?.message}</p>}
  <label className="label">
    <span className="label-text text-xs">forget password?</span>   
  </label>
</div>
      <p>{data}</p>
      
      <input className='btn btn-accent w-full' type="submit" value='Login' />
    </form>
    <p className='text-xs' >New to Doctors Portal? <span className='text-primary text-lg '  ><Link to="/signup">Create new account</Link></span></p>
    <div className="divider">OR</div>
    <button className='btn btn-outline w-full'> Continue With Google</button>
            </div>
            
        </div>
    );
};

export default Login;