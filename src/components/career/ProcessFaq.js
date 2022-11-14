import { ArrowDown, CaretDown } from "phosphor-react";
import React, { useState } from "react";
import { applicationFaqData } from "../../data/applicationFaqData";
// import { tourItineraryData } from "../../data/tourItinerary/tourItineraryData";
const ProcessFaq = () => {
  const [accordionActive, setAccordionActive] = useState(0);
  return (
    <div class="container">
      <div class="py-1 md:py-1">
        <div class="flex flex-col justify-center items-center mb-10">
          <h3 class="text-primary font-poppins font-bold text-2xl md:text-[40px] text-center tracking-[-.02em] mb-[15px] md:mb-2.5">
            Application Process FAQ
          </h3>
          <p class="text-[#7E8A9B] font-poppins text-sm text-center md:text-base">
            Anything else you want to know about our application process? This
            list of frequently <br />
            asked questions is a good place to start.
          </p>
        </div>

        <div class="grid xl:grid-cols-12 gap-5">
          <div class="col-span-1 md:col-span-8 w-full h-full">
            {applicationFaqData.map(({ id, title, description }) => (
              <div
                key={id}
                onClick={() =>
                  setAccordionActive(id === accordionActive ? "" : id)
                }
                className={` rounded-xl border-2 border-[#EBECED] pt-2.5 ms:pt-[26px] pb-2.5 md:pb-5 px-2.5 md:px-4 mb-2.5 md:mb-4
          
          `}
              >
                <div className="flex items-center justify-between lg:text-xl py-2.5 px-5 cursor-pointer">
                  <p className="text-[#304562] font-poppins font-medium text-base md:text-[18px] leading-7">
                    {title}
                  </p>

                  {/* <CaretDown size={25} */}
                  <ArrowDown
                    size={28}
                    className={`${
                      id === accordionActive
                        ? "rotate-180 transition-all  text-xl md:text-2xl duration-500 text-success"
                        : "text-success"
                    }`}
                  />
                </div>
                {id === accordionActive && (
                  <p
                    key={id}
                    className="bg-white accor-content scale-y- text-[#8895A7] text-sm lg:text-base p-2"
                  >
                    {description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFaq;
