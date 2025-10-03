import { Button } from "antd/es/radio";
// import "./Header.css";

function Header() {
  const menu = [
    {
      id: 1,
      name: "Menu",
    },
    {
      id: 2,
      name: "Restaurants",
    },
    {
      id: 3,
      name: "Testimonials",
    },
    {
      id: 4,
      name: "Download",
    },
  ];
  return (
    <header className="bg-[#FFF7E8]">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <img
            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/logo-dark.e4df4459f508ae9796fa8db9a5a723f6.png"
            alt="Logo"
            className="h-8 w-auto"
          />
          {/* Menu */}
          <nav>
            <ul className="flex space-x-6 text-gray-800 font-medium">
              {menu.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-[#13cf9e] cursor-pointer transition-colors">
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 space-x-4">
          <Button
            type="text"
            className="!text-gray-900 hover:!bg-[#00334e] !font-semibold hover:!text-white !bg-transparent !py-0 !px-[17px] !h-auto">
            Login Now
          </Button>
          {/* Join Free */}
          <Button className="!bg-[#0C1A38] !text-white  !px-6  hover:!text-[#00334e] rounded-[10px] hover:!bg-white !border-none !font-semibold">
            Join Free
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
