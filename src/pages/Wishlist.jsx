import React, { useEffect, useState } from "react";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";
import axios from "axios";
import baseURL from "../../service/api";
import ButtonSubmit from "../components/ButtonSubmit";
import BreadcrumbsNav from "../components/BreadcrumbsNav";

function Wishlist() {
  const [loading, setLoading] = useState(true);
  const { wishlistItems,  fetchWishlist } = useWishlist();
  const { setCartItems } = useCart();

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        await fetchWishlist();
      } catch (error) {
        console.error("Error loading wishlist:", error);
      } finally {
        setLoading(false);
      }
    };
    loadWishlist();
  }, []);

  // ลบสินค้าออกจาก wishlist
  const removeFromWishlist = async (productId) => {
    try {
      setLoading(true);
      await axios.delete(`${baseURL}/api/wishlist-delete/${productId}`, {
        withCredentials: true,
      });
      await fetchWishlist();
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  // เพิ่มสินค้าไปยัง cart และลบออกจาก wishlist
  const addToCart = async (product) => {
    try {
      setLoading(true);
      const newProduct = {
        items: {
          productId: product._id,
          title: product.title,
          image: product.image,
          artist: product.artist,
          price: product.price,
          quantity: 1,
        },
      };

      await axios.post(`${baseURL}/api/cart-add`, newProduct, {
        withCredentials: true,
      });

      // อัปเดต cart
      const cartRes = await axios.get(`${baseURL}/api/cart-get`, {
        withCredentials: true,
      });
      setCartItems(cartRes.data.cart.items);

      // ลบออกจาก wishlist
      await removeFromWishlist(product._id);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const links = [
    { label: "Home", to: "/" },
    { label: "Wishlist", to: "/wishlist" },
  ];

  // แก้ไข UI สำหรับ loading state
  if (loading) {
    return (
      <div className="bg-[#F0E0D0] min-h-screen w-full px-[10%] pt-[32px]">
        <BreadcrumbsNav links={links} currentPage="Wishlist" />
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5c3c2e]"></div>
        </div>
      </div>
    );
  }

  // เพิ่ม UI สำหรับ empty state
  if (wishlistItems.length === 0) {
    return (
      <div className="bg-[#F0E0D0] min-h-screen w-full px-[10%] pt-[32px]">
        <BreadcrumbsNav links={links} currentPage="Wishlist" />
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <h1 className="text-[3rem] font-thin tracking-wide mb-4">
            Your Wishlist
          </h1>
          <p className="text-xl text-gray-600">No items in wishlist</p>
        </div>
      </div>
    );
  }

  // ส่วน return หลัก
  return (
    <div className="bg-[#F0E0D0] min-h-screen w-full px-[10%] pt-[32px]">
      <BreadcrumbsNav links={links} currentPage="Wishlist" />
      <div className="flex flex-col items-center pt-[32px]">
        <h1 className="text-[3rem] font-thin tracking-wide mb-8">
          Your Wishlist
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {wishlistItems.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md p-4 transition-transform duration-200 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.artist}</p>
              <p className="text-lg font-bold mb-4">
                $
                {Number(product.price).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="flex gap-2">
                <ButtonSubmit
                  label="Add to Cart"
                  onClick={() => addToCart(product)}
                />
                <ButtonSubmit
                  label="Remove"
                  onClick={() => removeFromWishlist(product._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
