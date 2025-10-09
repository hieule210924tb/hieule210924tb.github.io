const galleryImages = [
  {
    id: 1,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fgallery-1.01c2cf6546f90e94b7fe9c4432727a64.png&w=640&q=75",
    alt: "Delivery biker",
  },
  {
    id: 2,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fgallery-2.84024d0bbf61783bbc36e3c7e561b940.png&w=640&q=75",
    alt: "Restaurant card",
  },
  {
    id: 3,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fgallery-3.a82169b612f176f38001f5f5e3ecb584.png&w=640&q=75",
    alt: "Backpack delivery",
  },
  {
    id: 4,
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fgallery-4.898e082d8e7f434a0782b007a7e678f1.png&w=640&q=75",
    alt: "Online food app",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-white py-20 mt-15">
      <div className=" w-[1170px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-2xl shadow-sm ${
                item.id % 2 === 0 ? "mt-[30px]" : "mb-[30px]"
              }`}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
