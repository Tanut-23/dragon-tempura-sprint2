// contexts/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const toggleCartItem = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // ถ้ามีแล้วให้ลบออก (ยกเลิก)
        return prev.filter((item) => item.id !== product.id);
      } else {
        // ถ้ายังไม่มีให้เพิ่มเข้า
        return [...prev, product];
      }
    });
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, cartCount, toggleCartItem, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
