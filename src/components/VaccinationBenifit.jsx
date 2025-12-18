import React from "react";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group31(1).svg";
import group33 from "../assets/Group31(2).svg";
import arrowRight from "../assets/arrow-right.svg";
import arrowRight1 from "../assets/arrow-right(1).svg";

const VaccinationBenifit = () => {
  return (
    <div className="px-17.5 bg-[#0B153C] py-20 grid gap-8  mt-20">
      <div className="flex justify-between">
        <h2 className=" text-[48px] text-white font-bold w-126 ">
          Why get vaccinated today?
        </h2>
        <p className="text-white/50 text-[20px] font-normal w-130">
          Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac lorem
          pellentesque vestibulum risus matti. In molestie condimentum malesuada
          non.
        </p>
      </div>
      <div className="flex items-end justify-between">
        <div className=" w-112.5 bg-[#C4C4C4]/20 p-8  rounded-[40px] rounded-tr-[120px] grid gap-5">
          <img src={group31} alt="" />
          <h4 className="text-[24px] font-bold text-[#17C2EC]">
            Protects your immune system against viruses
          </h4>
          <p className="text-white text-[18px] font-medium">
            Velit ut consectetur mauris, orci amet, faucibus. Sit turpis
            fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.
          </p>
          <div className="flex gap-3">
            <button className="text-[18px] font-bold text-[#17C2EC]">
              Read More
            </button>
            <img src={arrowRight} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-around items-start gap-4 w-87.5 h-87.5 p-5 rounded-[40px] border-2 border-white/50 ">
          <img src={group32} alt="" />
          <p className="text-[24px] font-bold text-white">
            Minimize the spread of the Virus
          </p>
          <div className="flex gap-3">
            <button className=" text-white/50 text-[18px] font-bold ">
              Read More
            </button>
            <img className=" text-white/50 " src={arrowRight1} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-around items-start gap-4 w-87.5 h-87.5 p-5 rounded-[40px] border-2 border-white/50 ">
          <img src={group33} alt="" />
          <p className="text-white text-[24px] font-bold">Protect yourself</p>
          <div className="flex gap-3">
            <button className="text-white/50 text-[18px] font-bold">
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
