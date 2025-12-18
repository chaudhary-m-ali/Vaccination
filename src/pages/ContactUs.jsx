import Navbar from "@/components/Navbar";
import React from "react";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Link to="/contactus">
        <h1 className="text-white h-screen flex justify-center items-center font-bold  text-3xl underline">
          Welcome to ContactUS Section
        </h1>
      </Link>
    </div>
  );
};

export default ContactUs;
