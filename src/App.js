
import './App.css';

import logo from "./images/logo.png"
import {FaTwitterSquare} from "react-icons/fa"
import {BsDiscord,BsTelegram} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Farm from './routes/Farm';
import Ark from './routes/Ark';
import Navbar2 from './components/Navbar2';

function App() {
  return (
    <Router>
    {/* <Navbar/>  */}
    <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/farm" element={<Farm/>}></Route>
        <Route path="/ark" element={<Ark/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
