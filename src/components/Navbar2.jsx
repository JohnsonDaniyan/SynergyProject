import React from 'react'
import logo from "../images/logo.png"
import {FaTwitterSquare} from "react-icons/fa"
import {BsDiscord,BsTelegram} from "react-icons/bs"
import { Outlet, Link } from 'react-router-dom';
import Example from './Example';
import tel from '../images/socials/tele.jpg'
import dis from '../images/socials/dis.jpg'
import tit from '../images/socials/tit.jpg'

function Navbar2() {
  return (
    <nav class="relative bg-black px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0">
  
  <div class="container space-x-10 md:space-x-0 flex flex-nowrap justify-between items-center mx-auto">
  <Link to='/' class="flex items-center">
      <img src={logo} class="mr-3 md:h-10 lg:h-20 " alt="Synergy Logo"/>
  </Link>
  <div class=" flex flex-row flex-nowrap items-center md:order-2 lg:text-2xl">
    <div className='hidden md:flex '>
  <a className="m-7 md:m-3 text-sky-400" href="https://twitter.com/SynergyCOFP"><img className=' w-5 md:w-5 lg:w-20' src={tit} alt="" /></a>
  <a className="m-7 md:m-3 text-sky-400" href="https://discord.gg/nczxGjeTSv"><img className=' w-5 md:w-5 lg:w-20' src={dis} alt="" /></a>
  <a className="m-7 md:m-3 text-sky-400" href="https://t.me/SynergyCOFP"><img className=' w-5 md:w-5 lg:w-20' src={tel} alt="" /></a>
  </div>
      <Example class=" inline-flex items-center p-2 text-60 lg:text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
       </Example>
  </div>
  <div class="hidden justify-between items-center w-full absolute left-1/2 -translate-x-1/2 md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul class="tracking-widest flex flex-col p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-3 lg:space-x-8 md:mt-0 md:text-lg lg:text-3xl md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-1000 justify-between">
    <li>
      <Link to="/farm" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FARM</Link>
    </li>
    <li>
      <Link to="/ark" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ARK</Link>
    </li>
    <li>
      <Link to="/lottery" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LOTTERY</Link>
    </li>
    <li>
      <Link to="/" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NFT</Link>
    </li>
    <li>
      <Link to="/portfolio" class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PORTFOLIO</Link>
    </li>
  </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar2