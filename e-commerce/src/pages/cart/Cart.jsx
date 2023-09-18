import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Cart.module.css';

const convertToNaira = (priceInDollars, customNairaSymbol) => {
  const exchangeRate = 650;
  const priceInNaira = priceInDollars * exchangeRate;
  return (
    customNairaSymbol +
    priceInNaira.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  );
};

const customNairaSymbol = '₦';

const Cart = () => {
  const { cartItems, onRemove } = useContext(CartContext);

  // Calculate the total price
  const totalDiscountedPrice = cartItems.reduce((total, item) => {
    const discountedPriceInNaira =
      (item.price - (item.discountPercentage / 100) * item.price) * item.quantity;
    return total + discountedPriceInNaira;
  }, 0);

  const totalDiscountedPriceInNaira = convertToNaira(
    totalDiscountedPrice,
    customNairaSymbol
  );

  return (
    <div>
    
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>

      {cartItems.map((item) => {
        const discountedPriceInNaira = convertToNaira(
          item.price - (item.discountPercentage / 100) * item.price,
          customNairaSymbol
        );

        return (
          <div key={item.id}>
             {/* <h2 style={{textAlign:'center'}}>Cart</h2> */}
            <div className={styles.cartFlex}>
          
              <div className={styles.cartImage}>
                <div className={styles.cartImageDiv}>
                  <img src={item.thumbnail} alt="" />
                </div>
                <h5>{item.title}</h5>
                <em>{item.description}</em>
              </div>
              <div className={styles.checkOutBox}>
                <h3 className={styles.summary}>summary</h3>
                <hr />
                <div className={styles.cartDetails}>
                  <h5>{item.quantity}</h5>
                  <p>{discountedPriceInNaira}</p>
                  <button style={{borderRadius:'0.4rem', backgroundColor:'white'}} onClick={() => onRemove(item)}>Remove</button>
                </div>
              </div>
            </div>
          
          </div>
          
        );
      })}
          
        
      <div>
        <h1>Total Price: {totalDiscountedPriceInNaira}</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          className="checkOut"
          style={{
            backgroundColor: 'green',
            padding: '0.3rem 0.7rem',
            fontSize: '1.5rem',
            borderRadius: '0.5rem',
            color: 'white',
            marginRight: '13rem',
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
