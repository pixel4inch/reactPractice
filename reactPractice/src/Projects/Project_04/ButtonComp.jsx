import React from 'react'

function ButtonComp({text,icon}) {

    
  return (
     <div>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-2md  w-35 flex justify-center align-center gap-1'><span className='mt-1'>{icon}</span> <span>{text}</span>  </button>
    </div>
  )
}

export default ButtonComp