import { Card, Row, Col } from "antd";

const features = [
  {
    id: 1,
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/feature-icon-1.97184e6bfaec9328776553973894fdad.svg",
    title: "Analytics Business",
    desc: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 2,
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/feature-icon-2.550e13cc4bb589459d04e954d4d0797d.svg",
    title: "Wide Coverage Map",
    desc: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 3,
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/feature-icon-3.6c919c3d62b2dec60919fba179d20449.svg",
    title: "Artificial Intelligence",
    desc: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 4,
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/feature-icon-4.123488f722aa63b6b92bce877a69a021.svg",
    title: "Largest People",
    desc: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 5,
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/feature-icon-6.dbf03c7fe2de6564b3cae658ed1cbabb.svg",
    title: "Trusted & Secure",
    desc: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
  {
    id: 6,
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/feature-icon-4.123488f722aa63b6b92bce877a69a021.svg",
    title: "Mobile Apps",
    desc: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
  },
];

const QualityFeatures = () => {
  return (
    <div className="bg-[url('https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/feature-bg.6767e2557cf6917b9b37efb8b5b25c45.png')]  no-repeat right top / cover py-20">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-[28px] font-bold text-[#0f2137] mb-10">
          Meet our Quality Features
        </h2>

        <Row gutter={[32, 32]} justify="center">
          {features.map((item) => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <Card
                bordered={false}
                className="!bg-transparent !shadow-none text-center hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center">
                  <img src={item.img} alt={item.title} className="" />
                  <h3 className="font-bold text-[16px] text-[#0f2137] my-4">
                    {item.title}
                  </h3>
                  <p className="text-[#343d48] text-[16px] leading-[1.87] p-2">
                    {item.desc}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default QualityFeatures;
