import React from 'react'
import crystal from "../images/Gems/Frame 2.png"
import diamond from "../images/Gems/Frame 1.png"
import question from "../images/Gems/Frame 3.png"
import minus from "../images/Gems/minus.png"
import plus from "../images/Gems/plus.png"
import zap from "../images/Gems/zap.png"
import {FiExternalLink} from 'react-icons/fi'

function Farm() {
  return (
    <div className=' relative bg-black pt-5xl text-white font-serif text-8xl flex flex-col justify-center items-center h-screen' >
        <div className='text-white'>Farm</div>
        <div className=' font-sans flex flex-row justify-between text-center'>
            <div className=' border-white border-4 lg:m-5 m-2 text-xl lg:text-2xl bg-black rounded-xl p-1'>
                <img className='w-48' src={crystal} alt="" />
                <div className="font-bold mb-2">CRYSTAL/BUSD</div>
                <div className='flex flex-row text-xs w-full justify-between text-zinc-400'>
                    <div className=' text-left'>
                        <div>Status: </div>
                        <div>Deposit: </div>
                        <div>Farm: </div>
                        <div>Market cup: </div>
                        <div>Circulation supply: </div>
                        <div>Total supply: </div>
                    </div>
                    <div className=' text-right'>
                        CRYSTAL/BNB <FiExternalLink className=' inline-block'/><br />
                        CRYSTAL <FiExternalLink className=' inline-block'/>
                    </div>
                </div>
                <hr />
                <div className='text-left text-sm'>
                    TVL <br />
                    APR
                </div>
                <hr />
                <div className='flex justify-between'>
                    <a href="#"><img src={minus} alt="" /></a>
                    <a href="#"><img src={zap} alt="" /></a>
                    <a href="#"><img src={plus} alt="" /></a>
                </div>
            </div>
            <div className=' border-white border-4 lg:m-5 m-2 text-xl lg:text-2xl bg-black rounded-xl p-1'>
                <img className='w-48' src={diamond} alt="" />
                <div className="font-bold mb-2">DIAMOND/BUSD</div>
                <div className='flex flex-row text-xs w-full justify-between text-zinc-400'>
                    <div className=' text-left'>
                        <div>Status: </div>
                        <div>Deposit: </div>
                        <div>Farm: </div>
                        <div>Market cup: </div>
                        <div>Circulation supply: </div>
                        <div>Total supply: </div>
                    </div>
                    <div className=' text-right'>
                        DIAMOND/BNB <FiExternalLink className=' inline-block'/><br />
                        CRYSTAL <FiExternalLink className=' inline-block'/>
                    </div>
                </div>
                <hr />
                <div className='text-left text-sm'>
                    TVL <br />
                    APR
                </div>
                <hr />
                <div className='flex justify-between'>
                    <a href="#"><img src={minus} alt="" /></a>
                    <a href="#"><img src={zap} alt="" /></a>
                    <a href="#"><img src={plus} alt="" /></a>
                </div>
            </div>
            <div className=' border-white border-4 hidden lg:flex lg:m-5 m-2 bg-black rounded-xl items-center'>
                <img src={question} alt="" />
            </div>
        </div>
        <div className='text-white text-xl absolute bottom-10'>After zapping press + button to deposit your LP's</div>
        
    </div>
  )
}

export default Farm