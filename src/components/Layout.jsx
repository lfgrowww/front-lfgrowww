import React from 'react'
// import Header from './header';
import Footer from './footer';


const Layout = ({children}) => {
  return (
    <div className="m-auto font-Poppins bg-no-repeat" >
        {/* <Header/> */}
        {children}
        <Footer/>
    </div>
  )
}

export default Layout;
