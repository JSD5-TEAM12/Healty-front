import React, { useState, useEffect } from "react";
import usePost from "../../hook/usePost";
import { IoTrashSharp } from "react-icons/io5";
import Modal from "./Modal";
import avatar from '../../assets/img/avatar.svg'
import axios from "axios";
import AxiosServices from "../../services/AxiosServices";

const api = import.meta.env.VITE_APP_BACKEND_URL

function Feed() {
  const [dataPost, setdataPost] = useState([]);
  const [dataUser, setUser] = useState(false)

  useEffect(() => {
    AxiosServices('GET', api + '/read_post', {}).then(async (res) => {
      const response = await res
      setdataPost(response)
      setUser(prev=>!prev)
    })

  }, [dataUser])

  const deletePost = (id) => {
    AxiosServices('DELETE', api + '/delete_post/' + id, {})
    setUser(prev=>!prev)

  }

  return (
    <section className="flex flex-col w-full max-w-5xl mx-auto gap-8">
      <span className="text-right text-white border-b-4 lg:text-3xl text-base">Feed</span>
      <PostInput />
      <div className="flex justify-center overflow-auto  sm:justify-normal ">
        {Array.isArray(dataPost) && dataPost.length > 0 ? (
          dataPost.map((post) => (
            <FeedData
              key={post._id} // assuming _id is unique
              dataPost={post}
              deletePost={deletePost}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
}

const PostInput = () => {
  return (
    <>
      <div className="w-[100%]">
        <div className="text-white flex gap-2 items-center">
          <img src={avatar} alt="Your Avatar" className="rounded-3xl" />
          <Modal />
        </div>
      </div>
    </>
  );
};

const FeedData = ({ dataPost, deletePost }) => {
  return (

    <div className="scroll-smooth scroll-ml-10 snap-start snap-x" key={dataPost._id}>
      <div className="mx-2">
        <PostFeed
          avatar={dataPost.image.url}
          time={dataPost.date}
          image={dataPost.image.url}
          content={dataPost.desc}
          username={dataPost.user_post_id}
          id={dataPost._id}
          deletepost={deletePost}

        />
      </div>
    </div>
  );
}

const PostFeed = ({
  avatar,
  time,
  image,
  content,
  username,
  id,
  deletepost
}) => {
  return (
    <div className="w-[200px]">
      <div className="bg-zinc-800  w-[200px] h-[350px] rounded-xl overflow-hidden">
        <div className="bg-zinc-800  bg-opacity-50 flex justify-between p-2">
          <img
            src={avatar}
            alt="Your Avatar"
            className="rounded-3xl border-pink-500 border-2"
            width="20px"
          />
          <button className="bg-black p-0.5 m-0.5 active:bg-gray-200 focus:outline-none  rounded shadow-md transition-transform transform hover:scale-95" >
            <IoTrashSharp onClick={() => deletepost(id)} />
          </button>
        </div>
        <img src={image} alt="" className="w-full h-[220px] object-cover " />
        <div className="px-2 w-full flex flex-col justify-between">
          
          <div className="flex justify-evenly flex-col h-[80px]">
            <p className="text-xl text-center">{content}</p>
            <p className="text-sm text-center">date:{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
