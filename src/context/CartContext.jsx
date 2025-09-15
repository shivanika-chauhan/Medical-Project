import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart (agar same item hai to qty badhao)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0) // agar qty 0 ho gayi to hata do
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQty, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
