import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function TaskForm() {
  const { handleForm, isRunning, task } = useContext(TimerContext);
  return (
    <div className="text-center font-bold">
      <span className="text-lg">I will work on</span>
      <input
        name="activity"
        type="text"
        value={task.activity}
        list="tasks"
        placeholder="Give your project a name"
        onChange={handleForm}
        disabled={isRunning}
        className="bg-transparent border-b-2 px-2 py-1 mx-2 text-lg placeholder-gray-placeholder border-gray-placeholder focus:text-gray-title focus:border-gray-title focus:outline-none w-64"
      />
      <datalist id="tasks">
        <option>Work on LeetCode problems</option>
        <option>Read Alchemist</option>
      </datalist>
      <span className="text-lg">for</span>
      <input
        name="duration"
        type="number"
        placeholder="0"
        min={0}
        onChange={handleForm}
        disabled={isRunning}
        className="bg-transparent border-b-2 px-2 py-1 mx-2 text-lg placeholder-gray-placeholder border-gray-placeholder focus:text-gray-title focus:border-gray-title focus:outline-none w-16"
      />
      <span className="text-lg"> minutes.</span>
    </div>
  );
}
