import { Outlet } from "react-router-dom";
import TopBar from "../components/topBar/TopBar";
import NavbarHeader from "../components/navBar/NavbarHeader";
import Footer from "../components/footer/Footer";

const SiteLayout = () => {
  return (
    <>
      <TopBar />
      <NavbarHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteLayout;
