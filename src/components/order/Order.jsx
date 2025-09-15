import React from 'react';
import { MdOutlineWifiCalling3, MdOutlineUploadFile } from "react-icons/md";

const Order = () => {
  const handleUpload = () => {
    alert("Upload feature coming soon!");
  };

  return (
    <div className="py-5 px-4 md:px-0">
      <h4 className="text-gray-500 text-center text-lg md:text-xl font-semibold">
        PLACE YOUR ORDER VIA
      </h4>

      {/* Call & Upload Buttons */}
      <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4">
        <a
          href="tel:9999999999"
          className="flex items-center gap-3 text-gray-600 font-semibold px-5 py-4 text-lg sm:text-xl rounded-lg w-full sm:w-[500px] bg-blue-100 border-2 hover:shadow-md transition hover:border-blue-500"
        >
          <MdOutlineWifiCalling3 className="text-blue-700 text-4xl bg-white p-1 rounded-lg" />
          Call to place order
        </a>

        <button
          onClick={handleUpload}
          className="flex items-center gap-3 text-gray-600 font-semibold px-5 py-4 text-lg sm:text-xl rounded-lg w-full sm:w-[500px] bg-blue-100 border-2 hover:shadow-md transition hover:border-blue-500"
        >
          <MdOutlineUploadFile className="text-blue-700 text-4xl bg-white p-1 rounded-lg" />
          Upload your order
        </button>
      </div>

      {/* Card Section */}
      <div className="pt-12 flex justify-center">
        <div className="border-2  border-gray-300 rounded-xl  p-4 flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-7xl">
          
          {/* Image */}
          <div className="w-full md:w-[200px] flex-shrink-0">
            <img
              src="./images/11.jpg"
              alt="Order example"
              className="w-full  object-contain rounded-lg"
            />
          </div>

          {/* Text and Features */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Title with Learn More on right */}
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600 text-lg md:text-xl">
                Substitutes are the smarter choice
              </h1>
              <span className="text-blue-500 font-semibold cursor-pointer text-sm md:text-base">
                Learn more
              </span>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-3 border-b sm:border-b-0 sm:border-r-2 border-gray-400 pr-4 pb-4 sm:pb-0">
                <img src="./images/4.png" alt="Safe" className="w-10 h-10" />
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold">Safe</h3>
                  <h4 className="text-sm sm:text-base">
                    FDA and GMP <br />certified medicines
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b sm:border-b-0 sm:border-r-2 border-gray-400 pr-4 pb-4 sm:pb-0">
                <img src="./images/8.jpg" alt="Same" className="w-16 h-16" />
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold">Same</h3>
                  <h4 className="text-sm sm:text-base">
                    Exact same <br />salt composition
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3 pr-4">
                <img src="./images/9.jpg" alt="Savings" className="w-16 h-16" />
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold">Savings</h3>
                  <h4 className="text-sm sm:text-base">Up to 50% cheaper</h4>
                </div>
              </div>
            </div>

            {/* Highlight Box */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
