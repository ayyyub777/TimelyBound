import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [task, setTask] = useState({activity : "", duration : 0});
  const intervalId = useRef();

  useEffect(() => {
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (time.sec === 0 && time.min === 0) {
      handleTime(false);
      console.log("beep beep beep!!!");
    }
  }, [time]);

  const handleTime = (shouldStart) => {
    if (shouldStart) {
      setIsRunning(true);
      intervalId.current = setInterval(() => {
        updateTime();
      }, 1000);
    } else {
      setIsRunning(false);
      clearInterval(intervalId.current);
    }
    console.log(task);
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

  const handleDuration = (e) => {
    setTime({ min: parseInt(e.target.value), sec: 0 });
    setTask({...task, duration : e.target.value});
  };
  const handleActivity = (e) => {
    setTask({...task, activity : e.target.value});

  };


  return (
    <>
      <div>
        <span>I will work on </span>
        <input type="text" list="tasks" placeholder="Give your project a name" onChange={handleActivity}/>
        <datalist id="tasks">
          <option>Work on LeetCode problems</option>
          <option>Read Alchemist</option>
        </datalist>
        <span> for </span>
        <input
          type="number"
          value={time.min}
          max={60}
          min={0}
          onChange={handleDuration}
        />
        <span> minutes.</span>
      </div>
      <div>
        <div>
          {String(time.min).padStart(2, "0")} : {String(time.sec).padStart(2, "0")}
        </div>
        <button onClick={() => handleTime(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}
