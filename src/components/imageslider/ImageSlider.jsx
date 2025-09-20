import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images array
const images = [
  "/images/aa.jpg",
  "/images/bb.jpg",
  "/images/cc.jpg",
  "/images/dd.jpg",
  "/images/b.jpg",
  "/images/c.jpg",
  "/images/d.jpg",
  "/images/f.jpg",
  "/images/i.jpg",
  "/images/j.jpg",
  "/images/k.jpg",
  "/images/l.jpg",
  "/images/m.jpg",
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute top-1/2 right-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute top-1/2 left-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-20 hover:bg-blue-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowLeft size={24} />
  </div>
);

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // Mobile: 1 slide full-screen
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // Mobile
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablet
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Desktop
      { breakpoint: 1536, settings: { slidesToShow: 4 } }, // Large Desktop
    ],
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-0 sm:px-2">
            <div className="w-full h-screen">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
