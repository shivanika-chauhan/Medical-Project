import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import products from "./ShopList";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

const ShopByCategory = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [newLaunches, setNewLaunches] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve({ data: products }), 500);
        });
        setShopProducts(
          response.data.filter((p) => p.category === "ShopByCategory")
        );
        setNewLaunches(
          response.data.filter((p) => p.category === "NewLaunches")
        );
        setTrendingProducts(
          response.data.filter((p) => p.category === "Trending")
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // Mobile: 1 image full width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // Mobile
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // Small tablet
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Tablet
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, // Desktop
    ],
  };

  if (loading)
    return <p className="text-center py-10">Loading products...</p>;

  const renderProductCard = (product) => (
    <div key={product.id} className="px-2">
      <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Link to={`/product/${product.id}`} className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl"
          />
        </Link>
        <h3 className="mt-2 text-center text-sm md:text-base font-medium line-clamp-1">
          {product.name}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="w-full pt-7 bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Shop By Category */}
      <div className="relative w-full py-5 px-4 sm:px-6 md:px-8">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700">
          Shop By Category
        </h2>
        <Slider {...settings}>{shopProducts.map(renderProductCard)}</Slider>
      </div>

      {/* New Launches */}
      <div className="relative w-full py-5 px-4 sm:px-6 md:px-8 mt-10">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700">
          New Launches
        </h2>
        <Slider {...settings}>{newLaunches.map(renderProductCard)}</Slider>
      </div>

      {/* Trending Near You */}
      <div className="relative w-full py-5 px-4 sm:px-6 md:px-8 mt-10">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700">
          Trending Near You
        </h2>
        <Slider {...settings}>{trendingProducts.map(renderProductCard)}</Slider>
      </div>
    </div>
  );
};

export default ShopByCategory;
