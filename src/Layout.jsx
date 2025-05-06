import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center bg-amber-100">
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
