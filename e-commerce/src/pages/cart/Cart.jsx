import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Cart.module.css'
const Cart = () => {
  const {cartItems, onAdd, onRemove} = useContext(CartContext)
  return (
    <aside>
      <h2 className={styles.h2}>cartItems</h2>
    <div>
     {cartItems.length === 0 && <div>carts is empty</div>}</div>
    {cartItems.map((item)=> (
      <div key={item.id} className={styles.key}>
        <div className={styles.cartCover}>
        <div className={styles.imageCart}>
        <img src={item.thumbnail} alt="" />
        </div>
        <div className={styles.cartDescription}>
        <h5>{item.title}</h5>
        <h5>{item.description}</h5>
        <div className={styles.divPrice}>
          {item.qty} * #{item.price.toFixed(2)}
          <button className={styles.btnShopping}>Go back to shopping</button>
        </div>
        </div>
        </div>
        {/* <div >
          <button onClick={()=>onAdd(item)} className='add'>+</button>
          <button onClick={()=>onRemove(item)} className='remove'>-</button>
        </div> */}
       
       <div className={styles.checkOutBox}>
        <button className={styles.checkOut}>CheckOut</button>
       </div>


      </div>
     
    ))}
    </aside>
  )
}
export  default Cart;