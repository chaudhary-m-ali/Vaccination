import React from "react";
import { Input } from "@/components/ui/input";
const Result = () => {
  return (
    <div className=" Results px-7 lg:px-17.5 rounded-[20px] mt-10 ">
      <div className="group-30  bg-[#C4C4C4]/10 rounded-[20px]  grid gap-5">
        <div className="bg-[#C4C4C4]/5 px-20 py-5 max-sm:px-2 max-sm:text-center">
          <h3 className="text-[24px] font-bold text-white max-sm:text-[10px] ">
            Check your COVID-19 result on our Database
          </h3>
        </div>
        <div className="flex gap-5 items-center px-20 max-lg:flex-col max-lg:items-start max-sm:px-2 ">
          <Input
            type="email"
            placeholder="Okeowo"
            className="border-3  outline-none focus:border-[#17C2EC]! "
          />
          <Input
            type="email"
            placeholder="NIK Number"
            className="border-3 outline-none focus:border-[#17C2EC]!"
          />
          <button className="px-[25px] py-5 rounded-[20px] text-[#17C2EC] border-3 border-[#17C2EC] outline-none font-bold text-[24px] cursor-pointer max-sm:py-2 max-sm:text-[14px] max-sm:rounded-[10px] ">
            Check
          </button>
        </div>
        <div className="px-17.5 max-sm:px-2">
          <p className="text-[#17C2EC] font-bold text-center py-5 bg-[#C4C4C4]/5 rounded-[20px] mb-6 max-sm:text-[10px]  ">
            Need a certificate for your COVID-19 result? Please click here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
