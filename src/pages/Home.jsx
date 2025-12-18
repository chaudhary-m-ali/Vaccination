import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Logo from "@/components/Logo";
import React from "react";
import Result from "@/components/Result";
import VaccinationBenifit from "@/components/VaccinationBenifit";
import Forms from "@/components/Forms";
import Symptoms from "@/components/symptoms";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Schedule />
      <Logo />
      <Result />
      <VaccinationBenifit />
      <Forms />
      <Symptoms />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
