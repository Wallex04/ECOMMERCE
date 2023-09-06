import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// importing the components and pages
import Navbar from "./components/Navbar"
// import Cart from './pages/cart/Cart'
import Shop from './pages/shop/Shop'
import Items from './pages/shop/Items'
// import SwipingImage from './pages/shop/Items'
import  Footer  from './pages/Footer'
import SignIn from './pages/cart/SignIn'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Items/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/shop' element={<Shop/>}/>
      {/* <Route path='/Footer' element={<Footer/>}/> */}
      {/* <Route path='/cart' element={<Cart/>}/> */}
    </Routes>
   </Router>
    {/* <Items/> */}
      </div>
    
  )
}

export default App
