import React from 'react';

const ProductDetails = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="">
          <div title={product.title} className="">
            <img src={product.thumbnail} alt={product.title} />
          </div>

          <div className="">
            <h3 className="">{product.title}</h3>

            <p className="">
              <span className="">${product.price}</span>
              <span className="">-{product.discountPercentage}%</span>
            </p>

            <p className="">
              ${Math.ceil(
                product.price - (product.discountPercentage / 100) * product.price
              )}
            </p>

            <button className="">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
