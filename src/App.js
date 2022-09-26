
import './App.css';

import logo from "./images/logo.png"
import {FaTwitterSquare} from "react-icons/fa"
import {BsDiscord,BsTelegram} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Farm from './routes/Farm';

function App() {
  return (
    <Router>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/farm" element={<Farm/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
