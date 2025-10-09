const brands = [
  {
    id: 1,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fclient-1.69519019099ce055c9dcce726a03d0eb.png&w=256&q=75",
    alt: "Slack",
  },
  {
    id: 2,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fclient-2.e08f33f4884d2da44f91affe84b7e43d.png&w=256&q=75",
    alt: "Leoa",
  },
  {
    id: 3,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fclient-3.c238249c8e7ec5fd3bcd669f3fb4c71a.png&w=256&q=75",
    alt: "Oimenu",
  },
  {
    id: 4,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fclient-4.6753b7f2ad0df1050f9e8e1d3679e095.png&w=384&q=75",
    alt: "Subway",
  },
  {
    id: 5,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fclient-5.c91d3cc8c44c0860e09163ddd8acc5ad.png&w=256&q=75",
    alt: "OralUnic",
  },
  {
    id: 6,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fclient-6.3865f200903c80b4f0485408fa267b31.png&w=256&q=75",
    alt: "Visão",
  },
];

const TrustedBrands = () => {
  return (
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-[20px] font-medium text-[#0C1A38] mb-10">
          210,000+ people already use our app on a daily basis
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70">
          {brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.src}
              alt={brand.alt}
              className=" h-[27px] w-[104px] grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
