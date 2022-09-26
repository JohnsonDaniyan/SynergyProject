import React from 'react'
import logo from "../images/logo.png"
import bgHome from "../images/bg.png"
import {FaTwitterSquare} from "react-icons/fa"
import {BsDiscord,BsTelegram} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class=" lg:absolute z-10 bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sm:left-1/2 sm:-translate-x-1/2">
<div class="container flex-nowrap m-2xl  flex justify-between items-center w-screen ">
<a href="#" class="flex items-center">
    <Link to="/"> 
    <img src={logo} class="mr-0 lg:h-20 h-10" alt="Synergy Logo" />
    </Link>
    
</a>
<div class="hidden md:flex md:order-2 text-white text-5xl md:text-s">
  <a className="m-7 md:m-3 text-sky-400" href="#"><FaTwitterSquare/></a>
  <a className="m-7 md:m-3 text-purple-500" href="#"><BsDiscord/></a>
  <a className="m-7 md:m-3 text-sky-400" href= "#"><BsTelegram/></a>
  <svg class="w-6 h-6 m-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
</div>
<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  <ul class="flex flex-col p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-1000 justify-between">
    <li>
      <Link to="/farm" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FARM</Link>
    </li>
    <li>
      <Link to="/" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ARK</Link>
    </li>
    <li>
      <Link to="/" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LOTTERY</Link>
    </li>
    <li>
      <Link to="/" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NFT</Link>
    </li>
    <li>
      <Link to="/" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PORTFOLIO</Link>
    </li>
  </ul>
</div>
</div>
</nav>
  )
}

export default Navbar