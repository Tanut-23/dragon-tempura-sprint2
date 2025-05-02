import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import ButtonSubmit from "./ButtonSubmit";

export default function PostCard({
  onDelete,
  onEdit,
  elevation = 4,
  image = "https://i.pinimg.com/736x/4f/b8/95/4fb8951ee4abaaf4f159d9db98718bfa.jpg",
  title = "Portrait Painting",
  artist = "By AAA BBB",
  price = 450,
  auction,
  minBidPrice = 1000,
  // days = 2,
  // hours = 4,
  endDate = new Date(),
}) {
  // Time remaining
  const now = new Date();
  const remainingTime = new Date(endDate) - now;
  const remainingSecond = Math.floor(remainingTime/1000);
  const remainingDays = Math.floor(remainingSecond/ (60*60*24));
  const remainingHours = Math.floor((remainingSecond % (60*60*24)) / 3600);

  return (
    <Card
      elevation={elevation}
      sx={{
        width: 350,
        height: 490,
        color: "primary.chocolate",
        borderRadius: 2,
        "&:hover": {
          transform: "scale(1.02)",
          transition: "all 300ms ease-in-out",
        },
        transition: "all 300ms ease-in-out",
      }}
    >
      <CardActionArea
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          "&:hover": {
            backgroundColor: "#62483a12",
          },
        }}
      >
        {/* Auction status */}
        {auction && (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              padding: 1,
              borderRadius: 1,
              border: "3px solid",
              borderColor: "primary.text",
              backgroundColor: "#62483a7f",
              color: "white",
              fontWeight: 700,
            }}
          >
            AUCTION
          </Box>
        )}
        {/* Time Remaining */}
        {auction && (
          <Box
            sx={{
              position: "absolute",
              top: 210,
              right: 10,
              paddingX: 1,
              borderRadius: 1,
              border: "3px solid",
              borderColor: "primary.text",
              backgroundColor: "#62483a7f",
              color: "white",
              fontWeight: 700,
            }}
          >
            {remainingDays} days {remainingHours} hrs left
          </Box>
        )}

        {/* Delete Button */}
        <Stack
          onClick={onDelete}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 20,
            backgroundColor: "primary.text",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "primary.dark", // hover when selected
              color: "primary.text",
            },
          }}
        >
          <IconButton
            aria-label="delete"
            sx={{
              color: "primary.dark",
              "&:hover": {
                color: "primary.text",
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>

        {/* Product Picture */}
        <CardMedia
          sx={{ width: "100%", height: 250, borderTopRadius: 2 }}
          image={image}
          title="auction"
        />

        {/* Product Content */}
        <CardContent sx={{ width: "100%" }}>
          <Typography sx={{ fontSize: "1.4rem", fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "0.97rem", py: "9px" }}>
            By {artist}
          </Typography>
          {/* Fixed Price */}
          {price && (
            <Typography sx={{ fontSize: "1.35rem" }}>
              $
              {Number(price).toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          )}
          {/* Auction */}
          {minBidPrice && (
            <Typography sx={{ fontSize: "1.15rem" }}>
              Current Price: $
              {Number(minBidPrice).toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </Typography>
          )}
        </CardContent>

        {/* ButtonSubmit */}
        <Stack spacing="8px">
          <ButtonSubmit label="Edit Detail" width="310px" onClick={onEdit} />
          <ButtonSubmit
            label="View Shop"
            width="310px"
            backgroundColor="#f2eee7"
            color="#62483a"
          />
        </Stack>
      </CardActionArea>
    </Card>
  );
}
