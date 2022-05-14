// import logo from "./logo.svg";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummy_expenses = [
  { id: 1, date: new Date(2022, 2, 12), title: "Car Insurance", amount: 256 },
  { id: 2, date: new Date(2022, 3, 5), title: "Loan payment", amount: 300 },
  { id: 3, date: new Date(2022, 1, 15), title: "Phone purchase", amount: 740 },
  { id: 4, date: new Date(2021, 4, 1), title: "Loan payment", amount: 450 },
  { id: 5, date: new Date(2019, 1, 11), title: "Tv Purchase", amount: 1200 },
  { id: 6, date: new Date(2020, 3, 18), title: "Current bill", amount: 156 },
];

// const dummy_expenses = [];

function App() {
  const [changedExpenses, setNewExpenses] = useState(dummy_expenses);
  const newExpenceHandler = (newExpense) => {
    setNewExpenses((prevExpences) => {
      return [newExpense, ...prevExpences];
    });
  };

  return (
    <div className="bg-pink-50 p-4">
      <NewExpense onGetNewExpense={newExpenceHandler} />
      <ExpenseList expenses={changedExpenses} />;
    </div>
  );
}

export default App;
