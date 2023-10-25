import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import AxiosServices from '../../services/AxiosServices';
import { useAuth } from '../../auth/AuthContext';


function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textcontent,setContent] = useState();
  const [picture,setPicture] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  console.log('token in modal',token)
//   const createPost = async (textcontent,picture) =>{
//     const reqCreate = {
//         textcontent:textcontent,
//         picture:picture
//     };
//     const form = new FormData()
//     for (const key in reqCreate) {
//     form.append(key, reqCreate[key]);
//   }

//   const response = await axios.post(import.meta.env.VITE_APP_BACKEND_URL + '/post',reqCreate)
//   navigate('/Home')
//   console.log(response)
//   } 
  
const Auth = useAuth()

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;
        setPicture(base64Image);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createPost = async (textcontent,picture,user_post_id) =>{
    const reqCreate = {
        user_post_id:Auth.user.userId,
        desc:textcontent,
        image:picture
    };
    
    const form = new FormData()
    for (const key in reqCreate) {
    form.append(key, reqCreate[key]);
  }
  console.log(form)
  console.log('reqCreate',reqCreate)
  
  const config = {
    headers: {
      'authorization': `Bearer ${token}` // Assuming it's a Bearer token
    }
  };
  const response = await axios.post('http://localhost:8050/post',reqCreate,config)
//   navigate('/Home')
  console.log(response)
  } 

  return (
    <form action='/post' method='POST'>
    <div className="p-2 w-full">
      
      {/* Modal toggle button */}
      <div className="flex justify-center gap-2">
      {/* <img src={avatar} alt="" className='rounded-full h-9 '/> */}
      <div className='w-full outline-white divide-solid'>
        <input
          onClick={openModal}
          className="block border-2 rounded-md p-2 w-full placeholder:text-left"
          type="text"
          placeholder="What's on your mind"
        />
      </div>
      </div>

      {/* Main modal */}
      {isModalOpen && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full  bg-opacity-50"
        >
          <div className="flex justify-center w-full">
            <div className="relative">
              <div className="relative bg-black rounded-lg shadow dark:bg-gray-700">
                <div className="flex flex-col gap-4 justify-center p-4 w-full">
                  <input
                    type="text"
                    placeholder="Content"
                    className="w-[100%] h-10 bg-black text-lg"
                    onChange={(ev)=> setContent(ev.target.value)}
                  />
                  <input type="file"  onChange={handleImageChange}/>
                </div>

                <div className="flex justify-around pb-4">
                  <button
                    className="bg-red-600 w-1/4 self-center rounded-md p-1 hover:bg-red-400 dark:border-gray-600"
                    onClick={closeModal}
                  >Cancel</button>
                  <button
                    className="bg-blue-600 w-1/4 self-center rounded-md p-1 hover:bg-blue-400 dark:border-gray-600" type='button' onClick={()=>createPost(textcontent,picture)}
                  >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </form>
  );
}

export default Modal;
