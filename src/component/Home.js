import React, { useState } from 'react';
import AddForm from './AddForm';
import LocalStorage from './LocalStorage';
import Todos from './Todos';

function Home() {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, setTodos] = useState(getInitialTodos());
  const deleteTodo = (id) => {
    setTodos((Todos) => Todos.filter((todo) => todo.id !== id));
  };
  const AddTodo = (todo) => {
    const todoList = todo;
    todoList.id = Math.random();
    setTodos([...todos, todoList]);
  };
  return (
    <div className="container">
      <LocalStorage todos={todos} />
      <h1 className="center teal-text">Todo,s</h1>
      <AddForm AddTodo={AddTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} setTodos={setTodos} />

    </div>
  );
}

export default Home;
