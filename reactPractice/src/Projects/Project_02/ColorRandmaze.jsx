import React from 'react'

import MainTitle from '../../Components/MainTitle'

function ColorRandmaze() {

        const clickhandler = (e) =>{
           document.body.style.backgroundColor=getRandoColor()
        }

        const getRandoColor = () =>{
            let letter ="0123456789ABCDEF"
            let Color ="#";
             for(let i=0;i<6;i++){
                Color += letter[Math.floor(Math.random()*16)]
             }
             return Color
        }

        

  return (
    <>
    <MainTitle titletext='P02-Color Randmaze'/>
    
         <div className='max-w-600 mt-6  flex justify-center gap-5 align-middlemx-auto px-5 py-2 bg-gray-100'>
                <button onClick={clickhandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Click Me</button>
                <button onClick={clickhandler} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Click Me</button>
                 <button onClick={clickhandler} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full'>Click Me</button>
                  <button onClick={clickhandler} className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full'>Click Me</button>

        </div>
    
    </>
  )
}

export default ColorRandmaze