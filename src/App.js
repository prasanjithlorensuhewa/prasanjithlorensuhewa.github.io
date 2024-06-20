import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      
      <NavBar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Portfolio' exact element={<Home/>}/>
      <Route path='/home' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/skills' exact element={<Skills/>}/>
      <Route path='/portfolio' exact element={<Portfolio/>}/>
       <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
  
     
    </div>
  );
}

export default App;
