import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
function InputCheckout() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" color="#62483A" component="h2">
        First Name *
      </Typography>
      <TextField
        id="outlined-basic"
        color="#62483A"
        label="Name"
        variant="outlined"
      />
    </Box>
  );
}

export default InputCheckout;
