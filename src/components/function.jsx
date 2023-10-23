import { createContext, useContext, useState,  } from "react";
import bicycle from "../../src/assets/img/bicycle.jpg"

const ActivityDataContext = createContext();

export const useActivityContext = () => {
  return useContext(ActivityDataContext)
}
export const ActivityContextProvider = ({ children }) => {

  const [currentActivity, setCurrentActivity] = useState('Bicycle');
    console.log(currentActivity)

  const setActivity = (activity) => {
    setCurrentActivity(activity)
  };

  //try
  const [currentPicture, setCurrentPicture] = useState();
    console.log(currentPicture)
  const setPicture = (picture) => {
    setCurrentPicture(picture)
  };

  //try
  const [currentData, setCurrentData] = useState('');
    console.log(currentData)
  const setData = (data) => {
    setCurrentData(data)
  };

  return (
    <ActivityDataContext.Provider value={{ currentActivity, setActivity, currentPicture, setPicture, currentData, setData }}>
      {children}
    </ActivityDataContext.Provider>
  );
};

