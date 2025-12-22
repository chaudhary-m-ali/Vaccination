import React from "react";
import Hero_main from "../assets/Group22.png";

const Hero = () => {
  return (
    <div className="flex mt-17.5 gap-8 px-5  lg:px-17.5 max-lg:flex-col">
      <div className="Hero-left w-165 max-md:w-full max-md:text-center">
        <div className="Hero-left-top opacity-50 flex flex-col gap-8">
          <h3 className="text-[#17C2EC] text-[24px] font-bold max-sm:text-[12px]">
            Get Vaccinated. Boost your Immune System
          </h3>
          <h1 className="text-[48px] text-[white] font-extrabold max-sm:text-[24px]">
            COVID-19 Vaccination Got Easier With,
            <span className="text-[#17C2EC]"> Vaccination.ng</span>
          </h1>
          <p className="text-white font-bold text-[24px] max-sm:text-[14px]">
            Vaccination.ng will help you find the nearest centre for
            vaccination, in all 36 states in Nigeria
          </p>
        </div>
        <div className="Hero-left-bottom  flex gap-5 mt-8 max-md:justify-center ">
          <button className="text-white bg-[#17C2EC] px-6.25 py-5 rounded-[20px] font-bold text-[24px] hover:text-white hover:bg-[#C4C4C4]/10 transition-all duration-600 ease-in-out max-sm:text-[14px] ">
            Get Vaccine
          </button>
          <button className=" text-white bg-[#C4C4C4]/10 text-[24px] font-bold rounded-[20px] px-6.25 py-5 hover:bg-[#17C2EC] hover:text-white transition-all duration-600 ease-in-out max-sm:text-[14px]  ">
            Help Center
          </button>
        </div>
      </div>
      <div className="hero-right relative max-lg:flex max-lg:justify-center max-lg:items-center max-lg:mt-10">
        <img src={Hero_main} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
