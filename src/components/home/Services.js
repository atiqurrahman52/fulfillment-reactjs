// import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

import service from "../../assets/images/home/our-service.png";
import plus from "../../assets/images/home/plus.svg";
import minus from "../../assets/images/home/minus.svg";

// data
import { servicesData } from "../../data/services";

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="container py-10 xl:py-16">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 xl:col-span-1">
          <img
            src={service}
            alt=""
            className="max-h-[592px] w-full hidden xl:block"
          />
          <p className="px-6 py-9 bg-success text-white font-semibold rounded-[10px] xl:hidden">
            Our service
          </p>
        </div>
        <div className="col-span-4 xl:col-span-3 grid xl:grid-cols-3 gap-4 xl:gap-6">
          {servicesData.map(({ id, header, description }) => {
            return (
              <div
                key={id}
                onClick={() => setActive(active === id ? "" : id)}
                className={`relative px-4 xl:px-6 py-3 xl:py-10 rounded-[10px] xl:rounded-[20px] flex items-center cursor-pointer ${
                  active === id
                    ? "bg-[#EFF0F1]"
                    : "bg-white shadow-[0px_4px_28px_0px_rgba(0,0,0,0.1)]"
                }`}
              >
                <div>
                  <h3 className="text-primary text-sm xl:text-2xl font-bold">
                    {header}
                  </h3>
                  {active === id && (
                    <p className="text-primary/40 text-sm mt-4">
                      {description}
                    </p>
                  )}
                </div>
                <div
                  className={`absolute ${
                    active === id
                      ? "-top-2 right-4"
                      : "top-1/2 -translate-y-1/2 xl:translate-y-0 right-4"
                  } xl:-top-5 xl:right-6`}
                >
                  <img
                    src={active === id ? minus : plus}
                    alt=""
                    className="h-7 xl:h-10 w-7 xl:w-10"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
