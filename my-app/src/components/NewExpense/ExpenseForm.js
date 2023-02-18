import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /**
   * This is common approach to set the states which is recommended one, Because individual
   * use states will be easily used in all the individual handler without taking responsibility
   * of other values..
   */
  const [entereTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0.0);
  const [enteredDate, setEnteredDate] = useState("");

  /**
   * The alternative approach to use the states in below. Its completely developer decision
   * to consider which approach is the best one
 


  const [userInput, setUserInput] = useState({
    entereTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /**
     *The below approach might give the outdated data in some cases
     */
    // setUserInout({
    //   ...userInput,
    //   entereTitle: event.target.value,
    // });
    /**
     *For alternative of above react will guarentee to givelatest data with below approach
    
    setUserInput((prevState) =>{
        return { ...prevState, entereTitle : event.target.value};
    })
     */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInout({
    //   ...userInput,
    //   setEnteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInout({
    //   ...userInput,
    //   setEnteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entereTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entereTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
