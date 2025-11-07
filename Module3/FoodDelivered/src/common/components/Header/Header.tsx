import { Button } from "antd";
import {
  SunOutlined,
  ShoppingCartOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import "./Header.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { menuData } from "./menuData";
import { ThemeContext } from "../../../HookContexts/ThemeConvert/ThemeContext";
import { CartContext } from "../../../HookContexts/CartContext/cartContext";
function Header() {
  //theme
  const ThemeDark = useContext(ThemeContext);
  const { theme, setTheme } = ThemeDark;
  //cart
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("cartContext must be used within a CartProvider");
  }
  const { cart } = cartContext;
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-[#FFF4E0]  fixed w-full top-0 z-50 ${
        scrolled ? "bg-white" : ""
      } `}>
      <div className="max-w-[1170px] mx-auto flex items-center justify-between py-4 ">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/logo-dark.e4df4459f508ae9796fa8db9a5a723f6.png"
              alt="React Next Logo"
              className="h-7 w-auto"
            />
          </div>

          {/* Menu */}
          <nav>
            <ul className="flex items-center gap-8 text-[14px] font-medium text-[#0C1A38]">
              {menuData.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path as string}
                    className={({ isActive }) =>
                      `cursor-pointer transition-colors ${
                        isActive
                          ? "text-[#00C9A7]"
                          : "hover:text-[#00C9A7] text-[#0C1A38]"
                      }`
                    }>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Right: Buttons */}
        <div className="flex items-center gap-5">
          <Button
            type="text"
            icon={theme === "dark" ? <MoonOutlined /> : <SunOutlined />}
            onClick={toggleTheme}>
            {theme === "dark" ? "Chế độ tối" : "Chế độ sáng"}
          </Button>
          <NavLink to="/cart">
            <Button
              type="text"
              icon={<ShoppingCartOutlined />}
              size="large"
              className="cart">
              {cart.length > 0 && (
                <span className="absolute -top-1 left-5 bg-red-500 text-white text-xs font-semibold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button
              type="primary"
              className={`!text-gray-900 !shadow-none !bg-transparent !font-semibold hover:!text-[#0C1A38] !transition-all !duration-300 !ease-in-out !px-6 !py-3 !h-auto ${
                scrolled
                  ? "hover:!bg-[#00334E] hover:!text-white"
                  : "hover:!bg-[#fff]"
              }`}>
              Login Now
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              type="primary"
              className="!bg-[#00334E] hover:!shadow-none !rounded-full !px-6 !py-3 !h-auto !font-semibold !text-white hover:!text-[#0C1A38] hover:!bg-[#fff] !transition-all !duration-300 !ease-in-out">
              Join Free
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
