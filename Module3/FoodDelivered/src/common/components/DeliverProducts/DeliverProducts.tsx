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
    <div className="deliver-products">
      <div className="left">
        <img
          src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fdeliver-products.7c0355b61f59e6781c0be320b4ca896b.png&w=1920&q=75"
          alt="Delivery man on rocket"
        />
      </div>
      <div className="right">
        <h2 className="title">
          We deliver our products as fast as superman can do
        </h2>
        <p className="subtitle">
          Pick one of our stock themes, or create your custom theme with the
          most advanced theme editor on any online survey building tool.
        </p>
        <div className="features">
          {features.map((item) => (
            <div className="feature" key={item.id}>
              <span className="feature-id">{item.id}</span>
              <div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverProducts;
