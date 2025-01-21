import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import DeveloperSkills from "@/components/HireDevelopers/DeveloperSkills";
import TopRemoteDevelopers from "@/components/HireDevelopers/TopRemoteDevelopers";
import HiringModels from "@/components/HireDevelopers/HiringModels";
import WhatWeOffer from "@/components/HireDevelopers/WhatWeOffer";
import ProcessChart from "@/components/HireDevelopers/ProcessChart";
import FAQSection from "@/components/HomePage/FAQSection";

export default function hiredevelopers() {
  return (
    <>
    
      <Navbar />
      <TopRemoteDevelopers/>
      <ProcessChart/>
      <DeveloperSkills/>
      <WhatWeOffer/>
      <HiringModels/>
      <FAQSection/>
      <Footer />
      </>
  );
}
