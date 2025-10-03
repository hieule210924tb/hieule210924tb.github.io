import { Button } from "antd/es/radio";
import "./Header.css";

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
    <div className="header">
      <div className="container">
        <div className="header_content">
          <img
            className="header-img"
            src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/logo-dark.e4df4459f508ae9796fa8db9a5a723f6.png"
            alt=""
          />
          <div className="header-menu">
            {menu.map((item) => (
              <ul key={item.id}>
                <li>{item.name}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="header-btn">
          <Button className="mb-5 hover:!bg-amber-400 text-black">
            Login Now
          </Button>
          {/* <Button>Join Free</Button> */}
          {/* <button className="bg-amber-300">Login Now</button> */}
          <button className="p-2  bg-amber-300">Join Free</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
