'use client'

import { signIn } from "next-auth/react";
const GoogleLogin = () => {
    return (
        <button onClick={() => signIn('google')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>
            Sign in with Google
        </button>
    );
};

export default GoogleLogin;