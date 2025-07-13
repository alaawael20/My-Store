import React from "react";
import TopBar from "../../components/topBar/TopBar.jsx";
import NavbarHeader from "../../components/navBar/NavbarHeader.jsx";
import PromoCarousel from "../../components/promoCarousel/PromoCarousel.jsx";
import CategoriesSection from "./sections/categoriesSection/CategoriesSection.jsx";
import TabbedCategoryProducts from "./sections/tabbedCategoryProducts/TabbedCategoryProducts.jsx";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <NavbarHeader />
      <PromoCarousel />
      <CategoriesSection />
      <TabbedCategoryProducts />
    </div>
  );
};

export default HomePage;
