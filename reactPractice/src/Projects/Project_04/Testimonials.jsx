import React, { useEffect, useState } from 'react'
import MainTitle from '../../Components/MainTitle'
import ButtonComp from './ButtonComp';

import { FaRegUser } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsFilePostFill } from "react-icons/bs";





function Testimonials() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [displayType, setDisplayType] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  const handleOnClick = (type) => {
    if (type === "posts") {
      setDisplayData(posts);
      setDisplayType("posts");
      console.log(posts)
    } else if (type === "users") {
     setDisplayData(users);
     setDisplayType("users");
     console.log(users)
    } else if (type === "comments") {
      setDisplayData(comments);
      setDisplayType("comments");
       console.log(comments)
    }
  };


  return (
    <div>
        <MainTitle titletext='Testimonials'/>
        <div className='flex justify-center align-center gap-1 lg:mt-3'>
            <ButtonComp btncolor="bg-red-800" btncolorhover="hover:bg-red-700"  text='Post' icon={<BsFilePostFill/>} onClick={() => handleOnClick("posts")}/>
            <ButtonComp btncolor="bg-green-800" btncolorhover="hover:bg-green-700" text='User' icon={<FaRegUser/>} onClick={() => handleOnClick("users")} />
            <ButtonComp btncolor="bg-blue-800" btncolorhover="hover:bg-blue-700" text='Comment' icon={<FaRegCommentAlt/>} onClick={() => handleOnClick("comments")} />
        </div>

        <div className='w-250 mx-auto'>
          
         <div id="datadisplay" className="mt-4 p-4 border rounded bg-gray-100">
        {displayData.length > 0 ? (
          displayType === "posts" ? (
            <ul>
              {displayData.slice(0, 20).map((item) => (
                <li key={item.id} className="mb-2 border-b pb-2">
                  <p className="font-bold">{item.title}</p>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          ) : displayType === "users" ? (
            <ul>
              {displayData.slice(0, 20).map((item) => (
                <li key={item.id} className="mb-2 border-b pb-2">
                  <p className="font-bold">{item.name}</p>
                  <p>{item.email}</p>
                </li>
              ))}
            </ul>
          ) : displayType === "comments" ? (
            <ul>
              {displayData.slice(0, 20).map((item) => (
                <li key={item.id} className="mb-2 border-b pb-2">
                  <p className="font-bold">{item.name}</p>
                  <p>{item.body}</p>
                  <p className="text-sm text-gray-600">{item.email}</p>
                </li>
              ))}
            </ul>
          ) : null
        ) : (
          <p>No data selected yet</p>
        )}
      </div>
          
          
        </div>

    </div>
  )
}

export default Testimonials

