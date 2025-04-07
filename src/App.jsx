import { Button, IconButton, Stack, Typography } from "@mui/material";
import ButtonSubmit from "./components/ButtonSubmit";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import InputCheckout from "./components/InputCheckout";
import NavBar from "./components/NavBar";
import Shipping from "./components/Shipping";
import ShippingMethod from "./components/ShippingMethod";
import PaymentMethodForm from "./components/PaymentMethod";
import Payment from "./components/Payment";

export default function App() {
  return (
    <>
      <NavBar />
      <Shipping />
      <ShippingMethod />
      {/* <PaymentMethodForm /> */}
      <Payment />

      {/* <InputCheckout /> */}
    </>
  );
}
