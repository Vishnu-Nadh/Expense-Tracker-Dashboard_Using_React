// import logo from "./logo.svg";
import "./App.css";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const newExpenceHandler = (expenceData) => {
    const newExpense = {
      ...expenceData,
    };
    console.log(newExpense);
  };
  const expenses = [
    { id: 1, date: new Date(2022, 2, 12), title: "Car Insurance", amount: 256 },
    { id: 2, date: new Date(2021, 4, 1), title: "Loan payment", amount: 450 },
    { id: 3, date: new Date(2022, 1, 11), title: "Tv Purchase", amount: 12000 },
    { id: 4, date: new Date(2022, 3, 18), title: "Current bill", amount: 156 },
  ];
  return (
    <div className="bg-pink-50 p-4">
      <NewExpense onGetNewExpense={newExpenceHandler} />
      <ExpenseList expenses={expenses} />;
    </div>
  );
}
export default App;
