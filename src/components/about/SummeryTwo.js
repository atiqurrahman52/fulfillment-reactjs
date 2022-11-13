import React from "react";
import CountUp from "react-countup";
const SummeryTwo = () => {
  return (
    <div className="count-bg bg-cover bg-center  object-cover bg-no-repeat py-10 xl:h-[390px]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center xl:p-20 gap-5">
          <div className="text-center ">
            <CountUp
              className="font-poppins font-semibold text-2xl md:text-4xl  leading-9 md:leading-[54px] text-[#293E5A]"
              end={4500}
            />
            <span className="count font-poppins font-semibold text-2xl md:text-4xl xl:text-5xl leading-9 text-[#293E5A]">
              +
            </span>

            <p className="font-semibold font-poppins text-sm  leading-[18px] md:leading-[21px] text-success">
              Total Orders Processed
            </p>
          </div>
          <div className="text-center">
            <CountUp
              className="font-poppins font-semibold text-2xl md:text-4xl leading-9 md:leading-[54px] text-[#293E5A]"
              end={3200}
            />
            <span className="count font-poppins font-semibold text-2xl md:text-4xl  leading-9 text-[#293E5A]">
              +
            </span>

            <p className="font-semibold font-poppins text-sm leading-[18px] md:leading-[21px] text-success">
              Total Orders Shipped
            </p>
          </div>
          <div className="text-center">
            <CountUp
              className="font-poppins font-semibold text-2xl md:text-4xl  leading-9 md:leading-[54px] text-[#293E5A]"
              end={4000}
            />
            <span className="count font-poppins font-semibold text-2xl md:text-4xl  leading-9 text-[#293E5A]">
              +
            </span>

            <p className="font-semibold font-poppins text-sm leading-[18px] md:leading-[21px] text-success">
              Registered Merchants
            </p>
          </div>
          <div className="text-center">
            <CountUp
              className="font-poppins font-semibold text-2xl md:text-4xl  leading-9 md:leading-[54px] text-[#293E5A]"
              end={100}
            />
            <span className="count font-poppins font-semibold text-2xl md:text-4xl  leading-9 text-[#293E5A]">
              %
            </span>

            <p className="font-semibold font-poppins text-sm leading-[18px] md:leading-[21px] text-success">
              Total Return Ratio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummeryTwo;
