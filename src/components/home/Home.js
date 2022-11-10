import React from "react";
import Aboutus from "./Aboutus";
import Brand from "./Brand";
import CountUp from "./Countup";
import HandleOrder from "./HandleOrder";
import HeroSection from "./HeroSection";
import WarehouseManage from "./WarehouseManage";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CountUp />
      <HandleOrder />
      <WarehouseManage />
      <Aboutus />
      <Brand />
    </div>
  );
};

export default Home;
