import React from "react";
import Group_65 from "../assets/Group65.png";
const Symptoms = () => {
  return (
    <div className="bg-[#0B153C] flex flex-col items-center justify-center gap-40 ">
      <div>
        <div className="flex flex-col items-center justify-center pt-10">
          <h4 className="text-white font-bold text-[24px]">
            Covid-19 Prevention
          </h4>
          <h2 className="text-[#17C2EC] text-[48px] font-extrabold">
            COVID-19 <span className="text-white ">Symptoms</span>
          </h2>
        </div>
        <p className="text-[24px] text-white/50 font-medium text-center lg:w-238 mt-5">
          Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
          aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue
          arcu donec neque.
        </p>
      </div>
      <div className="flex justify-center ">
        <img src={Group_65} alt="" />
      </div>
    </div>
  );
};

export default Symptoms;
