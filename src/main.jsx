import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme ,  ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#62483a",
      text: "#f2eee7",
      hoverText: "#49352a",
      bgButton:"#62483a3b",
    },
    secondary: {
      main: "#000000",
    }
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
