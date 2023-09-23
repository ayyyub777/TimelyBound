export default function History({storageData}) {
  return (
    <div>
        <ul>
            {storageData.map((item) => {
                const {activity, duration} = item;
                return <li key={activity}>{`${activity} : ${duration} minutes`}</li>
            })}
        </ul>
    </div>
  );
}
