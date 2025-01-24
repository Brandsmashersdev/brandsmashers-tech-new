import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import WhyBrandsmashers from '@/components/AboutUS/WhyBrandsmashers';
import StatisticsSection from '@/components/AboutUS/StatisticsSection';
const aboutus = () => {
  return (
    <div>
      <Navbar/>
      <WhyBrandsmashers/>
      <StatisticsSection/>
      <Footer/>
    </div>
  )
}

export default aboutus;