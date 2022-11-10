import React from "react";
import {Check, check} from "phosphor-react";
import about from "../../assets/images/about/about.png";

const Aboutus = () => {
  return (
    <div class="container">
      {/* <div
          class="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-10 xl:gap-28 left-w-[calc(50% - 1920px/2)]"
        > */}
      {/* <div class="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-10 xl:gap-28 left-w-[calc(50% - 1920px/2)]"> */}
      <div class="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-10 xl:gap-28">
        <div class="">
          
          <img
            class="h-[288px] md:h-[380px] xl:pl-36"
            src={about}
            alt=""
          />
        </div>
        <div class="space-y-6">
          <div class="font-mulish text-primary text-center md:text-left font-extrabold text-[26px] md:text-[40px] leading-[34px] md:leading-[48px]">
            <h3>It’s your business, we take the plight</h3>
          </div>
          <div class="font-poppins font-normal text-primary text-sm md:text-base leading-[24px] text-center md:text-justify opacity-[.4]">
            <p>
              Built on the latest e-commerce fulfillment logistics, IT-enabled
              operations, and state-of-the-art infrastructure, KX Fulfillment
              aims to transform your business into something more
              cost-effective, secure, customer-oriented, and sustainable. As a
              strategic logistics partner, KX Fulfillment employs tech-based
              sophisticated warehousing, inventory, and order processing
              facilities to ensure that you save your precious time while we are
              doing the day job for you!
            </p>
          </div>

          <div class="flex gap-5">
          <Check class="ph-check text-white bg-[#3B2D60] w-5 h-5 flex items-center justify-center rounded-full" size={28} />
            <h6 class="font-poppins font-semibold text-primary text-base leading-[24px] text-center">
              IT-enabled Warehouse
            </h6>
          </div>
          <div class="flex gap-5">
          <Check class="ph-check text-white bg-[#3B2D60] w-5 h-5 flex items-center justify-center rounded-full" size={28} />
            <h6 class="font-poppins font-semibold text-primary text-base leading-[24px] text-center">
              IT-enabled Warehouse
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
