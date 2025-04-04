import { Button, Stack, Typography } from "@mui/material";


export default function App() {
  return (
    <Stack spacing={5} direction='row' sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography sx={{
        color: "primary.main",
      }}>Hello World</Typography>
      <Typography sx={{
        color: "primary.second",
      }}>Hello World</Typography>
      <Typography sx={{
        color: "primary.main",
      }}>Hello World</Typography>
      <Button sx={{
        color: "primary.main",
      }} variant="outlined">Text</Button>
      <Button color='success' variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
