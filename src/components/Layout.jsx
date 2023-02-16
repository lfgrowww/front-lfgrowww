import React from 'react'
// import Header from './header';
import Footer from './footer';


const Layout = ({children}) => {
  return (
    <div className="m-auto bg-black font-Poppins" >
      {/* <Header/> */}
        {children}
      <Footer/>
    </div>
  )
}

export default Layout;
