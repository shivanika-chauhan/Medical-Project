import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import products from "./ShopList";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-800 transition-all"
    onClick={onClick}
  >
    <FaArrowRight size={18} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-800 transition-all"
    onClick={onClick}
  >
    <FaArrowLeft size={18} />
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <p className="text-center py-10">Loading products...</p>;

  const renderProductCard = (product) => (
    <div key={product.id} className="px-2 ">
      <div className="flex flex-col items-center relative bg-white p-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Link to={`/product/${product.id}`} className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-24 sm:h-32 md:h-40 object-contain rounded-xl"
          />
        </Link>
        <h3 className="m-2 text-center text-sm md:text-base font-medium line-clamp-1">
          {product.name}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="w-full pt-7 bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      <div className="relative bg-blue-50 w-full py-5 px-2">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700">
          Shop By Category
        </h2>
        <Slider {...settings}>{shopProducts.map(renderProductCard)}</Slider>
      </div>

      <div className="relative bg-blue-50 w-full py-5 px-2 mt-10">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700">
          New Launches
        </h2>
        <Slider {...settings}>{newLaunches.map(renderProductCard)}</Slider>
      </div>

      <div className="relative bg-blue-50 w-full py-5 px-2 mt-10">
        <h2 className="p-4 text-2xl md:text-3xl font-bold text-gray-700">
          Trending Near You
        </h2>
        <Slider {...settings}>{trendingProducts.map(renderProductCard)}</Slider>
      </div>
    </div>
  );
};

export default ShopByCategory;
