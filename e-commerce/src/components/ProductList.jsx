import React, { useEffect, useState, useContext } from 'react';
// import ProductRow from './ProductRow';
import ProductRow from './ProductRow';
import Commerce from '@chec/commerce.js';
import CartContext from '../context/CartContext'

export const commerce = new Commerce('pk_541012fc8148d9a6e92028e16c96626d81f799d05fa48');

function ProductList() {
    const [products, setProducts] = useState([]);
    const { addProductToCart } = useContext(CartContext);

    // const handleAddProduct = (productId) => {

    //     commerce.cart
    //         .add(productId, 1)
    //         .then((result) => {
    //             setCart(result.cart);
    //             alert("Product added to cart");
    //         });
    // };

    useEffect(() => {
        commerce.products.list().then((result) => {
            setProducts(result.data);
        });
    }, []);


    return (
        <div className="container main-content">
            {products.map((product) => (
                <ProductRow
                    key={product.id}
                    product={product}
                    addProduct={() => addProductToCart(product.id)}
                />
            ))}
        </div>
    );
}

export default ProductList;

