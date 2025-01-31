import React from "react";
import AndroidHeroSection from "@/components/HireDevelopers/Android/AndroidHeroSection";
import PartnerCompanies from "@/components/HireDevelopers/Android/PartnerCompanies";
import Stats from "@/components/HireDevelopers/Android/Stats";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function android() {
  return (
    <>
      <Navbar />
      <AndroidHeroSection />
      <Stats/>
      <PartnerCompanies />
      <Footer />
    </>
  );
}
