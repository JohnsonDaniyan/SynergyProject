import React from 'react'
import crystal from "../images/Gems/Frame 2.png"
import diamond from "../images/Gems/Frame 1.png"
import question from "../images/Gems/Frame 3.png"
import minus from "../images/Gems/minus.png"
import plus from "../images/Gems/plus.png"
import zap from "../images/Gems/zap.png"
import {FiExternalLink} from 'react-icons/fi'
import bg from '../images/farm/farmbg.jpg'

function Farm() {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='bg-bottom bg-cover absolute w-screen top-0 bg-black pt-2xl text-white font-serif text-8xl flex flex-col  items-center h-screen justify-center space-y-20 md:space-y-0'  >
        <div style={{WebkitTextStroke:"5px black",fontSize:"8rem"}} className='text-white mt-20 md:mt-40'>Farm</div>
        <div className=' font-sans flex flex-row justify-between text-center'>
            <div className='flex flex-col lg:m-5 m-2 text-base lg:text-2xl bg-black rounded-xl p-1'>
                <img className='md:w-48 w-20 mx-auto' src={crystal} alt="" />
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
            <div className=' flex flex-col lg:m-5 m-2 text-base lg:text-2xl bg-black rounded-xl p-1'>
                <img className='md:w-48 w-20 mx-auto' src={diamond} alt="" />
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
            <div className='  hidden lg:flex lg:m-5 m-2 bg-black rounded-xl items-center'>
                <img src={question} alt="" />
            </div>
        </div>
        <div className='text-white text-base md:text-xl absolute bottom-0'>After zapping press + button to deposit your LP's</div>
        
    </div>
  )
}

export default Farm