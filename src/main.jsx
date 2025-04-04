import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme ,  ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      second: "#18ff03c7"
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
