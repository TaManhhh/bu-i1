import './App.css';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './page/Home';
import MusicList from './page/MusicList';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/nhac-tre' element={<MusicList></MusicList>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
