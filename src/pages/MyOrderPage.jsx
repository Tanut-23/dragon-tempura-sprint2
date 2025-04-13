import React from "react";
import Navbar from "../components/Navbar";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import PaginationBar from "../components/PaginationBar";
import OrderCard from "../components/OrderCard";
import StatsCard from "../components/StatsCard";

function MyOrderPage() {
  return (
    <>
      <Navbar />
      <Container
        maxwidth="xl"
        sx={{
          backgroundColor: "#e9e2d6", // สีพื้นหลัง
          color: "#62483a", // สีข้อความ
          py: 4, // padding ด้านบนและล่าง
        }}
      >
        {/* <!-- Header --> */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 header-border pb-4">
          <h1 class="text-4xl font-light text-chocolate section-title mb-4 md:mb-0">
            My Orders
          </h1>

          <div class="flex space-x-6 items-center">
            <label for="timeframe" class="text-chocolate font-light text-lg">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
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
        <div className="mb-8">
          <h2 class="text-2xl text-chocolate font-light section-title mb-6">
            Recent Orders
          </h2>
          <div className="space-y-6 ">
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
      </Container>
      <section className="w-full h-full mx-auto px-12 py-12 bg-[#e9e2d6]"></section>
    </>
  );
}

export default MyOrderPage;
