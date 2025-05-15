import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center bg-[#f0e0d0]">

      <ScrollToTop />
    {/* test */}
      {/* <nav className="flex gap-10 flex-wrap my-20 text-2xl">
        <Link to="/">Landing</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/mainshop">Main Shop </Link>
        <Link to="/myorder">My order</Link>
        <Link to="/auction/1">Auction</Link>
        <Link to="/resetpassword">Reset password</Link>
        <Link to="/cart">Matetest</Link>
        <Link to="/market">Market</Link>
        <Link to="/postpage">PostPage</Link>
        <Link to="/animation">Animation</Link>
        <Link to="/auction">AuctionShopPage</Link>
      </nav> */}
      <div className="w-full sticky top-0 z-50 ">
        <Navbar />
      </div>
      <Outlet />
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
