import React, { useState, useContext } from "react";
import products from "../components/shop/ShopList";
import { CartContext } from "../context/CartContext";
import Footer from "../components/footer/Footer";

const HealthCareDevices = () => {
  const { addToCart } = useContext(CartContext);

  // Filter products by HealthCare category
  const healthCareItems = products.filter(
    (p) => p.category.toLowerCase() === "healthcare"
  );

  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? healthCareItems : healthCareItems.slice(0, 10);

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-3">HealthCare Devices</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Explore high-quality healthcare devices designed to monitor and maintain your health effectively.
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
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {healthCareItems.length > 10 && (
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

      {/* About Section Above Footer */}
      <section className="bg-white shadow-lg rounded-xl max-w-7xl mx-auto px-6 py-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About HealthCare Devices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
            <p className="text-gray-700">
              Our devices use the latest technology to provide accurate readings and help maintain your health effectively.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Safe & Reliable</h3>
            <p className="text-gray-700">
              Trusted brands and high-quality standards ensure safety and reliability for your daily health monitoring.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Range</h3>
            <p className="text-gray-700">
              From blood pressure monitors to thermometers, our wide selection supports various healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HealthCareDevices;
