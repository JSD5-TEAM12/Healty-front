import React, { useEffect, useState } from "react";
import { updated, list } from "../SelectActivity/ActivityFunc";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//try
// import { useAuth } from "../../auth/AuthContext"

const EditActivityCard = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  // const auth = useAuth()

  const [updateData, setUpdateData] = useState({
    id: id,
    updateTitle: "",
    updateType: "",
    updateDesc: "",
    updateDate: "",
    updateDuration: "",
  });

  const getdata = async (id) => {
    try {
      const response = await list(id);
      setUpdateData({
        updateTitle: response.title,
        updateType: response.type,
        updateDesc: response.desc,
        updateDate: response.date,
        updateDuration: response.duration,
      });

      console.log("response Tong :", response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata(id);
  }, []);

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('updated id >> ',id)
    updated(id, updateData)
      .then((res) => {
        console.log(res);
        navigate("/ActivityCard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex flex-col items-center h-screen mt-12">
      <h1 className="text-4xl font-bold my-12">Edit Activity Card</h1>
      <form
        onSubmit={handleSubmit}
        className=" rounded-3xl w-[80%] lg:w-[50%] bg-black border border-pink-600 
    md:rounded-2xl p-12"
      >
        <div className="lg:w-[100%] flex flex-col justify-between items-center">
          <div className="flex justify-center mt-4 w-[60%]">
            <input
              className="text-zinc-300 bg-transparent text-center text-2xl"
              value={updateData.updateType}
              readOnly
            />
            <input
              type="text"
              name="updateTitle"
              id="title"
              className="rounded bg-pink-600 
          text-zinc-300 text-center text-xl"
              placeholder="Title"
              value={updateData.updateTitle}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <textarea
              rows="3"
              cols="52"
              placeholder="Description"
              id="desc"
              name="updateDesc"
              value={updateData.updateDesc}
              onChange={handleChange}
              className="p-2 mt-4 rounded bg-zinc-700 text-zinc-300"
            ></textarea>
          </div>
          <div className="mt-4 flex h-[40px] justify-center">
            <input
              type="date"
              id="date"
              name="updateDate"
              value={updateData.updateDate}
              onChange={handleChange}
              className="pl-2 rounded bg-zinc-700 text-zinc-300 w-[235px]"
            />
            <select
              id="duration"
              name="updateDuration"
              value={updateData.updateDuration}
              onChange={handleChange}
              className="ml-3 pl-1 rounded bg-zinc-700 text-zinc-300 w-[125px]"
            >
              <option value="none" disabled hidden>
                duration
              </option>
              <option value="10">10 Mins</option>
              <option value="20">20 Mins</option>
              <option value="30">30 Mins</option>
              <option value="40">40 Mins</option>
              <option value="50">50 Mins</option>
              <option value="60">60 Mins</option>
            </select>
          </div>
          <div className="flex justify-center items-center mt-12 lg:w-[60%] w-[100%]">
            <Link to={{ pathname: "/ActivityCard" }} className="w-[100%]">
              <button className="bg-zinc-700 w-[50%] rounded-lg">Back</button>
            </Link>
            <div className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg flex w-[80%] ml-2">
              <div className="w-[100%]">
                <div className="text-white text-xl hover:bg-pink-600 w-[100%] h-[100%] rounded-lg flex justify-center items-center">
                  <div className="bg-black rounded-lg w-[98%] h-[95%] flex justify-center items-center">
                    <button onClick={handleSubmit}>Save Change</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default EditActivityCard;
