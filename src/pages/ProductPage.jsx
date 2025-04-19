import React from "react";

function ProductPage() {
  return (
    <>
      <main>
        <div className="px-4 py-6 bg-[#f2eee7]">
          <div className="text-sm mb-6 text-[#b89b85]">
            <ol className="flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="mx-2">/</li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li className="mx-2">/</li>
              <li>
                <a href="#">type</a>
              </li>
              <li className="mx-2">/</li>
              <li className="">Item's name</li>
            </ol>
          </div>
          {/* Product display */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product image */}
            <div className="md:w-1/2">
              <div className="shadow-md shadow-gray-700 overflow-hidden ">
                <img
                  src="productPicture/Portrait-Painting-Classic-Art-4.jpg"
                  alt="The Wanderer's Gaze"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Product details */}
            <div className="pr-8 md:w-1/2">
              <h1 className="text-3xl font-semibold text-[#5c3c2e] mb-1">
                The Wanderer's Gaze
              </h1>
              <p className="mb-6">By Marcus Aurelius</p>
              <p className="text-2xl font-semibold mb-8">$2,9500.00</p>
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-3">Description</h2>
                <p className="leading-relaxed text-justify">
                  This oil painting portrays a man with flowing hair and a
                  pensive expression, illuminated by dramatic lighting that
                  contrasts golden highlights against deep shadows. His upward
                  gaze suggests contemplation or longing, evoking a sense of
                  mystery and introspection. The bold brushstrokes and rich
                  hues—predominantly reds, yellows, and dark blues—convey raw
                  emotion and depth, blending classical portraiture with an
                  impressionistic touch. The figure's timeless appearance
                  invites viewers to interpret his story: Is he a philosopher, a
                  traveler, or a figure from a distant era? This piece captures
                  the intersection of light and thought, leaving a lasting
                  impression of both strength and vulnerability.
                </p>
              </div>
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-3">Edition Details</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Dimensions:</span> 45cm x
                    22cm x 8cm
                  </p>
                  <p>
                    <span className="font-semibold">Artist:</span> Dragon
                    Tempula
                  </p>
                  <p>
                    <span className="font-semibold">Material:</span> Linin
                  </p>
                  <p>
                    <span className="font-semibold">Year:</span> 1998
                  </p>
                </div>
              </div>
              <button className="w-full bg-[#e9e2d6] py-3 px-4 rounded hover:bg-[#f6f4f1]">
                Add to Cart
              </button>
              <div className="mt-6">
                <h2 className="text-lg font-medium mb-3">Tags</h2>
                <div className="flex gap-2 ">
                  <span className="bg-[#d4c8b6] px-3 py-1 rounded-md text-sm">
                    Classic
                  </span>
                  <span className="bg-[#d4c8b6] px-3 py-1 rounded-md text-sm">
                    Portrait
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductPage;
