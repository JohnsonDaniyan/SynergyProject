
import './App.css';

import logo from "./images/logo.png"
import bgHome from "./images/bg.png"
import {FaTwitterSquare} from "react-icons/fa"
import {BsDiscord,BsTelegram} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"

function App() {
  return (
    <div className=" overflow-hidden bg-black h-screen w-screen">
    <nav class=" lg:absolute z-10 bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sm:left-1/2 sm:-translate-x-1/2">
<div class="container flex-nowrap m-2xl  flex justify-between items-center w-screen ">
<a href="#" class="flex items-center">
    <img src={logo} class="mr-0 lg:h-20 h-10" alt="Synergy Logo" />
    
</a>
<div class="hidden md:flex md:order-2 text-white text-5xl md:text-s">
  <a className="m-7 md:m-3 text-sky-400" href="#"><FaTwitterSquare/></a>
  <a className="m-7 md:m-3 text-purple-500" href="#"><BsDiscord/></a>
  <a className="m-7 md:m-3 text-sky-400" href= "#"><BsTelegram/></a>
  <AiOutlineMenu className=" text-2xl md:text-lg m-auto"/>
</div>
<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  <ul class="flex flex-col p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-1000 justify-between">
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FARM</a>
    </li>
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ARK</a>
    </li>
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LOTTERY</a>
    </li>
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NFT</a>
    </li>
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PORTFOLIO</a>
    </li>
  </ul>
</div>
</div>
</nav>
<div className=" font-serif lg:flex relative h-screen text-3xl lg:text-7xl">
<div className=" py-60 lg:py0 lg:mx-80   flex flex-col items-center justify-center">
<div className=" text-white">Total Value Locked</div>
<div className=" text-purple-600">21.726.882$</div>
</div>
  <img className="bg-blue-400 sm:w-screen md:w-screen lg:w-auto lg:h-screen lg:-rotate-90 lg:relative absolute bottom-10" src={bgHome} alt="" />
</div>
  </div>
  );
}

export default App;
