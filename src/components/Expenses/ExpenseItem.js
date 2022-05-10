import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-tab pl-4 flex overflow-hidden items-center justify-between h-24 bg-gradient-to-r from-purple-500 to-pink-500 max-w-2xl mt-8">
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
