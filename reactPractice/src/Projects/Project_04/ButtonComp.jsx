import React from 'react'

function ButtonComp({text,icon, btncolor, btncolorhover, onClick }) {

    
  return (
     <div>
        <button onClick={onClick} className={`${btncolor} ${btncolorhover} text-white font-bold py-1 px-3 rounded-2md  w-35 flex justify-center align-center gap-1`}> <span className='mt-1'>{!icon ? "" : icon}</span> <span>{!text ? "click" : text}</span>  </button>
    </div>
  )
}

export default ButtonComp