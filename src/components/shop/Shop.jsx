// src/Pages/Shop.jsx
import React from "react";
import ShopByCategory from "../components/shop/ShopByCategory";

const Shop = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Shop By Category</h2>
      <ShopByCategory />
    </div>
  );
};

export default Shop;
