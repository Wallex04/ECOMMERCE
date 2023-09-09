import React, { useState, useEffect } from 'react';
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { title } = useParams(); // Get the product title from the URL

  useEffect(() => {
    // Fetch product data based on the product title from the API
    const fetchProductData = async () => {
      try {
        // Encode the title to ensure it's URL-safe
        const encodedTitle = encodeURIComponent(title);
        
        const response = await fetch(`https://dummyjson.com/products?title=${encodedTitle}`);
        
        
        
        const productData = await response.json();
        
        // Assuming the API returns an array of products, take the first one
        const firstProduct = productData[0];
        
        setProduct(firstProduct);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [title]);

  return (
    <div>
      <div>
        <ProductDetails products={product} />
      </div>
    </div>
  );
};

export default ProductPage;
