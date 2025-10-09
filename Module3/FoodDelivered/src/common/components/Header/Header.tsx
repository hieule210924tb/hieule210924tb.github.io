import { Button } from "antd";
import "./Header.css";
import React from "react";
function Header() {
  const menu = [
    { id: 1, name: "Home", active: true },
    { id: 2, name: "Restaurants" },
    { id: 3, name: "Features" },
    { id: 4, name: "Testimonials" },
    { id: 5, name: "Download" },
  ];
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
              {menu.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer transition-colors ${
                    item.active
                      ? "text-[#00C9A7]"
                      : "hover:text-[#00C9A7] text-[#0C1A38]"
                  }`}>
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-5">
          <Button
            type="primary"
            className={`!text-gray-900 !shadow-none !bg-transparent !font-semibold hover:!text-[#0C1A38] !transition-all !duration-300 !ease-in-out !px-6 !py-3 !h-auto ${
              scrolled
                ? "hover:!bg-[#00334E] hover:!text-white"
                : "hover:!bg-[#fff]"
            }`}>
            Login Now
          </Button>

          <Button
            type="primary"
            className="!bg-[#00334E] hover:!shadow-none !rounded-full !px-6 !py-3 !h-auto !font-semibold !text-white hover:!text-[#0C1A38] hover:!bg-[#fff] !transition-all !duration-300 !ease-in-out">
            Join Free
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
