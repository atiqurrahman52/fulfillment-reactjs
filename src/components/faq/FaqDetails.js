import React from "react";
import { faqData } from "../../data/faqData";
const FaqDetails = () => {
  return (
    <div className="container">
      {faqData.map((data) => {
        console.log("my data", data);
        return (
          <div
            key={data.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
          >
            <div className="col-span-1 md:col-span-2">
              <p className="font-poppins font-semibold text-[20px] leading-[30px] tracking-[.04em] text-success">
                {data.header}
              </p>
            </div>

            <div className="col-span-1 md:col-span-10">
              <div>
                <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] tracking-[.04em] mb-2.5 md:mb-[15px]">
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit? */}
                  {data.title.title1}
                </h3>
                <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-4 md:mb-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo, j
                </p>
              </div>

              <div>
                <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] mb-2.5 md:mb-[15px] tracking-[.04em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </h3>
                <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-4 md:mb-10">
                  Lorem ipsum
                </p>
              </div>

              <div>
                <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] mb-2.5 md:mb-[15px] tracking-[.04em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </h3>
                <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-4 md:mb-10">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>

              <div>
                <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] mb-2.5 md:mb-[15px] tracking-[.04em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </h3>
                <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-6 md:mb-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo,
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-1 md:col-span-2">
          <p className="font-poppins font-semibold text-[20px] leading-[30px] tracking-[.04em] text-success">
            Shipping
          </p>
        </div>

        <div className="col-span-1 md:col-span-10">
          <div>
            <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] tracking-[.04em] mb-2.5 md:mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </h3>
            <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-4 md:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              justo eu proin lectus enim etiam nisl. Euismod nam dignissim
              penatibus ac egestas consequat. Risus fames faucibus scelerisque
              sollicitudin elit. Egestas vulputate in diam dui a, ipsum a. Nisl
              nam nibh at lobortis quis et. At faucibus tortor commodo feugiat
              quam diam et elementum tellus. Gravida nibh vel mattis est, tortor
              ultrices. Mattis turpis quam tortor ultrices orci purus. Congue
              sit pharetra nulla nunc, risus dolor pulvinar.
            </p>
          </div>

          <div>
            <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] mb-2.5 md:mb-[15px] tracking-[.04em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </h3>
            <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-4 md:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              justo eu proin lectus enim etiam nisl. Euismod nam dignissim
              penatibus ac egestas consequat. Risus fames faucibus scelerisque
              sollicitudin elit. Egestas vulputate in diam dui a, ipsum a.
            </p>
          </div>

          <div>
            <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] mb-2.5 md:mb-[15px] tracking-[.04em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </h3>
            <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-4 md:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              justo eu proin lectus enim etiam nisl. Euismod nam dignissim
              penatibus ac egestas consequat.
            </p>
          </div>

          <div>
            <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] mb-2.5 md:mb-[15px] tracking-[.04em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </h3>
            <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-6 md:mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              justo eu proin lectus enim etiam nisl. Euismod nam dignissim
              penatibus ac egestas consequat. Risus fames faucibus scelerisque
              sollicitudin elit. Egestas vulputate in diam dui a, ipsum a. Nisl
              nam nibh at lobortis quis et.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FaqDetails;
