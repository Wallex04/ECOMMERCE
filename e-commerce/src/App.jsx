import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



//pages
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import  {SignUp} from './pages/SignUp'
import ProductPage from './pages/ProductPage'
import Shop from './pages/shop/Shop'
import LayoutPage from './pages/LayoutPage'

function App() {
  

  return (
     
   <Router>
    <Routes>
      <Route  element={<LayoutPage/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    <Route path="/products/:name" component={<ProductPage/>} />
    </Route>
    </Routes>
   </Router>
  
    
    
  )
}

export default App
