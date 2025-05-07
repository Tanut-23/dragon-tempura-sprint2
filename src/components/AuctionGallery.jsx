import React from "react";
import Masonry from "@mui/lab/Masonry";
import { Link } from "react-router-dom";
import AuctionCard from "./AuctionCard";
// import products from "../../data/products";


const ProductGrid = ({ products }) => {
  return (
    <main>
      <section className="bg-[#e4dcd2] py-16 px-4">
        <div className="w-11/12 m mx-auto px-4">
          <div className="mx-auto max-w-screen-2xl flex justify-end pb-8 pr-2 md:pr-4 text-gray-700">
            Showing {products.length} Products
          </div>

          <Masonry columns={{ sm: 1, md: 3 }} spacing={7}>
            {products.map((product) => (
              <AuctionCard linkUrl={`/auction/${product.id}`} width={350} height={510} key={product.id} image={product.image} title={product.title} artist={product.artist} price={product.price}/>
            ))}
          </Masonry>
        </div>
      </section>
    </main>
  );
};

const MasonryGallery = ({products}) => {
  return <ProductGrid products={products} />;
};

export default MasonryGallery;
