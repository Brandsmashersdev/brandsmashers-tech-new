
import CultureSection from "@/components/Company/CultureSection";
import HeroSection from "@/components/Company/Herosection";
import Story from "@/components/Company/Story";
import StoryBanner from "@/components/Company/StoryBanner";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import EmployeeTestimonials from "@/components/Company/EmployeeTestimonials";
import WhoWeAre from "@/components/Company/Introduction";
import PerksSection from "@/components/Company/PerksSection";


const career = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <Story/>
      <PerksSection/>
      <StoryBanner/>
      <CultureSection/>
      <EmployeeTestimonials/> 
    </div>
  );
};

export default career;
