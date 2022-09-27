import React from 'react'
import arkBanner from '../images/Ark/Mask group.png'
import claim from '../images/Ark/Frame 14.png'
import gems from '../images/Ark/gems.png'

function Ark() {
  return (
    <div className='relative bg-black pt-0 lg:pt-5xl text-white font-serif  flex flex-col justify-center items-center h-screen' >
        <div className='text-8xl mb-20'>ARK</div>
        <div className='relative'>
        <img className='rotate-90 lg:rotate-0' src={arkBanner} alt="" />
        <div  className='lg:px-20 w-3/4 top-0 translate-x-1/2 right-1/2 absolute text-white bg-white-75  font-sans'>
            <div className='text-center font-bold lg:py-8 md:py-8 py-3 lg:text-5xl md:text-5xl text-2xl'>TVL</div>
            <div className='text-center flex mb-10'>
                <div className=' w-full'>
                    <div className='lg:text-lg font-bold'>STAKE</div>
                    <div className=' text-sm lg:text-lg text-left flex flex-col h-fill justify-between'>
                    <div>Total:</div>
                    <div>Value:</div>
                    <div>Reward value:</div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='lg:text-lg font-bold'>STATISTICS</div>
                    <div className='text-xs lg:text-lg text-left flex flex-col'>
                    <div>APR:</div>
                    <div>APR per Epoch:</div>
                    <div>DIAMONDS staked:</div>
                    <div>Total DIAMONDS staked:</div>
                    <div>TWAP:</div>
                    <div>Expansion Rate:</div>
                    <div>Next expansion ammount:</div>
                    </div>
                </div>
            </div>
            <div className='text-center flex'>
                <div className=' w-full'>
                    <div className='flex flex-col items-end pr-10'>
                    <div className='text-lg font-bold'>REWARD</div>
                    <div className='bg-red-100 w-fit'><img src={claim} alt="" /></div>
                    </div>
                    <div className='text-left flex flex-col h-fill justify-between'>
                    <div>Claim & Withdraw:</div>
                    <div>Total Received:</div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={gems} alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Ark