import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Cart from "./pages/Cart.jsx";
import MainShopPage from "./pages/MainshopPage.jsx";
import MyOrderPage from "./pages/MyorderPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AuctionPage from "./pages/Auction.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";


const theme = createTheme({
  palette: {
    primary: {
      main: "#62483a",
      text: "#f2eee7",
      hoverText: "#49352a",
      bgButton: "#62483a3b",
      cream: "#f0e0d0",
      darkCream: "#e9e2d6",
      fontGray: "#757575",
      backgroundImgae: "#d9d9d9",
      buttonUpImage: "#667080",
      buttonUpImageHover: "#6670804c",
      inputBorder: "#9f8e84",
      formRegister: "#f9f7f3",
      mainSectionRegister: "#f2eee7",
      headerRegister: "#f8e4d4",
      lightBrown: "#c2a78f",
      chocolate: "#62483a",
      lightChocolate: "#62483acc",
    },
    secondary: {
      main: "#806248",
    },
  },
  typography: {
    primary: {
      main: "Arial, Helvetica, sans-serif",
    },
  },
});

// ------------- ROUTER ----------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/mainshop", element: <MainShopPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/myorder", element: <MyOrderPage /> },
      { path: "/shoppage", element: <ShopPage/> },
      { path: "/product/:id", element: <ProductPage/> },
      { path: "/resetpassword", element: <ForgotPassword /> },

      // ADD PATH HERE
    ],
  },
  {
    path: "/auction",
    element: <AuctionPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App>
      <RouterProvider router={router} />
    </App>
  </ThemeProvider>
);
