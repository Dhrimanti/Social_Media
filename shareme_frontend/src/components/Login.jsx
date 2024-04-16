import React from 'react';
import shareVideo from '../assets/share.mp4';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logowhite.png';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';


import {jwtDecode} from "jwt-decode";
import {client,urlFor} from '../client'




const Login = () => {
  const navigate=useNavigate();
  
  const handleCallBackResponse=(response)=>{
    
    
    
    const decode=jwtDecode(response.credential);
    localStorage.setItem('user', JSON.stringify({
      name: decode.name,
      sub: decode.sub,
      picture: decode.picture,
    }));
    
    
    
    const {name,sub,picture}=decode;
    
    

    const doc={
      _id:sub,
      _type:'user',
      username:name,
      image:picture,
    };
    client.createIfNotExists(doc)
    .then(()=>{
    navigate('/',{replace:true})})

  }
  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_REACT_GOOGLE_API,
      callback:handleCallBackResponse
      

    });
    google.accounts.id.renderButton(
      document.getElementById("SigninDiv"),
      {theme:"outline",size:"large"}
    )
  },[])
  
  return (
    
    
    <div className='flex justify-start items-centre flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'/>
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt='logo' />
          </div>
            
          <div className="shadow-2xl">
            <div id="SigninDiv"></div>
            
            
            
            
          </div>
              

        </div>
      </div>


    </div>

    
    
  )
}

export default Login


