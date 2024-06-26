
import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { FcGoogle } from 'react-icons/fc';



const UserProfile = () => {
  const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
  const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';

  const logout = () => {
    localStorage.clear();

    navigate('/login');
  };

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_REACT_GOOGLE_API,
      callback:logout
      

    });
    google.accounts.id.renderButton(
      document.getElementById("SignoutDiv"),
      {theme:"outline",size:"large"}
    )
  },[])
  const [user,setUser]=useState(null);
  const [pins,setPins]=useState(null);
  const [text,setText]=useState('Created');
  const [activeBtn,setActiveBtn]=useState('created');
  const navigate=useNavigate();
  const randomImg='https://source.unsplash.com/1600x900/?nature,photography,technology'
  const {userId}=useParams();
  useEffect(() => {
    if (text === 'Created') {
      const createdPinsQuery = userCreatedPinsQuery(userId);

      client.fetch(createdPinsQuery).then((data) => {
        setPins(data);
      });
    } else {
      const savedPinsQuery = userSavedPinsQuery(userId);

      client.fetch(savedPinsQuery).then((data) => {
        setPins(data);
      });
    }
  }, [text, userId]);
  function signOut(event){
    setUser({});
    document.getElementById("SignInDiv").hidden=false;
  }
  useEffect(()=>{
    const query=userQuery(userId);
    client.fetch(query)
    .then((data)=>{
      setUser(data[0]);
    },[userId])
  })
  if(!user){
    return <Spinner message="Loading Profile"/>
  }
  return (
    <div className='relative pb-2 h-full justify-center items-center'>
      <div className='flex flex-col pb-5'>
        <div className='relative flex flex-col mb-7'>
          <div className='flex flex-col justify-center items-center'>
            <img src={randomImg}
            className='w-full h-370 2xl:510 shadow-lg object-cover'
            alt="banner picture"/>
            <img
            className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover'
            src={user.image}
            alt="user-pic"/>
            <h1 className='font-bold text-3xl text-center mt-3'>
              {user.name}
            </h1>
            <div className='absolute top-0 z-1 right-0 p-2'>
            <div id="SignoutDiv"></div>
              {userId==user._id && (
                <button 
                type="button"
                className='bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                onClick={()=>logout()}>
                  <FcGoogle className='mr-4' />Logout
                </button>
                
             
                
              )}

            </div>

          </div>

        </div>
        <div className="text-center mb-7">
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('created');
            }}
            className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
          >
            Created
          </button>
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('saved');
            }}
            className={`${activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles}`}
          >
            Saved
          </button>
        </div>
        {pins?.length ?  (
          <div className='px-2'>
          <MasonryLayout pins={pins} />

        </div>
        ):(
          <div className='flex justify-center font-bold items-center ww-full text-xl mt-2'>
            No pins found
          </div>
        )}

      </div>
      
    </div>
  )
}

export default UserProfile
