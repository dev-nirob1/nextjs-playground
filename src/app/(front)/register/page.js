import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-green-200'>
            <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
                <h1 className='text-3xl font-bold text-center mt-10'>Register</h1>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                            Username
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='username'
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
                <Link href="/login" className='block text-center mt-4 text-blue-500 hover:text-blue-700'>
                    Already have an account? Login
                </Link>
            </div>
        </div>
    );
};

export default Register;