import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import PaginationBar from "../components/PaginationBar";
import OrderCard from "../components/OrderCard";
import StatsCard from "../components/StatsCard";
import axios from "axios";
// import mockOrderDetails from "../../data/mockOrderDetails";

function MyOrderPage() {

  const [totalSpend, setTotalSpend] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [data, setData]= useState([]);
  // const [product, setProduct]= useState();

useEffect(() => {
  const getData = async () => {
    try {
      const res= await axios.get("http://localhost:3000/api/order-get", {
        withCredentials: true,
      });
      setData(res.data.orderHistory);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  getData();
}, []);



console.log("CheckMyorder",data);

  useEffect(() => {
    let sumtotalSpend = 0;
    let sumCompleted = 0;
    let sumPending = 0;
    data.forEach((order) => {
      //get total spend
      sumtotalSpend += order.totalPrice
      //get completed and pending order amount
      if (order.status === "Deliver") {
        sumCompleted += 1;
      } else {
        sumPending += 1;
      }
    })
    setTotalSpend(sumtotalSpend)
    setTotalOrder(data.length)
    setCompleted(sumCompleted)
    setPending(sumPending)
  }, [data])

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
          <StatsCard title="total order" value={totalOrder} fontSize={{}} />
          <StatsCard title="COMPLETED" value={completed} />
          <StatsCard title="pending" value={pending} />
          <StatsCard title="total spent" value={`$${totalSpend.toLocaleString('en-Us', {minimumFractionDigits:2})}`} />
        </div>

        {/* <!-- Orders List --> */}
        <div className="grid grid-cols-1 mb-8  px-4 md:px-10 lg:px-12 xl:px-18 2xl:px-32 3xl:px-4 ">
          <h2 class="text-2xl text-[#62483a] font-light section-title mb-6">
            Recent Orders
          </h2>

          <div className="grid grid-cols-1 space-y-10 ">
            {data.map((order,index) => {
              return (
                <OrderCard
                  key={index}
                  orderNumber={order._id}
                  status={order.status}
                  orderDate={order.updatedAt}
                  totalAmount={order.totalPrice}
                  paymentStatus={order.paymentMethod}
                  // onViewDetailsClick={order}
                  shippingAddressName={`${order.firstName} ${order.lastName}`}
                  shippingAddressAddress={order.address}
                  shippingAddressCity={
                    order.city +
                    ", " +
                    order.state +
                    " " +
                    order.zip
                  }
                  items={order.productId}
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
