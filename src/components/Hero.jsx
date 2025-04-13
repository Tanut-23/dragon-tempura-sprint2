import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <div>
      <Box
        component="img"
        src="https://i.pinimg.com/736x/a6/6c/ef/a66cef60cadecbdf7a093bbf7e4df337.jpg"
        alt="Description"
        sx={{
          height: "100vh",
          display: "flex",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}

export default Hero;
