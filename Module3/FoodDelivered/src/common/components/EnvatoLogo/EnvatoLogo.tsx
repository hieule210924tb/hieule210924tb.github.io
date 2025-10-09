import "./EnvatoLogo.css";
const EnvatoLogo = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="p-4 ">
        <img
          src="http://superprops-next.vercel.app/_next/static/image/src/common/assets/image/envato-logo.10f37ae91807af0ff1dfaa0b8b821936.png"
          alt="Envato Logo"
          className="w-[60px] h-[60px] animate-pulseZoom transition-transform duration-300 rounded-full shadow-[0_0_40px_10px_rgba(132,204,22,0.3)]"
        />
      </div>
    </div>
  );
};

export default EnvatoLogo;
