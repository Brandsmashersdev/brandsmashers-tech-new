import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import TechnologiesSection from '@/components/Technologies/TechnologiesSection'
import HeroSection from '@/components/Technologies/HeroSection'
import React, { useEffect } from 'react'
import TechnologyPage from '@/components/Technologies/TechnologyPage'
import FAQSection from '@/components/HomePage/FAQSection'
import Head from 'next/head'
import { initializePageTracking } from '@/lib/gtm'



const Technologies = () => {
  useEffect(() => {
    // GTM Page View Tracking
    initializePageTracking('Technologies - Brandsmashers Tech', '/technologies', {
      page_type: 'technologies_overview'
    });
  }, []);

  return (
    <>
      <Head>
        <title>Technologies & Development Stack | Brandsmashers Tech</title>
        <meta name="description" content="Explore our expertise in cutting-edge technologies including React, Node.js, Python, AI/ML, and more for your next project." />
      </Head>
      <div>
        <Navbar/>
        <HeroSection/>
        <TechnologyPage/>
        <FAQSection/>
        <Footer/>
      </div>
    </>
  )
}

export default Technologies
