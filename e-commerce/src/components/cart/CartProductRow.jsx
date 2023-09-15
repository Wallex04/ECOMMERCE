import React, { useState } from 'react';

const CartProductRow = ({ lineItem }) => {
    const [quantity, setQuantity] = useState(lineItem.quantity)
    const [amount, setAmount] = useState(lineItem.line_total.formatted)

    console.log(lineItem.price.formatted);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1)
        setAmount((prev) => prev + lineItem.price.raw)
    }
    const handleDecrease= () => {
        setQuantity((prev) => prev - 1)
        setAmount((prev) => prev - lineItem.price.raw)
    }




    return (
        <div className="row product">
            <div className="col-md-2">
                <img src={lineItem.image.url} alt={lineItem.name} height="50" />
            </div>
            <div className="col-md-6 product-detail">
                <h5>{lineItem.name}</h5>
            </div>
            <div style={{ display: 'flex', gap: '10px' }} className="col-md-2 cart-product-count">
                <button style={{ padding: '0 5px',  gap:'5px', backgroundColor: 'pink' }} onClick={handleIncrease}>+</button>
                <h5>{quantity}</h5>
                <button style={{ padding: '5px', backgroundColor: 'pink' }} onClick={handleDecrease}>-</button>
            </div>
            <div className="col-md-2 cart-product-price">
            ₦{amount}
            </div>
        </div>
    );
}

export default CartProductRow;