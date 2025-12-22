import React from "react";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group31(1).svg";
import group33 from "../assets/Group31(2).svg";
import arrowRight from "../assets/arrow-right.svg";
import arrowRight1 from "../assets/arrow-right(1).svg";

const VaccinationBenifit = () => {
  return (
    <div className="px-17.5 max-lg:px-5 bg-[#0B153C] py-20 grid gap-8  mt-20">
      <div className="flex justify-between max-xl:flex-col max-lg:gap-10">
        <h2 className=" text-[48px] text-white font-bold w-126 max-lg:text-[36px] max-sm:text-[24px] max-sm:w-full">
          Why get vaccinated today?
        </h2>
        <p className="text-white/50 text-[20px] font-normal w-130 max-sm:text-[14px] max-sm:w-75">
          Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac lorem
          pellentesque vestibulum risus matti. In molestie condimentum malesuada
          non.
        </p>
      </div>
      <div className="grid grid-cols-3 items-end justify-items-center gap-10  max-xl:grid-cols-2 max-sm:grid-cols-1 max-xl:justify-items-start ">
        <div className="  max-xl:col-span-2 max-sm:col-span-1  w-112.5 bg-[#C4C4C4]/20 p-8  rounded-[40px] rounded-tr-[120px] grid gap-5 lg:w-100 max-xs:w-70.5  max-sm:p-4 ">
          <img src={group31} alt="" />
          <h4 className="text-[24px] font-bold text-[#17C2EC] max-sm:text-[14px]">
            Protects your immune system against viruses
          </h4>
          <p className="text-white text-[18px] font-medium max-sm:text-[12px] ">
            Velit ut consectetur mauris, orci amet, faucibus. Sit turpis
            fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.
          </p>
          <div className="flex gap-3">
            <button className="text-[18px] font-bold text-[#17C2EC] max-sm:text-[12px] ">
              Read More
            </button>
            <img src={arrowRight} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-around items-start gap-4 w-full sm:min-h-87.5 p-5 rounded-[40px] border-2 border-white/50 max-xs:w-47.5 ">
          <img src={group32} alt="" />
          <p className="text-[24px] font-bold text-white max-sm:text-[14px]">
            Minimize the spread of the Virus
          </p>
          <div className="flex gap-3">
            <button className=" text-white/50 text-[18px] font-bold  max-sm:text-[14px]">
              Read More
            </button>
            <img className=" text-white/50 " src={arrowRight1} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-around items-start gap-4  w-full  sm:min-h-87.5 p-5 rounded-[40px] border-2  max-xs:w-47.5 border-white/50 ">
          <img src={group33} alt="" />
          <p className="text-white text-[24px] font-bold max-sm:text-[14px]">
            Protect yourself
          </p>
          <div className="flex gap-3">
            <button className="text-white/50 text-[18px] font-bold max-sm:text-[14px]">
              Read More
            </button>
            <img src={arrowRight1} alt="" className="text-white/50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationBenifit;
