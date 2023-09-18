
import React, {useState} from 'react';
import { createContext } from 'react';

export const CartContext = createContext(null);

 const CartProvider = ({children}) => {
  const[cart, setCart]=useState()
    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
   
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
    };
    

  const onIncrement = () => {
    setQuantity((preQty) => preQty + 1)
  }
  const onDecrement = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevQty) => prevQty - 1);
  };
  

  const onRemove = (product) => {
  foundProduct = cartItems.find((item) => item.id === product.id);
  const newCartItems = cartItems.filter((item) => item.id !== product.id);

  setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
  setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
  setCartItems(newCartItems);
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