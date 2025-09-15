import React, { useState, useContext } from "react";
import products from "../components/shop/ShopList";
import { CartContext } from "../context/CartContext";
import Footer from "../components/footer/Footer";

const VitaminsSupplements = () => {
  const { addToCart } = useContext(CartContext);

  // Filter only Vitamins category (case-insensitive)
  const vitaminItems = products.filter(
    (p) => p.category.toLowerCase() === "vitamins"
  );

  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? vitaminItems : vitaminItems.slice(0, 10);

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-3">Vitamins & Supplements</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Boost your immunity and overall wellness with top-quality vitamins and
          supplements carefully curated for a healthier lifestyle.
        </p>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {itemsToShow.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-auto mb-3 object-contain"
                loading="lazy"
              />
              <h2 className="text-sm m-2 sm:text-base font-semibold text-gray-700 line-clamp-2">
                {item.name}
              </h2>
              <div className="flex justify-between gap-7 border-t-2 p-2 border-gray-300 w-full">
                <p className="text-green-600 text-sm sm:text-base mt-1 font-medium">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition shadow-md"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {vitaminItems.length > 10 && (
          <div className="mt-8 text-center">
            <button
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md transition"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </section>

      {/* About Vitamins & Supplements */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            About Vitamins & Supplements
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vitamins and supplements are essential for maintaining a strong
            immune system, improving energy levels, and supporting your body’s
            daily functions. From essential nutrients to specialized dietary
            supplements, they help fill nutritional gaps in your diet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Regular intake of supplements can improve bone health, heart
            function, brain activity, and overall well-being. Choose from a wide
            range of multivitamins, minerals, protein powders, and herbal
            supplements for your health goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re an athlete, a busy professional, or someone who wants
            to maintain overall wellness, these products are designed to support
            your lifestyle effectively and safely.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VitaminsSupplements;
