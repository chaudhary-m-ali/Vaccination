import React from "react";
import Rectangle25 from "../assets/Rectangle25.png";
import Rectangle24 from "../assets/Rectangle24.png";
import Rectangle26 from "../assets/Rectangle26.png";
import covid_19 from "../assets/unsplash_ZeMRI9vO71o.png";
const Feedback = () => {
  return (
    <div className="bg-white px-5 lg:px-17.5 flex flex-col justify-center items-center py-10 gap-8 pb-100 ">
      <div className="flex flex-col  items-center justify-center">
        <h4 className="text-[24px] text-[#17C2EC] font-bold max-md:text-[20px]">
          FEEDBACK
        </h4>
        <h2 className="text-[48px] font-extrabold text-black max-lg:text-center max-md:text-[36px] max-sm:text-[24px] ">
          What our Patients Think
        </h2>
      </div>
      <p className="text-[24px] font-medium text-black/50 max-lg:text-center lg:w-238 max-md:text-[18px] max-sm:text-[12px] ">
        Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean
        eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu
        donec neque.
      </p>
      <div className="flex justify-between gap-8 mt-8 max-xl:flex-col max-xl:mt-40 max-xl:gap-60">
        <div
          id="box1"
          className="bg-[#C4C4C4]/50 rounded-[20px] w-95 p-5 grid gap-8 relative h-62.5  max-sm:w-75 "
        >
          <div className="flex gap-5 items-center">
            <img src={Rectangle25} alt="" />
            <div>
              <h3 className=" text-[24px]text-black font-bold max-md:text-[20px] max-sm:text-[13.55px] ">
                Oyindamola Maja
              </h3>
              <p className="text-black/50 text-[14px] font-bold max-sm:text-[9.49px]">
                Badagry, Lagos
              </p>
            </div>
          </div>
          <p className="text-black/60 text-[18px] font-medium text-center max-sm:text-[12.2px]">
            “Been stressing about a close centre to get the
            <span className="text-[#17C2EC]"> covid-19</span> vaccine, until i
            tried Vaccination.ng”
          </p>
          <img
            className="absolute -top-40 left-12.5 max-sm:h-75 max-sm:-top-10  max-xl:h-75 max-xl:-top-8 max-xl:left-22 max-sm:left-15"
            src={covid_19}
            alt=""
          />
        </div>
        <div
          id="box2"
          className="bg-[#17C2EC] rounded-[20px] w-95  max-sm:w-75 p-5 grid gap-8 relative z-99 h-62.5"
        >
          <div className="flex gap-5 items-center">
            <img src={Rectangle24} alt="" />
            <div>
              <h3 className=" text-[24px] text-white font-bold  max-md:text-[20px] max-sm:text-[13.55px]">
                Okeowo Lekan
              </h3>
              <p className="text-white/75 text-[14px] font-bold max-sm:text-[9.49px] ">
                Ikeja, Lagos
              </p>
              <img
                className="absolute -top-40 right-10 max-sm:h-75 max-sm:-top-10 left-12.5  max-xl:h-75 max-xl:-top-8 max-xl:left-22 max-sm:left-15 "
                src={covid_19}
                alt=""
              />
            </div>
          </div>
          <p className="text-white/75 text-[18px] font-medium text-center max-sm:text-[12.2px]">
            “Got my vaccine very close to my house. Was very easy scheduling an
            appointment.”
          </p>
        </div>
        <div
          id="box3"
          className="bg-[#C4C4C4]/50 rounded-[20px] w-95  max-sm:w-75 p-5 grid gap-8 relative  h-62.5"
        >
          <div className="flex gap-5 items-center">
            <img src={Rectangle26} alt="" />
            <div>
              <h3 className=" text-[24px]text-black font-bold max-md:text-[20px] max-sm:text-[13.55px]">
                Kafaru Temitope
              </h3>
              <p className="text-black/50 text-[14px] font-bold max-sm:text-[9.49px]">
                Obanikoro, Lagos
              </p>
              <img
                className="absolute -top-40  max-xl:h-75 max-xl:-top-8 max-xl:left-22 max-sm:-top-10 max-sm:left-15 left-12.5"
                src={covid_19}
                alt=""
              />
            </div>
          </div>
          <p className="text-black/60 text-[18px] font-medium text-center  max-sm:text-[12.2px]">
            “Been stressing about a close centre to get the
            <span className="text-[#17C2EC]"> covid-19</span> vaccine, until i
            tried Vaccination.ng”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
