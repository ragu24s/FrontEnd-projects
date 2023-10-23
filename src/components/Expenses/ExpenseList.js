import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  const {items} =props
  if (items.length === 0) {
    return <h2 className="expense-list__fallback">No expenses Found</h2>;
  }
  return (
    <ul className="expense-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))};
    </ul>
  );
};
export default ExpenseList;
