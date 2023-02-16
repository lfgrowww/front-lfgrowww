import React from 'react'
import Layer2Img from '../../assets/Layer2.png'

const Section2 = () => {
  return (
    <div className='md:ml-0 md:flex justify-between'>
      <div className='w-[60%] md:w-[759px] md:pl-[90px] mx-auto md:mx-0 gap-5'>
        <img src= {Layer2Img} alt="Diagram" width={500} />
      </div>
      <div className='mx-[10px] md:mx-0 text-white md:pr-[81px] md:w-[600px]'>
        <div className='mt-[20px] md:mt-[60px] text-[16px] md:text-[20px] xl:text-[24px] text-center md:text-left'>
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
