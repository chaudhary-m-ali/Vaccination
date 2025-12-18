import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, NavLink } from "react-router-dom";
import Group_83 from "../assets/Group83.svg";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  const inactiveClass = "text-black/50  hover:text-black font-medium";
  const activeClass = "text-black font-bold";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <img src={Group_83} alt="" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          <SheetDescription className="sr-only">
            This is the mobile menu
          </SheetDescription>
        </SheetHeader>
        <ul className=" flex flex-col gap-6 text-[24px]  cursor-pointer items-center pt-20 ">
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
                    <span className="absolute  h-3 w-3 bg-[#17C2EC] top-3.5  -left-3.5 rounded-full"></span>
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
                    <span className="absolute h-3 w-3 bg-[#17C2EC] top-3.5  -left-3.5  rounded-full"></span>
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
                    <span className="absolute h-3 w-3 bg-[#17C2EC] top-3.5  -left-3.5 rounded-full"></span>
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
                    <span className="absolute h-3 w-3 bg-[#17C2EC] top-3.5  -left-3.5 rounded-full"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
          <div>
            <button className="text-[24px] font-bold text-black/50 hover:text-black px-6 py-5 rounded-[20px] bg-[#C4C4C4]/10 cursor-pointer border-2 border-black transition-all duration-600 ease-in-out ">
              Check Status
            </button>
          </div>
        </ul>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
