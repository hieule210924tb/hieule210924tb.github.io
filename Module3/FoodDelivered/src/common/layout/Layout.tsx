import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EnvatoLogo from "../components/EnvatoLogo/EnvatoLogo";
import DemosButton from "../components/DemosButton/DemosButton";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <EnvatoLogo />
      <DemosButton />
    </>
  );
};
export default Layout;
