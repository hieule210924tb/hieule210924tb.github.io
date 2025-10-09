import Banner from "../components/Banner/Banner";
import DeliverProducts from "../components/DeliverProducts/DeliverProducts";
import DownloadWrapper from "../components/DownloadWrapper/DownloadWrapper";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import FoodCategories from "../components/FoodCategories/FoodCategories";
import GallerySection from "../components/GalleryImages/GalleryImages";
import Header from "../components/Header/Header";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import QualityFeatures from "../components/QualityFeatures/QualityFeatures";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import TrustedBrands from "../components/TrustedBrands/TrustedBrands";
import DeliverExperience from "../components/DeliveryExperience/DeliveryExperience";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import EnvatoLogo from "../components/EnvatoLogo/EnvatoLogo";
import DemosButton from "../components/DemosButton/DemosButton";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <FeatureCard />
      <FoodCategories />
      <HowItWorks />
      <DeliverProducts />
      <QualityFeatures />
      <TrustedBrands />
      <TestimonialSection />
      <DownloadWrapper />
      <GallerySection />
      <DeliverExperience />
      <CallToAction />
      <Footer />
      <EnvatoLogo />
      <DemosButton />
    </>
  );
};
export default Layout;
