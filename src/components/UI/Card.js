import "./Card.css";

function Card(props) {
        /*props.children is is a default prop for every react component and wth this we can make a component to act as a wrapper class*/
        const classes = "card " + props.className;
    return(
        <div className={classes}>{props.children}</div>
    )
}

export default Card;