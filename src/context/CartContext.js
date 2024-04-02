import React, { useState, useContext } from 'react';

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id)
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart)
    }else{
      const newItem = {...item, quantity: 1}
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (itemId) => {
    const updateCart = cart.map(item =>{
      if(item.id === itemId){
        return{ ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0}
      }
      return item
    })
    setCart(updateCart.filter((item) => item.quantity > 0));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
