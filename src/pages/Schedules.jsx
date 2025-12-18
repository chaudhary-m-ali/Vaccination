import Navbar from "@/components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div>
      <Navbar />
      <Link to="/schedule">
        <h1 className="text-white h-screen flex justify-center items-center font-bold  text-3xl underline">
          Welcome to Schedule Section
        </h1>
      </Link>
    </div>
  );
};

export default Schedule;
