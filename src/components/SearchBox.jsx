import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import products from "../../data/products";

function ListBox({ keyword }) {
  //Filter product that Title or Artist includes Keyword

  const matchedTitle = products.filter((product) => {
    return product.title.toLowerCase().includes(keyword.toLowerCase());
  });

  const matchedArtist = products.filter((product) => {
    return product.artist.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div className="absolute top-12 bg-[#f0e0d0] w-full z-20">
      {matchedTitle.length === 0 && matchedArtist.length === 0 && (
        <div className="px-2 py-1 hover:bg-gray-300">Not Found...</div>
      )}

      {matchedTitle.map((product) => {
        return (
          <div className="px-2 py-1 hover:bg-[#d7baa4]">{product.title}</div>
        );
      })}

      {matchedArtist.map((product) => {
        return (
          <div className="px-2 py-1 hover:bg-[#d7baa4]">{product.artist}</div>
        );
      })}
    </div>
  );
}

export default function SearchBox() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="relative w-80 h-10 bg-gray-400">
        {
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search by keyword or artist"
            className="w-full h-full p-4 outline-2 bg-[#EFD5C7]"
          />
        }
        <SearchIcon
          onClick={() => {}}
          sx={{
            position: "absolute",
            right: 0,
            width: 50,
            height: "100%",
            cursor: "pointer",
            outline: 2,
            padding: 0.5,
          }}
        />
      {searchText && <ListBox keyword={searchText} />}
    </div>
  );
}
