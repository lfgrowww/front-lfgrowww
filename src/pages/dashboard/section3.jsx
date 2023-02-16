import React from 'react'
import NFTOne from '../../assets/NFT_1.png'
import NFTTwo from '../../assets/NFT_2.png'


const Section3 = () => {
  return (
    <div className='md:ml-[50px] md:ml-0 md:flex mt-[50px]'>
        <div className='w-full md:w-[760px] text-white text-center md:text-left'>
            <div className='mt-[80px] md:mt-[60px] text-[16px] md:text-[20px] xl:text-[24px]'>
                <h1 className='text-[#3A9069] font-extrabold text-[40px] md:text-[50px] xl:text-[72px] text-transparent bg-clip-text bg-gradient-to-r from-[#3a906950] to-[#3A9069]'>Why NFTs?</h1>
                <p>NFTs, or non-fungible tokens, offer a</p>
                <p>revolutionary way to represent digital assets as</p>
                <p>unique and valuable, opening up new</p>
                <p>opportunities for creators, collectors, and</p>
                <p>investors alike</p>

            </div>
        </div>
        <div className='w-full mt-10 md:mt-0 md:w-[640px] flex gap-2 justify-end px-[20px]'>
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
