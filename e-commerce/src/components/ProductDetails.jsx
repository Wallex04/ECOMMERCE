import React from "react";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
// Function to convert price from dollars to custom Naira symbol and format appropriately
const convertToNaira = (priceInDollars, customNairaSymbol) => {
  // Set the exchange rate (1 USD to 850 Naira)
  const exchangeRate = 650;

  // Calculate the price in Naira
  const priceInNaira = priceInDollars * exchangeRate;

  // Format the price with thousands separators, using custom Naira symbol
  return (
    customNairaSymbol +
    priceInNaira.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  );
};
// Define your custom Naira symbol here (e.g., '₦')
const customNairaSymbol = "₦";

const ProductDetails = ({product}) => {
  // Convert the price from dollars to Naira and format with custom symbol
  const priceInNaira = convertToNaira(product.price, customNairaSymbol);

  // Calculate discounted price in Naira and format with custom symbol
  const discountedPrice = convertToNaira(
    product.price - (product.discountPercentage / 100) * product.price,
    customNairaSymbol
  );

  const {onAdd, quantity, onIncrement, onDecrement} =useContext(CartContext)


  return (
    <div className="productCover">
      <div key={product.id} className="">
        <div title={product.title} className="">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="textCover">
          <h3 className="productName">{product.title}</h3>

          <p className="allPrice">
            <span className="oldPrice">{priceInNaira}</span>
            <span className="discountPercent">
              -{product.discountPercentage}%
            </span>
          </p>

          <p className="">{discountedPrice}</p>
          <p className="description">Description:  {product.description}</p>

          <div className="cartContainer">
            <button className="addCart" onClick={() => onAdd(product, quantity)}>Add to cart</button>
            <div className="cartIncrement">
              <button className="increment" onClick={onDecrement}>-</button>
              <p className="inputIncrement">{quantity} </p>
              <button className="increment" onClick={onIncrement}>+</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
