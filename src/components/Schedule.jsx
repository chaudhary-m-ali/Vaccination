import React from "react";
import Group_5 from "../assets/Group5.svg";
import Group_6 from "../assets/Group6.svg";
import Group_7 from "../assets/Group7.svg";
import Group_9 from "../assets/Group9.svg";
const Schedule = () => {
  return (
    <div className="grid gap-2.5  px-5  lg:px-17.5 ">
      <div className="flex gap-5 items-center">
        <img src={Group_5} alt="" />
        <p className="text-white font-bold text-[24px] max-sm:text-[14px]">
          Schedule your Vaccination
        </p>
      </div>
      <div className="grid  bg-[#C4C4C4]/5 justify-between p-10 max-lg:mt-10 px-8 rounded-[20px] place-items-center ">
        <div>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-20 max-sm:grid-cols-1">
            <div className=" flex gap-5 items-center justify-center">
              <img src={Group_6} alt="" />
              <div>
                <p className="text-white/50 text-[24px] max-lg:text-[20px] font-semibold max-sm:text-[14px] ">
                  Location
                </p>
                <p className="text-white text-[24px] max-lg:text-[20px] font-bold max-sm:text-[14px]">
                  Ikeja Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <img src={Group_7} alt="" />
              <div>
                <p className="text-white/50  text-[24px] font-semibold max-lg:text-[20px] max-sm:text-[14px]">
                  Date
                </p>
                <p className="text-white text-[24px] font-bold max-lg:text-[20px] max-sm:text-[14px]">
                  29 February, 2022
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <img src={Group_9} alt="" />
              <div>
                <p className="text-white/50  text-[24px] font-semibold max-lg:text-[20px] max-sm:text-[14px]">
                  Vaccine Type
                </p>
                <p className="text-white text-[24px] font-bold max-lg:text-[20px] max-sm:text-[14px]">
                  Mordena
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <button className="text-[24px] text-white rounded-[20px] bg-[#17C2EC] px-6.25 py-5 cursor-pointer max-sm:text-[14px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
