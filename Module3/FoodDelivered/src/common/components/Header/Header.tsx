import { Button } from "antd";

function Header() {
  const menu = [
    { id: 1, name: "Home", active: true },
    { id: 2, name: "Restaurants" },
    { id: 3, name: "Features" },
    { id: 4, name: "Testimonials" },
    { id: 5, name: "Download" },
  ];

  return (
    <header className="bg-[#FFF4E0]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-5 px-6">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/logo-dark.e4df4459f508ae9796fa8db9a5a723f6.png"
              alt="React Next Logo"
              className="h-7 w-auto"
            />
            <span className="text-lg font-semibold text-gray-900">
              React Next
            </span>
          </div>

          {/* Menu */}
          <nav>
            <ul className="flex items-center gap-8 text-[16px] font-medium text-[#0C1A38]">
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
            className="!text-gray-900 !shadow-none !bg-[#FFF4E0]  hover:!bg-[#fff] !font-semibold hover:!text-[#0C1A38] !transition-all !duration-300 !ease-in-out  !px-6 !py-3 !h-auto">
            Login Now
          </Button>
          <Button
            type="primary"
            className="!bg-[#00334E] !rounded-full !px-6 !py-3 !h-auto !font-semibold !text-white hover:!text-[#0C1A38] hover:!bg-[#fff] !transition-all !duration-300 !ease-in-out">
            Join Free
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
