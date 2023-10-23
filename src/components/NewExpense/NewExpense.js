import NewExpenseForm from "./NewExpenseForm";
import React, { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const detail = ["Title", "Amount", "Date"];
  const [isEditing,setIsEditing]=useState(false);
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditing=()=>{
    setIsEditing(true);
  };
  const stopEditing=()=>{
    setIsEditing(false);
  }
  return (
    <div className="NewExpense">
      {!isEditing && <button onClick={startEditing}>Add Expense</button>}
      {isEditing && <NewExpenseForm  onStopEditing={stopEditing}
        onSaveExpenseData={saveExpenseDataHandler}
        detail={detail}
      />}
    </div>
  );
};
export default NewExpense;
