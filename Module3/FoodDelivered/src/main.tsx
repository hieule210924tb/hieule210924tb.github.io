import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeContext from "./Hooks/ThemeConvert/ThemeConvert.tsx";
import { CartProvider } from "./Hooks/CartContext/useCart.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContext>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeContext>
  </StrictMode>
);
