import React from 'react'
import bg from '../images/portfolio/portbg.jpg'
import dashsm from '../images/portfolio/dashsm.png'
import dashlg from '../images/portfolio/dashlg.png'

function Portfolio() {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className=' overflow-hidden bg-cover w-screen h-screen absolute top:0 flex flex-col text-center '>
        <div className="container mx-auto flex flex-col text-center ">
        <h1 style={{WebkitTextStroke:"5px black",fontSize:"8rem"}} className='font-serif text-white mt-20 md:mt-40'>Portfolio</h1>
        <img className='w-1/2 mx-auto lg:hidden' src={dashsm} alt="" />
        <img className='w-1/2 mx-auto hidden lg:block' src={dashlg} alt="" />
        </div>
    </div>
  )
}

export default Portfolio