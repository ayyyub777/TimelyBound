import TaskForm from "./components/TaskForm";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";

export default function Timer() {
  return (
    <div>
      <TaskForm />
      <TimeDisplay />
      <ToggleButton />
    </div>
  );
}
