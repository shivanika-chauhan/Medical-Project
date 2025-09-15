import React from "react";

const Tips = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50 ">
      {/* Homepage Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border-t-4 border-blue-500">
          <img src="/images/uu.jpg" alt="Nutrition Tips" className="rounded-xl mb-4" />
          <h2 className="text-xl font-bold text-blue-600 mb-2">Nutrition Tips</h2>
          <p className="text-gray-600">
            Simple ways to eat healthier and boost your energy every day.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border-t-4 border-green-500">
          <img src="/images/pp.jpg" alt="Fitness & Lifestyle" className="rounded-xl mb-4" />
          <h2 className="text-xl font-bold text-green-600 mb-2">Fitness & Lifestyle</h2>
          <p className="text-gray-600">
            Easy exercises, stress relief, and lifestyle hacks for wellness.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border-t-4 border-blue-500">
          <img src="/images/qq.jpg" alt="Health Essentials" className="rounded-xl mb-4" />
          <h2 className="text-xl font-bold text-blue-600 mb-2">Health Essentials</h2>
          <p className="text-gray-600">
            Learn about medicines, supplements, and preventive care tips.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tips;
