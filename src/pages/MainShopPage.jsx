import React from "react";
import Navbar from "../components/Navbar";
import CollectionCard from "../components/CollectionCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Stack from "@mui/material/Stack";
import CollectionCardM from "../components/CollectionCardM";

function MainShopPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="w-screen px-20 md:px-16 py-8 md:py-16 bg-[#f8e4d4]">
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
        >
          {/* <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard /> */}
          <CollectionCardM />
          <CollectionCardM />
          <CollectionCardM />
          <CollectionCardM />
          <CollectionCardM />
        </Stack>
      </section>

      <section className="w-screen px-20 md:px-40 lg:px-60 py-8 md:py-16 bg-[#f9f7f3]">
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
        >
          <CollectionCardM />
          <CollectionCardM />
          <CollectionCardM />
        </Stack>
      </section>

      <Footer />
    </div>
  );
}

export default MainShopPage;
