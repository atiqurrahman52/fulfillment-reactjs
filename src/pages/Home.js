import HandleOrder from "../components/home/HandleOrder";
import HeroSection from "../components/home/HeroSection";
import Location from "../components/home/Location";
import Services from "../components/home/Services";
import SummaryOne from "../components/home/SummaryOne";
import WarehouseManage from "../components/home/WarehouseManage";
import AboutUs from "../components/share/AboutUs";
import Brand from "../components/share/Brand";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SummaryOne />
      <Services />
      <HandleOrder />
      <WarehouseManage />
      <AboutUs />
      <Location />
      <Brand />
    </div>
  );
};

export default Home;
