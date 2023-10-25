import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//component below
import { useActivityContext } from "../function"
import { read, del } from "../SelectActivity/ActivityFunc"
import EditActivityCard from "./EditActivityCard"
// import Auth
import { useAuth } from "../../auth/AuthContext"

const ActivityCard = () => {
  //try
  const { currentPicture } = useActivityContext()
  const auth = useAuth()
  // console.log('auth.user :>> ', auth.user);

  // const params = useParams()
  // const [data, setData] = useState({
  //   user_id: "6532a6c0246ea32353b3565d",
  //   type: '',
  //   desc: '',
  //   date: '',
  //   duration: '',
  // })

  const [data, setData] = useState([]);

  useEffect(() => {
    if(auth.user.userId) {
      console.log('auth.user.userId :>> ', auth.user.userId);
      loadData(auth.user.userId)
    };
  }, [data]);

  const loadData = async (id) => {
    console.log('id :>> ', id);
    read(id)
      .then((res) => {
        console.log("res log data => : ",res.data);
        setData(res);
      })
      .catch((err) => console.log(err));
  };


  const handleRemove = async (id) => {
    del(id)
      .then((res) => {
        console.log(res);
        loadData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border border-white-800 w-[70%] md:w-[60%] mt-12 overflow-y-auto lg:flex flex-col items-center justify-center ">
        {data
          ? data.map((item, index) => (
              <div className="border border-pink-600 rounded-3xl bg-zinc-800 mb-2 lg:w-[40%] xl:w-[40%]">
                <div
                  key={index}
                  className="p-2 flex items-center justify-center text-left ">
                   
                  {/* <div className='w-[40%]'>{currentPicture}</div> */}
                  <div className="text-white">
                    Title:
                    <span className="text-pink-600 border border-white-800"> {item.title}</span>
                    Activity type:
                    <span className="text-pink-600"> {item.title}</span>
                    <br />
                    Description:{" "}
                    <span className="text-pink-600"> {item.desc}</span>
                    <br />
                    Date: <span className="text-pink-600">{item.date}</span>
                    <br />
                    Duration:{" "}
                    <span className="text-pink-600">
                      {item.duration}
                    </span> mins <br />
                    <div className="text-right">
                    <Link to={
                 `/EditActivityCard/${item._id}`} className="">Edit</Link>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="bg-zinc-700 rounded p-1 text-[14px]"
                      >
                        Delete
                      </button>
                    </div>
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
