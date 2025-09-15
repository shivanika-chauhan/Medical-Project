import React from "react";

const Deliver = () => {
  const stats = [
    {
      img: "./images/family.svg",
      title: "51 Million+",
      desc: "Registered users as of Aug 18, 2025",
    },
    {
      img: "./images/deliveryBoy.svg",
      title: "2.5 Million+",
      desc: "Orders delivered every month",
    },
    {
      img: "./images/pincodeServed.svg",
      title: "18,500+",
      desc: "Pincodes served across India",
    },
    {
      img: "./images/locationMarker.svg",
      title: "1000+",
      desc: "Cities with active delivery",
    },
  ];

  return (
    <div className="m-6 sm:m-10 lg:m-16 p-6 sm:p-10 bg-blue-100 rounded-xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left">
        Why Choose Us?
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img src={item.img} alt="stat" className="w-16 h-16 sm:w-20 sm:h-20" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-green-700">{item.title}</h2>
              <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deliver;
