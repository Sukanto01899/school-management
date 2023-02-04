import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-slate-200'>
            <div className='bg-white p-4 rounded-md shadow-md'>
            <h1 className='text-center text-2xl font-semibold'>Sign up</h1>
            <form className='form-style'>
                <input type="text" placeholder='Enter name'/>
                <input type="email" placeholder='Enter email'/>
                <input type="password" placeholder='Enter password'/>
                <input className='bg-indigo-700 text-white cursor-pointer' type="submit" value='Sign up'/>
            </form>
            <div className='text-center'>
            <p>Already have an account? <Link className='text-indigo-700' to='/login'>Login</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Register;