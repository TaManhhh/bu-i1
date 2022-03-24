import React from 'react'
import TodoItem from './TodoItem'
function TodoList( {todo,...props}){
    return(
        <ul>
            {
                todo.map((item,index)=>(
                    <TodoItem key={index} index={index} value={item.value}></TodoItem>
                ))
            }
        </ul>
    )
}
export default TodoList;