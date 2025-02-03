import React from "react";
import AndroidHeroSection from "@/components/HireDevelopers/Android/AndroidHeroSection";
import PartnerCompanies from "@/components/HireDevelopers/Android/PartnerCompanies";
import Stats from "@/components/HireDevelopers/Android/Stats";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import AndroidCarousel from "@/components/HireDevelopers/Android/AndroidCarousel";
import ReusableHeroForTech from "@/components/HireDevelopers/Android/ReusableHeroForTech";

export default function android() {
  return (
    <>
      <Navbar />
      <AndroidHeroSection />
      <Stats/>
      <ReusableHeroForTech/> 
      <AndroidCarousel />
      <PartnerCompanies />
      <Footer />
    </>
  );
}
