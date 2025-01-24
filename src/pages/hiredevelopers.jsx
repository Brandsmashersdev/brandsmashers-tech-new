import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import DeveloperSkills from "@/components/HireDevelopers/DeveloperSkills";
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
      <TopRemoteDevelopers/>
      <ProcessChart/>
      <ExpandableGrid/>
      <DeveloperCard/>
      <DeveloperSkills/>
      <WhatWeOffer/>
      <HiringModels/>
      <FAQSection/>
      <Footer />
      </>
  );
}
