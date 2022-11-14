import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "../../data/jobData";

const Job = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 py-10 xl:py-16">
        {jobs.map((job) => {
          return (
            <div class="col-span-1 md:col-span-6 bg-white shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] p-2.5 md:p-10 mb-3 md:mb-5 rounded-[10px]">
              <div class="flex justify-between">
                <div class="">
                  <p class="text-[#AAB3BE] font-poppins font-medium text-xs md:text-sm mb-3 md:mb-5">
                    {job.date}
                  </p>
                  <p class="text-[#314663] font-poppins font-bold text-sm md:text-xl tracking-[-.02em] mb-3 md:mb-5">
                    {job.title}
                  </p>
                  <Link
                    class="text-success font-medium text-sm underline mb-3 md:mb-5"
                    to="#"
                  >
                    {job.viewJob}
                  </Link>
                </div>

                <div>
                  <div class="flex items-center mb-[20px] md:mb-[40px] gap-[7px] md:gap-3">
                    <img
                      class="w-[20px] md:w-[30px] h-[19px] md:h-[30px]"
                      src={job.image}
                      alt=""
                    />
                    <p class="text-[#8490A2] font-medium text-sm md:text-[18px]">
                      {job.address}
                    </p>
                  </div>
                  <p class="bg-success cursor-pointer text-white py-[6px] md:py-[10px] px-[18px] md:px-[41px] rounded-[5px]"> {job.apply}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
