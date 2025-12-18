import React from "react";
import Vaccination_Logo from "../assets/Vaccination.ng.svg";
// import { useState } from "react";
import { Home, Parentheses, SpaceIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import close_icon from "../assets/close_icon.svg";
import { SheetDemo } from "./SheetDemo";
const Navbar = () => {
  // const [openSidebar, setopenSidebar] = useState(false);
  const inactiveClass = "text-white/50  hover:text-white font-medium";
  const activeClass = "text-white font-bold";
  return (
    <div className=" flex justify-between h-17.5 items-center  px-5  lg:px-17.5   ">
      <div>
        <img src={Vaccination_Logo} alt="" />
        <hr className="h-1 w-[100px] bg-[#17C2EC] rounded-full" />
      </div>
      <div>
        <ul className="flex gap-6 text-[24px]  cursor-pointer max-lg:hidden ">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <div
                  className={`relative ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  Home
                  {isActive && (
                    <span className="absolute h-3 w-3 bg-[#17C2EC] -bottom-2 left-1/2 rounded-full"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/service">
              {({ isActive }) => (
                <div
                  className={`relative ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  Service
                  {isActive && (
                    <span className="absolute h-3 w-3 bg-[#17C2EC] -bottom-2 left-1/2 rounded-full"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule">
              {({ isActive }) => (
                <div
                  className={`relative ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  Schedule
                  {isActive && (
                    <span className="absolute h-3 w-3 bg-[#17C2EC] -bottom-2 left-1/2 rounded-full"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus">
              {({ isActive }) => (
                <div
                  className={`relative ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  Contact Us
                  {isActive && (
                    <span className="absolute h-3 w-3 bg-[#17C2EC] -bottom-2 left-1/2 rounded-full"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-[24px] font-bold text-[#17C2EC] px-6 py-5 rounded-[20px] bg-[#C4C4C4]/10 cursor-pointer hover:bg-[#17C2EC] hover:text-white transition-all duration-600 ease-in-out max-lg:hidden ">
          Check Status
        </button>
      </div>
      <div className="lg:hidden">
        {" "}
        <SheetDemo />
      </div>
    </div>
  );
};

export default Navbar;
