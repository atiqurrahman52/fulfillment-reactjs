import React from "react";
import CountUp from "react-countup";
const SummeryOne = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 py-0 md:py-10 gap-[26px] md:gap-[120px]">
          <div className="text-center">
            <CountUp
              className="font-poppins font-semibold text-2 xl md:text-4xl leading-9 md:leading-[54px] text-success"
              end={4500}
            />
            <span className="count font-poppins font-semibold text-2 xl md:text-4xl leading-9 text-success">
              +
            </span>

            <p className="font-semibold font-poppins text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#182A4433]/20 to-[#3C527133]/20">
              Total Orders Processed
            </p>
          </div>
          <div className="text-center">
            <CountUp
              className="font-poppins font-semibold text-2 xl md:text-4xl leading-9 md:leading-[54px] text-success"
              end={3200}
            />
            <span className="count font-poppins font-semibold text-2 xl md:text-4xl leading-9 text-success">
              +
            </span>

            <p className="font-semibold font-poppins text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#182A4433]/20 to-[#3C527133]/20">
              Total Orders Shipped
            </p>
          </div>
          <div className="text-center">
            <CountUp
              className="font-poppins font-semibold text-2 xl md:text-4xl leading-9 md:leading-[54px] text-success"
              end={4000}
            />
            <span className="count font-poppins font-semibold text-2 xl md:text-4xl leading-9 text-success">
              +
            </span>

            <p className="font-semibold font-poppins text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#182A4433]/20 to-[#3C527133]/20">
              Registered Merchants
            </p>
          </div>
          <div className="text-center">
            <CountUp
              className="font-poppins font-semibold text-2 xl md:text-4xl leading-9 md:leading-[54px] text-success"
              end={100}
            />
            <span className="count font-poppins font-semibold text-2 xl md:text-4xl leading-9 text-success">
              %
            </span>

            <p className="font-semibold font-poppins text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#182A4433]/20 to-[#3C527133]/20">
              Total Return Ratio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummeryOne;
