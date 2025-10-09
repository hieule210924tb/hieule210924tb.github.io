import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
function FeatureCard() {
  const restaurant = [
    {
      id: 1,
      imgCard:
        "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-1.5923122052b56e99088735cd4577e248.png&w=1080&q=75",
      title: "Pizza Hut Delicious Pizza",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      id: 2,
      imgCard:
        "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-1.5923122052b56e99088735cd4577e248.png&w=1080&q=75",
      title: "Pizza Hut Delicious Pizza",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      id: 3,
      imgCard:
        "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-1.5923122052b56e99088735cd4577e248.png&w=1080&q=75",
      title: "Pizza Hut Delicious Pizza",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      id: 4,
      imgCard:
        "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-1.5923122052b56e99088735cd4577e248.png&w=1080&q=75",
      title: "Pizza Hut Delicious Pizza",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      id: 5,
      imgCard:
        "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-1.5923122052b56e99088735cd4577e248.png&w=1080&q=75",
      title: "Pizza Hut Delicious Pizza",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      id: 6,
      imgCard:
        "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-1.5923122052b56e99088735cd4577e248.png&w=1080&q=75",
      title: "Pizza Hut Delicious Pizza",
      tags: ["American", "Fast Food", "Burgers"],
    },
  ];

  return (
    <div className="featureCard mt-28">
      <div className="max-w-[1170px] mx-auto">
        <h3 className="text-center text-[#0f2137] text-[26px] font-bold  ">
          Available Restaurant Nearby Area
        </h3>
        <div className="featureCardContent">
          <div className="flex flex-wrap">
            {restaurant.map((item) => (
              <div className="mt-[35px] w-[calc(100%/3)] py-0 px-[15px]">
                <img
                  width={"100%"}
                  src={item.imgCard}
                  alt={item.title}
                  className="
                      hover:-translate-y-[3px] 
                      transition-transform 
                      duration-300 
                      ease-in-out
                    "
                />
                <h3
                  className="text-[#0f2137] text-[18px] font-medium mt-5 hover:text-[#2e8dff]
                transition-colors duration-300 ease-in-out">
                  {item.title}
                </h3>
                <div className="text-[#0f2137] text-[16px] hover:text-[#00cc99] transition-colors duration-300 ease-in-out  mt-3">
                  {item.tags.join("  •  ")}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              type="primary"
              className="hover:!bg-[#2abd98] !border-none !text-[16px] !font-bold !shadow-none !px-[29px] !py-[17px] !rounded-[100px] !bg-[#00cc99] !h-auto">
              Discover More <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeatureCard;
