import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import PaginationBar from "../components/PaginationBar";
import OrderCard from "../components/OrderCard";
import StatsCard from "../components/StatsCard";

import mockOrderDetails from "../../data/mockOrderDetails";

function MyOrderPage({ title, value }) {
  return (
    <div>
      <Box
        sx={{
          width: "100vw", // ให้มีความกว้างเต็มจอ
          backgroundColor: "#e9e2d6", // เปลี่ยนสีพื้นหลังตามที่ต้องการ
          py: 4,
        }}
      >
        {/* <!-- Header --> */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 header-border pb-4 px-8 md:px-10 lg:px-12 xl:px-18 2xl:px-32">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 px-4 md:px-10 lg:px-12 xl:px-18 2xl:px-32">
          <StatsCard title="total order" value="7" fontSize={{}} />
          <StatsCard title="COMPLETED" value="5" />
          <StatsCard title="pending" value="1" />
          <StatsCard title="total spent" value="$4,320.00" />
        </div>

        {/* <!-- Orders List --> */}
        <div className="grid grid-cols-1 mb-8  px-4 md:px-10 lg:px-12 xl:px-18 2xl:px-32 3xl:px-4 ">
          <h2 class="text-2xl text-[#62483a] font-light section-title mb-6">
            Recent Orders
          </h2>

          <div className="grid grid-cols-1 space-y-10 ">
            {mockOrderDetails.map((order) => {
              return (
                <OrderCard
                  orderNumber={order.orderId}
                  status={order.status}
                  orderDate={order.orderDate}
                  totalAmount={order.total}
                  paymentStatus={order.paymentStatus}
                  // onViewDetailsClick={order}
                  shippingAddressName={order.shippingAddress.name}
                  shippingAddressAddress={order.shippingAddress.address}
                  shippingAddressCity={
                    order.shippingAddress.city +
                    ", " +
                    order.shippingAddress.state +
                    " " +
                    order.shippingAddress.zip
                  }
                />
              );
            })}
          </div>
        </div>
        {/* <!-- Pagination --> */}
        <div className="flex justify-center px-4">
          <PaginationBar />
        </div>
      </Box>
    </div>
  );
}

export default MyOrderPage;
