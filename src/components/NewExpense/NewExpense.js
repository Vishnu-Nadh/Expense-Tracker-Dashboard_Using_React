import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenceHandler = () => {
    setIsEditing(true);
  };

  const removeNewExpenceHandler = () => {
    setIsEditing(false);
  };

  const addExpenceDataHandler = (expenceData) => {
    const newExpenceData = {
      ...expenceData,
      id: Math.random().toString(),
    };
    props.onGetNewExpense(newExpenceData);
    setIsEditing(false);
  };

  return (
    <Card className="max-w-4xl bg-purple-100 py-4">
      {!isEditing && (
        <div className="mx-auto max-w-3xl">
          <button
            type="button"
            onClick={addNewExpenceHandler}
            className="border-2 block my-4 rounded-md bg-pink-500 hover:bg-pink-400 text-white font-bold text-xl py-2 px-2 mx-auto"
          >
            Add New Expense
          </button>
        </div>
      )}

      {isEditing && (
        <ExpenseForm
          onNewExpenceData={addExpenceDataHandler}
          onCancel={removeNewExpenceHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
