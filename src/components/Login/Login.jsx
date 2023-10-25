import { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { IoPersonSharp } from "react-icons/io5";
import { IoLockClosedSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Style
import { inputStyles } from "./inputStyles"; // Import the styles
import "./Login.css";
// import
import { useAuth } from "../../auth/Authcontext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();

  const auth = useAuth();

  console.log("username => ", username, "password => ", password);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handleLogin is called");

    const response = await auth.login(username, password);
    if (localStorage.getItem("token")) navigate("/Home");
    console.log(response);
  };
  3;
 
  const [usernameBgColor, setUsernameBgColor] = useState(""); // State for username input background color
  const [passwordBgColor, setPasswordBgColor] = useState(""); // State for password input background color
  // Function to handle username input change
  const handleUsernameInputChange = (e) => {
    setUserName(e.target.value);
    // Check if the input field is not empty, change background color to light green
    setUsernameBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  // Function to handle password input change
  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
    // Check if the input field is not empty, change background color to light green
    setPasswordBgColor(e.target.value !== "" ? "#ec4899" : "");
  };

  return (
    <main className={`${inputStyles.mainSection}`}>
      <img src={Logo} alt="logo" />

      <section id="form-login" className="grid gap-4 w-full">
        <form
          onSubmit={handleLogin}
          className="flex flex-col xl:max-w-4xl xl:text-base gap-14"
        >
          <section>
            <label htmlFor="username" className={`${inputStyles.label}`}>
              Username
            </label>
            <div className="relative">
              <IoPersonSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-white" />
              <input
                id="username"
                type="text"
                placeholder="Enter Your Username"
                className={`${inputStyles.base} ${inputStyles.focus}`}
                value={username}
                onChange={handleUsernameInputChange}
                style={{ backgroundColor: usernameBgColor }} // Set background color dynamically
              />
            </div>

            <label htmlFor="password" className={`${inputStyles.label}`}>Password</label>
            <div className="relative">
              <IoLockClosedSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-white text-lg sm:text-xl" />
              <input
              id="password"
                type="password"
                placeholder="Enter Your Password"
                className={`${inputStyles.base} ${inputStyles.focus}`}
                value={password}
                onChange={handlePasswordInputChange}
                style={{ backgroundColor: passwordBgColor }} // Set background color dynamically
              />
            </div>
          </section>

          <section className="w-full gap-4 grid ">
            <article className="w-full overflow-hidden rounded-md">
              <button
                className="border-2 btn_button fade-in p-3  w-full text-white text-xl"
                onClick={() => handleLogin}
                type="submit"
              >
                Login
              </button>
            </article>

            <article className="w-full overflow-hidden rounded-md">
              <button
                className="btn_button fade-in p-3  w-full text-white text-xl flex align-center items-center justify-center"
                type="button"
              >
                <FcGoogle className="w-10" />
                Continues with google
              </button>
            </article>
          </section>
        </form>

        <span className="text-white text-base text-end sm:text-xl">
          <Link to="/reset">Forget your password</Link>
        </span>
      </section>

      <section className="text-center">
        <span className="text-white ">
          Don't have any account?{" "}
          <Link to="/register" className="text-pink-400 font-bold">
            Sign up
          </Link>{" "}
        </span>
      </section>
    </main>
  );
};

export default Login;
