import React from 'react';

const Position = () => {
    return (
        <div className='container'>
             <div>
              <h1
                class="text-primary font-poppins font-bold text-2xl md:text-[40px] text-center md:mb-[60px] mb-10"
              >
                Open Positions
              </h1>
              <div class="flex flex-col md:flex-row mx-auto lg:w-max">
                <div
                  class="bg-[#F7F7F7] rounded-[10px] flex items-center py-2.5 px-4 gap-[179px] md:gap-[47px] w-[300px] md:w-[179px] h-[44px] md:mr-10 mb-[15px] md:mb-0"
                >
                  <p
                    class="text-[#A5ADB9] font-poppins font-medium text-sm md:text-base"
                  >
                    Locations
                  </p>

                  <i class="ph-caret-down w-[6px] h-3 text-[#626262]"></i>
                </div>

                <div class="">
                  <input
                    class="bg-[#F7F7F7] rounded-[10px] flex items-center py-2.5 px-4 gap-[179px] md:gap-[47px] md:mr-16 mb-10 md:mb-0 w-[300px] md:w-[400px] h-[44px]"
                    type="text"
                    placeholder="Work type"
                  />
                </div>

                <div class="flex flex-col items-center md:flex-row space-x-6">
                  <p
                    class="bg-success py-[11px] px-[30px] rounded-[10px] font-poppins font-medium uppercase text-base text-white text-center mx-auto"
                  >
                    Search
                  </p>
                  <p
                    class="text-[#BEBEBE] font-poppins font-medium text-base uppercase text-center top-[50%] left-[50%] translate-[-50%, -50%]"
                  >
                    OR
                  </p>
                  <p
                    class="bg-primary py-[11px] px-[30px] rounded-[10px] font-poppins font-medium uppercase text-base text-white text-center mx-auto"
                  >
                    View all jobs
                  </p>
                </div>
              </div>
            </div>

            <div class="py-10 md:py-20">
              <div
                class="grid grid-cols-12 bg-white shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] rounded-[20px] py-5 md:py-[41px] px-2 md:px-[62px]"
              >
                <div class="col-span-12 md:col-span-7 md:pr-[144px]">
                  <h1
                    class="font-poppins font-semibold text-2xl text-primary mb-6 md:mb-[27px] text-center md:text-left"
                  >
                    Head of Marketing
                  </h1>
                  <p
                    class="font-poppins text-sm md:text-base text-[#828EA0] mb-6 md:mb-[51px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet enim eu, eget vitae lacus. Lacinia eros rutrum ut
                    nam integer interdum. Volutpat sit cursus sit ultricies
                    ornare adipiscing ut rhoncus. Sodales amet morbi lectus
                    massa non est. Id mauris morbi nisi, nunc lectus quam
                    euismod viverra egestas. Duis gravida a eu aliquam rhoncus
                    diam. At arcu nisl eget turpis nisl egestas enim. Ac tellus
                    mauris, fermentum elit pellentesque. Facilisi enim quam
                    rhoncus dolor ac mauris ultricies sit. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquet enim eu, eget
                    vitae lacus. Lacinia eros rutrum ut nam integer interdum.
                    Volutpat sit cursus sit ultricies ornare adipiscing ut
                    rhoncus. Sodales amet morbi lectus massa non est. Id mauris
                    morbi nisi, nunc lectus quam euismod viverra egestas. Duis
                    gravida a eu aliquam rhoncus diam. At arcu nisl eget turpis
                    nisl egestas enim. Ac tellus mauris, fermentum elit
                    pellentesque. Facilisi enim quam rhoncus dolor ac mauris
                    ultricies sit.
                  </p>
                  <p
                    class="bg-success hidden md:block py-2.5 px-[41px] rounded-[5px] w-[168px] h-[42px] text-white flex justify-center items-center md:mx-0 mx-auto"
                  >
                    Apply Now
                  </p>
                </div>
                <div class="col-span-12 md:col-span-5">
                  <div class="flex items-center gap-2 mb-6">
                    <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
                    <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div class="flex items-center gap-2 mb-6">
                    <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
                    <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div class="flex items-center gap-2 mb-6">
                    <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
                    <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div class="flex items-center gap-2 mb-6">
                    <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
                    <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div class="flex items-center gap-2 mb-6">
                    <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
                    <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <p
                    class="bg-success md:hidden block text-center py-2.5 px-[41px] rounded-[5px] w-[168px] h-[42px] text-white text-center md:mx-0 mx-auto"
                  >
                    Apply Now
                  </p>
                </div>
              </div>
            </div>

        </div>
    );
};

export default Position;