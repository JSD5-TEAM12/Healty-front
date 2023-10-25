import React from "react";
import { Link } from "react-router-dom";

import { inputStyles } from "./inputStyle"; // Import the styles

const Data = ({
  setUsername,
  username,
  setPassword,
  setPassword2,
  password,
  password2,
  setEmail,
  email,
  checkPass,
}) => {
  return (
    <main className="flex flex-col gap-16 md:gap-[6rem]">
      <header className=" ">
        <h2 className="text-white text-center text-3xl md:text-5xl">
          Create new account
        </h2>
        <p className="text-zinc-500 text-center text-xl  md:text-2xl">
          join with us in Healthy Impress !
        </p>
      </header>
      <section className="grid gap-4">
        <form className="grid gap-2">
          <label htmlFor="username" className={`${inputStyles.label}`}>
            Please Enter Your Username
          </label>
          <input
            id="username"
            type="text"
            className={`${inputStyles.base} ${inputStyles.focus}`}
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        <form className="grid gap-2">
          <label htmlFor="email" className={`${inputStyles.label}`}>
            Please Enter Your Email
          </label>
          <input
            id="email"
            type="email"
            className={`${inputStyles.base} ${inputStyles.focus}`}
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>

        <form className="grid gap-2">
          <label htmlFor="pwd" className={`${inputStyles.label}`}>
            Please Enter Your Password{" "}
            <span className=" text-pink-500 ping">8 Charecter +</span>
          </label>
          <input
            id="pwd"
            type="password"
            className={`${inputStyles.base} ${inputStyles.focus}`}
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <form className="grid gap-2">
          <label htmlFor="pwdConfirm" className={`${inputStyles.label}`}>
            Please Confirm Your Password{" "}
            <span className=" text-pink-500 ping">8 Charecter +</span>
          </label>
          <input
            id="pwdConfirm"
            type="password"
            className={`${inputStyles.base} ${inputStyles.focus}`}
            placeholder="Confirm your password"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </form>

        <p className="text-white text-center text-lg sm:text-xl ">
          Already have account ?{" "}
          <Link to="/login">
            {" "}
            <span className="text-pink-500 cursor-pointer	">Sign In</span>{" "}
          </Link>{" "}
        </p>
      </section>
    </main>
  );
};

export default Data;
