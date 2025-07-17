import React from 'react'

function MainTitle({titletext}) {
  return (
    <div> 
        <h1 className='text-3xl uppercase underline font-bold flex justify-center my-3 text-black'>
        {!titletext ? "PROJECT TITLE" : titletext}
      </h1></div>
  )
}

export default MainTitle