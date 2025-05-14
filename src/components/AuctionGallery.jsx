import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import baseURL from "../../service/api";
import axios from "axios";

const ProductGrid = ({ products }) => {
  const [bids, setBids] = useState({}); // { [productId]: currentBid }

  useEffect(() => {
    const fetchBids = async () => {
      const bidsObj = {};
      await Promise.all(
        products.map(async (product) => {
          try {
            const res = await axios.get(`${baseURL}/api/bids/${product._id}`);
            const data = res.data;
            const highest =
              data.length > 0 ? Math.max(...data.map((b) => b.amount)) : 0;
            bidsObj[product._id] = highest;
          } catch {
            bidsObj[product._id] = 0;
          }
        })
      );
      setBids(bidsObj);
    };
    if (products.length > 0) fetchBids();
  }, [products]);

  return (
    <Box>
    <Masonry columns={{ sm: 1, md: 3 }} spacing={7}>
      {products.map((product) => (
        <AuctionCard
          key={product._id}
          productId={product._id}
          image={product.image}
          title={product.title}
          artist={product.artist}
          linkUrl={`/auction/${product._id}`}
          price={bids[product._id] ?? "Loading..."}
        />
      ))}
    </Masonry>
    </Box>
  );
};

export default ProductGrid;
