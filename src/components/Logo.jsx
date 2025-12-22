import React from "react";
import moderna from "../assets/sinovac1336_1(1).png";
import pfizer from "../assets/sinovac1336_1(2).png";
import astrazeneca from "../assets/sinovac1336_1(3).png";
import sinovac from "../assets/sinovac1336_1(4).png";
const Logo = () => {
  return (
    <div className="bg-white opacity-50 py-8 ">
      <div className="logo flex justify-around items-center">
        <img src={moderna} alt="" className="max-lg:w-35 max-sm:w-18" />
        <img src={pfizer} alt="" className="max-lg:w-35 max-sm:w-18" />
        <img src={astrazeneca} alt="" className="max-lg:w-35 max-sm:w-18" />
        <img src={sinovac} alt="" className="max-lg:w-35 max-sm:w-18" />
      </div>
    </div>
  );
};

export default Logo;
