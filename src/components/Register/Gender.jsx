import React from "react";
import { IoMale, IoFemale, IoMaleFemale } from "react-icons/io5";

import { inputStyles } from "./inputStyle"; // Import the styles

const Gender = ({ setGender }) => {
  return (
    <main className={`flex flex-col md:h-[39.8rem] gap-7 justify-evenly`}>
      <header className=" ">
        <h2 className="text-white text-center text-3xl md:text-5xl">
          Tell us about yourself!
        </h2>
        <p className="text-zinc-500 text-center text-xl  md:text-2xl">
          To give you a better experience we need to know your gender
        </p>
      </header>
        <aside className="w-full flex md:flex-row gap-4 flex-col text-white items-center md:justify-around">
          <button
            className="bg-zinc-700 p-6 rounded-2xl hover:scale-110 active:ring-4 duration-300 btn_gender"
            type="button"
            onClick={() => setGender("female")}
            value={"female"}
          >
            <IoFemale className="md:text-[12rem] text-8xl" />
          </button>
          <button
            className="bg-zinc-700 p-6 rounded-2xl hover:scale-110 active:ring-4 duration-300 btn_gender"
            type="button"
            onClick={() => setGender("male")}
            value={"male"}
          >
            <IoMale className="md:text-[12rem] text-8xl" />
          </button>
          <button
            className="bg-zinc-700 p-6 rounded-2xl hover:scale-110active:ring-4 duration-300 btn_gender"
            type="button"
            onClick={() => setGender("malefemale")}
            value={"malefemale"}
          >
            <IoMaleFemale className="md:text-[12rem] text-8xl" />
          </button>
        </aside>        

    </main>
  );
};

export default Gender;
