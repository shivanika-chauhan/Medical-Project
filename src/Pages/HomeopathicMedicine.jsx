import React, { useState, useContext } from "react";
import products from "../components/shop/ShopList";
import { CartContext } from "../context/CartContext";
import Footer from "../components/footer/Footer";

const HomeopathicMedicine = () => {
  const { addToCart } = useContext(CartContext);

  // Filter only Homeopathic category (case-insensitive)
  const homeopathicItems = products.filter(
    (p) => p.category.toLowerCase() === "homeopethic"
  );

  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? homeopathicItems : homeopathicItems.slice(0, 10);

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-3">Homeopathic Medicines</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Explore natural and holistic remedies for various health conditions,
          trusted by practitioners for safe and effective healing.
        </p>
      </section>

     
      {/* Medicines Grid */}
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
        {homeopathicItems.length > 10 && (
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
       {/* About Homeopathic Medicines */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            About Homeopathic Medicines
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Homeopathy is a holistic approach to healthcare that uses natural
            ingredients in small doses to stimulate the body’s own healing
            process. It is based on the principle of “like cures like,” where a
            substance that causes symptoms in a healthy person can help cure
            similar symptoms in a sick person.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Homeopathic medicines are safe, gentle, and suitable for all age
            groups. They are widely used to manage conditions such as allergies,
            digestive problems, respiratory issues, and stress-related ailments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're looking for a natural solution or an alternative
            therapy, homeopathy offers effective remedies that promote overall
            health and wellness without harmful side effects.
          </p>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeopathicMedicine;
