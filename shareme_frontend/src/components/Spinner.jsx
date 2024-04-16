import React from 'react'
import { SyncLoader } from "react-spinners";


const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <SyncLoader
      color="#f44336"
      aria-label="Loading Spinner"
      data-testid="loader"
      size={20}

      />
      <p className="px-2 text-center text-lg">{message}</p>
    </div>
  )
}

export default Spinner
