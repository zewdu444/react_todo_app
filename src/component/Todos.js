import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  const todoList =todos.length ? (
    todos.map(todo =>{
      return (
        <div className="collection-item" key={todo.id}>
        <span>{todo.content}</span>
        <button onClick={()=>deleteTodo(todo.id)} className="center-align right waves-effect waves-light btn-small"><i className="medium material-icons right">delete</i>Delete</button>
        </div>
      )
    })
  ) : (<p className="center">You have no todos left </p>) 
  return (
    <div className='todos collection'>
     {todoList}
    </div>
  )
}

export default Todos