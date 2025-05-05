import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.js";
import BreadcrumbsNav from "../components/BreadcrumbsNav";
import ButtonSubmit from "../components/ButtonSubmit";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { useCart } from "../contexts/CartContext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toggleCartItem, isInCart } = useCart();
  const links = [
    { label: "Home", to: "/" },
    { label: "Collections", to: "/mainshop" },
    { label: "Type", to: "/shoppage" },
  ];
  

  useEffect(() => {
    const productData = products.find(
      (p) => p.id === parseInt(id) || p.id === id
    );
    if (productData) {
      setProduct(productData);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Product not found
      </div>
    );
  }

  const addedToCart = isInCart(product.id);

  return (
    <main className="bg-[#f2eee7]">
      <div className="px-4 py-6 max-w-7xl mx-auto xl:px-12 2xl:px-20">
        <BreadcrumbsNav links={links} currentPage={product.title} />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product image */}
          <div className="md:w-1/2 xl:max-w-[600px]">
            <div className="shadow-md shadow-gray-700 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold text-[#5c3c2e] mb-1">
              {product.title}
            </h1>
            <p className="mb-6">By {product.artist}</p>
            <p className="text-2xl font-semibold mb-8">
              ${product.price.toLocaleString()}
            </p>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Description</h2>
              <p className="leading-relaxed text-justify">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Edition Details</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Dimensions:</span>{" "}
                  {product.dimensions}
                </p>
                <p>
                  <span className="font-semibold">Artist:</span>{" "}
                  {product.artist}
                </p>
                <p>
                  <span className="font-semibold">Material:</span>{" "}
                  {product.material}
                </p>
                <p>
                  <span className="font-semibold">Year:</span> {product.year}
                </p>
              </div>
            </div>

            <ButtonSubmit
              width="100%"
              label={addedToCart ? "Remove from Cart" : "Add to Cart"}
              onClick={() => toggleCartItem(product)}
            />

            {product.tags && (
              <div className="mt-6">
                <h2 className="text-lg font-medium mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#d4c8b6] px-3 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <YouMayAlsoLike currentProduct={product} />
    </main>
  );
}

export default ProductPage;
