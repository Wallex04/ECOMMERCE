import React, {useState, useEffect} from 'react';
import { createContext } from 'react';

export const CartContext = createContext(null);

 const CartProvider = ({children}) => {

// Load cart data from local storage on component mount
useEffect(() => {
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const savedTotalQuantities = JSON.parse(localStorage.getItem('totalQuantities')) || 0;
  const savedTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;

  setCartItems(savedCartItems);
  setTotalQuantities(savedTotalQuantities);
  setTotalPrice(savedTotalPrice);
}, []);


 // Function to save cart data to local storage
 const saveCartToLocalStorage = () => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('totalQuantities', JSON.stringify(totalQuantities));
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
};





  const[cart, setCart]=useState()
    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

   // adding to the cart
    let foundProduct;
    const onAdd = (product, quantity) => {
      const exist = cartItems.find(item => item.id === product.id);
    
      setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);
    
      if (exist) {
        setCartItems(cartItems.map(item => {
          if (item.id === product.id) return {
            ...item, quantity: item.quantity + quantity
          };
          return item;
        }));
      } else {
        product.quantity = quantity;
        setCartItems([...cartItems, { ...product }]);
      }
      // Save cart data to local storage
  saveCartToLocalStorage();
    };
    
// increasing the quantities
  const onIncrement = () => {
    setQuantity((preQty) => preQty + 1)
  }
  // decreasing the quantities
  const onDecrement = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevQty) => prevQty - 1);
  };
  
// removing from the cart
  const onRemove = (product) => {
  foundProduct = cartItems.find((item) => item.id === product.id);
  const newCartItems = cartItems.filter((item) => item.id !== product.id);

  setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
  setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
  setCartItems(newCartItems);

      // Save cart data to local storage
      saveCartToLocalStorage();
};

    const objectPassed = {
        cartItems, 
        setCartItems,
        quantity,
        setQuantity,
        totalQuantities, 
        setTotalQuantities,
        totalPrice, 
        setTotalPrice,
        onAdd,
        onIncrement,
        onDecrement,
        cart, 
        setCart,
        onRemove,
    }
  return (
    <CartContext.Provider value={objectPassed}>{children}</CartContext.Provider>
  )
}

export default CartProvider;

