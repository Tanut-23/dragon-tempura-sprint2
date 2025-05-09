import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <div style={{ position: "relative" }}>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1688589935456-191f352db55b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D"
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

          maxWidth: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "0.8rem", // หน้าจอเล็ก
              sm: "2rem", // หน้าจอขนาด tablet
              md: "2.5rem", // หน้าจอขนาดกลาง
              lg: "3rem", // หน้าจอขนาดใหญ่
              xl: "4.4rem", // หน้าจอขนาด 1536px ขึ้นไป (ค่าเริ่มต้นของ xl)
            },
            lineHeight: {
              xs: 1.2,
              xl: 1.1,
            },
          }}
          variant="h3"
          component="h1"
          fontWeight="bold"
        >
          Express yourself through Collectico:
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "0.8rem", // หน้าจอเล็ก
              sm: "2rem", // หน้าจอขนาด tablet
              md: "2.5rem", // หน้าจอขนาดกลาง
              lg: "3rem", // หน้าจอขนาดใหญ่
              xl: "4.4rem", // หน้าจอขนาด 1536px ขึ้นไป (ค่าเริ่มต้นของ xl)
            },
            lineHeight: {
              xs: 1.2,
              xl: 1.1,
            },
          }}
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
