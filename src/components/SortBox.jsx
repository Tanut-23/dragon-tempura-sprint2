import { React, useEffect, useState } from "react";
// import products from "../../data/mockUpProduct";
import SearchBox from "../components/SearchBox";
import MasonryGallery from "../components/MasonryGallery";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SortBox() {
  const [sortState, setSortState] = useState("AZ");
  const [searchKeyword, setSearchKeyword] = useState("");

  const location = useLocation();
  const [genre , setGenre] = useState();
  const [products, setProducts] = useState([]);

  const sortMethods = {
    none: { method: () => 0 },
    AZ: { method: (a, b) => a.title.localeCompare(b.title) },
    ZA: { method: (a, b) => b.title.localeCompare(a.title) },
    HL: { method: (a, b) => b.price - a.price },
    LH: { method: (a, b) => a.price - b.price },
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const genreParam = params.get("genre");
    setGenre(genreParam);
  },[location.search]);

  useEffect(() => {
    if(!genre) return
    const fetchProducts = async () => {
      try{
        const res = await axios.get(`http://localhost:3000/api/products?genre=${genre}`,)
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
     }
    fetchProducts();
  },[genre])

  

  // FILTER BY KEYWORD (SEARCH)
  const searchedProducts = products.filter(product => {
    const keyword = searchKeyword.toLowerCase();
    return (
      product.title.toLowerCase().includes(keyword) ||
      product.artist.toLowerCase().includes(keyword)
    )
  })


  const selectData = [...searchedProducts].sort((sortMethods[sortState]).method);
  console.log(selectData);
  return (
    <div className='flex flex-col gap-[16px] w-full'>
    <div className='flex justify-between'>
      <SearchBox onSelectKeyword = {(keyword) => setSearchKeyword(keyword)} />
      <select defaultValue={'AZ'} onChange={(e) => setSortState(e.target.value)} className="bg-[#EFD5C7] w-[200px] h-[43px] my-auto border-2">
        {/* <option value="none" disabled>None</option> */}
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="HL">Price: high to low</option>
        <option value="LH">Price: low to high</option>
      </select>
    </div>
    <MasonryGallery products={selectData}/>
    </div>
  );
}
export default SortBox;
