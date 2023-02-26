import "./ExpenseForm.css";
import { useState } from "react"
const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState(" ");
    const [enteredAmount,setEnteredAmount] = useState(" ");
    const [enteredDate,setEnteredDate] = useState(" ");
    //these states are all seperated and doesnt have any iterconnection i.e., change in date will not affect change in amount and vice versa
    const titleChangeHandler = (event)=>{
        //we get the event object from the input whenever a change occurs
        // console.log(event.target.value);
        // console.log('TitleChanged')
        setEnteredTitle(event.target.value);
        //this event.target.value will always be a string
        //even for a number it will be a number in the form of string
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }

    //its better to use multiple state approach instead of signle state approach

    //using single state for the above 
    // const [userInput,setUserInput] = useState({
    //     enteredTitle: ' ',
    //     enteredAmount: ' ',
    //     enteredDate: ' ',
    // })
    // const titleChangeHandler = (event)=>{
    //     setEnteredInput({
        // ...userInput,enteredTitle:event.target.value,
    // });
     //here the above way of updating states is not good as it may fail some times so whenever we are updating multiple states we need to do following
    //   setEnteredInput((prevState)=>{
        // return {...prevState,enteredTitle:event.target.value}
    //   })
    // }
    // const amountChangeHandler = (event)=>{
    //         setEnteredInput({
        // ...userInput,enteredAmount:event.target.value,
    // });
    // }
    // const dateChangeHandler = (event)=>{
    //         setEnteredInput({
        // ...userInput,enteredDate:event.target.value,
    // });
    // }

    // console.log(enteredAmount,enteredDate,enteredTitle);
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        //this way of passing data from child to parent is a concept known as Lifting State up
        setEnteredAmount(' ');
        setEnteredDate(' ');
        setEnteredTitle(' ');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
};
//we may have added event listnter to button but even form has that onSubmitevent and is better to use for event rather than button event

export default ExpenseForm;
