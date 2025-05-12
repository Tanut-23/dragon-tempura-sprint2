import React from "react";
import Masonry from "@mui/lab/Masonry";
import { Link } from "react-router-dom";
import AuctionCard from "./AuctionCard";
import { Box } from "@mui/material";
// import products from "../../data/products";


const ProductGrid = ({ products }) => {
  return (
    <main>
      <section className="relative bg-transparent sm:bg-[#e4dcd2] py-16 px-0 sm:px-4">
        <div className="w-11/12 m mx-auto sm:px-4">
          <div className="mx-auto max-w-screen-2xl flex justify-end pb-8 pr-2 md:pr-4 text-gray-700">
            Showing {products.length} Products
          </div>

          <Box
            sx={{
              display: "flex",
              flexWrap: 'wrap',
              gap:7,
              alignContent: "center",
              paddingLeft: { xs: 0, sm: 0 },
            }}
          >
            {products.map((product) => (
              <AuctionCard
                linkUrl={`/auction/${product.id}`}
                width={350}
                height={510}
                key={product.id}
                image={product.image}
                title={product.title}
                artist={product.artist}
                price={product.price}
              />
            ))}
          </Box>
        </div>
      </section>
    </main>
  );
};

const MasonryGallery = ({products}) => {
  return <ProductGrid products={products} />;
};

export default MasonryGallery;
