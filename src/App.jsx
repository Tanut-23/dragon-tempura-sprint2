import { Button, IconButton, Stack, Typography } from "@mui/material";
import ButtonSubmit from "./components/ButtonSubmit";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Login from "./pages/Login";
import Register from "./component/TestNut";

export default function App() {
  return (
    <Stack
      sx={{ bgcolor: "black" }}
      height={"1000px"}
      spacing={2}
      direction="column"
      alignItems={"center"}
    >
      <Login />
    </Stack>
  );
}
