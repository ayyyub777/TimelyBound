import { useContext } from "react";
import { TimerContext } from "./contexts/TimerContext";

export default function History() {
  const { storageData } = useContext(TimerContext);
  return (
    <main className="max-w-[58rem] mx-auto mt-3 mb-10">
      <h1 className="font-bold text-2xl mb-9">My history</h1>
      <div className="overflow-x-auto rounded-t-lg h-[26rem] overflow-scroll">
        <table className="w-full text-sm leading-6 text-left">
          <thead>
            <tr className="font-bold bg-gray-divider">
              <th scope="col" className="px-6 py-4">
                Task
              </th>
              <th scope="col" className="px-6 py-4">
                Duration
              </th>
              <th scope="col" className="px-6 py-4">
                Creation Date
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-text">
            {storageData.map((item) => {
              const { activity, duration } = item;
              return (
                <tr
                  scope="row"
                  key={`${activity}${Math.random()}`}
                  className="bg-gray-element mt-1 border-t-4 border-gray-background"
                >
                  <td className="px-6 py-4">{activity}</td>
                  <td className="px-6 py-4">{duration} minutes</td>
                  <td className="px-6 py-4">Created 2 days ago</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
