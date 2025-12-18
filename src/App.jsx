import React from "react";
// import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Schedules from "./pages/Schedules";
import { Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
const App = () => {
  return (
    <div className="bg-[#0b153c] font-Montserrat ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/schedule" element={<Schedules />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
};

export default App;
