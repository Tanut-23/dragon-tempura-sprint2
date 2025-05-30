import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import MarketPage from "./pages/MarketPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import Cart from "./pages/Cart.jsx";
import MainShopPage from "./pages/MainShopPage.jsx";
import MyOrderPage from "./pages/MyOrderPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AuctionPage from "./pages/Auction.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Animation from "../Animation/Animation.jsx";
import { CartProvider } from "./contexts/CartContext";
import AuctionShopPage from "./pages/AuctionShopPage.jsx";
import MembershipPage from "./pages/MembershipPage.jsx";
import Luminarypage from "./pages/LuminaryPage.jsx";
import CorporateSponsorshipPage from "./pages/CorporateSponsorshipPage.jsx";
import MissionPage from "./pages/MissionPage.jsx";
import MeetTeamMemberPage from "./pages/MeetTeamMemberPage.jsx";
import FinancialReportingPage from "./pages/FinancialReportingPage.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import OurStoryPage from "./pages/OurStoryPage.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

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
      // main: "Poppins, Arial, Helvetica, sans-serif",
      main: "ui-sans-serif, Arial, Helvetica, sans-serif",
      header: "Playfair Display",
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
      { path: "/market", element: <MarketPage /> },
      {
        path: "/postpage",
        element: (
          <ProtectedRoute>
            <PostPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/postpage/:editId",
        element: (
          <ProtectedRoute>
            <PostPage />
          </ProtectedRoute>
        ),
      },
      { path: "/mainshop", element: <MainShopPage /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myorder",
        element: (
          <ProtectedRoute>
            <MyOrderPage />
          </ProtectedRoute>
        ),
      },
      { path: "/shoppage", element: <ShopPage /> },
      { path: "/product/:productId", element: <ProductPage /> },
      { path: "/resetpassword", element: <ForgotPassword /> },
      { path: "/animation", element: <Animation /> },
      { path: "/auction", element: <AuctionShopPage /> },
      { path: "/auction/:auctionId", element: <AuctionPage /> },
      { path: "/membership", element: <MembershipPage /> },
      { path: "/luminary", element: <Luminarypage /> },
      { path: "/sponsorship", element: <CorporateSponsorshipPage /> },
      { path: "/mission", element: <MissionPage /> },
      { path: "/teammember", element: <MeetTeamMemberPage /> },
      { path: "/financialreport", element: <FinancialReportingPage /> },
      { path: "/ourstory", element: <OurStoryPage /> },
      // ADD PATH HERE
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <CartProvider>
        <App>
          <RouterProvider router={router} />
        </App>
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);
