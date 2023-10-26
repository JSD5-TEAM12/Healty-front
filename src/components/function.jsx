import { createContext, useContext, useState,  } from "react";

const ActivityDataContext = createContext();

export const useActivityContext = () => {
  return useContext(ActivityDataContext)
}
export const ActivityContextProvider = ({ children }) => {

  const [currentActivity, setCurrentActivity] = useState('Bicycle');

  const setActivity = (activity) => {
    setCurrentActivity(activity)
  };

  const [createsuccess , setCreateSuccess] = useState(false)
  const created = (data) =>{
    setCreateSuccess(prev => !prev)
  }

  //try
  const [currentPicture, setCurrentPicture] = useState();
  const setPicture = (picture) => {
    setCurrentPicture(picture)
  };

  //try
  const [currentData, setCurrentData] = useState('');
  const setData = (data) => {
    setCurrentData(data)
  };


  return (
    <ActivityDataContext.Provider value={{ currentActivity, setActivity, currentPicture, setPicture, currentData, setData }}>
      {children}
    </ActivityDataContext.Provider>
  );
};

