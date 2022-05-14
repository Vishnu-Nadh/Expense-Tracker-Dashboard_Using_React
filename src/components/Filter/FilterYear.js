const FilterYear = (props) => {
  const onYearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="w-5/6 my-2 px-4 mx-auto mt-12">
      <div className="flex justify-between items-center px-4 max-w-2xl mx-auto mb-4">
        <span className="text-purple-600 font-bold text-lg">
          Filter by Year
        </span>
        <select
          value={props.selected}
          onChange={onYearChangeHandler}
          className="text-purple-600 font-bold text-lg px-4 py-1 outline-none border-2 rounded-md border-purple-600"
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default FilterYear;
