import Footer from '@/components/footer/footer'
// import WebAppDevelopment from '@/components/Service/webDevelopment'
import HeroSection from '@/components/HomePage/herosection'

import Navbar from "@/components/navbar/navbar";


import UIUXDesignPage from '@/components/Service/UIUXdevelopment'
function UIUXdevelopment() {
  return (
    <div>
      <Navbar />
     <UIUXDesignPage/>
     <Footer/>
    </div>
  )
}

export default UIUXdevelopment;