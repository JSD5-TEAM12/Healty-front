import React, { useState, useEffect } from "react";
import { useActivityContext } from "../function";
import { Link } from "react-router-dom";
import axios from "axios";
import { read, create} from "./ActivityFunc";
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../../auth/Authcontext";


function ActivityForm() {
  const auth = useAuth()
  const { currentActivity, currentPicture } = useActivityContext();
  const [data, setData] = useState([]);
  // const [form, setForm] = useState({});
  const [form, setForm] = useState({
    user_id: auth.user.userId,
    type: currentActivity,
    // desc: "",
    // date: "",
    // duration: "none",
  });
  // try
  const navigate = useNavigate()
  

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    read()
      .then((res) => setData(res))
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
    if (form.type && form.desc && form.date && form.duration !== "none") {
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
    console.log('Show form >>', form)

  }
console.log('Show time :', form.date)


  // const handleRemove = async (id) => {
  //   remove(id)
  //     .then((res)=> {
  //       console.log(res)
  //       loadData()
  //     })
  //     .catch((err) => console.log(err))
  // }

  return (
    <>
    <div className="w-[100%] h-screen">
     <div className="flex flex-col justify-center items-center">
  <form onSubmit={e => handleSubmit(e)}> 
  <div className="w-[100%] flex justify-center items-center">
    <div className="lg:w-[30%] border border-white w-[50%] text-center mt-8">
      {currentPicture}
    </div>
  </div>
    <div className="lg:w-[100%] flex flex-col justify-center items-center">
      <div className="flex justify-center mt-4">
        <input className="rounded bg-pink-600 text-zinc-300 py-2 text-center text-xl" readOnly
          name="type"
          value={currentActivity}/>
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
      <div className="flex justify-center item-center w- mt-12 w-[68%] lg:w-[23%]">
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
        <Link to={{ pathname: "/" }} className="w-[100%]">
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