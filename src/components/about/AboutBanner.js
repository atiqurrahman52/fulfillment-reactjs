import React from "react";

const AboutBanner = () => {
  return (
    <div className="about-bg bg-center bg-no-repeat bg-cover w-full h-[220px] xl:h-[820px] ">
      <div className="bg-gradient-to-r from-[#182A4499]/60 to-[#152740]/100 opacity-90 h-full w-full py-[54px] md:py-[182px]">
        <h3 className="font-poppins font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[64px] xl:leading-[96px] text-white  flex justify-center items-center text-center mt-5">
          Our business is to help <br></br>
          you succeed in your <br></br>
          business!
        </h3>
      </div>
    </div>
  );
};

export default AboutBanner;
