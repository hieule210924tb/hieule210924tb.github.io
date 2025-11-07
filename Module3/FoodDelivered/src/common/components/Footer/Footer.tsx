import { useContext } from "react";
import { ThemeContext } from "../../../HookContexts/ThemeConvert/ThemeContext";

const Footer = () => {
  const ThemeDark = useContext(ThemeContext);
  const { theme } = ThemeDark;
  return (
    <footer className="flex items-center justify-between flex-wrap mt-[40px] py-7 w-[1170px] mx-auto">
      <div className="flex items-center gap-2 space-x-3">
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/logo-dark.e4df4459f508ae9796fa8db9a5a723f6.png"
          alt="logo"
          className="h-8"
        />
        <p
          className={`${
            theme === "dark" ? "text-[#fff] " : "text-[#0f2137] "
          } text-[15px]`}>
          Copyright © 2025{"  "}
          <a
            href="https://redq.io"
            className={`${
              theme === "dark" ? "text-[#fff] " : "text-blue-600 "
            } border-b ml-1 border-[#2e8dff]`}
            target="_blank"
            rel="noopener noreferrer">
            RedQ, Inc.
          </a>
        </p>
      </div>

      <ul
        className={`flex space-x-8 ${
          theme === "dark" ? "text-[#fff] " : "text-[#0f2137]"
        }  text-[15px]`}>
        <li className="hover:text-blue-600 cursor-pointer">Support</li>
        <li className="hover:text-blue-600 cursor-pointer">About Us</li>
        <li className="hover:text-blue-600 cursor-pointer">Privacy</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center space-x-3 text-[#0f2137]">
        <span className={`${theme === "dark" ? "text-[#fff] " : ""}`}>
          Social:
        </span>
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/footer-fb.cbc6aa152e77cb09a30fbf0df743faad.svg"
          alt="facebook"
        />
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/footer-twitter.629dd02bf1f27421d67fc830e20cf440.svg"
          alt="twitter"
        />
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/footer-dribbble.a33b9dc0b44891fb4c691684ce91062b.svg"
          alt="dribbble"
        />
      </div>
    </footer>
  );
};

export default Footer;
