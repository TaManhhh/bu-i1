
import './App.css';
import{BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import NavBar from './components/NavBar';
import Profile,{Courses,About} from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}>
        <Route path=":id" element={<ProductDetail/>}></Route>
        </Route>
        <Route path="/profile" element={<Profile/>}>
          <Route path='about' element={<About/>}></Route>
          <Route path='courses' element={<Courses/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
