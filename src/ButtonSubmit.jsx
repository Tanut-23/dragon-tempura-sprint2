import { Button, Stack } from '@mui/material'
import React from 'react'

export default function ButtonSubmit({label1234 , ...prop}) {
  return (
    <Stack>
        <Button sx={{
        ...prop,
        bgcolor: "primary.main",
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: "6px",
        fontSize: "0.875rem",
        letterSpacing: "0.05em",
        color: "primary.text",
        transition: "all 0.3s ease",
        "&:hover": {
          cursor: "pointer",
          bgcolor: "primary.bgButton",
          border: "1px solid primary.main",
          color: "primary.hoverText",
        },
      }}>
        {label1234}
       </Button>
    </Stack>
    )
}
