import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPage = () => {
  return (
    <div className=''>
<div className=''>
    <Navbar/>
</div>
        <div className=''>
            <Outlet/>
        </div>

        </div>
  )
}

export default LayoutPage