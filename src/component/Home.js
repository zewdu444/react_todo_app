import React, { useState } from 'react';
import AddForm from './AddForm';
import Todos from './Todos';

function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'buy some Milk',
    },
    {
      id: 2,
      content: 'Play mario kart',
    },
  ]);
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
      <h1 className="center teal-text">Todo,s</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddForm AddTodo={AddTodo} />
    </div>
  );
}

export default Home;
