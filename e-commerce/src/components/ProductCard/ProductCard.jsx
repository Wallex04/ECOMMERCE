import React, { useState } from "react";
import { Link } from "react-router-dom";

// Function to convert price from dollars to custom Naira symbol and format appropriately
const convertToNaira = (priceInDollars, customNairaSymbol) => {
  // Set the exchange rate (1 USD to 650 Naira)
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

const ProductCard = ({ products }) => {
  const [loading, setLoading] = useState(false);

  // Filter products to get only smartphones and laptops
  const filteredProducts = products.filter(
    (product) =>
      product.category === "smartphones" || product.category === "laptops"
  );

  // Define your custom Naira symbol here (e.g., '₦')
  const customNairaSymbol = "₦";
  return (
    <div className="">
      <div className="testing">

        
        {filteredProducts.map((product) => {
          // Convert the price from dollars to Naira and format with custom symbol
          const priceInNaira = convertToNaira(product.price, customNairaSymbol);

          // Calculate discounted price in Naira and format with custom symbol
          const discountedPrice = convertToNaira(
            product.price - (product.discountPercentage / 100) * product.price,
            customNairaSymbol
          );

          return (

            
            <div className="productCover">
              <div key={product.id} className="">
                <Link to={`/productPage/${product.id}`} className="">
                  <div title={product.title} className="productImg">
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
                  </div>
                </Link>

                <div>
                  <button className="cartBtn">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
