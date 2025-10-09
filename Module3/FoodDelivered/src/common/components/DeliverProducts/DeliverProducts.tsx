import "./DeliverProducts.css";
const features = [
  {
    id: "01",
    title: "Easy to use application",
    desc: "We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.",
  },
  {
    id: "02",
    title: "Deliver Food within 30 min",
    desc: "We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.",
  },
  {
    id: "03",
    title: "100% Reliable with Privacy",
    desc: "We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.",
  },
];

const DeliverProducts = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] mx-auto my-[80px] gap-[40px] flex-wrap md:flex-nowrap">
      <div className="left">
        <img
          src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fdeliver-products.7c0355b61f59e6781c0be320b4ca896b.png&w=1920&q=75"
          alt="Delivery man on rocket"
          className="w-[500px] max-w-full animate-float"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-[28px] font-bold text-[#0d1c2e] mb-[16px]">
          We deliver our products as fast as superman can do
        </h2>

        <p className="text-[16px] text-[#555] mb-[30px] leading-[1.6]">
          Pick one of our stock themes, or create your custom theme with the
          most advanced theme editor on any online survey building tool.
        </p>

        <div className="flex flex-col gap-[20px]">
          {features.map((item) => (
            <div key={item.id} className="flex items-center gap-[20px]">
              <span className="text-5xl font-light text-[#e2e8f0] leading-none">
                {item.id}
              </span>
              <div>
                <h3 className="text-[18px] font-semibold mb-[6px]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#555]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverProducts;
