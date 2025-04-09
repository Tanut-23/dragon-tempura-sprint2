import React from 'react'

function OldShop() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#f2eee7]">
          <div className="w-11/12">
            <h1 className="text-4xl font-bold text-red-950 pt-10">
              The Collection
            </h1>
          </div>
          <div className="!w-full h-[1px] bg-[#b5b3ad] my-3" />
          <div className="w-11/12">
            <p className="text-gray-800 text-xl text-pretty">
              Explore thousands of artworks in the museum's collection—from our
              renowned icons to lesser-known works from every corner of the
              globe as well as our books, writings, reference materials, and
              other resources.
            </p>
            <div className="my-6 flex flex-col md:flex-row items-center">
              <div className="md:w-full">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search by keyword, artist, or reference"
                    className="bg-[#efd5c7] w-full px-4 py-2 border-2 border-red-950 border-r-0"
                  />
                  <button className="bg-[#efd5c7] px-4 py-2 border-2 border-red-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  {/* pc */}
                  <div className="hidden md:block">
                    <div className="flex justify-center items-center border-2 border-red-950 border-l-0 border-r-0">
                      <span className="text-gray-600 px-8 bg-[#f2eee7] w-32 h-10 pt-2">
                        Sort By
                      </span>
                    </div>
                  </div>
                  <select className="hidden md:block py-1 px-2 bg-[#f2eee7] border-2 border-red-950 border-l-0 font-semibold">
                    <option selected="">Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="md:hidden">
            <div className="flex justify-center items-center">
              <span className="text-gray-600 px-8 bg-[#f2eee7] w-32 h-10 ">
                Sort By
              </span>
            </div>
          </div>
          <select className="md:hidden py-1 px-2 mb-8 bg-[#f2eee7] border-2 border-red-950 font-semibold">
            <option selected="">Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
    </>
  )
}

export default OldShop