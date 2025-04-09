import React from "react";
import { TextField, Box, Typography, Stack } from "@mui/material";

export default function ColumnInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  fontWeight,
}) {
  return (
    <Stack gap={1.5} mb={0.5}>
      <Typography sx={{ width: 120, fontWeight: { fontWeight } }}>
        {label}
      </Typography>
      <TextField
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: 'white',
            borderRadius: "10px",
            "& fieldset": {
                border: "2px solid",
                borderColor: "primary.inputBorder",
            },
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#9f8e84",
            opacity: 1,
          },
        }}
      />
    </Stack>
  );
}
