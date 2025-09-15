// src/Pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../components/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Cart Items</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
