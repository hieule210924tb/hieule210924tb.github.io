const TestimonialSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0C1A38] mb-6">
            What people say about us
          </h2>

          <blockquote className="text-gray-600 italic text-lg leading-relaxed mb-8 relative">
            <img
              className="absolute top-[38px] left-[-48px]"
              src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/testimonials-qoute-1-1.437534f2d6b9eecd3764cb5943c89048.svg"
              alt=""
            />
            <p className="pr-28 pt-10 leading-10">
              OMG! I cannot believe that I have got a brand new landing page
              after getting this template. We are able to use our most used
              e-commerce template with modern and trending design.
            </p>
          </blockquote>

          <div className="flex items-center gap-4">
            <img
              src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/testimonials-1-1.a46129816eea4b42aa181a7c7367bab9.png"
              alt="Mariana Dickey"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-[#0C1A38] font-semibold">Mariana Dickey</h4>
              <p className="text-gray-500 text-sm">UI Designer</p>
            </div>

            <div className="flex items-center gap-2 opacity-40 ml-8">
              <img
                src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/testimonials-1-2.a8abc0eb4dbeae235506629e6221c4b6.png"
                alt="Jonathan Taylor"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-medium text-gray-500">Jonathan Taylor</h4>
                <p className="text-sm text-gray-400">CEO at Creativex</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-2 mt-8">
            <span className="w-3 h-3 bg-gray-400 rounded-full opacity-50"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full opacity-30"></span>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Ftestimonials-block-image.5deafa2d07467f69c263c954881e93fd.png&w=1920&q=75"
            alt="Testimonials Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
