import React, { useState, useContext } from "react";
import * as Io5Icons from "react-icons/io5";
import { GiHiking } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { Btn } from "./Btn";
import { useActivityContext } from "../function";
import bicycle from "../../assets/img/bicycle.jpg";
import hiking from "../../assets/img/hiking.jpg";
import walking from "../../assets/img/walking.jpg";
import swimming from "../../assets/img/swimming.jpg";
import running from "../../assets/img/running.jpg";

const activities = [
  { name: "Hiking", icon: <GiHiking />, pic: <img src={hiking} /> },
  { name: "Bicycle", icon: <Io5Icons.IoBicycle />, pic: <img src={bicycle} /> },
  { name: "Swimming", icon: <FaPersonSwimming />, pic: <img src={swimming} /> },
  { name: "Running", icon: <FaPersonRunning />, pic: <img src={running} /> },
  { name: "Walking", icon: <FaWalking />, pic: <img src={walking} /> },
];

const SelectActivity = () => {
  //try
  const { currentActivity, setActivity, currentPicture, setPicture } =
    useActivityContext();

  const handleLeftBtn = () => {
    const currentIndex = activities.findIndex(
      (activity) => activity.name === currentActivity
    );
    const newIndex = (currentIndex - 1 + activities.length) % activities.length;
    setActivity(activities[newIndex].name);
    //try
    setPicture(activities[newIndex].pic);
  };

  const handleAddClick = () => {
    setActivity(currentActivity);
  };

  const handleRightBtn = () => {
    const currentIndex = activities.findIndex(
      (activity) => activity.name === currentActivity
    );
    const newIndex = (currentIndex + 1) % activities.length;
    setActivity(activities[newIndex].name);
    //try
    setPicture(activities[newIndex].pic);
  };

  const currentActivityIndex = activities.findIndex(
    (activity) => activity.name === currentActivity
  );

  const activitiesToDisplay = [
    activities[
      (currentActivityIndex - 1 + activities.length) % activities.length
    ],
    activities[currentActivityIndex],
    activities[(currentActivityIndex + 1) % activities.length],
  ];

  return (
    <section className="flex flex-col w-full max-w-5xl mx-auto gap-8">
      <span className="text-left text-white border-b-4 lg:text-3xl text-base">
        Select Activity
      </span>

      <div className="w-full rounded-lg">
        <div className="mt-4 text-5xl flex items-center justify-center gap-4">
          {activitiesToDisplay.map((activity, index) => (
            <div
              key={index}
              className={`text-white border border-white rounded-lg   ${
                activity.name === currentActivity ||
                activity.pic === currentPicture
                  ? "bg-gradient-to-br from-pink-500 to-indigo-700 w-1/4  p-8 h-fit scale-125 duration-700"
                  : "bg-zinc-700  opacity-50 w-1/4 p-8 h-fit flex justify-center items-center duration-700 "
              }  mx-4`}
            >
              {" "}
              <aside className="flex flex-col-reverse justify-center w-full gap-4 items-center">
              <h3 className="text-2xl">{activity.name}</h3>
              <div className="lg:text-8xl text-4xl">{activity.icon}</div>                
              </aside>

            </div>
          ))}
        </div>
      </div>
      <Btn
        handleLeftBtn={handleLeftBtn}
        handleRightBtn={handleRightBtn}
        activities={activities}
        currentActivity={currentActivity}
        handleAddClick={handleAddClick}
        currentPicture={currentPicture}
      />
    </section>
  );
};
export default SelectActivity;
