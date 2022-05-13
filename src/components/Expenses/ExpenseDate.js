const ExpenseDate = (props) => {
  // console.log(props.date);
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="flex flex-col justify-center items-center px-2 w-24 rounded border-2 border-slate-300">
      <span className="font-semibold text-gray-200 text-xl">{day}</span>
      <span className="font-thin text-gray-200 text-sm">{month}</span>
      <span className="font-thin text-gray-200 text-sm">{year}</span>
    </div>
  );
};

export default ExpenseDate;
