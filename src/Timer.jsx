import TaskForm from "./components/TaskForm";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";

export default function Timer() {
  return (
    <div className="max-w-[41rem] mx-auto mt-10">
      <TaskForm />
      <TimeDisplay />
      <ToggleButton />
    </div>
  );
}
