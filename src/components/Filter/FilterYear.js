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
      <MarkerBars />
    </div>
  );
};

export default FilterYear;

const MarkerBar = () => {
  return (
    <div className="w-4 h-32 shadow-sm bg-pink-100 rounded-b-full border-2 border-pink-400"></div>
  );
};

const MarkerBars = () => {
  return (
    <div className="marker-bars flex gap-2 justify-around">
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Jan</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Feb</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Mar</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Apr</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">May</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Jun</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Jul</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Aug</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Sep</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Oct</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Nov</span>
      </div>
      <div className="flex flex-col gap-2 justify-around p-2">
        <MarkerBar />
        <span className="text-purple-700">Dec</span>
      </div>
    </div>
  );
};
