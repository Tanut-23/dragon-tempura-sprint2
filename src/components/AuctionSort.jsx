import { React, useState } from "react";
// import products from "../../data/mockUpProduct";
import products from "../../data/products";
import SearchBox from "../components/SearchBox";
import AuctionGallery from "../components/AuctionGallery";


function AuctionSort() {
  const [sortState, setSortState] = useState("AZ");

  const sortMethods = {
    none: { method: () => 0 },
    AZ: { method: (a, b) => a.title.localeCompare(b.title) },
    ZA: { method: (a, b) => b.title.localeCompare(a.title) },
    HL: { method: (a, b) => b.price - a.price },
    LH: { method: (a, b) => a.price - b.price },
  };
  const selectData = [...products].sort((sortMethods[sortState]).method);
  console.log(selectData);
  return (
    <div className='flex flex-col gap-[16px] w-full'>
    <div className='flex justify-between'>
      <SearchBox />
      <select defaultValue={'AZ'} onChange={(e) => setSortState(e.target.value)} className="bg-[#EFD5C7] w-[200px] h-[43px] my-auto border-2">
        {/* <option value="none" disabled>None</option> */}
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="HL">Price: high to low</option>
        <option value="LH">Price: low to high</option>
      </select>
    </div>
      <AuctionGallery products={selectData}/>
    </div>
  );
}
export default AuctionSort;
