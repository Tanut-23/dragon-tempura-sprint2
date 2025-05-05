import ProductCard from '../components/ProductCard';
import { Box, Container, Paper, Typography } from '@mui/material';
import InputField from '../components/InlineInput';
import ButtonSubmit from '../components/ButtonSubmit';
import RadioButtonExample from '../components/radio';
import HorizontalLinearStepper from '../components/Step';
import SortBox from '../components/SortBox'

function Cart() {




  return (
    <div className="bg-[#F0E0D0] w-[100vw] flex flex-col items-center px-[10%] pt-[32px]">
      <header className="flex flex-col gap-[16px] pb-[24px]">
        <h1 className="mx-auto text-[3rem] font-thin tracking-wide">Your Collection</h1>
        <p className="mx-auto text-[2rem] font-thin text-[#62483A] tracking-wide">
          Review your items and proceed to checkout
        </p>
        {/* <SortBox/> */}
      </header>
      <main className="flex justify-start w-full">
        <section className="flex flex-col gap-[16px] w-[30%] items-center overflow-y-auto scrollbar-hide max-h-[1100px] p-[8px] bg-[#E9E2D6] rounded-tl-lg rounded-bl-lg">
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"} />
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
          <ProductCard elevation={3} image={"./decoration/hero-picture.png"} title={"JSD9"} artist={"Mate"} price={"1,000"}/>
        </section>
        <div className="flex flex-col gap-[16px] w-[65%] bg-[#F2EEE7] rounded-tr-lg rounded-br-lg overflow-hidden border-0 px-[5%] py-[32px]">
        <Paper elevation={3}
          sx={{ p: 3, mb: 4, bgcolor: "#f9f7f3", color: "#62483a", display:'flex', flexDirection:"column", gap:"16px"}}>
        <Typography sx={{ width:"100%", color: "primary.main" , fontWeight:600, fontSize: "1.5rem"}}>Order Summary</Typography>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Sub total</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$14,900</Typography>
        </div>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Shipping</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$150</Typography>
        </div>
        <div className='flex justify-between gap-[24px] border-b-2'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Tax</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$1490</Typography>
        </div>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Total</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$16,550</Typography>
        </div>
        </Paper>
        <HorizontalLinearStepper />
        {/* <Typography sx={{ width:"100%", color: "primary.main" , fontWeight:600, fontSize: "1.5rem"}}>Order Summary</Typography>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Sub total</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$14,900</Typography>
        </div>
        <div className='flex justify-between gap-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Shipping</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$150</Typography>
        </div>
        <div className='flex justify-between gap-[24px] border-b-2'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Tax</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$1490</Typography>
        </div>
        <div className='flex justify-between gap-[24px] mb-[24px]'>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>Total</Typography>
        <Typography sx={{ width: "full", color: "primary.main" , fontWeight:"medium", fontSize: "1.2rem",}}>$16,550</Typography>
        </div> */}
        </div>
      </main>
    </div>
  );
}

export default Cart;
