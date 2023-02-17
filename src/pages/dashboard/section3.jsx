import React from 'react'
import NFTOne from '../../assets/NFT_1.png'
import NFTTwo from '../../assets/NFT_2.png'


const Section3 = () => {
  return (
    <div className='md:flex mt-[50px] px-[5vw] gap-5'>
        <div className='mt-[80px] md:mt-[60px] text-[16px] md:text-[18px] xl:text-[24px] text-center text-white md:text-left'>
            <h1 className='text-[#3A9069] font-extrabold text-[40px] md:text-[50px] xl:text-[72px] text-transparent bg-clip-text bg-gradient-to-r from-[#3a906950] to-[#3A9069]'>Why NFTs?</h1>
            <p>NFTs, or non-fungible tokens, offer a</p>
            <p>revolutionary way to represent digital assets as</p>
            <p>unique and valuable, opening up new</p>
            <p>opportunities for creators, collectors, and</p>
            <p>investors alike</p>
        </div>
        <div className='w-full mt-10 md:mt-0 md:w-[640px] flex gap-2 justify-center md:justify-end'>
            <div>
                <img src = {NFTOne} alt= "NFTOne" className='mt-[90px]'/>
            </div>
            <div>
                <img src = {NFTTwo} alt = "NFTTwo"/>
            </div>
        </div>
    </div>
  )
}

export default Section3
