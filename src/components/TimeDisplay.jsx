import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function TimeDisplay() {
  const {time} = useContext(TimerContext)
  return (
    <div>
        {String(time.min).padStart(2, "0")} : {String(time.sec).padStart(2, "0")}
    </div>
);
}
