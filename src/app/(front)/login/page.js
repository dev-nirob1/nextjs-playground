import GoogleLogin from '@/components/authentication/GoogleLogin';
import Link from 'next/link';
import React from 'react';
const Login = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-green-200'>
            <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
                <h1 className='text-3xl font-bold text-center mt-10'>Login </h1>
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
                            Sign In
                        </button>
                    </div>

                </form>
                {/* google login  */}
                <GoogleLogin />
                <Link href="/register" className='block text-center mt-4 text-blue-500 hover:text-blue-700'>
                    Don`t have an account? Register
                </Link>
            </div>
        </div >
    );
};

export default Login;