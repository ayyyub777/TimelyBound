import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function ToggleButton() {
  const {handleTime, isRunning, taskIsSet} = useContext(TimerContext)
  return (
    <button onClick={() => handleTime(!isRunning)} disabled={!taskIsSet}>
          {isRunning ? "Stop" : "Start"}
    </button>
  );
}
