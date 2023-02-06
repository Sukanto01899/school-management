import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../firebase.init';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const handleSignup = async (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password !== confirmPassword){
            toast.error('Password not match')
            return
        }
        await  createUserWithEmailAndPassword(email, password)
        const success = await updateProfile({displayName: name})

        e.target.reset()
    }

    if(error){
        toast.error(error.message)
    }
    if(user){
        console.log(user)
        toast.success('Successfully signed up')
    }
    
    return (
        <div className='h-screen flex justify-center items-center bg-slate-200'>
            <div className='bg-white p-4 rounded-md shadow-md'>
            <h1 className='text-center text-2xl font-semibold'>Sign up</h1>
            <form onSubmit={handleSignup} className='form-style'>
                <input type="text" name='name' placeholder='Enter name' required/>
                <input type="email" name='email' placeholder='Enter email' required/>
                <input type="password" name='password' placeholder='Enter password' required/>
                <input type="password" name='confirmPassword' placeholder='Enter password' required/>
                <input className='bg-indigo-700 text-white cursor-pointer' type="submit" value={loading ? 'Loading...' : 'Sign up'}/>
            </form>
            <div className='text-center'>
            <p>Already have an account? <Link className='text-indigo-700' to='/login'>Login</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Register;