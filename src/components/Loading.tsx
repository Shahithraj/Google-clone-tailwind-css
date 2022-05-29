import React from 'react'
import {Rings} from 'react-loader-spinner';

const Loading = () => {
    console.log("hii")
  return (
    <div className='flex justify-center items-center'>  
        <Rings ariaLabel="loading-indicator"  width={100} height={500} color="blueviolet"  />
    </div>
  )
}

export default Loading