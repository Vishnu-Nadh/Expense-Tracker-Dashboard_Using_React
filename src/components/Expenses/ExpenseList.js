import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterYear from "../Filter/FilterYear";
import { useState } from "react";

const ExpenseList = (props) => {
  const [currentFilterYear, setFilterYear] = useState("2019");

  const yearChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <Card className="flex flex-col bg-gray-100 max-w-4xl pb-4">
      <FilterYear
        onChangeFilter={yearChangeHandler}
        selected={currentFilterYear}
      />
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
