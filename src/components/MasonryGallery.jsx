import React from "react";
import Masonry from "@mui/lab/Masonry";
import products from "../../data/products";

const ProductCard = ({ product }) => {
  return (
    <div className="relative group overflow-hidden shadow-md shadow-gray-700 hover:shadow-lg transition-shadow duration-300">
      <a href={`product.html?id=${product.id}`}>
        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#49352a]/90 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-6 text-[#f0e0d0]">
            <h3 className=" text-xl font-semibold mb-2">
              {product.title}
            </h3>
            <p className="text-sm mb-1">
              By {product.artist}
            </p>
            <p className="text-base font-medium mb-4">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <main>
      <section className="bg-[#e4dcd2] py-16 px-4">
        <div className="flex justify-end  pb-8 pr-4 md:pr-8 text-gray-700">
          Showing {products.length} Products
        </div>

        <Masonry columns={{sm: 1, md: 3 }} spacing={7}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Masonry>
      </section>
    </main>
  );
};

const MasonryGallery = () => {
  return <ProductGrid products={products} />;
};

export default MasonryGallery;
