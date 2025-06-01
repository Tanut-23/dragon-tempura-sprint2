import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import baseURL from "../../service/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItem = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/cart-get`, {
        withCredentials: true,
      });
      setCartItems(res.data?.cart?.items || []);
    } catch (error) {
      console.error("Error Fetching Product From Cart: ", error);
      setCartItems([]);
    }
  };

  useEffect(() => {
    fetchCartItem();
  }, []);

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
