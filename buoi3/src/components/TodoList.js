import React from 'react'
import TodoItems from './TodoItems'
import './Todo.css';
function TodoList(props) {
  return (
    <div className='todo-list'>
    <ul>
      {props.todos.map((todo,index)=>(
         <TodoItems key={index} text={todo.text} ></TodoItems>
      ))}
    
    </ul>  
  </div>
  )
}

export default TodoList;