import React, { useState } from "react";
import * as Io5Icons from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { IconContext } from "react-icons";
import logo from "../../assets/img/logo.svg"
import whitelogo from "../../assets/img/whitelogo.svg";
import profile from "../../assets/img/profile.svg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    {/* Mobile */}
      <IconContext.Provider value={{ color: "undefined" }} className="mobile ">
        <div className="h-12 flex justify-start items-center lg:hidden ">
          <Link to="#" className="text-4xl ml-4 text-white">
            <Io5Icons.IoMenuOutline onClick={showSidebar} className="fixed" />
          </Link>
        </div>
        <nav
          className={`lg:hidden absolute top-0 ${
            sidebar
              ? "translate-x-0 transition-transform duration-500 w-full bg-black bg-opacity-40 backdrop-blur-lg"
              : "-translate-x-full transition-transform duration-700"}`}>
          <ul className="w-screen flex flex-col items-center text-white text-2xl w-11/12 h-screen flex items-center
        p-4 rounded mt-14">
            <li className="w-full h-20 flex justify-center items-center">
              <Link to="#" className="mr-">
                <Io5Icons.IoCaretBackCircleSharp
                  className="text-white absolute left-0 ml-20"
                  onClick={showSidebar}
                />
              </Link>
              <img
                className=""
                src={whitelogo}
                alt="Logo"
                width="200"
                height="200"
              />
            </li>
            <div className="flex flex-col justify-center items-center ">
              <h3 className="border-b-8 border-pink-600  w-full text-center mt-8 text-5xl">
                Menu
              </h3>
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={showSidebar}>
                      <div className="flex items-center justify-between m-6 px-4 hover:bg-zinc-500 w-64 rounded text-2xl">
                        <span className="">{item.title}</span>
                        {item.icons}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>

    {/* Desktop */}
      <IconContext.Provider value={{ color: "undefined" }} className="desktop ">
        <div className="lg:block hidden ">
          <div className="flex justify-between mt-4 bg-black  bg-opacity-10 w-screen pr-6 py-2">
            <div>
              <img
                className=""
                src={logo}
                alt="Logo"
                width="250"
                height="250"
              />
              <div className="h-12 flex justify-start items-center ">
                <Link to="#" className="text-3xl ml-4 text-white">
                  <Io5Icons.IoMenuOutline onClick={showSidebar} className="" />
                </Link>
              </div>
            </div>
            <img
              className=" "
              src={profile}
              alt="Logo"
              width="70"
              height="70"
            />
          </div>
        </div>

        <nav
          className={`lg:block hidden absolute ${
            sidebar
              ? "translate-x-0 transition-transform duration-500 "
              : "-translate-x-full transition-transform duration-700"
          }`}
        >
          <ul className="w-80 h-screen flex flex-col items-center bg-black bg-opacity-10 backdrop-blur-lg">
            <li className="">
              <Link to="#" className="lg:hidden">
                <Io5Icons.IoCaretBackCircleSharp
                  className="text-white"
                  onClick={showSidebar}/>
              </Link>
              <img
                className="lg:hidden"
                src={logo}
                alt="Logo"
                width="300"
                height="300"
              />
            </li>
            <div className="text-white text-xl">
              {/* <h3 className="border-b text-center">Menu</h3> */}
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={showSidebar}>
                      <div className="flex justify-center my-8 items-center hover:bg-zinc-500 w-64 rounded">
                        <span className="">{item.title}</span>
                        {/* {item.icons} */}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
