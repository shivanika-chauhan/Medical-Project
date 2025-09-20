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

const renderProductCard = (product) => (
  <div key={product.id} className="px-2">
    <div className="flex flex-col items-center relative bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      <Link to={`/product/${product.id}`} className="w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 sm:h-40 md:h-48 object-contain rounded-xl" 
        />
      </Link>
      <h3 className="mt-2 text-center text-sm sm:text-base font-medium truncate w-full">
        {product.name}
      </h3>
    </div>
  </div>
);
