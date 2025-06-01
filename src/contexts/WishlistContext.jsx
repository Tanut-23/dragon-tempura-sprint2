import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import baseURL from "../../service/api";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchWishlist = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/wishlist-get`, {
        withCredentials: true,
      });
      setWishlistItems(res.data?.user?.wishlist || []);
    } catch (error) {
      console.error("Error Fetching Product From Wishlist: ", error);
      setWishlistItems([]);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, setWishlistItems, wishlistCount }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
