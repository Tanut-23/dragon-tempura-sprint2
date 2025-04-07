import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function InputCheckout() {
  return (
    <Box
      className=""
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        color="#62483A"
        label="Name"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        color="#62483A"
        label="Last Name"
        variant="outlined"
      />
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  );
}

export default InputCheckout;
