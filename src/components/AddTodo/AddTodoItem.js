import React from "react";
import {connect} from 'react-redux';
import { addTodo } from "../../actions";

const AddTodoItem = (props) =>{
    return(
        <form onSubmit = {(event) => {
            event.preventDefault();
            let input = event.target.userInput.value;
            console.log(input);
            props.dispatch(addTodo(input));
            event.target.userInput.value = "";
        }}>
            <input type="text" name="userInput" />
            <button>Add Item</button>
        </form>
    )
}

export default connect() (AddTodoItem);