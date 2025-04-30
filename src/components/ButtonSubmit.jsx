import { Button, Stack } from '@mui/material'
import React from 'react'




export default function ButtonSubmit({onClick, mate, label , ...prop}) {
  const bg = mate && label === 'Back' ? 'transparent' : 'primary.main';
  return (
    <Stack alignItems="center">
      {/* Add your width , heigh , label and you can optimize*/}
        <Button  onClick={onClick} disabled={mate} sx={{
        ...prop,
        bgcolor: bg,
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: "12px",
        fontSize: "0.875rem",
        letterSpacing: "0.05em",
        color: "primary.text",
        textTransform: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          cursor: "pointer",
          bgcolor: "primary.bgButton",
          border: "1px solid primary.main",
          color: "primary.hoverText",
        },
      }}>
        {label}
       </Button>
    </Stack>
    )
}
