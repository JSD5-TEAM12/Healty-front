import React from "react";
import usePost from "../../hook/usePost";
import avatar from "../../assets/img/avatar.svg"
import { IoTrashSharp } from "react-icons/io5";

function Feed() {
  const { create, update, get, remove } = usePost();
  const postData = get();
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-end text-white border-b-4 w-[70%] mr-8 mb-6">Feed</div>
        <PostInput />
        <div className="flex justify-center">
          <FeedData postData={postData} removeData={remove} />
        </div>
      </div>
    </>
  );
}

const PostInput = () => {
  return (
    <>
      <div className="w-[100%]">
      <div className="text-white flex justify-center items-center w-[90%]">
        <img src={avatar} alt="Your Avatar" className="rounded-3xl" />
        <div className="mx-4 w-[80%]">
          <textarea
            id="postInput"
            className="rounded-xl w-[80%] text-white bg-transparent border border-white"
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <div className="">
          <button className="border border-white rounded-lg p-1 text-white">Post</button>
        </div>
      </div></div>
    </>
  );
};

const FeedData = ({ postData, removeData }) => {
  const displayPost = postData.map((item) => {
    return (
      <div className="">
        <div className="mx-2">
          <PostFeed
            avatar={item.avatar}
            time={item.time}
            image={item.image}
            content={item.content}
            username={item.username}
            id={item.id}
            removeData={removeData}
          />
        </div>
      </div>
    );
  });
  return <>{displayPost}</>;
};

const PostFeed = ({
  avatar,
  time,
  image,
  content,
  username,
  id,
  removeData,
}) => {
  return (
    <div className="">
      <div className="bg-white w-[100%] rounded-lg">
        <div className="bg-white bg-opacity-50 rounded-lg flex justify-between">
          <img
            src={avatar}
            alt="Your Avatar"
            className="rounded-3xl"
            width="20px"
          />
          <button className="text-black" onClick={() => removeData(id)}>
            <IoTrashSharp />
          </button>
        </div>
        <img src={image} alt="" className="w-[100%]" />
        <div>
          <h2>{username}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
