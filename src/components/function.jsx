import { createContext, useContext, useState,  } from "react";

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
  return (
    <ActivityDataContext.Provider value={{ currentActivity, setActivity }}>
      {children}
    </ActivityDataContext.Provider>
  );
};