import React from "react";
import Rectangle25 from "../assets/Rectangle25.png";
import Rectangle24 from "../assets/Rectangle24.png";
import Rectangle26 from "../assets/Rectangle26.png";
import covid_19 from "../assets/unsplash_ZeMRI9vO71o.png";
const Feedback = () => {
  return (
    <div className="bg-white px-17.5 flex flex-col justify-center items-center py-10 gap-8 pb-100 ">
      <div className="flex flex-col  items-center justify-center">
        <h4 className="text-[24px] text-[#17C2EC] font-bold">FEEDBACK</h4>
        <h2 className="text-[48px] font-extrabold text-black">
          What our Patients Think
        </h2>
      </div>
      <p className="text-[24px] font-medium text-black/50 lg:w-238">
        Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean
        eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu
        donec neque.
      </p>
      <div className="flex justify-between gap-8 mt-8">
        <div
          id="box1"
          className="bg-[#C4C4C4]/50 rounded-[20px] w-95 p-5 grid gap-8 relative "
        >
          <div className="flex gap-5 items-center">
            <img src={Rectangle25} alt="" />
            <div>
              <h3 className=" text-[24px]text-black font-bold ">
                Oyindamola Maja
              </h3>
              <p className="text-black/50 text-[14px] font-bold">
                Badagry, Lagos
              </p>
            </div>
          </div>
          <p className="text-black/60 text-[18px] font-medium text-center">
            “Been stressing about a close centre to get the
            <span className="text-[#17C2EC]"> covid-19</span> vaccine, until i
            tried Vaccination.ng”
          </p>
          <img className="absolute -top-40" src={covid_19} alt="" />
        </div>
        <div
          id="box2"
          className="bg-[#17C2EC] rounded-[20px] w-95 p-5 grid gap-8 relative z-99"
        >
          <div className="flex gap-5 items-center">
            <img src={Rectangle24} alt="" />
            <div>
              <h3 className=" text-[24px] text-white font-bold ">
                Okeowo Lekan
              </h3>
              <p className="text-white/75 text-[14px] font-bold">
                Ikeja, Lagos
              </p>
              <img
                className="absolute -top-40 right-10 "
                src={covid_19}
                alt=""
              />
            </div>
          </div>
          <p className="text-white/75 text-[18px] font-medium text-center">
            “Got my vaccine very close to my house. Was very easy scheduling an
            appointment.”
          </p>
        </div>
        <div
          id="box3"
          className="bg-[#C4C4C4]/50 rounded-[20px] w-95 p-5 grid gap-8 relative "
        >
          <div className="flex gap-5 items-center">
            <img src={Rectangle26} alt="" />
            <div>
              <h3 className=" text-[24px]text-black font-bold ">
                Kafaru Temitope
              </h3>
              <p className="text-black/50 text-[14px] font-bold">
                Obanikoro, Lagos
              </p>
              <img
                className="absolute -top-40 right-10"
                src={covid_19}
                alt=""
              />
            </div>
          </div>
          <p className="text-black/60 text-[18px] font-medium text-center">
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
