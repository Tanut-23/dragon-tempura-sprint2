import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // เก็บ array ของสินค้าที่เพิ่ม

  const addToCart = (product) => {
    // เช็กว่ามีสินค้านี้ใน cart แล้วหรือยัง
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
