export default function TimeDisplay({time}) {
  return (
    <div>
        {String(time.min).padStart(2, "0")} : {String(time.sec).padStart(2, "0")}
    </div>
);
}
