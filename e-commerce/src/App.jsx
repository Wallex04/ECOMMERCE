import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home'
import ProductPage from './pages/productPage/ProductPage'
import LayoutPage from './pages/LayoutPage'
import Cart from './pages/cart/Cart'
import CheckoutPage from './components/CheckOutPage/CheckOutPage'
import AboutUs from './components/AboutUs'

function App() {

  return (

    <Router>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<Home />} />
          <Route path="/productPage/:title" element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<contactUs/>}/>
          <Route path='/checkout' element={<CheckoutPage />} />
        </Route>
      </Routes>
    </Router>



  )
}

export default App
