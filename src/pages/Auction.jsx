import { useState, useEffect } from "react";
import RemainingBlock from "../components/RemainingBlock";
import ButtonSubmit from "../components/ButtonSubmit";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import { io } from "socket.io-client";
import { useAuth } from "../contexts/AuthContext";

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM22 7.5V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2H16.5L22 7.5ZM20 8H16V4H4V20H20V8Z" />
  </svg>
);

const HistoryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" />
    <path d="M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" />
    <path d="M15 13H13V11H15V13Z" />
  </svg>
);

const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
  >
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13ZM18 18H6V17.01C6.2 16.29 9.3 15 12 15C14.7 15 17.8 16.29 18 17V18Z" />
  </svg>
);

const DollarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.46 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" />
  </svg>
);

export default function AuctionPage() {
  const { id } = useParams();
  const [timeLeft, setTimeLeft] = useState(null);
  const { user, isAuthenticated } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bid, setBid] = useState("");
  const [historyBid, setHistoryBid] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const socket = io("http://localhost:3000");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  useEffect(() => {
    socket.on("shareBid", (dataAuctioneer) => {
      dataAuctioneer.time = new Date(dataAuctioneer.time); // Convert string to Date
      setHistoryBid((prev) => [dataAuctioneer, ...prev]);
    });
    return () => socket.off("shareBid");
  }, []);

  const bidCurrent = Math.max(...historyBid.map((b) => b.amount), 0);
  const bidButton = (event) => {
    event.preventDefault();
    const bidUser = Number(bid);

    if (bidUser <= bidCurrent) {
      setErrorMessage(
        `Bid price must be greater than $${bidCurrent.toLocaleString()}`
      );
      return;
    }

    if (bidUser > 999999999999999) {
      setErrorMessage(`Bid price must be lower than one quadrillion.`);
      return;
    }

    const dataAuctioneer = {
      firstName: firstName,
      lastName: lastName,
      amount: bidUser,
      time: new Date(),
    };

    socket.emit("oneBid", dataAuctioneer);
    setBid("");
    setErrorMessage("");
  };

  const noDecimal = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setBid(value);
  };

  const [auctionProduct, setAuctionProduct] = useState(null);

  useEffect(() => {
    const data = products.find((product) => product.id === parseInt(id));
    if (data) {
      setAuctionProduct(data);
    }
  }, [id]);

  useEffect(() => {
    if (auctionProduct) {
      const now = new Date();
      let timeLeft = new Date(auctionProduct.endDate) - now;
      setTimeLeft(timeLeft);
    }
  }, [auctionProduct]);

  if (!auctionProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f2eee7] text-[#62483A]">
      <main className="container xl:w-[85%]  mx-auto py-8 px-4">
        <h1 className="text-[2rem] font-bold mb-4">Auction</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center p-6 bg-[#e4dcd2b4] rounded-lg shadow-lg overflow-hidden">
              <img
                src={auctionProduct.image}
                alt={auctionProduct.title}
                className="lg:w-[60%] object-cover shadow-md shadow-gray-600 hover:scale-105 hover:duration-900 duration-900"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#62483a] mb-2">
                  {auctionProduct.title}
                </h2>
                <p className="text-[#757575] mb-4">
                  Artist: {auctionProduct.artist}
                </p>
                <p className="text-[#49352a]">{auctionProduct.description}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center pl-0 bg-[#f0e0d0] rounded-lg shadow-md p-6 mb-6 hover:scale-102 hover:duration-700 duration-700">
              <div className="flex items-center mb-4">
                <span className="text-[#62483a] mr-2">
                  <ClockIcon />
                </span>
                <h3 className="text-lg font-semibold text-[#62483a]">
                  Time Left
                </h3>
              </div>
              <div className="w-full h-[55px] flex justify-center pl-15 pt-1">
                <RemainingBlock timeLeft={timeLeft} paddingLeft="0" />
              </div>
            </div>

            <div className=" flex flex-col items-center pl-0 bg-white rounded-lg shadow-md p-6 mb-6 hover:scale-102 hover:duration-700 duration-700">
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-3">
                  <span className="text-[#62483a] mr-2">
                    <ChartIcon />
                  </span>
                  <h3 className="text-lg font-semibold text-[#62483a]">
                    Current Bid Price
                  </h3>
                </div>
                <div className="text-3xl font-bold text-[#62483a] mb-1">
                  ${bidCurrent.toLocaleString()}
                </div>
                <div className="text-sm text-[#757575]">
                  Starting Bid Price: $1
                </div>
              </div>
            </div>

            <div className="bg-[#f9f7f3] rounded-lg shadow-md p-6 mb-6 border border-[#e9e2d6] hover:scale-102 hover:duration-700 duration-700">
              <div className="flex items-center mb-3">
                <span className="text-[#62483a] mr-2">
                  <DollarIcon />
                </span>
                <h3 className="text-lg font-semibold text-[#62483a]">
                  Auction
                </h3>
              </div>
              {isAuthenticated ? (
                <form onSubmit={bidButton}>
                  <div className="mb-4">
                    <label
                      htmlFor="bidAmount"
                      className="block text-sm font-medium text-[#49352a] mb-1"
                    >
                      Bid Price (USD)
                    </label>
                    <input
                      type="number"
                      value={bid}
                      onChange={noDecimal}
                      placeholder="Enter your Bid Price"
                      className="w-full px-4 py-2 border border-[#9f8e84] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c2a78f]"
                      required
                    />
                    {errorMessage && (
                      <p className="mt-2 text-red-700 text-sm">
                        {errorMessage}
                      </p>
                    )}
                  </div>

                  <ButtonSubmit
                    onClick={bidButton}
                    label="Bid Now"
                    borderRadius="6px"
                    marginTop="2px"
                  />
                </form>
              ) : (
                <p className="text-sm text-red-700 mt-2">
                  Please <Link to="/login" className="underline font-bold">login </Link>
                  to place a bid.
                </p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-102 hover:duration-700 duration-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-[#62483a] mr-2">
                    <HistoryIcon />
                  </span>
                  <h3 className="text-lg font-semibold text-[#62483a]">
                    Auction History
                  </h3>
                </div>
                <span className="text-sm text-[#757575]">
                  {historyBid.length} History
                </span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {historyBid.map((b, i) => (
                  <div
                    key={i}
                    className="border-b border-[#e9e2d6] py-3 last:border-0"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-[#9f8e84] mr-2">
                          <PersonIcon />
                        </span>
                        <span className="text-[#49352a] font-medium">
                          {b.firstName} {b.lastName}
                        </span>
                      </div>
                      <span className="font-semibold text-[#62483a]">
                        ${b.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-[#757575]">
                      {b.time.toLocaleString("en-US", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
