import React from "react";
import Navbar from "../components/Navbar";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import PaginationBar from "../components/PaginationBar";
import OrderCard from "../components/OrderCard";
import StatsCard from "../components/StatsCard";
import Footer from "../components/Footer";

function MyOrderPage() {
  return (
    <div>
      <Navbar />

      <Box
        sx={{
          width: "100vw", // ให้มีความกว้างเต็มจอ
          // height: "100vh", // ตั้งค่าความสูงให้เต็มหน้าจอ (ถ้าต้องการ)
          backgroundColor: "#e9e2d6", // เปลี่ยนสีพื้นหลังตามที่ต้องการ
          py: 4,
        }}
      >
        {/* <!-- Header --> */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 header-border pb-4 px-8 md:px-20">
          <h1 class="text-4xl font-light text-chocolate section-title mb-4 md:mb-0 text-[#62483a]">
            My Orders
          </h1>

          <div class="flex space-x-6 items-center">
            <label for="timeframe" class="text-[#62483a] font-light text-lg">
              View orders from:
            </label>
            <select
              id="timeframe"
              class="form-select py-2 px-4 rounded border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-0 text-chocolate"
            >
              <option value="all">All Time</option>
              <option value="week" selected>
                Last Week
              </option>
              <option value="month">Last Month</option>
              <option value="3months">Last 3 Months</option>
            </select>
          </div>
        </div>
        {/* <!--  Stats Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 px-8 md:px-20">
          <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Total Orders
            </p>
            <p class="text-3xl font-light text-gray-900 mt-2">7</p>
          </div>
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
        {/* <!-- Orders List --> */}
        <div className="grid grid-cols-1 mb-8  px-8 md:px-20 ">
          <h2 class="text-2xl text-[#62483a] font-light section-title mb-6">
            Recent Orders
          </h2>
          <div className="grid grid-cols-1 space-y-10 ">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>
        {/* <!-- Pagination --> */}
        <div className="flex justify-center">
          <PaginationBar />
        </div>
      </Box>
      <Footer />
    </div>
  );
}

export default MyOrderPage;
