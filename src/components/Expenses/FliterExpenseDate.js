import React from "react";
import "./FliterExpenseDate.css";
const FliterExpenseDate = (props) => {
  const {filterChangeHander, selected} = props
  const dropDownChangeHandler = (event) => {
    filterChangeHander(event.target.value);
  };
  return (
    <div className="expense-fliter">
      <div className="expense-fliter__control">
        <label>Filter By year</label>
        <select value={selected} onChange={dropDownChangeHandler}>
          <option value='All'>All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default FliterExpenseDate;
