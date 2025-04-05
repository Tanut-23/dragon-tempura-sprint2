import { Button, IconButton, Stack, Typography } from "@mui/material";
import ButtonSubmit from "./ButtonSubmit";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function App() {
  return (
    <Stack spacing={2} direction="column" alignItems={"center"}>
      <ButtonSubmit  label1234={"Submit"} width={250} height={150}/>
      <Stack sx={{}} direction={"row"}>
      <Button sx={{bgcolor:"red" , }}><KeyboardArrowLeft /></Button>
      <IconButton><KeyboardArrowRight /></IconButton>
      </Stack>
    </Stack>
  );
}
