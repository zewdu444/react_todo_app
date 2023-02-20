import './Todos.css';

const Todos = ({ todos, setTodos, deleteTodo }) => {
  const editTodo = (e) => {
    const updatetods = todos.map((todo) => {
      if (Number(e.target.id) === Number(todo.id)) {
        return { ...todo, content: e.target.value };
      }
      return todo;
    });
    setTodos(updatetods);
  };
  const editHandler = (e) => {
    const updatetods = todos.map((todo) => {
      if (Number(e.target.id) === Number(todo.id)) {
        return { ...todo, readonly: false };
      }
      if (Number(e.target.id) !== Number(todo.id)) return { ...todo, readonly: true };

      return todo;
    });
    setTodos(updatetods);
  };
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <input
          id={todo.id}
          className=" inputtype"
          type="text"
          defaultValue={todo.content}
          onChange={editTodo}
          readOnly={todo.readonly}
        />

        <button type="button" onClick={() => deleteTodo(todo.id)} className=" todosbutton red right waves-effect waves-light btn-small">
          <i className="medium material-icons center ">delete</i>
        </button>
        <button type="button" className=" todosbutton right waves-effect waves-light btn-small" onClick={editHandler}>
          <i id={todo.id} className="medium material-icons center ">edit</i>
        </button>
      </div>
    ))
  ) : (<p className="center">You have no todos left </p>);
  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
};

export default Todos;
