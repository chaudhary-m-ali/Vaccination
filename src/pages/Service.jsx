import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
const Service = () => {
  return (
    <div>
      <Navbar />
      <Link to="/service">
        <h1 className="text-white h-screen flex justify-center items-center font-bold  text-3xl underline">
          Welcome to Service Section
        </h1>
      </Link>
    </div>
  );
};

export default Service;
