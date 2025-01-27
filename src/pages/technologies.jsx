import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import TechnologiesSection from '@/components/Technologies/TechnologiesSection'
import HeroSection from '@/components/Technologies/HeroSection'
import React from 'react'
import TechnologyPage from '@/components/Technologies/TechnologyPage'
import SolutionsGrid from '@/components/Technologies/SolutionsGrid'
import FAQSection from '@/components/HomePage/FAQSection'



const Technologies = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <TechnologyPage/>
        <SolutionsGrid/>
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default Technologies
