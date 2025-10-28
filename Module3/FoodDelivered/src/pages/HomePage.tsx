import React from "react";
import Banner from "../common/components/Banner/Banner";
import FeatureCard from "../common/components/FeatureCard/FeatureCard";
import FoodCategories from "../common/components/FoodCategories/FoodCategories";
import HowItWorks from "../common/components/HowItWorks/HowItWorks";
import DeliverProducts from "../common/components/DeliverProducts/DeliverProducts";
import QualityFeatures from "../common/components/QualityFeatures/QualityFeatures";
import TrustedBrands from "../common/components/TrustedBrands/TrustedBrands";
import TestimonialSection from "../common/components/TestimonialSection/TestimonialSection";
import DownloadWrapper from "../common/components/DownloadWrapper/DownloadWrapper";
import GallerySection from "../common/components/GalleryImages/GalleryImages";
import DeliveryExperience from "../common/components/DeliveryExperience/DeliveryExperience";
import CallToAction from "../common/components/CallToAction/CallToAction";

const HomePage = () => {
  return (
    <>
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
      <DeliveryExperience />
      <CallToAction />
    </>
  );
};

export default HomePage;
