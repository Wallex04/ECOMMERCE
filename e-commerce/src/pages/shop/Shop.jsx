
import React, { useEffect, useState } from 'react';
import '../../App.css'
// import ProductList from '../../components/ProductList';
// import CartContext from '../../context/CartContext';
// import { commerce } from '../../components/ProductList';
import Navbar from '../../components/Navbar'
// import CartIcon from '../../components/CartIcon';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Shop() {
    // const [cart, setCart] = useState();

    // const addProductToCart = (productId) => {
    //     commerce.cart.add(productId, 1)
    //         .then(result => {
    //             setCart(result.cart);
    //             alert("Product added to cart")
    //         })
    // }

    // useEffect(() => {
    //     commerce.cart.retrieve()
    //         .then(cart => {
    //             setCart(cart);
    //         })
    // }, [])

    const {onAdd} =useContext(CartContext)

    return (
        <div className="container">
           
                <CartIcon/>
                <div className="container">
                    <h2>Products</h2>
                </div>
                <ProductList />
           
        </div>
    );
}

export default Shop;