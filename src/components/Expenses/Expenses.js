import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2020");
    const expenseFilterHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };
    //controlled component => value and changes to the value are not handled int the component iteself but the parent component
    //stateful => components with the useState
    //stateless =>components wch are there to present some data but doesnt have any state
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });
    // let expenseRender = <p>No Expenses Found !</p>;
    // if (filteredExpenses.length > 0) {
    //     expenseRender = filteredExpenses.map((expense) => {
    //         return (
    //             <ExpenseItem
    //                 title={expense.title}
    //                 amount={expense.amount}
    //                 date={expense.date}
    //                 key={expense.id}
    //             />
    //         );
    //     });
    // }
    //then render expenseRender as a variable 
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onExpenseFilter={expenseFilterHandler}
                    selectedYear={selectedYear}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                {/* {filteredExpenses.length === 0 && <p>No items found!</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => {
                        return (
                            <ExpenseItem
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                                key={expense.id}
                            />
                        );
                    })} */}
                    <ExpensesList items={filteredExpenses} />
                {/*the above code is know as conditional rendering where is the first condition is true the the element will be rendered 
                we have other alternatives to that by using ternary operator or by using whole logic before return statement and just using a variable to render what we need*/}
                {/* {make sure that when using array of items we need to give each child a uniwue key
                also react is capable of rendering list of componsents such as [<Card />,<ExpenseFilter />} that is why the array returned by map is being rendered by react *
                Not providing such a unique key property can lead to potential errors as the state of the item can messup due to no unique warning
                here it doesnt effecgt much since all items are stateless here but when there is a state assigned to all items the it will lead to potential bugs in the app
                Make sure that we not use index of the map function as it too can lead to issues since the index for a given item is always the same
                */}
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                /> */}
                {/* [
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
                ,
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                ] */}
            </Card>
        </div>
    );
}

export default Expenses;
