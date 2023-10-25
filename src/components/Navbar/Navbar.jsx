import React, { useState, useEffect } from "react";
import * as Io5Icons from "react-icons/io5";
import { Link, useNavigate, redirect } from "react-router-dom";
import { Navigate } from 'react-router';
import Sidebar from "../Sidebar/Sidebar";
import { IconContext } from "react-icons";
import logo from "../../assets/img/logo.svg"
import whitelogo from "../../assets/img/whitelogo.svg";
import profile from "../../assets/img/profile.svg";
import { useAuth } from "../../auth/AuthContext";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [isLogout, setIsLogout] = useState(false)

  const auth = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('auth :>> ', auth);
    auth.logout();
    setIsLogout(true)
    return redirect('/Getstart');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) redirect('/Getstart')

  }, [auth.user, isLogout])

  console.log('auth :>> ', auth.user);

  const sidebarItems = Sidebar()
  
  return (      
  
  <main className="">
      <IconContext.Provider value={{ color: "undefined" }} className="lg:hidden">
        <nav className="w-full flex justify-between p-4">
          <Link to="#">
            <Io5Icons.IoMenuOutline
              onClick={showSidebar}
              className="text-4xl lg:text-5xl"
            />
          </Link>

          <Link to="/Profile">
            <Io5Icons.IoPersonCircleOutline className="text-4xl lg:text-5xl" />
          </Link>
        </nav>

        <nav className={` fixed top-0  w-full h-full xl:w-1/4  bg-black 
        ${sidebar ? "translate-x-0 transition-transform duration-700 w-full bg-zinc-900/90 backdrop-blur-sm"
              : "-translate-x-full  bg-zinc-900/90 backdrop-blur-sm duration-700 ease-in-out"}`}>
        <ul className="flex flex-col items-center justify-center gap-8  lg:w-full h-screen">
            <li className="flex w-full justify-evenly items-center">
              <Link to="#" className="h-full flex items-center">
                <Io5Icons.IoCaretBackCircleSharp
                  className=" text-4xl duration-1000"
                  onClick={showSidebar}
                /><span className="text-2xl">BACK</span>
              </Link>
              <img className=" lg:w-1/4 xl:w-1/2"
                src={whitelogo}
                alt="Logo"
              />
            </li>
            <ul className="flex flex-col gap-4 w-4/5">
              <h3 className="border-b-4 py-2 border-pink-500  animate-pulse w-full text-center  text-5xl">
                Menu
              </h3>
              {sidebarItems.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={() => showSidebar}>
                      <div
                        className=" hover:bg-zinc-500 active:bg-zinc-500 w-full 
                      rounded text-2xl flex justify-between "
                      >
                        <button className="p-4">{item.title}</button>
                        <button className="p-4">{item.icons}</button>
                      </div>
                    </Link>
                  </li>

                );                  

              })}                


            </ul>                
                <button className="p-4 w-4/5 text-2xl hover:bg-zinc-500 flex justify-between items-center 
                 rounded-lg  " onClick={() => handleLogout()}>
                  <span className="">Log out</span><Io5Icons.IoLogOutOutline className=" animate-pulse" />
                </button>
                
          </ul>
        </nav>
      </IconContext.Provider>
  </main>



  );
};
export default Navbar
