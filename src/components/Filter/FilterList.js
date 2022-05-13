import ExpenseItem from "../Expenses/ExpenseItem";

const FilterList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="mx-auto">
        <p className=" text-xl text-purple-600 font-semibold py-4">
          There are no expenses for the selected year
        </p>
      </div>
    );
  }

  return (
    <li>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </li>
  );
};

export default FilterList;
