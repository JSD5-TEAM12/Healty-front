import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//component below
import { useActivityContext } from "../function"
import { read, del } from "../SelectActivity/ActivityFunc"
import EditActivityCard from "./EditActivityCard"
// import Auth
import { useAuth } from "../../auth/AuthContext"
import { IoTrash } from "react-icons/io5"
import { IoPencil } from "react-icons/io5"

const ActivityCard = () => {
  //try
  const { currentPicture } = useActivityContext()
  const auth = useAuth()

  const [data, setData] = useState([]);
  //try
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(auth.user) {
      loadData(auth.user.userId)
    }
  }, [auth.user, success]);

  const loadData = async (id) => {
    read(id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }

  const handleRemove = async (id) => {
    del(id)
      .then((res) => {
        loadData()
        setSuccess(prev => !prev)
      })
      .catch((err) => console.log(err));
  }

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl bg-pink-600 px-12 rounded mt-12 font-bold">Activity Card</h1>
      <div className=" w-[80%] mt-12 overflow-y-auto lg:grid grid-cols-3 gap-4">
        {data
          ? data.map((item, index) => (
                <div
                  key={index}
                  className="p-2 flex items-center justify-center text-left border border-pink-600 rounded-3xl bg-zinc-800 mb-2 
                  lg:w-[100%]">
                  <div className="text-white">
                    <div className="bg-black rounded-xl px-4 py-2 my-2">Title:
                    <span className="text-pink-600 ml-4 font-bold"> {item.title}</span>
                    </div>
                    Activity type:
                    <span className="text-pink-600"> {item.type}</span>
                    <br />
                    Description:{" "}
                    <span className="text-pink-600"> {item.desc}</span>
                    <br />
                    Date: <span className="text-pink-600">{new Date(item.date).toLocaleDateString()}</span>
                    <br />
                    Duration:{" "}
                    <span className="text-pink-600">
                      {item.duration}
                    </span> mins <br />
                    <div className="flex justify-end items-center ml-44">
                    <Link to={
                 `/EditActivityCard/${item._id}`} >
                        <IoPencil className="text-3xl rounded mr-2 bg-gradient-to-br from-pink-600 to-indigo-700"/>
                    </Link>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="">
                        <IoTrash className="bg-zinc-700 rounded p-1 text-3xl"/>
                      </button>
                    </div>
                  </div>
                </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ActivityCard;
