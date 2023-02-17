import React from 'react'

const Section4 = () => {
  return (
    <div className='px-[20px] md:px-[80px] text-white mt-[100px] md:mt-[200px]'>
        <div className="bg-[url('assets/section4.png')] flex h-[100px] md:h-[250px] bg-cover items-center rounded-[50px] justify-center gap-[4vw]">
            <div className='text-center'>
                <h1 className='font-extrabold text-[16px] sm:text-[20px] md:text-[40px] xl:text-[72px] items-center '>Join us today!</h1>
            </div>
            <div className='text-center items-center'>
                  <button className='bg-black h-[50px] md:h-[77px] px-[10px] md:px-[50px] rounded-[50px] text-[16px] sm:text-[24px] transition ease-in-out hover:opacity-[0.9]' onClick={() => {
                      window.location.href = "mailto:team@lfgrowww.com";
                }}>Get in touch</button>
            </div>
        </div>
        <div className='mt-[100px] opacity-[20%] text-center'>
            <h6 className='text-[16px]'>@Copyright 2023. All rights reserved | LFGROWWW</h6>
        </div>

    </div>
  )
}

export default Section4
