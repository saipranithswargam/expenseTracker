// a componet in react is a js function
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
function ExpenseItem(props) {
    // const expenseDate = new Date().toISOString();
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.7;
    // const clickHandler = ()=>{
    //     console.log("clicked")
    // }
    //useState is a react hook there are other react hooks which we will see later
    // const [title,setTitle] = useState(props.title); //useState returns two elements array
    // const clickHandler = ()=>{
    //      setTitle("Updated!");
    //      console.log(title);
    // }
    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date}/> 
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>clickme</button> */}
        </Card>
    );
}

export default ExpenseItem;
