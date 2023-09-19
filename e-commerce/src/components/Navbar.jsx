import React, { useContext } from 'react'
import { Link, json } from "react-router-dom"
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
import imageLogo from '../assets/image/Logo.svg'
import { CartContext } from '../context/CartContext'


const Navbar = () => {
  const {totalQuantities} =useContext(CartContext)



  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <div className="productHead">
          <Link to='/'><img src={imageLogo} alt="" /></Link>
        </div>

        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/cart'><div style={{fontSize:'3rem'}} className='shoppingCart'>< ShoppingCart className='cart'/>
          <div className='cartText1'>
        <p className='cartText'>{totalQuantities}</p>
          </div>
          </div>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar