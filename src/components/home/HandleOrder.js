import React from 'react';
import handleOrder from '../../assets/images/home/handle_order.png'
const HandleOrder = () => {
    return (
        <div class="container">
        <div
          class="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-10 md:gap-[26px]"
        >
          {/* <div class="gap-2.5 md:gap-6 p-0"> */}
          <div class="">
            
            <img
              class="w-full  md:h-full"
              src={handleOrder}
              alt=""
            />
          </div>
          <div class="space-y-5 pt-10 gap-6">
            <p
              class="font-mulish font-extrabold text-primary text-[26px] md:text-[40px] leading-[34px] md:leading-[48px] text-center md:text-left"
            >
              Let us handle order fulfillment, so you can focus on building
              your Brand.
            </p>
            <p
              class="font-mulish font-medium text-primary text-sm md:text-base leading-6 text-center md:text-left opacity-[.4]"
            >
              Fulfyld is an ecommerce fulfillment focused 3PL company, meaning
              we handle everything from storage, to picking, packing and
              shipping your ecommerce orders. We integrate seamlessly with all
              major eCommerce software and shopping cart platforms. Plus, we
              are friendly, professional, and extremely efficient. All of our
              customers get a dedicated account manager to make their
              fulfillment for ecommerce a breeze.
            </p>
          </div>
        </div>
      </div>
    );
};

export default HandleOrder;