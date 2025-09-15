import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash, FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10 bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8">
        <FaShoppingCart className="text-green-600 text-3xl" />
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">🛒 Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between border rounded-xl p-4 shadow-md bg-white hover:shadow-lg transition"
            >
              {/* Left: Image + Name */}
              <div className="flex items-center gap-4 w-full sm:w-2/5 mb-4 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-contain rounded-lg border p-2 bg-gray-50"
                />
                <div className="flex flex-col truncate">
                  <h2 className="text-lg font-semibold text-gray-800 truncate w-40">
                    {item.name}
                  </h2>
                  <p className="text-green-700 font-medium">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* Middle: Quantity Controls */}
              <div className="flex items-center gap-3 w-full sm:w-1/5 justify-center mb-4 sm:mb-0">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="h-9 w-9 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                >
                  <FaMinus />
                </button>
                <span className="h-9 w-12 flex items-center justify-center border rounded-lg font-semibold text-gray-800 bg-gray-50">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="h-9 w-9 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Right: Total Price + Delete */}
              <div className="flex items-center gap-6 w-full sm:w-1/3 justify-between sm:justify-end">
                <p className="text-lg font-semibold text-gray-800 min-w-[80px] text-right">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Grand Total & Checkout */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t pt-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Total:{" "}
              <span className="text-green-700">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </h2>
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-green-700 transition w-full sm:w-auto text-center">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
