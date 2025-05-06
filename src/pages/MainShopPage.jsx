import React from "react";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Stack from "@mui/material/Stack";

import CollectionCard from "../components/CollectionCard";

function MainShopPage() {
  return (
    <div>
      <Hero />
      <section className="w-screen px-20 md:px-16 py-8 md:py-16 bg-[#f8e4d4]">
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
        >
          <CollectionCard
            image1="public/productPicture/Portrait-Painting-Classic-Art-1.jpg"
            name="Portait Painting"
            linkURL="http://localhost:5173/shoppage"
          />
          <CollectionCard
            image1="public/productPicture/Landscape-Painting-Modern-Art-5.jpg"
            name="Landscape Painting"
            linkURL="http://localhost:5173/shoppage"
          />
          <CollectionCard
            image1="public/productPicture/Genre-Painting-Classic-Art-5.jpg"
            name="Genre Painting"
            linkURL="http://localhost:5173/shoppage"
          />
          <CollectionCard
            image1="public/productPicture/Abstract-Painting-Modern-Art-5.jpg"
            name="Abstract Painting"
            linkURL="http://localhost:5173/shoppage"
          />
          <CollectionCard
            image1="public\productPicture\Historical-Painting-Classic-Art-2.jpg"
            name="Historical Painting"
            linkURL="http://localhost:5173/shoppage"
          />
        </Stack>
      </section>

      <section className="w-screen px-20 md:px-40 lg:px-60 py-8 md:py-16 bg-[#f9f7f3]">
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
        >
          <CollectionCard
            image1="public/productPicture/Genre-Painting-Classic-Art-3.jpg"
            name="Classic"
            linkURL="http://localhost:5173/shoppage"
          />
          <CollectionCard
            image1="public/productPicture/Genre-Painting-Modern-Art-3.jpg"
            name="Modern"
            linkURL="http://localhost:5173/shoppage"
          />
          <CollectionCard
            image1="public\productPicture\Landscape-Painting-Contemporary-Art-4.jpg"
            name="Contemporary"
            linkURL="http://localhost:5173/shoppage"
          />
        </Stack>
      </section>
    </div>
  );
}

export default MainShopPage;
