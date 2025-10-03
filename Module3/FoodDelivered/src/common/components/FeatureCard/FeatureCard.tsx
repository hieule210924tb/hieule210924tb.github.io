import "./FeatureCard.css";

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
    <>
      <h3 className="title ">Available Restaurant Nearby Area</h3>
      <div className="featureCard">
        <div className="containerCard">
          {restaurant.map((item) => (
            <div className="itemCard">
              <img width={"100%"} src={item.imgCard} alt={item.title} />
              <h3>{item.title}</h3>
              <div className="tag">
                {item.tags.map((tag, idx) => (
                  <span key={idx}>{tag} </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="cardBtn">
          Discover More <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
export default FeatureCard;
