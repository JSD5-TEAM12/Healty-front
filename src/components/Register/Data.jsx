import { useState } from "react";
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

  const [usernameBgColor, setUsernameBgColor] = useState(""); // State for username input background color

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
    // Check if the input field is not empty, change background color to light green
    setUsernameBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  const [emailBgColor, setEmailBgColor] = useState("");

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    // Check if the input field is not empty, change background color to light green
    setEmailBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  const [passwordBgColor, setPasswordBgColor] = useState("");

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
    // Check if the input field is not empty, change background color to light green
    setPasswordBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  const [password2BgColor, setPassword2BgColor] = useState("");

  const handlePassword2InputChange = (e) => {
    setPassword2(e.target.value);
    // Check if the input field is not empty, change background color to light green
    setPassword2BgColor(e.target.value !== "" ? "#ec4899" : "");
  };


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
            onChange={(e) => {
              setUsername(e.target.value);
              handleUsernameInputChange(e);
            }}
            style={{ backgroundColor: usernameBgColor }} // Set background color dynamically
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
            onChange={(e) => {
              setEmail(e.target.value);
              handleEmailInputChange(e);
            }}
            style={{ backgroundColor: emailBgColor }} // Set background color dynamically
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
            onChange={(e) => {
               setPassword(e.target.value)
              handlePasswordInputChange(e);
              }}
              style={{backgroundColor: passwordBgColor}}
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
            onChange={(e) => {
              setPassword2(e.target.value)
             handlePassword2InputChange(e);
             }}
             style={{backgroundColor: password2BgColor}}
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
