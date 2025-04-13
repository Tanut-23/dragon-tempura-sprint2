import React from "react";
import Navbar from "../components/Navbar";
import CollectionCard from "../components/CollectionCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Stack from "@mui/material/Stack";

function MainShopPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="h-screen w-screen  mx-auto px-16 md:px-16 py-16 bg-[#f8e4d4]">
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
        >
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </Stack>
      </section>

      <section className="h-screen w-screen mx-auto px-4 md:px-16 py-16 bg-[#f9f7f3]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-90">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MainShopPage;
