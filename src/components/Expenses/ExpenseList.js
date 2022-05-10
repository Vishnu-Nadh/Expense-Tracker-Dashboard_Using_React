import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseList = (props) => {
  return (
    <Card className="flex flex-col p-4 bg-gray-100 max-w-3xl">
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
};

export default ExpenseList;
