import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const CallToAction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#fff9f0] rounded-[40px] px-10 py-16 max-w-6xl mt-20 mx-auto position-relative">
      <div className="max-w-lg text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] leading-snug">
          Your order knocking on <br /> the door. Please receive
        </h2>
        <p className="text-[#343d48] text-base leading-relaxed">
          Pick one of our stock themes, or create your custom theme
          <br /> with the most advanced theme editor on any online.
        </p>

        <Button
          type="primary"
          className="hover:!bg-[#2abd98] !border-none !text-[16px] !font-bold !shadow-none !px-[29px] !py-[17px] !rounded-[100px] !bg-[#00cc99] !h-auto">
          Order More <ArrowRightOutlined />
        </Button>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/call-to-action-1.124aeb383f0f57c0263b8a5cec78b5ba.png"
          alt="Delivery"
          className="mix-blend-multiply position-absolute mt-[-145px]"
        />
      </div>
    </div>
  );
};

export default CallToAction;
