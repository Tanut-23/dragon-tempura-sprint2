import React from "react";
import MasonryGallery from "../components/MasonryGallery";
import SearchBox from "../components/SearchBox";
import SortBox from "../components/SortBox";

export default function ShopPage() {
  
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#f2eee7]">
        <div className="w-full max-w-screen-2xl px-12 mx-auto">
          <h1 className="text-4xl font-bold text-red-950 pt-10">
            The Collection
          </h1>
          <div className="w-full h-[1px] bg-[#b5b3ad] my-3" />
          <p className="text-gray-800 text-xl text-pretty">
            Explore thousands of artworks in the museum's collection—from our
            renowned icons to lesser-known works from every corner of the globe
            as well as our books, writings, reference materials, and other
            resources.
          </p>
          <div className="my-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex w-full md:w-auto gap-2">
              <SearchBox />
             
            </div>
          </div>
        </div>
      </div>
      <MasonryGallery />
    </>
  );
}
