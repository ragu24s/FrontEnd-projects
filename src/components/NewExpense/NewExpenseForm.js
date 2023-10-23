import React, { useState } from "react";

import "./NewexpenseForm.css";
const NewExpenseForm = (props) => {
 
  const [entertitle, setEntertitle] = useState("");
  const [enteramount, setEnteramount] = useState("");
  const [enterdate, setEnterdate] = useState("");

  // const [userInput, setuserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });
  const titleChangeHandler = (event) => {
    setEntertitle(event.target.value);
    //   setuserInput({
    //       ...userInput,enterTitle:event.target.value
    //   });
    //  setuserInput((prevState)=>{
    //   return {...userInput,enterTitle:event.target.value};
    //  });
  };
  const amountChangeHandler = (event) => {
    setEnteramount(event.target.value);
    // setuserInput({
    //     ...userInput,enterTitle:event.target.value
    // });
    // setuserInput((prevState)=>{
    //     return {...userInput,enterAmount:event.target.value};
    //    });
  };
  const dateChangeHandler = (event) => {
    setEnterdate(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    // setuserInput((prevState) => {
    //   return { ...userInput, enterDate: event.target.value };
    // });
  };

  // const indentifierChangeHangler = (indentifier, value) => {
  //   if (indentifier === "title") {
  //     setEntertitle(value);
  //   } else if (indentifier === "amount") {
  //     setEnteramount(value);
  //   } else if (indentifier === "date") {
  //     setEnterdate(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entertitle,
      amount: enteramount,
      date: new Date(enterdate),
    };
    props.onSaveExpenseData(expenseData);
    
    setEntertitle('');
    setEnteramount('');
    setEnterdate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="New-expense__controls">
        <div className="New-expense__control">
          <label>{props.detail[0]} :</label>
          <input type="text" value={entertitle} onChange={titleChangeHandler} />
        </div>
        <div className="New-expense__control">
          <label>{props.detail[1]} :</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteramount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="New-expense__control">
          <label>{props.detail[2]} :</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={enterdate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button onClick={props.onStopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
