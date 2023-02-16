import React from 'react'
import logo from '../assets/LOGO.svg';

const Header = () => {
  return (
    <div className='flex items-center py-[24px] gap-5 cursor-pointer ml-4 sm:ml-0'>
        <img src = {logo} width = "46" alt='logo'/>
        <h1 className='font-extrabold text-[#EBD7A6] text-[20px] tracking-wider'>
            <span >LF</span>
            <span className='text-[#3A9069]'>GRO</span>
            <span >WWW</span> 
        </h1>
    </div>
  )
}

export default Header
