import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ButtonSubmit from "../components/ButtonSubmit";
import { Button } from "@mui/material";
import PostCard from "../components/PostCard";
import { Link, useNavigate } from "react-router-dom";
import ButtonToggle from "../components/ButtonToggle";

export default function MarketPage() {
  // STATE FOR KEEPING ALL PRODUCTS
  const [allProducts, setAllProducts] = useState([]);

  // STATE FOR SHOW NO POST
  const [noPost, setNoPost] = useState(true);

  // WHEN REFRESH -> GET DATA OF ALL PRODUCTS FROM LOCAL STORAGE

  useEffect(() => {
    const stored = localStorage.getItem("products");
    const products = stored ? JSON.parse(stored) : [];
    setAllProducts(products);
    if (products.length > 0) {
      return setNoPost(false);
    }
  }, []);

  // DELETE BUTTON FUNCTION
  function handleDelete(id) {
    const updatedProducts = allProducts.filter((product) => {
      return product.id !== id;
    });
    setAllProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    if (updatedProducts.length === 0) setNoPost(true);
  }

  const navigate = useNavigate();

  // EDIT BUTTON FUNCTION
  function handleEdit(id) {
    alert("edit");
    localStorage.setItem("editId", id);
    navigate("/postpage");
  }

  return (
    <div className="w-full min-h-[100vh] bg-[#F2EEE7] text-[#62483A] ">
      {/* -------------------NAV BAR----------------- */}
      {/* <Navbar /> */}
      {/* -------------------CONTENT----------------- */}
      <div className="flex flex-col items-center gap-4 w-full py-[50px]">
        <header className="flex flex-col gap-4 w-[80%] bg-[#f0e0d000]">
          <div className="flex flex-row justify-between">
            <h1 className="text-[2rem] font-bold">Market</h1>
            <Link to="/postpage">
              <ButtonSubmit label="+ Post New Product" px="20px" py="8px" />
            </Link>
          </div>
          {/* Button Toggle */}
          <div className="buttonToggle">
            <ButtonToggle label1="ongoing" label2="completed" />
          </div>
        </header>

        {/* -------------------PRODUCT LIST----------------- */}
        <section className="flex flex-col items-center w-[80%] min-h-[100vh] bg-red-0">
          {/* BEFORE POST PRODUCT */}
          {noPost && (
            <div className="flex items-center justify-center w-full h-[500px] bg-[#f0e0d0] rounded-lg">
              <div className="relative flex flex-col items-center w-[80%] h-[80%] bg-white rounded">
                <img
                  src="./decoration/no-image.png"
                  alt="no product"
                  className=" w-[300px]"
                />
                <p className="absolute top-65 font-semibold">
                  You haven't posted product.
                </p>
              </div>
            </div>
          )}

          {/* AFTER POST PRODUCT */}
          {!noPost && (
            <div className="relative flex flex-row gap-8 flex-wrap justify-center w-full px-8 py-12 bg-[#f0e0d0] rounded-2xl">
              { allProducts.map((product) => {
                  return (
                    <PostCard
                      onDelete={() => handleDelete(product.id)}
                      onEdit={() => handleEdit(product.id)}
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      artist={product.artist}
                      price={product.price}
                      auction={product.auction}
                      minBidPrice={product.minBidPrice}
                      // days={product.days}
                      // hours={product.hours}
                      endDate={product.endDate}
                    />
                  );
                })}
            </div>
          )}

          {/* SPARE AFTER POST PRODUCT */}
          {/* {!noPost && (
            <div className="relative flex flex-row gap-8 flex-wrap justify-center w-full p-8 bg-[#f0e0d0]">
              <PostCard auction={true} />
              <PostCard />
              <PostCard auction={false} />
              <PostCard />
              <PostCard />
            </div>
          )} */}
        </section>
      </div>
    </div>
  );
}
