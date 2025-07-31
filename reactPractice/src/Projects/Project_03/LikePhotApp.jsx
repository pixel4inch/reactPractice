import React from 'react'
import MainTitle from '../../Components/MainTitle'
import { FaRegSmile, FaHeart   } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LikePhotApp() {

    const [nolikes, setNolikes] = React.useState(0);
    const [likes, setLikes] = React.useState(false);

    const liketoggle = () => {
      if(likes === false){
        setLikes(true);
        setNolikes(nolikes + 1);
         toast("You Liked the Photo");
       
      }else{
        setLikes(false);
        setNolikes(nolikes - 1);
        toast("You Unliked the Photo");
      }
    }   
    

  return (
    <div>
        <MainTitle titletext='Like Photo App'/>
        
        <h5 className='font-bold text-2xl my-5 text-center text-blue-800'>No of Likes:{nolikes}</h5>

        <div  className=" border border-gray-400 max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-3 ">
              <div className="px-4 py-4">
                <div className="font-bold text-2xl text-center  mb-2">
                  <h4 className="text-upercase">Sun Set</h4> 
                </div>  
            </div>
            <img className="w-full object-cover" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
            <div className="px-5 py-4 flex justify-between align-center">
                
                   <FaRegSmile className='text-2xl text-blue-800' />
                   {likes === false ? <FaHeart onClick={liketoggle} className='text-2xl cursor-pointer text-gray-500'/> :<FaHeart onClick={liketoggle}  className='text-2xl cursor-pointer text-red-500'/>   }
                   
              
            </div>
        </div>
        <ToastContainer />

    </div>
  )
}

export default LikePhotApp