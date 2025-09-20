import React, { useState, useContext } from "react";
import products from "../components/shop/ShopList";
import { CartContext } from "../context/CartContext";
import Footer from "../components/footer/Footer";

const Medicines = () => {
  const { addToCart } = useContext(CartContext);

  // Get all unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  const [openCategories, setOpenCategories] = useState({});
  const [showAllItems, setShowAllItems] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories({
      ...openCategories,
      [category]: !openCategories[category],
    });
  };

  const toggleShowAll = (category) => {
    setShowAllItems({
      ...showAllItems,
      [category]: !showAllItems[category],
    });
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-200">Medicines</span>{" "}
          <span className="text-green-200">Collection</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto px-4 mb-6">
          Browse our comprehensive range of medicines and health supplements
          carefully curated to support your wellness and daily healthcare needs.
        </p>
        <p className="text-md max-w-3xl mx-auto px-4">
          From essential over-the-counter products to specialized prescriptions,
          our selection ensures quality, reliability, and effectiveness. Take
          control of your health with trusted products for every condition.
        </p>
      </section>

      {/* Categories and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        {categories.map((category) => {
          const categoryItems = products.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
          );
          const isOpen = openCategories[category];
          const isShowAll = showAllItems[category];
          const itemsToShow = isShowAll ? categoryItems : categoryItems.slice(0, 10);

          return (
            <div key={category} className="mb-12 border rounded-lg shadow-sm">
              {/* Category Header */}
              <div
                className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleCategory(category)}
              >
                <h2 className="text-2xl font-semibold capitalize">{category}</h2>
                <span className="text-3xl font-bold">{isOpen ? "−" : "+"}</span>
              </div>

              {/* Category Items */}
              {isOpen && (
                <div className="p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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
                        <h3 className="text-sm sm:text-base m-2 font-semibold text-gray-700 line-clamp-2">
                          {item.name}
                        </h3>
                        <div className="flex justify-between gap-7 border-t-2 p-2 border-gray-500 w-full">
                          <p className="text-green-600 text-sm sm:text-base font-medium">
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

                  {categoryItems.length > 10 && (
                    <div className="mt-4 text-center">
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        onClick={() => toggleShowAll(category)}
                      >
                        {isShowAll ? "Show Less" : "View All"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Info / About Section Above Footer */}
      <section className="bg-white shadow-lg rounded-xl max-w-7xl mx-auto px-6 py-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Why Choose Our Medicines?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-700">
              All products are sourced from certified manufacturers ensuring
              purity and efficacy.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-700">
              Find medicines for various health conditions, from common
              ailments to specialized needs.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Trusted Brands</h3>
            <p className="text-gray-700">
              We feature reputable brands trusted by healthcare professionals
              and customers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Medicines;
