import ProductCard from '../components/ProductCard';
import { Box, Container, Paper, Typography } from '@mui/material';
import InputField from '../components/InlineInput';
import ButtonSubmit from '../components/ButtonSubmit';
import RadioButtonExample from '../components/radio';
import HorizontalLinearStepper from '../components/Step';
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import React,{useEffect, useState} from  'react';
import axios from 'axios';

function Cart() {

  const { cartItems, cartCount } = useCart();
  const [shipCost, setShipcost] = useState();
  const navigate = useNavigate()

  const totalPrices = cartItems.reduce((total, product)=>total+product.price, 0);
  const tax = Math.ceil(totalPrices/10);
  const shipping = shipCost;
  const sumPrices = totalPrices + tax + shipping;
  
  async function onDelete(productId) {
    try {
      await axios.delete(`http://localhost:3000/api/cart-delete/${productId}`, { withCredentials: true });
    } catch(err) {
      console.error("Add to cart failed:", err.response?.data || err.message);
    }
  }


  // console.log(totalPrices);
  // console.log(cartItems);

  useEffect(() => {
    if (cartCount === 0) {
      navigate('/shoppage');
    }
  }, [cartCount, navigate]);

  return (
    <div className="bg-[#F0E0D0] w-[100vw] flex flex-col items-center px-[10%] pt-[32px]">
      <header className="flex flex-col gap-[16px] pb-[24px]">
        <h1 className="mx-auto text-[3rem] font-thin tracking-wide">Your Collection</h1>
        <p className="mx-auto text-[2rem] font-thin text-[#62483A] tracking-wide">
          Review your items and proceed to checkout
        </p>
      </header>
      <main className="flex max-md:flex-col-reverse justify-start w-full max-md:gap-[16px]">
        <section className="flex md:flex-col gap-[16px] w-[100%] md:w-[30%] min-w-[240px] items-center overflow-y-auto scrollbar-hide max-h-[1100px] p-[8px] bg-[#E9E2D6] rounded-tl-lg rounded-bl-lg">
        {cartItems.map((products)=>(
            <ProductCard onDelete={onDelete(products.id)} wantDelete={true}  elevation={3} image={products.image}  title={products.title} artist={products.artist} price={products.price}/>
          ))}
        </section>
        <div className="flex flex-col gap-[16px] md:w-[65%] w-[100%] min-w-[300px] bg-[#F2EEE7] rounded-tr-lg rounded-br-lg overflow-hidden border-0 px-[5%] py-[32px]">
        <Paper elevation={3}
          sx={{ p: 3, mb: 4, bgcolor: "#f9f7f3", color: "#62483a", display:'flex', flexDirection:"column", gap:"16px"}}>
        <Typography sx={{ width:"100%", color: "primary.main" , fontWeight:600, fontSize: "1.5rem"}}>Order Summary</Typography>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Sub total</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>${totalPrices}</Typography>
        </div>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Shipping</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>${shipping}</Typography>
        </div>
        <div className='flex justify-between gap-[24px] border-b-2'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Tax</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>${tax}</Typography>
        </div>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Total</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>${sumPrices}</Typography>
        </div>
        </Paper>
        <HorizontalLinearStepper setShipcost={setShipcost} />
        </div>
      </main>
    </div>
  );
}

export default Cart;