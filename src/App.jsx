import NavBar from "./components/NavBar";
import Shipping from "./components/Shipping";
import ShippingMethod from "./components/ShippingMethod";

import Payment from "./components/Payment";
import Test from "./components/test";

export default function App() {
  return (
    <>
      <NavBar />
      <Shipping />
      <ShippingMethod />

      <Payment />
      {/* <Test /> */}
    </>
  );
}
