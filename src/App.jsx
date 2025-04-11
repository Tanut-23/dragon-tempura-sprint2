import Register from "./pages/Register";
import Login from "./pages/Login";
import { Stack } from "@mui/material";

export default function App() {
  return (
    <Stack
      sx={{ bgcolor: "black" }}
      height={"1000px"}
      spacing={2}
      direction="column"
      alignItems={"center"}
    >
      <Register />
    </Stack>
  );
}
