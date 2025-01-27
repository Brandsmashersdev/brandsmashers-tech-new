import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import DeveloperSkills from "@/components/HireDevelopers/DeveloperSkills";
import HeroSection from "@/components/HireDevelopers/HeroSection";
import TopRemoteDevelopers from "@/components/HireDevelopers/TopRemoteDevelopers";
import HiringModels from "@/components/HireDevelopers/HiringModels";
import WhatWeOffer from "@/components/HireDevelopers/WhatWeOffer";
import ProcessChart from "@/components/HireDevelopers/ProcessChart";
import FAQSection from "@/components/HomePage/FAQSection";
import DeveloperCard from "@/components/HireDevelopers/DeveloperCard";
import ExpandableGrid from '@/components/HireDevelopers/ExpandableGrid'
export default function hiredevelopers() {
  return (
    <>
    
      <Navbar />
      <HeroSection/>
      <TopRemoteDevelopers/>
      <ProcessChart/>
      <ExpandableGrid/>
      <DeveloperSkills/>
      <DeveloperCard/>
      <WhatWeOffer/>
      <HiringModels/>
      <FAQSection/>
      <Footer />
      </>
  );
}
