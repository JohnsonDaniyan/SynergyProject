import React from 'react'
import bgHome from "../images/bg.png"

function Home() {
  return (
    <div className=" overflow-hidden bg-black w-screen font-serif lg:flex relative h-screen text-3xl lg:text-7xl justify-between">
    <div className=" mt-40 lg:m-40 min-w-fit text-center flex flex-col font-bold justify-center">
      <div className=" text-white ">Total Value Locked</div>
      <div className=" text-purple-600">21.726.882$</div>
    </div>

    <div className='absolute bottom-40 lg:relative lg:bottom-0'>
      <img className="flex-1 bg-blue-400 sm:w-screen md:w-screen lg:w-auto lg:h-screen lg:translate-x-20 lg:-rotate-90 lg:relative sm:absolute bottom-10" src={bgHome} alt="" />
      </div>
    </div>
  )
}

export default Home