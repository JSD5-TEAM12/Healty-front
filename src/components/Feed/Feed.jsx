import React,{useState,useEffect} from "react";
import usePost from "../../hook/usePost";
import { IoTrashSharp } from "react-icons/io5";
import Modal from "./Modal";
import avatar from '../../assets/img/avatar.svg'
import axios from "axios";
import AxiosServices from "../../services/AxiosServices";

const api = import.meta.env.VITE_APP_BACKEND_URL

function Feed() {
  const [dataPost,setdataPost] = useState([]);

  useEffect(()=>{
    AxiosServices('GET',api + '/read_post',{}).then(async (res)=>{
      const response = await res
      console.log(response)
      setdataPost(response)
    })

  },[])
  console.log('dataPOST',dataPost)

  const deletePost = (id) =>{
    AxiosServices('DELETE', api + '/delete_post/' + id,{})
    
  }

  return (
    <>
  <div className="flex flex-col justify-center items-center">
    <div className="flex justify-end text-white border-b-4 w-[70%] mr-8 mb-6">Feed</div>
    <PostInput />
    <div className="flex justify-center">
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
  </div>
</>
  );
}

const PostInput = () => {
  return (
    <>
      <div className="w-[100%] ">
      <div className="text-white flex justify-center items-center w-[90%] ">
      <img src={avatar} alt="Your Avatar" className="rounded-3xl" />
        <Modal/>
        </div>
      </div>
    </>
  );
};

const FeedData = ({dataPost,deletePost}) => {
      return (
        
          <div className="" key={dataPost._id}>
          <div className="mx-2">
            <PostFeed
              avatar={dataPost.image.url}
              time={dataPost.date}
              image={dataPost.image.url}
              content={dataPost.desc}
              username={dataPost.user_post_id}
              id={dataPost._id}
              deletepost={deletePost}
              
              
              // removeData={removeData}
            />
          </div>
        </div>
      );
  }
  // const displayPost = dataPost.map((item,index) => {
  //   return (
  //     <div className="" key={index}>
  //       <div className="mx-2">
  //         <PostFeed
  //           avatar={item.image.url}
  //           time={item.date}
  //           image={item.image.url}
  //           content={item.desc}
  //           username={item.user_post_id}
  //           id={item._id}
  //           // removeData={removeData}
  //         />
  //       </div>
  //     </div>
  //   );
  // });
  // return <>{displayPost}</>;


const PostFeed = ({
  avatar,
  time,
  image,
  content,
  username,
  id,
  deletepost
}) => {
  console.log('feed',content,username)
  return (
    <div className="w-[40%]">
      <div className="bg-white w-full rounded-lg ">
        <div className="bg-white bg-opacity-50 rounded-lg flex justify-between">
          <img
            src={avatar}
            alt="Your Avatar"
            className="rounded-3xl"
            width="20px"
          />
          <button className="bg-black p-0.5 m-0.5 active:bg-gray-200 focus:outline-none  rounded shadow-md transition-transform transform hover:scale-95" >
            <IoTrashSharp onClick={()=>deletepost(id)}/>
          </button>
        </div>
        <img src={image} alt="" className="w-auto object-cover" />
        <div className="p-2 w-full ">
          <h2 className="text-black">user:{username}</h2>
          <p className="text-black">date:{time}</p>
          <p className="text-black">desc:{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
