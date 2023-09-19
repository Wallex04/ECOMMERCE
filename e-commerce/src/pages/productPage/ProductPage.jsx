import React, { useState, useEffect } from 'react';
import ProductDetails from '../../components/ProductDetails';
import { useParams } from 'react-router-dom';

const ProductPage = (props) => {
  const {onAdd} = props;
  const [product, setProduct] = useState({});
  const {title} = useParams();   
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    // Fetch product data based on the product title from the API
    const fetchProductData = async () => {
      try {
    
        const response = await fetch(`https://dummyjson.com/products/${title}`);


        const data = await response.json();
        setProduct(data); // Update the product state with the fetched data
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
    setIsLoading(true)
  }, [title]);

  return (
    // {isLoading ? (
    //      <LoadingScreen /> // Display the loading screen while fetching data
    //    ) : (
    <div>
        <h1>welcome back</h1>
        <ProductDetails product={product} onAdd={onAdd}/>
        {/* )} */}
    </div>
  );
};

export default ProductPage;

