import React, { useEffect, useState } from 'react'
import { Link, json } from "react-router-dom"
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'


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
          <h1>Wallex<br/>telecomm</h1>
        </div>
        <div className='inputText'>
          <input className='searchInput' onChange={(e) => setSearchItem(e.target.value)} type="text" placeholder='search' />
          <button className='search'>search</button>
        </div>
      <div className="links">
      <Link to='/'>Home</Link>
      <Link to='/SignIn' >signIn</Link>
        <Link to='/shop'>shop</Link>
        {/* <Link to='/footer'>Footer</Link> */}
        <Link to='/cart'>
          <ShoppingCart size={32} />
        </Link>
      </div>
        { 
        // searchItem.map((item) => {
        //   return (
        //     <div key={id}>
        //       <p>{item.price}</p>
        //     </div>
        //   )
        // })
          // searchItem.filter((item) => {
          //   return searchItem.toLowercase() === ''? item: item.category.toLowercase().includes(searchItem);
          // }).map((item, id) =>{
          //   <div key={id}>
          //     <p>{item.category}</p>
          //   </div>
          // })
         }

    </div>
  );
};

export default Navbar