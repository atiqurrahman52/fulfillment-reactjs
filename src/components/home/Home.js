import React from "react";
import Aboutus from "./AboutUs";
import Brand from "./Brand";
import HandleOrder from "./HandleOrder";
import HeroSection from "./HeroSection";
import Location from "./Location";
import WarehouseManage from "./WarehouseManage";
import SummaryOne from "./SummaryOne";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SummaryOne />
      <Services />
      <HandleOrder />
      <WarehouseManage />
      <Aboutus />
      <Location />
      <Brand />
    </div>
  );
};

export default Home;
