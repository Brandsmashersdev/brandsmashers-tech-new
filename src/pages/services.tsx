import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ServiceGrids from '@/components/Service/ServiceGrids';
import FAQSection from '@/components/HomePage/FAQSection';
import ContactForm from '@/components/contactform';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HomePage/herosection';
import AIML from '@/components/Service/aiMl';
import Browser from '@/components/Service/browser';
import DataDive from '@/components/Service/dataDive';
import DesktopApp from '@/components/Service/desktopAppDevelopment';
import Digital from '@/components/Service/digitalMarketing';
import ServiceHero from '@/components/Service/herosection';
import MobileApp from '@/components/Service/mobileApp';
import UIUX from '@/components/Service/uiux';
import Webdesign from '@/components/Service/webDesign';
import { Expand } from 'lucide-react';
import BrandsmashersGrid from '@/components/Service/BrandsmashersGrid';
import CustomizedDesign from '@/components/Service/CustomizedStrategies';
import ProjectDiscussion from '@/components/Service/Dropdown/ProjectDiscussion';

const services = () => {
  return (
    <>
      <SEO
        title="Services | Brandsmashers Tech"
        description="Explore the full range of IT and software development services offered by Brandsmashers Tech, including web, mobile, and cloud solutions."
        ogImage="/logo.jpg"
      />
      <div>
        <Navbar />
        {/* <ProjectDiscussion/> */}

        <ServiceHero />
        <Webdesign />
        <MobileApp />
        <DesktopApp />
        <UIUX />
        <AIML />
        <DataDive />
        <Digital />
        <Browser />
        <CustomizedDesign />
        <BrandsmashersGrid />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default services;
