import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PaginationBar from "../components/PaginationBar";
import OrderCard from "../components/OrderCard";
import StatsCard from "../components/StatsCard";
import BreadcrumbsNav from "../components/BreadcrumbsNav";
import mockOrderDetails from "../../data/mockOrderDetails";

function MyOrderPage({ title, value }) {
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const links = [
    { label: "Home", to: "/" },
    { label: "Collections", to: "/mainshop" },
    { label: "Your Collection", to: "/cart" },
  ];

  useEffect(() => {
    let sumtotalSpend = 0;
    let sumCompleted = 0;
    let sumPending = 0;
    mockOrderDetails.forEach((order) => {
      //get total spend
      sumtotalSpend += order.total;
      //get completed and pending order amount
      if (order.status === "Deliver") {
        sumCompleted += 1;
      } else {
        sumPending += 1;
      }
    });
    setTotalSpend(sumtotalSpend);
    setTotalOrder(mockOrderDetails.length);
    setCompleted(sumCompleted);
    setPending(sumPending);
  }, []);

  return (
    <div className="bg-[#e9e2d6] w-[100vw] px-4 py-2">
      <BreadcrumbsNav links={links} currentPage="My Orders" />
      <Box
        sx={{
          width: "100vw", // ให้มีความกว้างเต็มจอ
          backgroundColor: "#e9e2d6",
          py: 4,
        }}
      >
        {/* <!-- Header --> */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 header-border pb-4 px-8 md:px-10 lg:px-12 xl:px-18 2xl:px-22">
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
            </select>
          </div>
        </div>

        {/* <!--  Stats Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 px-4 md:px-10 lg:px-12 xl:px-18 2xl:px-22">
          <StatsCard title="total order" value={totalOrder} fontSize={{}} />
          <StatsCard title="COMPLETED" value={completed} />
          <StatsCard title="pending" value={pending} />
          <StatsCard
            title="total spent"
            value={`$${totalSpend.toLocaleString("en-Us", {
              minimumFractionDigits: 2,
            })}`}
          />
        </div>

        {/* <!-- Orders List --> */}
        <div className="grid grid-cols-1 mb-8  px-4 md:px-10 lg:px-12 xl:px-18 2xl:px-22  ">
          <h2 class="text-2xl text-[#62483a] font-light section-title mb-6">
            Recent Orders
          </h2>

          <div className="grid grid-cols-1 space-y-10 ">
            {mockOrderDetails.map((order) => {
              return (
                <OrderCard
                  key={order.orderId}
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
                  items={order.items}
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
