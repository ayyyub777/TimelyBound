import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function TaskForm() {
  const {handleForm, isRunning, task} = useContext(TimerContext)
  return (
    <div>
    <span>I will work on </span>
    <input name="activity" type="text" value={task.activity} list="tasks" placeholder="Give your project a name" onChange={handleForm} disabled={isRunning}/>
    <datalist id="tasks">
      <option>Work on LeetCode problems</option>
      <option>Read Alchemist</option>
    </datalist>
    <span> for </span>
    <input
      name="duration"
      type="number"
      value={task.duration}
      max={60}
      min={0}
      onChange={handleForm}
      disabled={isRunning}
    />
    <span> minutes.</span>
  </div>
);
}
