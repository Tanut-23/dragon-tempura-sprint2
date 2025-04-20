import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <div style={{ position: "relative" }}>
      <Box
        component="img"
        src="https://www.batsfordbooks.com/wp-content/uploads/2024/06/June-newsletter-banners-3-1024x576.jpg"
        alt="Description"
        sx={{
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        sx={{
          position: "absolute",

          width: "90vw",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          color: "#62483a",
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.0)", // เพิ่มพื้นหลังมืดๆ เพื่อให้ข้อความอ่านง่ายขึ้น
          borderRadius: "8px",
          maxWidth: "80%",
        }}
      >
        <Typography variant="h3" component="h1" fontWeight="bold">
          Express yourself through Collectico:
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          mt={2}
          textAlign="end"
          fontWeight="bold"
        >
          Where every collection Tells a Story
        </Typography>
      </Box>
    </div>
  );
}

export default Hero;
