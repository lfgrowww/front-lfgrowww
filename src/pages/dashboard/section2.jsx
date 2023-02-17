import React from 'react'
import Layer2Img from '../../assets/Layer2.png'

const Section2 = () => {
  return (
    <div className='md:flex justify-between px-[5vw] gap-5'>
      <div className='w-[60%] md:w-[400px] xl:w-[500px] mx-auto md:mx-0'>
        <img src= {Layer2Img} alt="Diagram"/>
      </div>
      <div className='mx-[10px] md:mx-0 text-white'>
        <div className='mt-[20px] md:mt-[60px] text-[16px] md:text-[18px] xl:text-[24px] text-center md:text-left'>
            <h1 className='text-[40px] md:text-[50px] xl:text-[72px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3a906950] to-[#3A9069]'>Why Layer2?</h1>
            <p>Layer2 solutions, such as Optimism or Arbitrum,</p>
            <p>can help alleviate congestion on the main</p>
            <p>Ethereum network, allowing for faster and</p>
            <p>cheaper transactions.</p>
        </div>
      </div>
    </div>
  )
}

export default Section2
