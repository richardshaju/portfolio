import React, { useState,useEffect } from 'react'
function Loading() {

  return (
    <div className='bg-black h-[200vh] w-full absolute z-50 text-center pt-20'>
      <span className="loading loading-infinity loading-lg text-white "></span>
    </div>
  );
}

export default Loading