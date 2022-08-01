import React from "react";
import {connect} from 'react-redux';
import todo from "../../reducers/todo";
import {deleteTodo} from "../../actions";

const TodoList = (props) => {
    return <ul>
        {props.todo.map((todo,index) =>(
           <li key={index}>{todo.message}<button onClick = {()=> props.dispatch(deleteTodo(todo.id))}>Delete</button></li> 
        ))}
        </ul>
}

const mapStateToProps = (state) => ({
    todo: state.todo.data,
})

export default connect(mapStateToProps)(TodoList);