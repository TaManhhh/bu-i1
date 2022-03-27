
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos]=useState([
    {
      text:'Learn React'
    },
    {
      text:'Learn React 2'
    },
    {
      text:'Learn React 3'
    },
  ]);
  
  const addTodo=(value) =>{
    setTodos([...todos,{text:value}]);
  };
  return (
    <div className='App'>
    <Header></Header>
  <div className='bang'>
    <div><TodoAdd addTodo ={addTodo}></TodoAdd></div>
    <div><TodoList todos={todos}></TodoList></div>
    </div>
  </div>
  );
}

export default App;
