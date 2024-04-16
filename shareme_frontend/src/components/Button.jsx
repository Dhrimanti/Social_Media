import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useGoogleLogin } from '@react-oauth/google';
const Button = () => {
    
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
    
  return (
    <div>
        <button
        type="button"
        className='bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
        onClick={()=>login()}>
        <FcGoogle className='mr-4' />Login With Google

        </button>
    </div>
    
  )
}

export default Button

