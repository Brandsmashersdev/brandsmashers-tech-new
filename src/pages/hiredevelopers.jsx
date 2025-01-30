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
import ExpandableGrid from '@/components/HireDevelopers/ExpandableGrid';
import AndroidHeroSection from "@/components/HireDevelopers/Android/AndroidHeroSection";
import RemoteDevelopers from "@/components/HireDevelopers/RemoteDevelopers";
import TechnologyServices from "@/components/HomePage/TechnologyServices";
import Gridsection from "@/components/HireDevelopers/Gridsection";
import { Grid } from "lucide-react";
import TrialForm from "@/components/HireDevelopers/Android/Trial";
import PartnerCompanies from "@/components/HireDevelopers/PartnerCompanies";
export default function hiredevelopers() {
  return (
    <>
    
      <Navbar />
      <HeroSection/>
      {/* <AndroidHeroSection/> */}
      <RemoteDevelopers/>
      {/* <TopRemoteDevelopers/> */}
      <ProcessChart/>
      <ExpandableGrid/>
      <DeveloperSkills/>
      <Gridsection/>
      <WhatWeOffer/>
      <HiringModels/>
      <PartnerCompanies/>
      <FAQSection/>
      <TrialForm/>
      <Footer />
      </>
  );
}
