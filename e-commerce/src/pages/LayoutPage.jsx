import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LayoutPage = () => {
  return (
    <div className=''>
<div className=''>
    <Navbar/>
</div>
        <div className=''>
            <Outlet/>
        </div>

        <div className=''>
            <Footer/>
        </div>
        </div>
  )
}

export default LayoutPage