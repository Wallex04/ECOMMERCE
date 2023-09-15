import React, { useEffect, useState, useContext } from 'react'
import { Link, json } from "react-router-dom"
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
import imageLogo from '../assets/image/Logo.svg'
import CartIcon from './CartIcon'
import { CartContext } from '../context/CartContext'


const Navbar = () => {
  const [searchItem, setSearchItem] = useState([])
  const {onAdd, quantity,totalQuantities} =useContext(CartContext)

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const result = await response.json()
    setSearchItem(result.products)
    console.log(result)
  }
  console.log(setSearchItem)

  useEffect(() => {
    getData()
  }, [])



  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <div className="productHead">
          <Link to='/'><img src={imageLogo} alt="" /></Link>
        </div>

        <div className="links">
          <Link to='/SignIn'>Log In</Link>
          <Link to='/SignUp'>Register</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'><ShoppingCart className='cart'/>
        <p className='cartText'>{totalQuantities}</p>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar