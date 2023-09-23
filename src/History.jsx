import { useContext } from "react";
import { TimerContext } from "./contexts/TimerContext";

export default function History() {
  const {storageData} = useContext(TimerContext);
  return (
     <table>
        <thead>
          <tr>
          <th>Task</th>
          <th>Duration</th>
          <th>Creation Date</th>
        </tr>
        </thead>
        <tbody>
          {storageData.map((item) => {
            const {activity, duration} = item;
            return (
              <tr key={`${activity}${Math.random()}`}>
                <td>{activity}</td>
                <td>{duration}</td>
                <td>2 Days ago</td>
              </tr>
            )
          })}
        </tbody>
   </table> 
  );
}
