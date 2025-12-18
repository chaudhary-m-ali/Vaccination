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
        <p className="text-white font-bold text-[24px]">
          Schedule your Vaccination
        </p>
      </div>
      <div className="flex bg-[#C4C4C4]/5 justify-between h-40 px-8 rounded-[20px]">
        <div className="flex gap-12.5">
          <div className="flex gap-5 items-center justify-center">
            <img src={Group_6} alt="" />
            <div>
              <p className="text-white/50 text-[24px] font-semibold ">
                Location
              </p>
              <p className="text-white text-[24px] font-bold">
                Ikeja Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <img src={Group_7} alt="" />
            <div>
              <p className="text-white/50  text-[24px] font-semibold">Date</p>
              <p className="text-white text-[24px] font-bold">
                29 February, 2022
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <img src={Group_9} alt="" />
            <div>
              <p className="text-white/50  text-[24px] font-semibold">
                Vaccine Type
              </p>
              <p className="text-white text-[24px] font-bold">Mordena</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <button className="text-[24px] text-white rounded-[20px] bg-[#17C2EC] px-[25px] py-5 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
