import React from 'react'
import MainTitle from '../../Components/MainTitle'
import ButtonComp from './ButtonComp';
import { FaHeart } from "react-icons/fa";





function Testimonials() {

    const [post, setPost] = React.useState({});
    const [user, setUser] = React.useState({});
    const [comment, setComment] = React.useState({});


    const apidata = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(data => setPost(data))
    }


  return (
    <div>
        <MainTitle titletext='Testimonials'/>
        <div className='flex justify-center align-center gap-1'>
            <ButtonComp text='Post' icon={<FaHeart/>} />
            <ButtonComp text='User' icon={<FaHeart/>} />
            <ButtonComp text='Comment' icon={<FaHeart />} />
        </div>
    </div>
  )
}

export default Testimonials

