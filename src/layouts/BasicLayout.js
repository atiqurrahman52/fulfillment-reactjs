import { Outlet } from "react-router-dom";

import Footer from "../components/navigation/Footer";
import NavBar from "../components/navigation/Navbar";

const BasicLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BasicLayout;
