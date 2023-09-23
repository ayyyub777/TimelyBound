export default function TaskForm({handleForm, isRunning}) {
  return (
    <div>
    <span>I will work on </span>
    <input name="activity" type="text" list="tasks" placeholder="Give your project a name" onChange={handleForm} disabled={isRunning}/>
    <datalist id="tasks">
      <option>Work on LeetCode problems</option>
      <option>Read Alchemist</option>
    </datalist>
    <span> for </span>
    <input
      name="duration"
      type="number"
      max={60}
      min={0}
      onChange={handleForm}
      disabled={isRunning}
    />
    <span> minutes.</span>
  </div>
);
}
