import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Experience from "./Pages/Experience";
import Achievements from "./Pages/Achievements";

function App() {
  return (
    <div>
      
      <NavBar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/home' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/skills' exact element={<Skills/>}/>
      <Route path='/projects' exact element={<Projects/>}/>
      <Route path='/achievements' exact element={<Achievements/>}/>     
      <Route path='/experience' exact element={<Experience/>}/>     
      <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
  
     
    </div>
  );
}

export default App;
