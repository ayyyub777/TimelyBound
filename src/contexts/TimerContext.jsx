import { createContext, useEffect, useRef, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [storageData, setStorageData] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [task, setTask] = useState({ activity: "", duration: 0 });
  const intervalId = useRef();
  const taskIsSet = task.activity !== "" && task.duration > 0;

  useEffect(() => {
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const trackTimer = () => {
    if (time.sec === 0 && time.min === 0) {
      console.log("beep beep beep!!!");
    } else if (taskIsSet && task.duration === time.min) {
      var updatedStorageData = [...storageData, task];
      localStorage.setItem("tasks", JSON.stringify(updatedStorageData));
      setStorageData(updatedStorageData);
    }
  };

  const handleTime = (shouldStart) => {
    if (shouldStart && taskIsSet) {
      setIsRunning(true);
      trackTimer();
      intervalId.current = setInterval(() => {
        updateTime();
      }, 1000);
    } else {
      setIsRunning(false);
      clearInterval(intervalId.current);
    }
  };

  const updateTime = () => {
    setTime((prev) => {
      let newTime = { ...prev };
      if (newTime.sec === 0 && newTime.min === 0) {
        clearInterval(intervalId.current);
        setIsRunning(false);
      } else if (newTime.sec === 0) {
        newTime.min -= 1;
        newTime.sec = 59;
      } else {
        newTime.sec -= 1;
      }
      return newTime;
    });
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    if (name === "activity") {
      setTask({ ...task, activity: value });
    } else if (name === "duration" && value) {
      const duration = parseInt(value);
      setTime({ min: duration, sec: 0 });
      setTask({ ...task, duration });
    }
  };

  return (
    <TimerContext.Provider
      value={{
        storageData,
        setStorageData,
        time,
        setTime,
        isRunning,
        setIsRunning,
        task,
        setTask,
        intervalId,
        taskIsSet,
        handleTime,
        handleForm,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
