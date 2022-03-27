import React, { useState } from 'react'
import './Todo.css';
function TodoAdd(props) {
    const[value,setValue]=useState('');
    const inputChange=(e)=>{
        setValue(e.target.value);
    };
  return (
    <div className='todo-add'>
        <form className='form'>
          <input className='text' type ='text' value ={value} onChange={inputChange}></input>
          <button className='btn'
           onClick={(e)=>{
              e.preventDefault();
              props.addTodo(value);
          }}> ADD NEW EXPENSE</button>
        </form>
      </div>
  )
}

export default TodoAdd;