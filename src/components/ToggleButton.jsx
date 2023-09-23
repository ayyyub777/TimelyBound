export default function ToggleButton({handleTime, isRunning, taskIsSet}) {
  return (
    <button onClick={() => handleTime(!isRunning)} disabled={!taskIsSet}>
          {isRunning ? "Stop" : "Start"}
    </button>
  );
}
