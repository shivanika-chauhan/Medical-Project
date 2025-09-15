// ShopByCategorySlider.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "./ShopList";

// 🔹 Custom Next Button
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-800 transition-all"
    onClick={onClick}
  >
    <FaArrowRight size={18} />
  </div>
);

// 🔹 Custom Prev Button
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-800 transition-all"
    onClick={onClick}
  >
    <FaArrowLeft size={18} />
  </div>
);

const ShopByCategorySlider = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [newLaunches, setNewLaunches] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve({ data: productsData }), 500);
        });

        setShopProducts(response.data.filter((p) => p.category === "ShopByCategory"));
        setNewLaunches(response.data.filter((p) => p.category === "NewLaunches"));
        setTrendingProducts(response.data.filter((p) => p.category === "Trending"));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // 🔹 Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // Small tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (loading) return <p className="text-center py-10">Loading products...</p>;

  return (
    <div className="w-full pt-10">
      {/* 🔹 Shop By Category */}
      <div className="relative bg-blue-50 w-full py-5 px-2">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700 text-center">
          Shop By Category
        </h2>
        <Slider {...settings}>
          {shopProducts.map((product) => (
            <div key={product.id} className="px-2">
              <div className="flex flex-col items-center group relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-md"
                />
                <h3 className="mt-2 text-center text-sm md:text-base font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 🔹 New Launches */}
      <div className="relative bg-green-50 w-full py-5 px-2 mt-10">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700 text-center">
          New Launches
        </h2>
        <Slider {...settings}>
          {newLaunches.map((product) => (
            <div key={product.id} className="px-2">
              <div className="flex flex-col items-center group relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-md"
                />
                <h3 className="mt-2 text-center text-sm md:text-base font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 🔹 Trending */}
      <div className="relative bg-yellow-50 w-full py-5 px-2 mt-10">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700 text-center">
          Trending
        </h2>
        <Slider {...settings}>
          {trendingProducts.map((product) => (
            <div key={product.id} className="px-2">
              <div className="flex flex-col items-center group relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-md"
                />
                <h3 className="mt-2 text-center text-sm md:text-base font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByCategorySlider;
