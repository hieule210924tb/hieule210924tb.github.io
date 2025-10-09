import { ArrowRightOutlined } from "@ant-design/icons";
const steps = [
  {
    id: "01",
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fhow-works-1.e3786cbe8e1412328379fbcdf12461eb.png&w=640&q=75",
    title: "Become a Delivery Man",
    desc: "As a delivery driver, you'll make reliable money—working anytime, anywhere.",
    link: "Start Earning",
  },
  {
    id: "02",
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fhow-works-2.84405c280834a1d7c966672045696a03.png&w=640&q=75",
    title: "Become a Partner",
    desc: "Grow your business and reach new customers by partnering with us.",
    link: "Sign up your store",
  },
  {
    id: "03",
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fhow-works-3.bb212f3d20d801168c1d4090b345aa45.png&w=640&q=75",
    title: "Try Android/iOS App",
    desc: "Get the best DoorDash experience with live order tracking.",
    link: "Get the app",
  },
];

const HowItWorks = () => {
  return (
    <div className="text-center mx-auto my-[60px] max-w-[1100px]">
      <h2 className="text-[24px] font-bold mb-[40px] text-[#0d1c2e]">
        Let's see how it works
      </h2>

      <div className="flex justify-around flex-wrap gap-[30px]">
        {steps.map((step, index) => (
          <div key={index} className="max-w-[300px]">
            <div className="relative inline-block mb-[20px]">
              <span className="absolute -top-[10px] -left-[-8px] -z-1 bg-[#00cc99] text-white font-bold py-[12px] px-[16px] rounded-[50%]">
                {step.id}
              </span>
              <img
                src={step.img}
                alt={step.title}
                className="w-[200px] h-auto"
              />
            </div>

            <h3 className="text-[18px] font-bold mb-[10px]">{step.title}</h3>
            <p className="text-[#555]  leading-7 text-[14px] mb-[10px]">
              {step.desc}
            </p>
            <a
              href="#"
              className="text-[#007bff] text-[14px] font-semibold no-underline">
              {step.link} <ArrowRightOutlined />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
