import React, { useState } from 'react'

function AddForm({AddTodo}) {
  const [content, setContent]=useState({})
  const [message, setMessage]=useState('')
  const handleChange=(e)=>{
  setContent({[e.target.id]:e.target.value})
  setMessage(e.target.value)
  }
 const  handleSubmit=(e)=>{
  
  e.preventDefault()
  AddTodo(content)
  setMessage('')
 }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <label htmlFor="">Add New Todo: </label>
        <input type="text" id='content' onChange={handleChange} value={message} />
      </form>
    </div>
  )
}

export default AddForm