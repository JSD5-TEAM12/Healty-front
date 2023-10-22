import React, { useState, useContext } from "react";
import * as Io5Icons from "react-icons/io5";
import { GiHiking } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { Btn } from "./Btn";
import { useActivityContext } from "../function"

  const activities = [
    {name: "Hiking", icon: <GiHiking />},
    {name: "Bicycle", icon: <Io5Icons.IoBicycle />},
    {name: "Swimming", icon: <FaPersonSwimming />},
    {name: "Running", icon: <FaPersonRunning />},
    {name: "Badminton", icon: <FaPersonRunning />},
    {name: "Create New", icon: <Io5Icons.IoAddCircleSharp />}
  ];

const SelectActivity = () => {
  const { currentActivity, setActivity} = useActivityContext();

  const handleLeftBtn = () => {
    const currentIndex = activities.findIndex(activity => activity.name === currentActivity);
    const newIndex = (currentIndex - 1 + activities.length) % activities.length;
    setActivity(activities[newIndex].name);
  }

  const handleAddClick = () => {
    setActivity(currentActivity)
  }

  const handleRightBtn = () => {
    const currentIndex = activities.findIndex(activity => activity.name === currentActivity);
    const newIndex = (currentIndex + 1) % activities.length;
    setActivity(activities[newIndex].name);
  }

  const currentActivityIndex = activities.findIndex(
    (activity) => activity.name === currentActivity
  );

  const activitiesToDisplay = [  
    activities[(currentActivityIndex - 1 + activities.length) % activities.length],
    activities[currentActivityIndex],
    activities[(currentActivityIndex + 1) % activities.length],
  ];

  return (
    <>
    <div className="flex justify-start items-center">
        <div className="text-white border-b-4 w-[70%] ml-16 mt-8">Select Activity</div>
      </div>
 <div className="w-full rounded-lg">
        <div className="mt-4 text-5xl flex items-center justify-center">
          {activitiesToDisplay.map((activity, index) => (
            <div
              key={index}
              className={`text-white border border-white text-center rounded-lg flex flex-col justify-center
              items-center p-6 text-xl w-[100px] h-[100px] ${
                activity.name === currentActivity
                  ? "bg-gradient-to-br from-pink-600 to-indigo-700 w-[140px] h-[140px] flex justify-center items-center"
                  : "bg-zinc-700  flex justify-center items-center"
              }  mx-4`}
            > <h3>{activity.name}</h3>
              <div className="text-4xl">{activity.icon}</div>
            </div>
          ))}
        </div></div>
      <Btn
          handleLeftBtn={handleLeftBtn}
          handleRightBtn={handleRightBtn}
          activities={activities}
          currentActivity={currentActivity}
          handleAddClick={handleAddClick}
        />
    </>
  )
}
export default SelectActivity;