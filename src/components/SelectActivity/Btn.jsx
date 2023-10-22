import React from "react";
import * as Io5Icons from "react-icons/io5";
import { Link } from "react-router-dom";

export const Btn = ({handleLeftBtn, handleRightBtn, handleAddClick}) => {
  return (
          <>
        <div className="flex justify-center">
          <div className="mt-4 bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg">
            <button
              className="text-white text-4xl hover:bg-pink-600 rounded-lg w-[100%] h-[100%] flex justify-center items-center"
              onClick={handleLeftBtn}
            >
              <div className="bg-black rounded-lg w-[95%] h-[95%] flex justify-center items-center">
                <Io5Icons.IoCaretBack />
              </div>
            </button>
          </div>
  
          <div className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg w-[60%] flex mx-5 mt-4">
            <Link
              to={{
                pathname: '/ActivityForm'
              }}
              className="w-[100%]"
            >
              <div className="text-white  text-2xl hover:bg-pink-600 w-[100%] rounded-lg flex justify-center items-center w-[100%] h-[100%]">
                <div className="bg-black rounded-lg w-[98%] h-[94%] flex justify-center items-center">
                 <button onClick={handleAddClick}> Add Activity</button>
                </div>
              </div>
            </Link>
          </div>
  
          <div className="mt-4 bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg">
            <button
              className="text-white text-4xl text-2xl hover:bg-pink-600 rounded-lg w-[100%] h-[100%] flex justify-center items-center"
              onClick={handleRightBtn}
            >
              <div className="bg-black rounded-lg w-[95%] h-[95%] flex justify-center items-center">
                <Io5Icons.IoCaretForward />
              </div>
            </button>
          </div>
        </div>
      </>
  )
}