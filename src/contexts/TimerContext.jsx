import { createContext, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [storageData, setStorageData] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  return (
    <TimerContext.Provider
      value={{
        storageData,
        setStorageData,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
