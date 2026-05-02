'use client'
import GoogleLogin from '@/components/authentication/GoogleLogin';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Register = () => {
    const router = useRouter()
    const handleUserRegister = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget)
            const name = formData.get('username');
            const email = formData.get('email')
            const password = formData.get('password')
            const data = { name, email, password }
            console.log(data);
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            response.status === 201 && router.push('/login')

        } catch (error) {

        }
    }
    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-green-200'>
            <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
                <h1 className='text-3xl font-bold text-center mt-10'>Register</h1>
                <form onSubmit={handleUserRegister}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                            Username
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='username'
                            name='username'
                            type='text'
                            placeholder='Username'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            type='submit'
                        >
                            Register
                        </button>
                    </div>
                </form>
                <GoogleLogin />

                <Link href="/login" className='block text-center mt-4 text-blue-500 hover:text-blue-700'>
                    Already have an account? Login
                </Link>
            </div>
        </div>
    );
};

export default Register;