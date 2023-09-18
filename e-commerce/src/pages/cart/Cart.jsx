import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Cart.module.css';
import CheckOut from '../../components/CheckOut';
import { Link } from 'react-router-dom';

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
  const { cartItems, onRemove, onIncrement, onDecrement} = useContext(CartContext);

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
              <button><Link to='/'>Shop more</Link></button>
              <div className={styles.checkOutBox}>
                <h3 className={styles.summary}>summary</h3>
                <hr />
                <div className={styles.cartDetails}>
                  <h4>{item.quantity}</h4>
                  <p>{discountedPriceInNaira}</p>
                  <button style={{borderRadius:'0.4rem', backgroundColor:'white'}} onClick={() => onRemove(item)}>Remove</button>
                </div>
              </div>
            </div>
          
          </div>
          
        );
      })}
          
        
      <div style={{display:'block'}}>
        <h3 style={{paddingTop:'3rem', textAlign:'right',marginRight:'15rem'}}>Total Price: {totalDiscountedPriceInNaira}</h3>
      </div>
        <div className={styles.checkOutBox}>
      <button className={styles.checkOut}><Link to="/checkout">proceed to checkout</Link></button>
      </div>
    </div>
  );
};

export default Cart;
