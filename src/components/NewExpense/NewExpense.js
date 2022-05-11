import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const addExpenceDataHandler = (expenceData) => {
    const newExpenceData = {
      ...expenceData,
      id: Math.random().toString(),
    };
    props.onGetNewExpense(newExpenceData);
  };

  return (
    <Card className="max-w-4xl bg-purple-100 py-4">
      <ExpenseForm onNewExpenceData={addExpenceDataHandler} />
    </Card>
  );
};

export default NewExpense;
