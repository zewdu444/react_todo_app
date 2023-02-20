import { useState } from "react";
import AddForm from "./component/AddForm";
import Todos from "./component/Todos";
function App() {
const [todos,setTodos]=useState([
  {
    id:1 ,
    content:"buy some Milk"
  },
  {
    id:2,
    content:"Play mario kart"
  },
]
)
const deleteTodo=(id)=>{
  setTodos(Todos=>Todos.filter(todo=>{
    return todo.id !==id
  }))
}
const AddTodo=(todo)=>{
  todo.id=Math.random()
  console.log(todo)
  setTodos([...todos,todo])
}
  return (
    <div className="todo-app container">
     <h1 className="center teal-text">Todo,s</h1>
     <Todos todos={todos} deleteTodo={deleteTodo}/>
     <AddForm AddTodo={AddTodo}/>
    </div>
  );
}

export default App;
