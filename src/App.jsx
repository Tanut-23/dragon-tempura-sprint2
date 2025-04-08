import { Button, IconButton, Stack, Typography } from "@mui/material";
import ButtonSubmit from "./components/ButtonSubmit"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResponsiveProductCard from "./components/ResponsiveProductCard";

export default function App() {
  return (
    <>
    <Navbar/>
    <ResponsiveProductCard/>
    <Footer/>
    </>
  );
}
