import React from "react";
import Vaccination_Logo from "../assets/Vaccination.ng.svg";
import { Link, NavLink } from "react-router-dom";
import { Youtube } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import Send from "../assets/send.svg";

const Footer = () => {
  const inactiveClass = "text-white/50  hover:text-white font-medium";
  const activeClass = "text-white font-bold";
  return (
    <div className="bg-[#0B153C] flex justify-between px-17.5  relative h-140 xl:h-125 items-end pb-30  max-lg:flex-col max-lg:items-start max-lg:justify-end  max-lg:gap-10 max-lg:pb-5 ">
      <div>
        <img src={Vaccination_Logo} alt="" />
        <hr className="h-0.75 w-25 max-sm:w-43 bg-[#17C2EC] rounded-full" />
      </div>
      <div>
        <ul className="flex gap-6 text-[24px]  cursor-pointer max-sm:flex-col">
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
                    <span className="absolute h-3 w-3 bg-[#17C2EC] -bottom-2 left-1/2 max-sm:left-1/4 rounded-full"></span>
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
      <div className="flex gap-2">
        <a href="">
          <Youtube size={50} color="white" />
        </a>
        <a href="">
          <Instagram size={50} color="white" />
        </a>
        <a href="">
          <Twitter size={50} color="white" />
        </a>
        <a href="">
          <Facebook size={50} color="white" />
        </a>
      </div>
      <div className="bg-[#17C2EC] flex flex-col justify-center items-center text-center rounded-[50px] sm:w-155    xl:h-100 absolute   xl:w-250  -top-50   sm:-top-30 sm:h-80 -translate-x-1/2 left-1/2  p-5 max-sm:w-75 max-sm:-top-20 ">
        <div>
          <h3 className="text-[48px] font-bold text-white mb-3 max-sm:text-[18px]">
            Get a quote
          </h3>
          <p className="font-medium text-[24px] text-white max-sm:text-[10px]">
            Please do enter your email address below
          </p>
        </div>
        <div className="relative mt-5 w-full max-w-120">
          <input
            type="text"
            placeholder="lenux.ng@gmail.com"
            className="bg-white relative  py-4.5 px-5 rounded-[20px] w-full font-medium text-black/25 text-[20px] max-sm:py-1  "
          />
          <button className="cursor-pointer">
            {" "}
            <img
              src={Send}
              alt="arrow-icon"
              className="bg-[#0B153C] absolute  top-0 right-0 px-9 pt-3.5 pb-3 rounded-tr-[20px] rounded-br-[20px]  max-sm:h-9.5  "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
