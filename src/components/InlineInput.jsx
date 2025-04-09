import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
}) {
  return (
    <Box display="flex" gap={5} alignItems="center" mb={2}>
      <Typography sx={{ width: 120 , color: "primary.main" , fontWeight:"medium"}}>{label}</Typography>
      <TextField
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size="small"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: "2px solid",
              borderRadius: "10px",
              borderColor: 'primary.inputBorder',
            },
            '&:hover fieldset': {
              borderColor: 'primary.dark',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.light',
            },
          },
        }}
      />
    </Box>
  );
}