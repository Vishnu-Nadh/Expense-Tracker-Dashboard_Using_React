const ChartBar = (props) => {
  let barFill = "0%";
  if (props.TotValue > 0) {
    barFill = Math.round((props.value / props.TotValue) * 100) + "%";
  }
  console.log(barFill);
  return (
    <div className="marker-bars flex gap-2 justify-around">
      <div className="flex flex-col gap-2 justify-around p-2">
        <div className="w-4 h-32 shadow-sm bg-pink-100 rounded-b-full border-2 border-pink-400 relative overflow-hidden">
          <div
            className="w-full bg-purple-500 absolute bottom-0"
            style={{ height: barFill }}
          ></div>
        </div>
        <span className="text-purple-700">{props.label}</span>
      </div>
    </div>
  );
};

export default ChartBar;
