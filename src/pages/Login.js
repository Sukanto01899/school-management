import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        e.target.reset()
    }
    return (
        <div className='h-screen flex justify-center items-center bg-slate-200'>
            <div className='bg-white p-4 rounded-md shadow-md'>
            <h1 className='text-center text-2xl font-semibold'>Login</h1>
            <form onSubmit={handleLogin} className='form-style'>
                <input type="email" name='email' placeholder='Enter email'/>
                <input type="password" name='password' placeholder='Enter password'/>
                <input className='bg-indigo-700 text-white cursor-pointer' type="submit" value='Login'/>
            </form>
            <div className='text-center'>
            <p>Forgot password</p>
            <p>Don't have any account? <Link className='text-indigo-700' to='/signup'>Sign up</Link></p>
            </div>
            </div>
        </div>
        
    );
};

export default Login;