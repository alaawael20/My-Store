import React from "react";
import PromoCarousel from "../../components/promoCarousel/PromoCarousel.jsx";
import CategoriesSection from "./sections/categoriesSection/CategoriesSection.jsx";
import TabbedCategoryProducts from "./sections/tabbedCategoryProducts/TabbedCategoryProducts.jsx";
import TestimonialsTicker from "./sections/testimonialsTicker/TestimonialsTicker.jsx";
import Newsletter from "./sections/newsletter/Newsletter.jsx";

const HomePage = () => {
  return (
    <div>
      <PromoCarousel />
      <CategoriesSection />
      <TabbedCategoryProducts />
      <TestimonialsTicker />
      <Newsletter />
    </div>
  );
};

export default HomePage;
