import React from 'react';
import warehouse from '../../assets/images/home/warehouse.png'
const WarehouseManage = () => {
    return (
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-6">
            <div class="space-y-6 pt-10 gap-6">
              <h3
                class="font-mulish font-extrabold text-primary text-[26px] md:text-[40px] leading-[34px] md:leading-[48px] text-center md:text-left"
              >
                Warehouse managment Software
              </h3>
              <p
                class="font-mulish font-medium text-primary text-sm md:text-base leading-[24px] md:leading-[22px] text-center md:text-justify opacity-[.4]"
              >
                Simple, flexible, proprietary Warehouse Management Software
                gives brands real-time insights into their inventory for
                forecasting, inventory planning and order tracking.
              </p>
            </div>
            <div>
              <img src={warehouse} alt="" />
            </div>
          </div>
        </div>
    );
};

export default WarehouseManage;