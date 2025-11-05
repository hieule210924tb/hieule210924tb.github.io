import { createContext } from "react";
type Product = {
  id: number;
  title: string;
  images: string[];
  price: number;
  quantity?: number;
};
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
