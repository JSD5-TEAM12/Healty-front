import React, { useState, useEffect } from "react";
import { useActivityContext } from "../function";
import { Link } from "react-router-dom";
import { read, create} from "./ActivityFunc";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../auth/AuthContext";
import bicycle from '../../assets/img/bicycle.jpg'


function ActivityForm() {
  const auth = useAuth()
  const { currentActivity, currentPicture } = useActivityContext()
  const [data, setData] = useState([])
  const [form, setForm] = useState({
    user_id: auth.user.userId,
    type: currentActivity,
    pic: currentPicture,
  });
  // try
  const navigate = useNavigate()
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await read()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.title && form.type && form.desc && form.date && form.duration !== "none") {
      create(form)
        .then((res) => {
          loadData()
          //try
          navigate('/ActivityCard')
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill out all fields.");
    }

  }


  return (
    <>
    <div className="h-screen">
     <div className="flex flex-col justify-center items-center">
  <form onSubmit={e => handleSubmit(e)}> 
  <div className="w-[100%] flex justify-center items-center">
    <div className="lg:w-[30%] border border-white w-[60%] text-center mt-8">
      {currentPicture ? currentPicture : <img src={bicycle} />}
    </div>
  </div>
    <div className="lg:w-[100%] flex flex-col justify-center items-center">
      <div className="flex justify-center mt-4">
        <div className="text-zinc-300 p-2 text-2xl font-bold border-b-2 border-pink-600 text-center mt-4 mr-4" >{currentActivity}</div>
          <input type="text" name="title" id="title" className="p-2 mt-4 rounded bg-zinc-700 text-zinc-300"
        placeholder="Title" onChange={e => handleChange(e)}/>
      </div>
      <div className="flex justify-center">
        <textarea
          rows="3"
          cols="44"
          placeholder="Description"
          id="desc"
          name="desc"
          onChange={e => handleChange(e)}
          className="p-2 mt-4 rounded bg-zinc-700 text-zinc-300"
        ></textarea>
      </div>
      <div className="mt-4 flex h-[40px] justify-center">
        <input
          type="date"
          id="date"
          name="date"
          onChange={e => handleChange(e)}
          className="pl-2 rounded bg-zinc-700 text-zinc-300 w-[180px]"
        />
        <select
          id="duration"
          name="duration"
          onChange={e => handleChange(e)}
          className="ml-3 pl-1 rounded bg-zinc-700 text-zinc-300 w-[125px]"
        >
          <option value="none" selected disabled hidden>
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
      <div className="flex justify-center item-center w- mt-12 w-[65%] md:w-[30%]">
        <BackBtn />
        <CreateBtn
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  </form> 
</div>
      </div>
    </>
  );
}

const BackBtn = () => {
  return (
    <>
      <div className="bg-zinc-700 rounded-lg flex w-[45%] p-1 mr-2">
        <Link to={{ pathname: "/Home" }} className="w-[100%]">
          <div className="text-white  text-xl w-[100%] h-[100%] rounded-lg flex justify-center items-center">
            <button>Back</button>
          </div>
        </Link>
      </div>
    </>
  );
};

const CreateBtn = ({ handleSubmit }) => {
  return (
    <>
      <div className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg flex w-[45%] ml-2">
        <Link to={{ pathname: "/ActivityCard" }} className="w-[100%]">
          <div className="text-white  text-xl hover:bg-pink-600 w-[100%] h-[100%] rounded-lg flex justify-center items-center">
            <div className="bg-black rounded-lg w-[98%] h-[94%] flex justify-center items-center">
              <button onClick={handleSubmit}>Create</button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ActivityForm;