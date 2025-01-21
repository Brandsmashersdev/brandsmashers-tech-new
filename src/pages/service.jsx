import Footer from '@/components/footer/footer'
import FAQSection from '@/components/HomePage/FAQSection'
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
import WhyUs from '@/components/Service/whyus'
import React from 'react'

const Service = () => {
  return (
    <div>
        <Navbar/>
        <ServiceHero/>
        <Webdesign/>
        <MobileApp/>
        <DesktopApp/>
        <UIUX/>
        <AIML/>
        <DataDive/>
        <Digital/>
        <Browser/>
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default Service
