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
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-blue-700"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-blue-700"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3, // default desktop
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // laptop / large desktop
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // desktop
      { breakpoint: 768, settings: { slidesToShow: 2 } },  // tablet
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // mobile
    ],
  };

  return (
    <div className="relative w-full max-w-[1500px] mx-auto px-2 sm:px-4 md:px-6">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="px-1">
            <div className="w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7]">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md sm:shadow-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
