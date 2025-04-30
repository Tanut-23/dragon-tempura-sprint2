import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function TagSeller({onChange, value}) {
  return (
    <Autocomplete
      onChange={onChange}
      value={value}
      multiple
      limitTags={3}
      id="multiple-limit-tags"
      options={typeProduct}
      getOptionLabel={(option) => option.title}
      renderInput={(tag) => (
        <TextField {...tag} label="Product Tag" placeholder="Styles, Artist, ..." />
      )}
      sx={{
        width: '500px',
        '& .MuiChip-root': {
          backgroundColor: '#f2eee7',
          color: '#49352a',
          fontWeight: 'bold',
          border: '1px solid #49352a',
        },
        '& .MuiChip-root:hover': {
          backgroundColor: '#f0e0d0',
        },
        '& .MuiChip-deleteIcon': {
          color: "#49352a",
        },
      }}
    />
  );
}

const typeProduct = [
  { title: 'Classic', year: 1994 },
  { title: 'Modern', year: 1972 },
  { title: 'Contemporary', year: 1974 },
  { title: 'Portrait', year: 2008 },
  { title: 'Landscape', year: 1957 },
  { title: 'Genre', year: 1957 },
  { title: 'Abstract', year: 1957 },
  { title: 'Historical', year: 1957 },
  { title: 'Auction', year: 1957 },
  { title: 'Aom', year: 1957 },
  { title: 'Tib', year: 1957 },
  { title: 'Nut', year: 1957 },
  { title: 'Ling', year: 1957 },
  { title: 'Mate', year: 1957 },
];