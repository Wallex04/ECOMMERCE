
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import '../../App.css'
import Footer from '../Footer'
import image1 from '../../image/laptopimages.jpeg';
import image2 from '../../image/phone images.jpeg';


const Items = () => {
  const [list, setList] = useState([])

  const getItems = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json();
      setList(data.products)
      console.log(data.products)
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
        <div className='topContainer'>
        <div className='header'>
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos.</p>
        </div>
        <div className='img-container'>
          <img src={image2} alt="" />
          <img src={image1} alt="" />
        </div>
        </div>
      <div className='productsContainer'>
        {
          [...list].filter(item => (item.category === 'smartphones') || (item.category === 'laptops')).map(prod => (<ProductCard
            key={prod.id}
            {...prod}

          />))
        }

      </div>
     
        <Footer/>
    </div>
  )
}

export default Items;

