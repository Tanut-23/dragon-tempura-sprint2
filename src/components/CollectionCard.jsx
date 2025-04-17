import React from "react";
import { Card, CardMedia, Box, Typography, Link } from "@mui/material";

function CollectionCard() {
  return (
    <>
      <Card
        sx={{ width: 320, height: 320 }}
        className="relative overflow-hidden group h-80 rounded-lg mr-8"
      >
        <CardMedia
          component="img"
          image="https://i.pinimg.com/736x/4f/b8/95/4fb8951ee4abaaf4f159d9db98718bfa.jpg"
          alt="Fine Art Paintings"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <Box className="absolute inset-0 bg-gradient-to-t from-[#412011]/80 to-transparent flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Box className="p-6">
            <Typography
              variant="h6"
              className="text-[#f5f0e6] font-semibold font-serif mb-2"
            >
              Portrait Painting
            </Typography>

            <Link href="#">
              <Typography
                variant=""
                className="text-[#f5f0e6] font-light text-md  mb-2"
              >
                Explore Collection
              </Typography>
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default CollectionCard;
