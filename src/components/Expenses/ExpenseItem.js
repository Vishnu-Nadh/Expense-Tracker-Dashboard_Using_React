import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="w-5/6 flex h-24 justify-around items-center bg-gradient-to-r from-purple-500 to-pink-500 mt-8">
      <div className="flex gap-8 pl-4">
        <ExpenseDate date={props.date} />
      </div>
      <div>
        <span className="font-bold text-white uppercase text-xl">
          {props.title}
        </span>
      </div>
      <div className="p-4">
        <div className="price p-4 border-2 rounded-full border-gray-100 shadow-sm text-2xl text-white font-bold">
          ${props.amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
