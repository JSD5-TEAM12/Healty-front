import React from "react";
import shoes from "../../assets/img/shoes.svg"
import { useActivityContext } from "../function";
import { Link } from "react-router-dom";

function ActivityForm() {
  const { currentActivity } = useActivityContext();

  return (
    <div className="w-[100%] mt-6 ">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center">
          <img src={shoes} width={330} />
          <div className="flex justify-center mt-4 ">
          <div className="rounded bg-zinc-700 text-zinc-300 w-[140px] py-2 text-center text-xl">
            {currentActivity}</div>
          <input type="text" placeholder="Insert Your Activity" id="result" className="ml-3 pl-2 text-zinc-300 rounded bg-zinc-700 w-[160px]"/></div>
          <div className="flex justify-center">
          <textarea rows="3" cols="44" placeholder="Description" id="description" className="p-2 mt-4 rounded bg-zinc-700 text-zinc-300"></textarea>
          </div>
          <div className="mt-4 flex h-[40px] justify-center">
              <input type="date" id="activity-date" name="activity-date" className="pl-2 rounded bg-zinc-700 text-zinc-300 w-[180px]"/>
            <select id="time" name="time" className="ml-3 pl-1 rounded bg-zinc-700 text-zinc-300 w-[125px]">
                <option value="none" selected disabled hidden >
                  Times
                </option>
                <option value="10">10 Mins</option>
                <option value="20">20 Mins</option>
                <option value="30">30 Mins</option>
                <option value="40">40 Mins</option>
                <option value="50">50 Mins</option>
                <option value="60">60 Mins</option>
              </select>
          </div> 
          <div className="flex justify-center item-center w-[100%] mt-12 ">
         <BackBtn />
         <CreateBtn />
      </div>
        </div>
      </div>
    </div>
  );
}

const BackBtn = () => {
  return (
    <>
   <div className="bg-zinc-700 rounded-lg flex w-[45%] p-1 mr-2">
            <Link to={{ pathname: '/'}} className="w-[100%]">
              <div className="text-white  text-2xl w-[100%] h-[100%] rounded-lg flex justify-center items-center">
                 <button >Back</button>
              </div>
            </Link>
          </div>
    </>
  )
}

const CreateBtn = () => {
  return (
    <>
   <div className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg flex w-[45%] ml-2">
            <Link to={{ pathname: '/ActivityCard'}} className="w-[100%]">
              <div className="text-white  text-2xl hover:bg-pink-600 w-[100%] h-[100%] rounded-lg flex justify-center items-center">
                <div className="bg-black rounded-lg w-[98%] h-[94%] flex justify-center items-center">
                 <button >Create</button>
                </div>
              </div>
            </Link>
          </div>
    </>
  )
}

export default ActivityForm;
