import React, { useEffect, useState } from "react";
import { CartContext } from "./cartContext";
type Product = {
  id: number;
  title: string;
  images: string[];
  price: number;
  quantity?: number;
};
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });
  console.log(cart.length);
  // Lưu vào localStorage  khi giỏ hàng thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product: Product) => {
    setCart((prev: Product[]) => {
      const exits = prev.find((item) => item.id === product.id);
      if (exits) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCart((prev: Product[]) => prev.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
