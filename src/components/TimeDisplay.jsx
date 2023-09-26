import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function TimeDisplay() {
  const { time } = useContext(TimerContext);
  const minFormat = String(time.min).padStart(2, "0");
  const secFormat = String(time.sec).padStart(2, "0");
  return (
    <div className="text-[160px] font-mono font-bold flex my-14">
      <div className="flex gap-4">
        <span className="bg-gray-element px-4 py-4 leading-none rounded-lg">
          {minFormat.charAt(0)}
        </span>
        <span className="bg-gray-element px-4 py-4 leading-none rounded-lg">
          {minFormat.charAt(1)}
        </span>
      </div>
      <span className="text-brand-principal py-4 leading-none">:</span>
      <div className="flex gap-4">
        <span className="bg-gray-element px-4 py-4 leading-none rounded-lg">
          {secFormat.charAt(0)}
        </span>
        <span className="bg-gray-element px-4 py-4 leading-none rounded-lg">
          {secFormat.charAt(1)}
        </span>
      </div>
    </div>
  );
}
