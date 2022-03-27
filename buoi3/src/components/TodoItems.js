import React from 'react'
import './Todo.css';
function TodoItems(props) {
  return (
    
    <li className='todo-item'>{props.text}
    
    <div className='btn-delete'>CANCEL</div>
    </li>
 
  )
}

export default TodoItems;