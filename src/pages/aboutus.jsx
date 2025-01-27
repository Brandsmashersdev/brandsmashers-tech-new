import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import WhyBrandsmashers from '@/components/AboutUS/WhyBrandsmashers';
import StatisticsSection from '@/components/AboutUS/StatisticsSection';
import AboutSection from '@/components/AboutUS/AboutSection';
import OurBusiness from '@/components/AboutUS/ourBussiness';
import ValuesSection from '@/components/AboutUS/valuesection';
import AboutHeroSection from '@/components/AboutUS/aboutHero';

const aboutus = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeroSection/>
      <AboutSection/>
      <StatisticsSection/>
      <OurBusiness/>
      <WhyBrandsmashers/>
      <ValuesSection/>
      <Footer/>
    </div>
  )
}

export default aboutus;