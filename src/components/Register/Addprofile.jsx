import React from "react";
import { useState } from "react";

import { inputStyles } from "./inputStyle"; // Import the styles

const Addprofile = ({
  setFirstname,
  firstname,
  setLastname,
  lastname,
  image,
  birthday,
  setBirthday,
  handleImageChange,
}) => {

  const [fnameBgColor, setFnameBgColor] = useState(""); // State for username input background color

  const handleFnameInputChange = (e) => {
    setFirstname(e.target.value);
    // Check if the input field is not empty, Change the background color
    setFnameBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  const [lnameBgColor, setLnameBgColor] = useState(""); // State for username input background color

  const handleLnameInputChange = (e) => {
    setLastname(e.target.value);
    // Check if the input field is not empty, Change the background color
    setLnameBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  const [birthdayBgColor, setBirthdayBgColor] = useState(""); // State for username input background color

  const handleBirthdayInputChange = (e) => {
    setBirthday(e.target.value);
    // Check if the input field is not empty, Change the background color
    setBirthdayBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  return (
    <main className="grid md:gap-7 gap-[0.24rem]">
      <header className=" ">
        <h2 className="text-white text-center text-3xl md:text-5xl">
          Add your profiles
        </h2>
        <p className="text-zinc-500 text-center text-xl  md:text-2xl">
          Making Your Profiles Look Cool !
        </p>
      </header>
      {/*  Upload Profile Pictures */}
      <section className="w-full flex flex-col gap-4 items-center lg:flex-row lg:justify-center">
        <figure
          className="border-neon bg-slate-500/30 overflow-hidden w-[150px] h-[150px]
         lg:h-[300px] lg:w-[300px]"
        >
          <img src={image} alt="profile_user" className="w-full" />
        </figure>
        <input
          type="file"
          className="custom-file-input p-2 w-3/6 bg-indigo-500 text-white"
          onChange={handleImageChange}
        />
      </section>

      <section className="gap-4 flex flex-col md:grid-cols-2 md:grid">
        <form className="grid gap-2 w-full">
          <label htmlFor="fname" className={`${inputStyles.label}`}>
            Please Enter Your Firstname
          </label>
          <input
            type="text"
            id="fname"
            className={`${inputStyles.base} ${inputStyles.focus}`}
            placeholder="Enter your Firstname"
            required
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
              handleFnameInputChange(e);
            }}
            style={{
              backgroundColor: fnameBgColor,
            }} // Set background color dynamically
          />
        </form>
        <form className="grid gap-2 w-full">
          <label htmlFor="lname" className={`${inputStyles.label}`}>
            Please Enter Your Lastname
          </label>
          <input
            type="text"
            id="lname"
            className={`${inputStyles.base} ${inputStyles.focus}`}
            placeholder="Enter your Lastname"
            required
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              handleLnameInputChange(e);
            }}
            style={{
              backgroundColor: lnameBgColor,
            }} // Set background color dynamically
          />
        </form>

        <form className="grid gap-2 md:col-span-2">
          <label htmlFor="Firstname" className={`${inputStyles.label}`}>
            Please Select Your Birthdays
          </label>
          <input
            type="date"
            className={`${inputStyles.base} ${inputStyles.focus}`}
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
              handleBirthdayInputChange(e);
            }}
            style={{
              backgroundColor: birthdayBgColor,
            }} // Set background color dynamically
          />
        </form>
      </section>
    </main>
  );
};

export default Addprofile;
