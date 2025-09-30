import Footer from '@/components/footer/footer'
import HeroSection from '@/components/HomePage/herosection'
import Navbar from '@/components/navbar/navbar'
import AIML from '@/components/Service/aiMl'
import Browser from '@/components/Service/browser'
import DataDive from '@/components/Service/dataDive'
import DesktopApp from '@/components/Service/desktopAppDevelopment'
import Digital from '@/components/Service/digitalMarketing'
import ServiceHero from '@/components/Service/herosection'
import MobileApp from '@/components/Service/mobileApp'
import UIUX from '@/components/Service/uiux'
import Webdesign from '@/components/Service/webDesign'
import React, { useEffect } from 'react'
import FAQSection from '@/components/HomePage/FAQSection'
import { Expand } from 'lucide-react'
import BrandsmashersGrid from '@/components/Service/BrandsmashersGrid'
import CustomizedDesign from '@/components/Service/CustomizedStrategies'
import ProjectDiscussion from '@/components/Service/Dropdown/ProjectDiscussion'
import Head from 'next/head'
import { initializePageTracking } from '@/lib/gtm'


const Services = () => {
  useEffect(() => {
    // GTM Page View Tracking
    initializePageTracking('Our Services - Brandsmashers Tech', '/services', {
      page_type: 'services_overview'
    });
  }, []);

  return (
    <>
      <Head>
        <title>Our Services - Custom Software Development & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of IT services including web development, mobile apps, AI/ML, digital marketing, and more." />
      </Head>
      <div>
        <Navbar/>
        {/* <ProjectDiscussion/> */}
        
        <ServiceHero/>
        <Webdesign/>
        <MobileApp/>
        <DesktopApp/>
        <UIUX/>
        <AIML/>
        <DataDive/>
        <Digital/>
        <Browser/>
        <CustomizedDesign/>
        <BrandsmashersGrid/>
        <FAQSection/>
        <Footer/>
      </div>
    </>
  )
}

export default Services
