import "./Banner.css";

function Banner() {
  const apps = [
    {
      id: 1,
      img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/banner-apple.5ce775b58a124fb65e7f8a99e78b516f.svg",
      title: "App store",
    },
    {
      id: 2,
      img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/banner-google-play.73f254111cd75cacf2283d2191932bd7.svg",
      title: "Google Play",
    },
  ];

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner_left">
            <h2 className="banner_left-title">
              Your favorite food, delivered your home
            </h2>
            <p className="banner_left-text">
              Food, drinks, groceries, and more available for delivery and
              pickup.
            </p>
            <form action="" className="banner_form">
              <img
                src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/banner-map-pin.45691edbd8c13edba487f06e3157ebbb.svg"
                alt=""
              />
              <input type="text" placeholder="Enter your address ..." />
              <button className="banner_left-btn">
                <img
                  src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/banner-arrow.fbe5a6dae433433932267f3ff128c936.svg"
                  alt=""
                />
              </button>
            </form>
            <p className="banner_tag">Apps Available to download on</p>

            <div className="banner_left-wrap">
              {apps.map((app) => (
                <div className="banner_left-app" key={app.id}>
                  <img src={app.img} alt={app.title} />
                  <div className="banner_left-content">
                    <span>Download on the</span>
                    <p>{app.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="banner_right">
            <img
              src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fbanner-1.8bbc07b6c9e491eec1addaedabfe37d0.png&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
