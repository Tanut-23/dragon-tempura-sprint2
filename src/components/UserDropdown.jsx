import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@mui/material";

const UserDropdown = () => {
  const { logout , user} = useAuth();
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("")

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);}
  },[user])

  return (
    <div className="relative ">
      <button onClick={toggleDropdown} className="hover:text-[#b49b8e]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute -translate-x-1/2 mt-2 w-56 bg-[#806248] shadow-lg z-50">
          <div className="flex items-center gap-2 p-4 border-b">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Lightning_McQueen.png/250px-Lightning_McQueen.png"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className=" font-medium text-[##f9f7f3]">{firstName || "Guest"}      {lastName} </span>
          </div>
          <ul className="p-2 bg-[#806248] text-[##f9f7f3]">
            <li>
              <Link
                to="/login"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-[#62483a]"
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                to="/market"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-[#62483a]"
              >
                Market
              </Link>
            </li>
            <li>
              <Link
                to="/setting"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-[#62483a]"
              >
                Setting
              </Link>
            </li>
            <li>
              <Button
                onClick={logout}
                fullWidth
                sx={{ color: "white" , bgcolor: "transparent" , "&:hover": { bgcolor: "red" } }}
              >
                Log Out
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
