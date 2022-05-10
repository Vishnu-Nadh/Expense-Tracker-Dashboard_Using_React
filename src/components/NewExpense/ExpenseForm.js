import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };

    props.onNewExpenceData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto max-w-2xl p-8 rounded bg-purple-300 my-4"
    >
      <div className="grid grid-cols-2 items-center justify-center">
        <InputFeild className="col-start-1 col-span-2">
          <label className="text-bold text-xl text-purple-800 mb-4">
            Title
          </label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type="text"
            className="outline-none p-2 rounded-md border-2 text-gray-700 focus:border-pink-300 focus:border-2"
          />
        </InputFeild>
        <InputFeild className="">
          <label className="text-bold text-xl text-purple-800">Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-05-01"
            className="outline-none p-2 rounded-md border-2 text-gray-700 focus:border-pink-300 focus:border-2"
          />
        </InputFeild>
        <InputFeild className="">
          <label className="text-bold text-xl text-purple-800">Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            className="outline-none p-2 rounded-md border-2 text-xl text-gray-700 focus:border-pink-300 focus:border-2"
          />
        </InputFeild>
      </div>
      <button
        type="submit"
        className="border-2 block mt-4 rounded-md bg-pink-500 hover:bg-pink-400 text-white font-bold text-xl mx-auto py-2 px-4"
      >
        Add Expense
      </button>
    </form>
  );
};

const InputFeild = (props) => {
  const classes = "rounded p-4 flex flex-col gap-4" + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default ExpenseForm;
