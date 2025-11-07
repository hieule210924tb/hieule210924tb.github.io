import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeContext from "./HookContexts/ThemeConvert/ThemeConvert.tsx";
import { CartProvider } from "./HookContexts/CartContext/useCart.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContext>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeContext>
  </StrictMode>
);
