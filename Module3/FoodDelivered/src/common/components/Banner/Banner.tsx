import { Input, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

function Banner() {
  const apps = [
    {
      id: 1,
      img: "http://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/banner-apple.5ce775b58a124fb65e7f8a99e78b516f.svg",
      title: "App Store",
      sub: "Download on the",
    },
    {
      id: 2,
      img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/banner-google-play.73f254111cd75cacf2283d2191932bd7.svg",
      title: "Google Play",
      sub: "Download on the",
    },
  ];

  return (
    <div className="bg-[#FFF4E0] py-16 px-6 md:px-16">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6 animate-slide-in-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Your favorite food, <br /> delivered your home
          </h2>
          <p className="text-gray-600 text-lg">
            Food, drinks, groceries, and more available for delivery and pickup.
          </p>

          {/* Search box */}
          <div className="flex w-[60%]  max-w-xl overflow-hidden rounded-lg">
            <Input
              size="large"
              placeholder="Enter your address.."
              className="!border-none !bg-white !rounded-l-lg !rounded-r-none 
                   focus:!ring-0 focus:!outline-none 
                   placeholder:text-gray-500 text-base !p-4"
              prefix={
                <img
                  src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/banner-map-pin.45691edbd8c13edba487f06e3157ebbb.svg"
                  alt="map"
                  className="w-5 h-5"
                />
              }
            />
            <Button
              type="primary"
              icon={<RightOutlined />}
              size="large"
              className="!bg-[#0C1A38] !border-none !rounded-r-lg !rounded-l-none 
                   !p-8 hover:!bg-[#112D4E] 
                   flex items-center justify-center transition-all duration-300"
            />
          </div>

          <p className="text-gray-500">Apps Available to download on</p>

          {/* App buttons */}
          <div className="flex flex-wrap gap-4">
            {apps.map((app) => (
              <div
                key={app.id}
                className="flex items-center border border-black !shadow-none rounded-lg p-3.5  hover:shadow-md transition">
                <img
                  src={app.img}
                  alt={app.title}
                  className="w-6 h-6 mr-3 object-contain"
                />
                <div className="leading-tight">
                  <span className="text-xs text-gray-500 block">{app.sub}</span>
                  <p className="font-semibold text-gray-800">{app.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end animate-slide-in-right">
          <img
            src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fbanner-1.8bbc07b6c9e491eec1addaedabfe37d0.png&w=1920&q=75"
            alt="delivery"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
