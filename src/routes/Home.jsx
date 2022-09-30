import React from 'react'
import bgHome from "../images/bg.jpg"

function Home() {
  return (
    <div className="overflow-hidden h-screen absolute top-0">
    <div className=" overflow-hidden bg-black w-screen font-serif lg:flex relative h-screen text-3xl lg:text-6xl justify-between">
    <div className=" text-4xl md:text-7xl pt-40 md:pt-0 lg:ml-80 min-w-fit text-center flex flex-col font-black justify-center">
      <div className=" text-white text-center">Total Value Locked</div>
      <div className=" text-purple-600">21.726.882$</div>
    </div>

    <div className='absolute bottom-40 lg:flex lg:relative  lg:bottom-0'>
      <img className=" object-contain lg:translate-x-20 lg:-rotate-90 lg:relative  bottom-10" src={bgHome} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Home