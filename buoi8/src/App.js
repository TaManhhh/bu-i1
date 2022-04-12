import React, { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Main from "./components/Main";
import{AuthContext} from './context/AuthContext'
import './App.css';
function App() {
  const{auth}= useContext(AuthContext);
  return (
    <div className="App">
      <Header/>
      {auth ? <Main/>: <Signin/>}
      <Footer/>
    </div>
  );
}
export default App;
