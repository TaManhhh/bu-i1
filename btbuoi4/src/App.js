import {useState} from'react'
import './App.css';
import Den from './components/Den';
import Btn from './components/Btn';

function App() {
  const[light,setlight]=useState({
    light1:true,
    light2:false,
    light3:false,
  });
 const handleClick =()=> {
   if(light.light1===true){
     setlight({
      light1:false,
      light2:true,
      light3:false,
     });
   }
   if(light.light2===true){
    setlight({
     light1:false,
     light2:false,
     light3:true,
    })
  }
  if(light.light3===true){
    setlight({
     light1:true,
     light2:false,
     light3:false,
    })
  }
 }
  return (
    <div className="App">
        <div className='light-box'>
          <Den on={light.light1} className='red'></Den>
          <Den on={light.light2} className='yellow'></Den>
          <Den on={light.light3} className='green'></Den>
        </div>  
          <Btn onClick={handleClick}></Btn>
    </div>
  );
}

export default App;
