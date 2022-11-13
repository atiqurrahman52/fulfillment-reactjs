import React from "react";
import Aboutus from "./Aboutus";
import Brand from "./Brand";
import HandleOrder from "./HandleOrder";
import HeroSection from "./HeroSection";
import Location from "./Location";
import WarehouseManage from "./WarehouseManage";
import SummeryOne from "./SummeryOne";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SummeryOne />
      <HandleOrder />
      <WarehouseManage />
      <Aboutus />
      <Location />
      <Brand />
    </div>
  );
};

export default Home;
