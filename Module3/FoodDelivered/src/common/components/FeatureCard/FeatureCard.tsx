import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
type Product = {
  id: number;
  title: string;
  images: string;
  tags: string[];
};

function FeatureCard() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  return (
    <div className="featureCard mt-28">
      <div className="max-w-[1170px] mx-auto">
        <h3 className="text-center text-[#0f2137] text-[26px] font-bold  ">
          Available Restaurant Nearby Area
        </h3>
        <div className="featureCardContent">
          <div className="flex flex-wrap">
            {products.slice(0, 6).map((item) => (
              <div className="mt-[35px] w-[calc(100%/3)] py-0 px-[15px]">
                <img
                  width={"100%"}
                  src={item.images[0]}
                  alt={item.tags.join(", ")}
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
