import { useContext, useEffect, useRef, useState } from "react";

import TaskForm from "./components/TaskForm";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";
import { TimerContext } from "./contexts/TimerContext";

export default function Timer() {
  const {storageData, setStorageData} = useContext(TimerContext);
  
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [task, setTask] = useState({activity : "", duration : 0, timeLeft : 0});
  const taskIsSet = task.activity !== "" && task.duration > 0;
  const intervalId = useRef();

  useEffect(() => {
    return () => {
      clearInterval(intervalId.current);
    };

  }, []);

  const trackTimer = () => {
    if (time.sec === 0 && time.min === 0) {
      console.log("beep beep beep!!!");
      var updatedStorageData = [...storageData, task];
      localStorage.setItem("tasks", JSON.stringify(updatedStorageData));
      setStorageData(updatedStorageData);
    }
    
  }
  

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
    } else if (name === "duration") {
      const duration = parseInt(value);
      setTime({ min: duration, sec: 0 });
      setTask({ ...task, duration });
    }
  };

  return (
    <div>
      <TaskForm handleForm={handleForm} isRunning={isRunning} time={time}/>
      <TimeDisplay time={time}/>
      <ToggleButton handleTime={handleTime} isRunning={isRunning} taskIsSet={taskIsSet}/>
    </div>
  );
}