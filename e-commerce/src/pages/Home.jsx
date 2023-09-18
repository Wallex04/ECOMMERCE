import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard';
import image1 from '../assets/image/laptopimages-removebg-preview (1).png'
import image2 from '../assets/image/phone_images-removebg-preview.png'
import AboutUs from '../components/AboutUs';
import { Link, useNavigate } from 'react-router-dom';
import SearchProducts from '../components/SearchProducts/SearchProducts';
import Footer from '../components/Footer';
// import { UseNavigate } from 'react-router-dom';


const Home = () => {
    const [list, setList] = useState([])
    const navigate = useNavigate()

  // const about =()=>{
  //   navigate("/AboutUs")
  // }
  
    const getItems = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json();
        setList(data.products)
      }
      catch (error) {
        console.log('error fetching data:', error);
      }
    }
    useEffect(() => {
      getItems();
    }, []);
  
  
    return (
  
      <div>
            <SearchProducts/>
          <div className='topContainer'>
          <div className='header'>
            <h1>Unbeatable, secure and<br/> reliable deals</h1>
            <p>Explore our exclusive offers and save big with<br/> our high-performance tech.</p>
          </div>
          <div className='img-container'>
            <img className='image1' src={image2} alt="" />
            <img className='image2' src={image1} alt="" />
          </div>
          </div>
        <div className='' key={list.id}>
          <ProductCard products={list}/>
  </div>
        <AboutUs/>
       <Footer/>
      </div>
    )
  }
  
  export default Home;

  