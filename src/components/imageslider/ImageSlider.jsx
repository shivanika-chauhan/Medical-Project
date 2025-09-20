import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
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

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full cursor-pointer z-10 hover:bg-blue-700 shadow-md sm:shadow-lg hidden sm:flex"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full cursor-pointer z-10 hover:bg-blue-700 shadow-md sm:shadow-lg hidden sm:flex"
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
    slidesToShow: 3, // desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // mobile
    ],
  };

  return (
    <div className="relative w-full max-w-[1500px] mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-1 sm:px-2">
            <div className="w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7]">
              <img
                src={img}
                alt={`slide-${index}`}
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
