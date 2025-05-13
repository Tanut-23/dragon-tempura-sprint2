import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useLocation } from "react-router-dom";
import baseURL from "../../service/api";

function ListBox({ keyword, onSelect }) {
  const location = useLocation();
  const [genre , setGenre] = useState();
  const [products, setProducts] = useState([])

  // CONNECT TO BACKEND
  useEffect(() => {
      const params = new URLSearchParams(location.search);
      const genreParam = params.get("genre");
      setGenre(genreParam);
    },[location.search]);
  
    useEffect(() => {
      if(!genre) return
      const fetchProducts = async () => {
        try{
          const res = await axios.get(`${baseURL}/api/products?genre=${genre}`,)
          setProducts(res.data.products);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
       }
      fetchProducts();
    },[genre])


  //Filter product that Title or Artist includes Keyword
  const matchedTitle = products.filter((product) => {
    return product.title.toLowerCase().includes(keyword.toLowerCase());
  });

  const matchedArtist = products.filter((product) => {
    return product.artist.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div
      className="absolute top-12 bg-[#EFD5C7] w-full max-h-[200px] z-20 shadow-gray-700 shadow-sm overflow-auto
                [&::-webkit-scrollbar]:h-[15px] 
                [&::-webkit-scrollbar-track]:bg-transparent 
                [&::-webkit-scrollbar-thumb]:bg-[#e5bda8] 
                [&::-webkit-scrollbar-thumb]:rounded-full 
                [&::-webkit-scrollbar-thumb:hover]:bg-[#62483acc]
                "
    >
      {matchedTitle.length === 0 && matchedArtist.length === 0 && (
        <div className="px-2 py-1 hover:bg-gray-300">Not Found...</div>
      )}

      {matchedTitle.map((product) => {
        return (
          <div
            key={`title-${product.id}`}
            onClick={() => onSelect(product.title)}
            className="px-2 py-1 hover:bg-[#d7baa4] cursor-pointer"
          >
            {product.title}
          </div>
        );
      })}

      {matchedArtist.map((product) => {
        return (
          <div
            key={`artist-${product.id}`}
            onClick={() => onSelect(product.artist)}
            className="px-2 py-1 hover:bg-[#d7baa4] cursor-pointer"
          >
            {product.artist}
          </div>
        );
      })}
    </div>
  );
}

export default function SearchBox({ onSelectKeyword }) {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  // HIDE SUGGESTIONS WHEN CLICK OUTSIDE LIST
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={wrapperRef} className="relative w-65 sm:w-80 h-10 bg-gray-400">
      {
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
            setShowSuggestions(true); // show the suggestion list when typing
          }}
          value={searchText}
          type="text"
          placeholder="Search by keyword or artist"
          className="w-full h-full p-4 outline-2 bg-[#EFD5C7]"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSelectKeyword(searchText);  // send keyword to parent
              setShowSuggestions(false);    // close the suggestion list
            }
          }}
        />
      }
      <SearchIcon
        onClick={() => {
          onSelectKeyword(searchText);
          setShowSuggestions(false);
        }}
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
      {searchText && showSuggestions && (
        <ListBox
          keyword={searchText}
          onSelect={(value) => {
            setSearchText(value); // Update input
            onSelectKeyword(value); //Send keyword to set state searchKeyword in AuctionSort
            setShowSuggestions(false);
          }}
        />
      )}
    </div>
  );
}
