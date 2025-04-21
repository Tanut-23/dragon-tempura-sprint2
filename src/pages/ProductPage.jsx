import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";

import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productData = products.find(p => p.id === parseInt(id) || p.id === id);
    if (productData) {
      setProduct(productData);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Product not found</div>;
  }

  return (
    <main className="bg-[#f2eee7]">
      <div className="px-4 py-6 max-w-7xl mx-auto xl:px-12 2xl:px-20">
        {/* Breadcrumbs using MUI */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 4, color: "#b89b85" }}
        >
          <Link to="/" style={{ color: "#b89b85", textDecoration: "none" }}>Home</Link>
          <Link to="/collections" style={{ color: "#b89b85", textDecoration: "none" }}>Collections</Link>
          <Link to="/collections/type" style={{ color: "#b89b85", textDecoration: "none" }}>type</Link>
          <Typography color="#5c3c2e">{product.title}</Typography>
        </Breadcrumbs>

        {/* Product display */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product image */}
          <div className="md:w-1/2 xl:max-w-[600px]">
            <div className="shadow-md shadow-gray-700 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold text-[#5c3c2e] mb-1">{product.title}</h1>
            <p className="mb-6">By {product.artist}</p>
            <p className="text-2xl font-semibold mb-8">${product.price.toLocaleString()}</p>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Description</h2>
              <p className="leading-relaxed text-justify">
                {product.description || "This oil painting portrays a man with flowing hair and a pensive expression, illuminated by dramatic lighting that contrasts golden highlights against deep shadows. His upward gaze suggests contemplation or longing, evoking a sense of mystery and introspection."}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Edition Details</h2>
              <div className="space-y-2">
                <p><span className="font-semibold">Dimensions:</span> {product.dimensions || "45cm x 22cm x 8cm"}</p>
                <p><span className="font-semibold">Artist:</span> {product.artist}</p>
                <p><span className="font-semibold">Material:</span> {product.material || "Linen"}</p>
                <p><span className="font-semibold">Year:</span> {product.year || "Unknown"}</p>
              </div>
            </div>

            <button className="w-full bg-[#e9e2d6] py-3 px-4 rounded hover:bg-[#f6f4f1] transition">
              Add to Cart
            </button>

            {product.tags && (
              <div className="mt-6">
                <h2 className="text-lg font-medium mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="bg-[#d4c8b6] px-3 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
