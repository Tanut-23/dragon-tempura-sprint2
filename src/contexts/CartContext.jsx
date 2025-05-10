// contexts/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const toggleCartItem = (product) => {
    setCartItems((currentCarts) => {
      const exists = currentCarts.find((item) => item.title === product.title);
      if (exists) {
        return currentCarts.filter((item) => item.title !== product.title);
      } else {
        return [...currentCarts, product];
      }
    });
  };

  const isInCart = (productTitle) => {
    return cartItems.find((item) => item.title === productTitle);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, toggleCartItem, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
