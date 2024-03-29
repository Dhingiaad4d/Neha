import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'


const Layout = () => {
  return (
    <div  >
      <Header/>
      <div style={{paddingTop:"100px"}}>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
