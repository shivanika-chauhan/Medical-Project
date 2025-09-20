import React, { useState, useContext } from "react";
import products from "../components/shop/ShopList";
import { CartContext } from "../context/CartContext";
import Footer from "../components/footer/Footer";

const HealthCondition = () => {
  const { addToCart } = useContext(CartContext);

  // Filter products by HealthCondition category
  const healthItems = products.filter(
    (p) => p.category.toLowerCase() === "healthcondition"
  );

  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? healthItems : healthItems.slice(0, 10);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-3">Health Condition</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore a wide range of products designed for specific health needs and conditions.
        </p>
      </section>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
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

        {healthItems.length > 10 && (
          <div className="mt-8 text-center">
            <button
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md transition"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>

      {/* About Section Above Footer */}
      <section className="bg-white shadow-lg rounded-xl max-w-7xl mx-auto px-6 py-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About Health Condition Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Targeted Solutions</h3>
            <p className="text-gray-700">
              Our products are designed to support specific health conditions, ensuring effective care for your needs.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Safe & Reliable</h3>
            <p className="text-gray-700">
              Sourced from trusted manufacturers, all items meet high safety and quality standards.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Selection</h3>
            <p className="text-gray-700">
              A wide variety of products to support overall health and manage specific conditions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HealthCondition;
