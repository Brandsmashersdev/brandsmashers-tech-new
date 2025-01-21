import Footer from '@/components/footer/footer'
import FAQSection from '@/components/HomePage/FAQSection'
import Navbar from '@/components/navbar/navbar'
import ServiceSection from '@/components/Service/webDesign'
import React from 'react'

const Service = () => {
  return (
    <div>
        <Navbar/>
        <ServiceSection/>
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default Service
