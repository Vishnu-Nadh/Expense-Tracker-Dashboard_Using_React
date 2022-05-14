import Card from "../UI/Card";
import FilterYear from "../Filter/FilterYear";
import { useState } from "react";
import FilterList from "../Filter/FilterList";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = (props) => {
  const [currentFilterYear, setFilterYear] = useState("2019");

  const yearChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === currentFilterYear
  );

  return (
    <Card className="flex flex-col bg-gray-100 max-w-4xl pb-4">
      <FilterYear
        onChangeFilter={yearChangeHandler}
        selected={currentFilterYear}
      />
      <ExpensesChart filteredData={filteredExpenses} />
      <FilterList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseList;
