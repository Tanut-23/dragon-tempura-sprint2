import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const StatsCard = ({ title, value }) => {
  return (
    <Paper
      //   elevation={}
      sx={{
        p: 3,
        borderRadius: 2,
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Typography
        variant="caption"
        component="p"
        sx={{
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: "text.secondary",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{
          mt: 1,
          fontWeight: 300,
          color: "text.primary",
        }}
      >
        {value}
      </Typography>
    </Paper>
  );
};

export default StatsCard;
