import { useState, useEffect } from "react";
import RemainingBlock from "../components/RemainingBlock";
// Mockup data
const mockupData = {
  title: "Seated Figure in Grey88",
  artist: "Emil Nordström",
  description:
    "This contemporary abstract painting depicts a solitary figure seated on a dark chair, rendered in bold, expressive white brushstrokes against a muted grey background. The artist employs a minimalist approach, using quick, confident strokes to suggest the human form rather than define it precisely. The figure appears contemplative, isolated in an ambiguous space that creates a sense of solitude and introspection. The limited palette of whites, greys, and blacks enhances the emotional weight of the composition, while the textured, impasto application of paint adds physical dimension to the work. The stark contrast between the ethereal white figure and the solid black chair creates a compelling visual tension, inviting viewers to contemplate themes of presence and absence, solidity and transience.",
  imageUrl: "../../public/productPicture/Abstract-Painting-Classic-Art-5.jpg",
  startingBid: 5000,
  endTime: new Date(Date.now() + 86400000), // 24 hours
};

const mockBidHistory = [
  {
    id: 1,
    user: "art_collector88",
    amount: 32000,
    time: new Date(Date.now() - 25000000),
  },
  {
    id: 2,
    user: "gallery_owner",
    amount: 28500,
    time: new Date(Date.now() - 45000000),
  },
  {
    id: 3,
    user: "thai_artlover",
    amount: 25000,
    time: new Date(Date.now() - 62000000),
  },
  {
    id: 4,
    user: "new_collector",
    amount: 20000,
    time: new Date(Date.now() - 78000000),
  },
  {
    id: 5,
    user: "art_enthusiast",
    amount: 15000,
    time: new Date(Date.now() - 86000000),
  },
];

// Custom SVG Icons
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
  const [currentBid, setCurrentBid] = useState(mockBidHistory[0].amount);
  const [bidAmount, setBidAmount] = useState("");
  const [timeLeft, setTimeLeft] = useState({});
  const [bidHistory, setBidHistory] = useState(mockBidHistory);
  const [errorMessage, setErrorMessage] = useState("");

  // คำนวณเวลาที่เหลือ
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = mockupData.endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ฟังก์ชันสำหรับการประมูล
  const handleBid = (e) => {
    e.preventDefault();
    const bidValue = Number(bidAmount);

    if (isNaN(bidValue) || bidValue <= 0) {
      setErrorMessage("กรุณากรอกจำนวนเงินที่ถูกต้อง");
      return;
    }

    if (bidValue <= currentBid) {
      setErrorMessage(
        `ราคาประมูลต้องมากกว่า ${currentBid.toLocaleString()} บาท`
      );
      return;
    }

    // เพิ่มประวัติการประมูลใหม่
    const newBid = {
      id: bidHistory.length + 1,
      user: "คุณ", // ในระบบจริงควรใช้ชื่อผู้ใช้ที่ login
      amount: bidValue,
      time: new Date(),
    };

    setBidHistory([newBid, ...bidHistory]);
    setCurrentBid(bidValue);
    setBidAmount("");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen bg-[#f2eee7]">
      {/* Nav */}
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Artwork Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={mockupData.imageUrl}
                alt={mockupData.title}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#62483a] mb-2">
                  {mockupData.title}
                </h2>
                <p className="text-[#757575] mb-4">
                  Artist: {mockupData.artist}
                </p>
                <p className="text-[#49352a]">{mockupData.description}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Auction Info */}
          <div className="lg:col-span-1">
            {/* Countdown Timer */}
            <div className="bg-[#f0e0d0] rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-3">
                <span className="text-[#62483a] mr-2">
                  <ClockIcon />
                </span>
                <h3 className="text-lg font-semibold text-[#62483a]">
                  เวลาที่เหลือ
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <RemainingBlock />
              </div>
            </div>

            {/* Current Bid */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-3">
                <span className="text-[#62483a] mr-2">
                  <ChartIcon />
                </span>
                <h3 className="text-lg font-semibold text-[#62483a]">
                  ราคาประมูลปัจจุบัน
                </h3>
              </div>
              <div className="text-3xl font-bold text-[#62483a] mb-1">
                {currentBid.toLocaleString()} บาท
              </div>
              <div className="text-sm text-[#757575]">
                ราคาเริ่มต้น: {mockupData.startingBid.toLocaleString()} บาท
              </div>
            </div>

            {/* Bid Form */}
            <div className="bg-[#f9f7f3] rounded-lg shadow-md p-6 mb-6 border border-[#e9e2d6]">
              <div className="flex items-center mb-3">
                <span className="text-[#62483a] mr-2">
                  <DollarIcon />
                </span>
                <h3 className="text-lg font-semibold text-[#62483a]">ประมูล</h3>
              </div>
              <form onSubmit={handleBid}>
                <div className="mb-4">
                  <label
                    htmlFor="bidAmount"
                    className="block text-sm font-medium text-[#49352a] mb-1"
                  >
                    จำนวนเงินที่ต้องการประมูล (บาท)
                  </label>
                  <input
                    type="number"
                    id="bidAmount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="กรอกจำนวนเงิน"
                    min={currentBid + 1}
                    className="w-full px-4 py-2 border border-[#9f8e84] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c2a78f]"
                    required
                  />
                  {errorMessage && (
                    <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#62483a] hover:bg-[#49352a] text-[#f2eee7] font-medium py-2 px-4 rounded-md transition duration-200"
                >
                  ประมูลตอนนี้
                </button>
              </form>
            </div>

            {/* Bid History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-[#62483a] mr-2">
                    <HistoryIcon />
                  </span>
                  <h3 className="text-lg font-semibold text-[#62483a]">
                    ประวัติการประมูล
                  </h3>
                </div>
                <span className="text-sm text-[#757575]">
                  {bidHistory.length} รายการ
                </span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {bidHistory.map((bid) => (
                  <div
                    key={bid.id}
                    className="border-b border-[#e9e2d6] py-3 last:border-0"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-[#9f8e84] mr-2">
                          <PersonIcon />
                        </span>
                        <span className="text-[#49352a] font-medium">
                          {bid.user}
                        </span>
                      </div>
                      <span className="font-semibold text-[#62483a]">
                        {bid.amount.toLocaleString()} บาท
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-[#757575]">
                      {bid.time.toLocaleString("th-TH", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
