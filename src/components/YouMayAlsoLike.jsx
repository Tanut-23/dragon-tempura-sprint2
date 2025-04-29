import React from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";

const ProductCard = ({ product }) => {
  return (
    <div className="relative group overflow-hidden shadow-md shadow-gray-700 hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-120 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#49352a]/90 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-6 text-[#f0e0d0]">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-sm mb-1">By {product.artist}</p>
            <p className="text-base font-medium mb-4">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const YouMayAlsoLike = ({ currentProduct }) => {
  if (!currentProduct) return null;

  const recommendedProducts = products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.tags?.some((tag) => currentProduct.tags?.includes(tag))
    )
    .slice(0, 3);

  if (recommendedProducts.length === 0) return null; // ❌ ไม่มี tag เดียวกัน → ไม่แสดงอะไรเลย

  return (
    <section className="bg-[#f0e1d4]">
      <h2 className="max-w-screen-2xl mx-auto text-3xl font-bold text-[#5c3c2e] pl-6 pt-8">
        You May Also Like
      </h2>
      <div className="py-16 px-4 md:px-16">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
