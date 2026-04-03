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
import CalendlyWidget from '@/components/CalendlyWidget'


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
        <div className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book a Free 30-Minute Consultation
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Speak directly with our engineering team. No sales pitch — just an honest conversation about your needs.
              </p>
            </div>
            <CalendlyWidget />
          </div>
        </div>
        <FAQSection/>
        <Footer/>
      </div>
    </>
  )
}

export default Services
