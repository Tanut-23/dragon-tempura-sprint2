import { useState } from "react";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div>
      <button onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#f5f2ed] rounded-md shadow-lg z-50">
          <div className="flex items-center gap-2 p-4 border-b">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold text-gray-800">Dragon Tempura</span>
          </div>
          <ul className="p-2 text-[#3b2c24]">
            <li>
              <Link
                to="/account"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                to="/myorder"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/setting"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Setting
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                onClick={closeDropdown}
                className="block px-4 py-2 text-red-500 hover:bg-gray-100"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
