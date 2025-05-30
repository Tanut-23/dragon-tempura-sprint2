import { useEffect, useState } from "react";
import ButtonLR from "../components/ButtonLR";
import ButtonSubmit from "../components/ButtonSubmit";
import { Stack, Box } from "@mui/material";
import AuctionCard from "../components/AuctionCard";
import ReviewCard from "../components/ReviewCard";
import reviews from "../../data/reviews";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CollectionCardLanding from "../components/CollectionCardLanding";
import baseURL from "../../service/api";

export default function LandingPage() {
  // FOR SCROLLING CONTAINER
  const shopContainerRef = useRef();
  const auctionContainerRef = useRef();
  const reviewContainerRef = useRef();

  const [collectionData, setCollectionData] = useState([]);
  const [auctionData, setAuctionData] = useState([]);
  const [bids, setBids] = useState({}); // { [productId]: currentBid }

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

  //------CONNECT TO BACKEND-------//

  //Get Product From Database
  async function getData() {
    try {
      //fixed price product
      const productData = await axios.get(`${baseURL}/api/product-get`, {
        withCredentials: true,
      });
      setCollectionData(productData.data.allProduct || []);

      //auction product
      const auctionData = await axios.get(
        `${baseURL}/api/product-get-auction`,
        {
          withCredentials: true,
        }
      );
      setAuctionData(auctionData.data.allAuctionProduct || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchBids = async () => {
      const bidsObj = {};
      await Promise.all(
        auctionData.map(async (product) => {
          try {
            const res = await axios.get(`${baseURL}/api/bids/${product._id}`);
            const data = res.data;
            const highest =
              data.length > 0 ? Math.max(...data.map((b) => b.amount)) : 0;
            bidsObj[product._id] = highest;
          } catch {
            bidsObj[product._id] = 0;
          }
        })
      );
      setBids(bidsObj);
    };
    if (auctionData.length > 0) fetchBids();
  }, [auctionData]);

  useEffect(() => {
    getData();
  }, []);

  //Remaining time for each auction card
  const updateTimeLeft = (index) => {
    const now = new Date();
    const end = new Date(auctionData[index].auction.endDate || 0);
    const diff = end - now;
    if (diff < 0) return 0;
    return diff;
  };

  return (
    <div className="text-[#62483A] w-full min-h-[100vh]">
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
              src="/decoration/hero-picture.png"
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
            alignItems: { xs: "stretch", sm: "center" },
            gap: 2,
            width: { xs: "90%", sm: "80%" },
            maxHeight: { xs: "330px", sm: "none" },
            overflowY: "auto",
            overflowX: { xs: "clip", sm: "auto" },
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
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.lightChocolate",
            },
          }}
        >
          {collectionData.map((product) => {
            return (
              <CollectionCardLanding
                key={product.id}
                image1={product.image}
                name={product.title}
                detail={product.artist}
                prices={product.price}
                linkURL={`/product/${product._id}`}
              />
            );
          })}
        </Stack>
        {/* ButtonSubmit */}
        <div className="w-[45%] md:w-[20%] lg:w-[15%] hover:scale-120 transition-all duration-900 ease-in-out">
          <Link to="/mainshop">
            <ButtonSubmit label="Explore Our Shop" width="100%" />
          </Link>
        </div>
      </section>

      {/* -------------------SECTION AUCTION----------------- */}
      <section
        id="auction"
        className="relative w-full bg-[#F2EEE7] flex flex-col items-center py-[50px]"
      >
        <article
          id="auction-title"
          className="flex flex-col gap-[20px] items-center w-[80%]"
        >
          <h2 className="text-[1.5rem] font-bold text-center">
            Exclusive Auction Pieces
          </h2>
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
            width: { xs: "90%", sm: "80%" },
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
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.lightChocolate",
            },
          }}
        >
          {auctionData.map((product, index) => (
            <AuctionCard
              key={product._id}
              image={product.image}
              title={product.title}
              artist={product.artist}
              price={
                typeof bids[product._id] === "number"
                  ? bids[product._id]
                  : "Loading..."
              }
              linkUrl={`/auction/${product._id}`}
              timeLeft={updateTimeLeft(index)}
              productId={product._id}
            />
          ))}
        </Stack>
        {/* ButtonSubmit */}
        <div className="w-[30%] lg:w-[15%] hover:scale-120 transition-all duration-900 ease-in-out">
          <Link to="/auction">
            <ButtonSubmit label="Go Auction" width="100%" />
          </Link>
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
            width: { xs: "90%", sm: "80%" },
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
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.lightChocolate",
            },
          }}
        >
          {reviews.map((review) => {
            return (
              <ReviewCard
                key={review.id}
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
        className="w-full bg-white flex flex-row md:gap-20 gap-10 py-[50px] md:px-[54.5px] items-start justify-center"
      >
        <article className="flex flex-col gap-4 w-[80%] sm:w-[40%] my-auto">
          <h2 className="text-[1.5rem] font-bold">About Our Passion</h2>
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
          <div className="w-[40%] lg:w-[30%] hover:scale-120  transition-all duration-900 ease-in-out">
            <Link to="/ourstory">
              <ButtonSubmit label="Our Story" width="100%" />
            </Link>
          </div>
        </article>
        <figure className="w-[40%] h-auto hidden sm:flex gap-[12px]">
          <img
            src="/productPicture/Genre-Painting-Classic-Art-4.jpg"
            alt=""
            className="bg-secondary2 lg:w-[50%] h-auto object-cover overflow-hidden brightness-110"
          />
          {/* <!-- the two right pictures --> */}
          <div className="w-[50%] h-auto hidden lg:flex lg:flex-col lg:gap-[12px]">
            <img
              src="/productPicture/Historical-Painting-Contemporary-Art-1.jpg"
              alt=""
              className="bg-secondary2 w-full h-auto object-cover overflow-hidden"
            />
            <img
              src="/productPicture/Portrait-Painting-Classic-Art-2.jpg"
              alt=""
              className="bg-secondary2 w-full h-auto object-cover overflow-hidden backdrop-brightness-95"
            />
          </div>
        </figure>
      </section>
    </div>
  );
}