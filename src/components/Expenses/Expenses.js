import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import FliterExpenseDate from "./FliterExpenseDate";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../NewExpense/ExpenseChart";

const Expenses = (props) => {
  const { items } = props;
  const [selectfliterValue, setSelectFliterValue] = useState("2021");

  const filterExpenselist = items.filter((expense) => {
    if ("All" === selectfliterValue) {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === selectfliterValue;
    }
  });
  console.log(filterExpenselist);
  // console.log(filterExpenselist);
  // const [fliterIntoText,setFliterIntoText]=useState('2019,2020,2021');
  let fliterIntoText = "2019,2020,2021";

  if (selectfliterValue === "2019") {
    fliterIntoText = "2020,2021,2022";
  } else if (selectfliterValue === "2021") {
    fliterIntoText = "2019,2020,2022";
  } else {
    fliterIntoText = "2019,2020,2021";
  }

  const filterChangeHander = (selecteedYear) => {
    setSelectFliterValue(selecteedYear);

    // console.log('Expense.js');
    // console.log(selecteedYear);
  };
  // console.log('select year');
  // console.log(selectfliterValue);

  // let expenseSelect = <p>No expenses Found</p>;
  // if (filterExpenselist.length > 0) {
  //   expenseSelect = filterExpenselist.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <li>
      <Card className="expenses">
        <FliterExpenseDate
          selected={selectfliterValue}
          filterChangeHander={filterChangeHander}
        />
        <p>Date for {fliterIntoText} year is hidden;</p>
        <ExpenseChart expenses={filterExpenselist} />
        <ExpenseList items={filterExpenselist} />
      </Card>
    </li>
  );
};

export default Expenses;
