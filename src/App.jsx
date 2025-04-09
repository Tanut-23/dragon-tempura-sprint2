import { Button, IconButton, Stack, Typography } from "@mui/material";
import ButtonSubmit from "./components/ButtonSubmit"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Login from "./pages/Login";
import Register from "./component/TestNut";

export default function App() {
  return (
    <Stack  height={"1000px"} spacing={2} direction="column" alignItems={"center"}>
      <Register />
    </Stack>
  );
}
