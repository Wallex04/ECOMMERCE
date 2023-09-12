import React, { useEffect, useState } from 'react'
import { Link, json } from "react-router-dom"
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
import imageLogo from '../assets/image/imagesLogo2.png'


const Navbar = () => {
const [searchItem, setSearchItem] = useState([])

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const result = await response.json()
    setSearchItem(result.products)
  }
  console.log(setSearchItem)

  useEffect(()=>{
    getData()
  },[])



  return (
    <div className='navbar'>
        <div className="productHead">
          <img src={imageLogo} style={{width:'150px'} }alt="" />
        </div>
        <div className='inputText'>
          <input className='searchInput' onChange={(e) => setSearchItem(e.target.value)} type="text" placeholder='search' />
          {/* <button className='search'>search</button> */}
        </div>
      <div className="links">
      <Link to='/'>Home</Link>
      <Link to='/SignIn' >signin</Link>
      <Link to='/SignUp' >Register</Link>
        <Link to='/shop'>shop</Link>
        <Link to='/cart'>
          <ShoppingCart size={32} />
        </Link>
      </div>
    
    </div>
  );
};

export default Navbar