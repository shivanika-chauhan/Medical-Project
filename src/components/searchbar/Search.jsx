import React from "react";
import { FaSearch } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[300px]">

      <img
        src="./images/2.jpg"
        alt="Banner"
        className="w-full h-full relative object-cover"
      />

      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold animate-pulse">
          Welcome to My Medical Store
        </h1>

    
        <h2 className="mt-4 text-xl md:text-2xl">
          Your health, Our priority
        </h2>

        {/* Search Bar */}
        <div className="md:flex flex border-2 w-full max-w-xl border-blue-500 shadow-gray-400 hover:shadow-lg bg-white  rounded-full overflow-hidden ">
            <input
              type="text"
              placeholder="Search for medicines, care products..."
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-blue-400 to-blue-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-lg">
              <FaSearch />
            </button>
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
