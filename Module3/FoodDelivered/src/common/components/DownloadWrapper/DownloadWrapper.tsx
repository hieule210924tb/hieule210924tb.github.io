const DownloadWrapper = () => {
  const apps = [
    {
      id: 1,
      img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/app-store.37f4a32c5558ce7de096c62de1fd0eb4.svg",
      title: "App Store",
      sub: "Download on the",
    },
    {
      id: 2,
      img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/play-store.059ce730c53c6deca2a10f6994301f7c.svg",
      title: "Google Play",
      sub: "Download on the",
    },
  ];
  return (
    <section className="bg-white">
      <div className="w-[1170px] mx-auto flex justify-between">
        <div className="lg:w-1/2">
          <img
            width={570}
            height={539}
            src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fdownload-app.8c714306d1dff293bc166b591164dc65.png&w=1920&q=75"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 pt-[100px] pl-[60px]">
          <h2 className="text-[#0f2137] text-[34px] mb-5 text-4xl font-bold leading-snug">
            Connecting our user with iOS & Android apps. Download from iTune &
            Play store
          </h2>
          <p className="text-[#0f2137] text-base leading-loose max-w-lg">
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We’re
            driven beyond just finishing the projects. We want to find solutions
            using our website & apps.
          </p>
          <div className="flex flex-wrap mt-6 gap-4">
            {apps.map((app) => (
              <div
                key={app.id}
                className="flex items-center bg-[#081c27] border border-black !shadow-none rounded-lg p-3.5  hover:shadow-md transition">
                <img
                  src={app.img}
                  alt={app.title}
                  className="w-6 h-6 mr-3 object-contain"
                />
                <div className="leading-tight ">
                  <span className="text-xs text-[13px] text-white block opacity-80">
                    {app.sub}
                  </span>
                  <p className="font-medium leading-tight text-white">
                    {app.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadWrapper;
