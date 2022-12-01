const Position = () => {
  const options = [
    {
      label: "Dhaka",
      value: "dhaka",
    },
    {
      label: "New York",
      value: "newyork",
    },
    {
      label: "Sydney",
      value: "sydney",
    },
    {
      label: "Berlin",
      value: "berlin ",
    },
    {
      label: "Dublin",
      value: "dublin",
    },
  ];

  return (
    <div className="container">
      <div>
        <h1 class="text-primary font-poppins font-bold text-2xl md:text-[40px] text-center md:mb-[60px] mb-10">
          Open Positions
        </h1>
        <div class="grid md:grid-cols-10 md:gap-4 max-w-5xl mx-auto">
          <div className="md:col-span-5 lg:col-span-6">
            <div className="grid md:grid-cols-6 gap-4">
              <select
                value="dhaka"
                class="md:col-span-2 text-[#A5ADB9] bg-[#F7F7F7] rounded-[10px] px-4 py-3"
              >
                {options.map((option, i) => (
                  <option
                    key={i}
                    value={option.value}
                    class="text-[#A5ADB9] font-poppins font-medium text-sm md:text-base"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                class="md:col-span-4 bg-[#F7F7F7] font-medium rounded-[10px] px-4 py-3"
                type="text"
                placeholder="Work type"
              />
            </div>
          </div>

          <div class="md:col-span-5 lg:col-span-4 mt-10 md:mt-0">
            <div className="md:flex items-center gap-4 space-y-1">
              <p class="text-sm xl:text-base w-full bg-success py-3 rounded-[10px] max-w-[200px] mx-auto font-poppins font-medium uppercase text-white text-center">
                Search
              </p>
              <p class="text-sm xl:text-base text-[#BEBEBE] font-poppins font-medium uppercase text-center">
                OR
              </p>
              <p class="text-sm xl:text-base w-full bg-[#3B2D60] py-3 rounded-[10px] max-w-[200px] mx-auto font-poppins font-medium uppercase text-white text-center ">
                View all jobs
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Position;
