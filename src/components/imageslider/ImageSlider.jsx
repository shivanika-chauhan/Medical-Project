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
    className="absolute top-1/2 right-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-blue-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowRight size={24} />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-blue-700 shadow-lg"
    onClick={onClick}
  >
    <FaArrowLeft size={24} />
  </div>
);

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="relative w-full max-w-[1500px] mx-auto h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
