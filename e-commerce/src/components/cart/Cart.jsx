import React, { useContext } from 'react';
import CartCheckoutRow from './CartCheckoutRow';
import CartProductList from './CartProductList';
import CartTotalRow from './CartTotalRow'
import CartContext from '../../context/CartContext'
import RecommendedProduct from './RecommendedProduct'

const Cart = () => {
    const { cart, addProductToCart } = useContext(CartContext);

    if (cart && cart.total_unique_items > 0) {
        return (
            <div className="container cart">
                <CartProductList cart={cart} />
                <CartTotalRow cart={cart} />
                <RecommendedProduct cart={cart} addProductToCart={addProductToCart}/>
                <CartCheckoutRow />
            </div>
        );
    }

    return (
        <div className="container cart">
            <p>Your cart is currently empty.</p>
        </div>
    )
}

export default Cart;
