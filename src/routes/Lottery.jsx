import React from 'react'
import bg from '../images/lottery/lotterybg.jpg'
import coin from '../images/lottery/coin.jpg'
import coinLat from '../images/lottery/coinLat.jpg'
import graph from '../images/lottery/graph.png'

function Lottery() {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className=' w-screen overflow-hidden absolute top-0 bg-black pt-5xl text-white font-serif flex flex-col space-y-10 justify-center items-center h-screen' >
        <div className='lg:pt-40  text-6xl md:text-6xl mb-10'>LOTTERY</div>
        <div className="relative px-10 flex font-sans">
            <div className="flex space-y-5 flex-col lg:flex-row">
                <div className='flex flex-col space-y-10'>
                <div className="flex space-x-7 w-fill justify-between">
                <div class="mt-auto h-fit p-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <div className=" jackpot mt-auto flex-2 h-fit bg-cardbg px-6 md:px-10 pt-3 md:pt-6 pb-6 md:pb-10 rounded-lg justify-between text-center">
                        <h1 className='text-lg md:text-3xl font-bold mb-4'>Jackpot</h1>
                        <h1 className='text-4xl md:text-6xl font-bold'>892,631$</h1>
                    </div>
                    </div>
                    <div class="w-1/2 h-fit p-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <div className="prices w-fill pb-2 px-2 flex flex-col text-center bg-cardbg rounded-lg">
                        <div className='text-lg md:text-3xl font-bold mb-4'>PRICES</div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>1.</p>
                            <p>1/1</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>2.</p>
                            <p>1/2</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>3.</p>
                            <p>1/3</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>4.</p>
                            <p>1/6</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>5.</p>
                            <p>1/10</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>6.</p>
                            <p>1/15</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>7.</p>
                            <p>1/20</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>8.</p>
                            <p>1/30</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>9.</p>
                            <p>1/40</p>
                        </div>
                        <div className="flex justify-between text-[.5rem] md:text-sm">
                            <p>10.</p>
                            <p>1/50</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class=" w-full p-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <div class=" flex justify-center p-10 w-fit  text-black px-4 py-2 font-semibold rounded-lg bg-cardbg">
                        <img className='md:w-2/3' src={graph} alt="" />
                    </div>
                </div>
                </div>
                <div className="coin lg:m-0 flex flex-row lg:flex-col bg-black rounded-lg">
                    <img className='h-fit lg:hidden' src={coin} alt="" />
                    <img className='h-1/2 m-0 hidden lg:block' src={coinLat} alt="" />
                    
                    <div className="coinText w-1/2 lg:w-max">
                        <div className="flex">
                        <div className="w-full"></div>
                        <h1 className="text-lg font-bold mb-4 mt-2 w-full text-left">COIN</h1>
                        </div>
                        <div className="w-full flex text-[.5rem] md:text-sm justify-between">
                            <div className="desc text-gray-400 w-full pl-5">
                                <div>Purchased:</div>
                                <div>Value:</div>
                                <div>Burnt:</div>
                            </div>
                            <div className="Val font-bold text-left w-full">
                                <div>183,631 Coins</div>
                                <div>1,7 Crystal</div>
                                <div>297,602 Crystals</div>
                            </div>
                        </div>
                        <div className="w-fill  h-[1px] bg-white mx-5 my-[.5rem]"></div>
                        <div className="flex text-[.5rem] md:text-sm justify-between">
                            <div className="desc text-white w-full pl-5 text-sm">
                                <div>TVL:</div>
                            </div>
                            <div className="Val font-bold text-left w-full text-sm">
                                <div>861,905$</div>
                            </div>
                        </div>
                        <div className="w-fill  h-[1px] bg-white mx-5 my-[.5rem]"></div>
                        <div className="w-fit mx-auto mt-2  rounded-full border py-2 px-5">BUY NOW</div>
                        </div>
                </div>
            </div>
            <div className="flex"></div>
        </div>
    </div>
  )
}

export default Lottery
