import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amountValues = props.dataPoints.map((expense) => expense.value);
  const totAmount = amountValues.reduce((a, b) => a + b, 0);

  return (
    <div className="flex gap-2 justify-center">
      {/* marker bars here */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          TotValue={totAmount}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
