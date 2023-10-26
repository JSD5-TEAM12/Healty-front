import React from "react";
import * as Io5Icons from "react-icons/io5";
import { Link } from "react-router-dom";
import "./SelectActivity.css";

export const Btn = ({handleLeftBtn, handleRightBtn, handleAddClick}) => {
  return (
        <main className="flex justify-center gap-16 my-5">
          <article className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg">
            <button
              className="text-white   hover:bg-pink-600 rounded-lg w-full  flex justify-center items-center p-0.5"
              onClick={handleLeftBtn}
            >
              <div className="bg-zinc-900 rounded-lg">
                <Io5Icons.IoCaretBack  className="lg:text-5xl"/>
              </div>
            </button>
          </article>
  
          <article className=" overflow-hidden rounded-md from-pink-600 to-indigo-700 w-full flex ">
            <Link
              to={{
                pathname: '/ActivityForm'
              }}
              className="w-[100%]"
            >
                <div className="w-full h-full flex justify-center items-center">
                 <button onClick={handleAddClick} className="btn_button w-full h-full text-3xl"> Add Activity</button>
                </div>
            </Link>
          </article>
  
          <article className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-lg">
            <button
              className="text-white   hover:bg-pink-600 rounded-lg w-full  flex justify-center items-center p-0.5"
              onClick={handleRightBtn}
            >
              <div className="bg-zinc-900 rounded-lg">
                <Io5Icons.IoCaretForward className="lg:text-5xl"/>
              </div>
            </button>
          </article>

        </main>
  )
}
