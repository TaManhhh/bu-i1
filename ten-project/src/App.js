
import './App.css';
import TodoHead from './components/TodoHead';
import TodoList from './components/todolist';

function App() {
  const state =[
    {
      value:'Cleanup bedroom'
    },
    {
      value:'Buy some milk'
    },
    {
      value:'Jogging'
    },
    {
      value:'Learn React'
    },
    {
      value:'Doing Exercises'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <TodoHead className="input"></TodoHead>
        <TodoList todo={state}></TodoList>
      </header>
    </div>
  );
}

export default App;
