import { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import BG from "../../assets/img/20-SON01830.jpg"
import { IoPersonSharp } from "react-icons/io5";
import { IoLockClosedSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

// Style 
import { inputStyles } from "./inputStyles"; // Import the styles
import "./Login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  console.log("username => ",username ,"password => ",password)
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handleLogin is called");
    try {
      const loginData = {
        username: username,
        password: password,
      };
      // console.log(loginData);
      const response = await axios.post("http://localhost:8050/login",
        loginData
      );
      console.log(response)

      if (response) {
        window.localStorage.setItem("token", response.data.token);
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  const tokenDecoder = () => {
    const tokenObject = window.localStorage.getItem("token");
    const decodedToken = jwtDecode(tokenObject);
    return decodedToken;
  };

  return (
      <main className={`${inputStyles.mainSection}`}>
        <img src={Logo} alt="logo" />

        <section id="form-login" className="grid gap-4 w-full">
          <form  onSubmit={handleLogin} className="flex flex-col xl:max-w-4xl xl:text-base">
            <label className={`${inputStyles.label}`}>Username</label>
            <div className="relative">
              <IoPersonSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-white" />
              <input
                type="text"
                placeholder="Enter Your Username"
                className={`${inputStyles.base} ${inputStyles.focus}`}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </form>
          <form className="flex flex-col xl:max-w-4xl">
            <label className={`${inputStyles.label}`}>Password</label>
            <div className="relative">
              <IoLockClosedSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-white text-lg sm:text-xl" />
              <input
                type="password"
                placeholder="Enter Your Password"
                className={`${inputStyles.base} ${inputStyles.focus}`}

                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>

          <span className="text-white text-base text-end sm:text-xl">
            <Link to="/reset">Forget your password</Link>
          </span>
        </section>

        {/* Button */}
        {/* <button className="text-xl text-white" type="button" onClick={()=>handleLogin}>test login</button> */}
        <section className="w-full gap-4 grid ">
          <article className="w-full overflow-hidden rounded-md">
            <button
              className="border-2 btn_button fade-in p-3  w-full text-white text-xl"
              onClick={()=>handleLogin}
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
