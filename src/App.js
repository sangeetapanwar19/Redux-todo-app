import React from 'react';
import './App.css';
//import Header from './components/Header';
//import ProductList from './components/ProductList';
import AddTodoItem from './components/AddTodo/AddTodoItem';
import TodoList from './components/List/TodoList';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodoItem/>
        <TodoList/>
      </header>
    </div>

  );
}

export default App;
