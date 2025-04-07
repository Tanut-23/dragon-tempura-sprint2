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
      cream: "#f0e0d0",
      darkCream: "#e9e2d6",
      fontGray: "#757575",
      backgroundImgae: "#d9d9d9",
      buttonUpImage: "#667080",
      inputBorder: "#9f8e84",
      formRegister: "#f9f7f3",
      mainSectionRegister: "#f2eee7",
      headerRegister: "#f8e4d4",
      lightBrown: "#c2a78f",
      chocolate: "#62483a",
    },
    // secondary: {
    //   main: "#000000",
    // }
  },
  typography: {
    primary: {
      main: "Arial, Helvetica, sans-serif",
    }
  }
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
