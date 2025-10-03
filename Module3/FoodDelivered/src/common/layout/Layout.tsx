import Banner from "../components/Banner/Banner";
import DeliverProducts from "../components/DeliverProducts/DeliverProducts";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import FoodCategories from "../components/FoodCategories/FoodCategories";
import Header from "../components/Header/Header";
import HowItWorks from "../components/HowItWorks/HowItWorks";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <FeatureCard />
      <FoodCategories />
      <HowItWorks />
      <DeliverProducts />
    </>
  );
};
export default Layout;
