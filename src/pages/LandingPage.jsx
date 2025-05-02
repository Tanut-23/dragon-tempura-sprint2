import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonLR from "../components/ButtonLR";
import ButtonSubmit from "../components/ButtonSubmit";
import { Stack, Box, Typography } from "@mui/material";
import AuctionCard from "../components/AuctionCard";
import ReviewCard from "../components/ReviewCard";

import products from "../../data/products";
import reviews from "../../data/reviews";
import { useRef } from "react";
import CollectionCard from "../components/CollectionCard";

export default function LandingPage() {
  // FOR SCROLLING CONTAINER
  const shopContainerRef = useRef();
  const auctionContainerRef = useRef();
  const reviewContainerRef = useRef();

  function scrollLeft(ref, move) {
    if (ref.current) {
      ref.current.scrollBy({
        left: -move,
        behavior: "smooth",
      });
    }
  }

  function scrollRight(ref, move) {
    if (ref.current) {
      ref.current.scrollBy({
        left: move,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="text-[#62483A] w-full min-h-[100vh]">
      {/* -------------------NAV BAR----------------- */}
      <Navbar />

      <header className="w-full">
        {/* -------------------SECTION HOME----------------- */}
        <section
          id="home"
          className="w-full  md:h-[450px] bg-[#F2EEE7] px-[36px] flex items-center md:gap-10 md:pr-0"
        >
          <article className="md:w-[50%] flex flex-col gap-[15px] my-[52px]">
            <p className="font-bold">Luxury Collection</p>
            <h1
              className="text-[2.5rem] font-bold"
              style={{
                fontFamily: "'Playfair Display', sans-serif",
                fontWeight: 800,
              }}
            >
              Express Your Style with Collectico
            </h1>
            {/* <Typography className="text-[2.5rem] font-bold">
              Express Your Style with Collectico
            </Typography> */}
            <p className="-mt-3 text-[1.5rem] font-semibold text-[var(--primary-color-4)] opacity-50">
              Where Every Artwork Tells a Story.
            </p>
            <p className="text-[1rem]">
              Explore our limited edition fine art collection, featuring
              Portrait, Landscape, Genre, Abstract, and Historical paintings
              across Classic, Modern, and Contemporary styles. Transform your
              space with timeless beauty.
            </p>
          </article>
          <figure className="w-[50%] h-full hidden md:block">
            <img
              src="../public/decoration/hero-picture.png"
              alt="hero"
              className="h-full w-full contrast-75 drop-shadow-2xl object-cover object-left"
            />
          </figure>
        </section>
      </header>

      {/* -------------------SECTION SHOP----------------- */}
      <section
        id="shop"
        className="relative w-full min-h-[650px] bg-[#f0e0d0] flex flex-col items-center py-[50px]"
      >
        <article className="title flex flex-col gap-[16px] items-center mb-4 md:mb-0">
          <h2 className="text-[1.5rem] font-bold">Our Collections</h2>
          <p className="w-[80%] text-center">
            Explore our carefully curated categories featuring the finest
            limited edition pieces from around the world.
          </p>
        </article>
        {/* ARROW BUTTON */}
        <Box
          sx={{
            width: "85%",
            display: { xs: "none", sm: "flex" },
            justifyContent: "end",
          }}
        >
          <ButtonLR
            scrollLeft={() => scrollLeft(shopContainerRef, 400)}
            scrollRight={() => scrollRight(shopContainerRef, 400)}
          />
        </Box>
        {/* CollectionCard */}
        <Stack
          ref={shopContainerRef}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center" },
            gap: 2,
            width: "80%",
            maxHeight: { xs: "330px", sm: "none" },
            overflow: "auto",
            whiteSpace: "nowrap",
            mt: 2,
            mb: 4,
            pb: 6,
            "&::-webkit-scrollbar": {
              height: "15px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.text",
              borderRadius: "100px",
              // border: "1px solid #62483a3c",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.lightChocolate",
            },
          }}
        >
          {products.map((product) => {
            return (
              <CollectionCard
                image1={product.image}
                name={product.title}
                detail={product.artist}
                prices={product.price}
                minWidth="320px"
                minHeight="300px"
                height="350px"
                minHeightImage="350px"
              />

              // <TCollectionCard
              //   image={product.image}
              //   title={product.title}
              //   artist={product.artist}
              //   price={product.price}
              // />
            );
          })}
        </Stack>
        {/* ButtonSubmit */}
        <div className="w-[15%] hover:w-[20%] hover:scale-110 transition-all duration-900 ease-in-out">
          <ButtonSubmit label="Explore Our Shop" width="100%" />
        </div>
      </section>

      {/* -------------------SECTION AUCTION----------------- */}
      <section
        id="auction"
        className="relative w-full bg-[#F2EEE7] flex flex-col items-center py-[50px]"
      >
        <article
          id="auction-title"
          className="flex flex-col gap-[20px] items-center sm:items-start w-[80%]"
        >
          <h2 className="text-[1.5rem] font-bold">Exclusive Auction Pieces</h2>
          <p className="w-[90%]">
            Discover our exclusive collection of rare, highly sought-after
            pieces, each selected for its exceptional craftsmanship and unique
            artistic vision.
          </p>
        </article>
        {/* ARROW BUTTON */}
        <Box
          sx={{
            width: "85%",
            display: { xs: "none", sm: "flex" },
            justifyContent: "end",
          }}
        >
          <ButtonLR
            scrollLeft={() => scrollLeft(auctionContainerRef, 400)}
            scrollRight={() => scrollRight(auctionContainerRef, 400)}
            backgroundColor="primary.cream"
          />
        </Box>
        {/* AuctionCard */}
        <Stack
          ref={auctionContainerRef}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center" },
            gap: 2,
            width: "80%",
            maxHeight: { xs: "550px", sm: "none" },
            overflow: "auto",
            whiteSpace: "nowrap",
            mt: 2,
            mb: 4,
            pt: 0.8,
            pb: 6,
            "&::-webkit-scrollbar": {
              height: "15px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.darkCream",
              borderRadius: "100px",
              // border: "1px solid #62483a3c",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.lightChocolate",
            },
          }}
        >
          {products.map((product) => {
            return (
              <AuctionCard
                image={product.image}
                title={product.title}
                artist={product.artist}
                price={product.price}
              />
            );
          })}
        </Stack>
        {/* ButtonSubmit */}
        <div className="w-[15%] hover:w-[20%] hover:scale-110 transition-all duration-900 ease-in-out">
          <ButtonSubmit label="Go Auction" width="100%" />
        </div>
      </section>

      {/* -------------------SECTION REVIEW----------------- */}
      <section
        id="review"
        className="relative flex flex-col items-center w-full py-[50px] bg-[#e9e2d6]"
      >
        <article className="flex flex-col gap-[20px] items-center w-[80%]">
          <h2 className="text-[1.5rem] font-bold">Collector Testimonials</h2>
          <p className="w-[80%] text-center">
            Hear from our distinguished collectors about their experiences with
            our limited edition pieces.
          </p>
        </article>
        {/* ARROW BUTTON */}
        <Box
          sx={{
            width: "85%",
            display: { xs: "none", sm: "flex" },
            justifyContent: "end",
          }}
        >
          <ButtonLR
            scrollLeft={() => scrollLeft(reviewContainerRef, 400)}
            scrollRight={() => scrollRight(reviewContainerRef, 400)}
          />
        </Box>
        {/* ReviewCard */}
        <Stack
          ref={reviewContainerRef}
          sx={{
            width: { xs: "80%", sm: "80%" },
            height: { xs: "320px", sm: "100%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            overflow: "auto",
            whiteSpace: "nowrap",
            mt: 2,
            mb: 4,
            pt: 0.5,
            pb: 6,
            scrollPaddingLeft: "0",
            "&::-webkit-scrollbar": {
              height: "15px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.text",
              borderRadius: "100px",
              // border: "1px solid #62483a3c",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.lightChocolate",
            },
          }}
        >
          {reviews.map((review) => {
            return (
              <ReviewCard
                star={review.star}
                text={review.text}
                profilePic={review.profilePic}
                name={review.name}
                position={review.position}
              />
            );
          })}
        </Stack>
      </section>
      {/* -------------------SECTION ABOUT----------------- */}
      <section
        id="about"
        class="w-full bg-white flex flex-row md:gap-20 gap-10 py-[50px] md:px-[54.5px] items-start justify-center"
      >
        <article class="flex flex-col gap-4 w-[80%] sm:w-[40%] my-auto">
          <h2 class="text-[1.5rem] font-bold">About Our Passion</h2>
          <p>
            At COLLECTICO, we curate only the most exceptional limited edition
            art pieces and display items from around the world. Each piece in
            our collection tells a unique story and brings unparalleled beauty
            to any space.
          </p>
          <p>
            Our team of experts travels the globe to discover talented artists
            and master craftsmen who create these extraordinary works. We pride
            ourselves on offering pieces that are not only visually stunning but
            also meaningful and enduring.
          </p>
          <p>
            Our logo embodies the belief that art has the power to inspire
            change, challenge perspectives, and unite humanity. It symbolizes
            how creativity can break barriers, give voice to the unheard, and
            bring equality to the world.
          </p>
          <p>
            At COLLECTICO, we honor this power by curating works that don’t just
            decorate spaces—they tell stories, ignite emotions, and stand as
            timeless symbols of resilience and hope.
          </p>

          {/* ButtonSubmit */}
          <div className="w-[20%] hover:w-[25%] hover:scale-110 transition-all duration-900 ease-in-out">
            <ButtonSubmit label="Our Story" width="100%" />
          </div>
        </article>
        <figure class="w-[40%] h-auto hidden sm:flex gap-[12px]">
          <img
            src="../public/productPicture/Genre-Painting-Classic-Art-4.jpg"
            alt=""
            class="bg-secondary2 lg:w-[50%] h-auto object-cover overflow-hidden brightness-110"
          />
          {/* <!-- the two right pictures --> */}
          <div class="w-[50%] h-auto hidden lg:flex lg:flex-col lg:gap-[12px]">
            <img
              src="../public/productPicture/Historical-Painting-Contemporary-Art-1.jpg"
              alt=""
              class="bg-secondary2 w-full h-auto object-cover overflow-hidden"
            />
            <img
              src="../public/productPicture/Portrait-Painting-Classic-Art-2.jpg"
              alt=""
              class="bg-secondary2 w-full h-auto object-cover overflow-hidden backdrop-brightness-95"
            />
          </div>
        </figure>
      </section>
      {/* -------------------FOOTER----------------- */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
