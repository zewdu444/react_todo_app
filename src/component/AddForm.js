import React, { useState } from 'react';

function AddForm({ AddTodo }) {
  const [content, setContent] = useState({});
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setContent({ [e.target.id]: e.target.value });
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddTodo(content);
    setMessage('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="New todo">
          Add New Todo:
          <input type="text" id="content" onChange={handleChange} value={message} />
        </label>
      </form>
    </div>
  );
}

export default AddForm;
