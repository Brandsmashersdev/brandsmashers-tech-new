import Footer from '@/components/footer/footer'
// import WebAppDevelopment from '@/components/Service/webDevelopment'
import HeroSection from '@/components/HomePage/herosection'

import Navbar from "@/components/navbar/navbar";


import WebAppDevelopment from '@/components/Service/webDevelopment'
function webdevelopment() {
  return (
    <div>
      <Navbar />
     <WebAppDevelopment/>
     <Footer/>
    </div>
  )
}

export default webdevelopment;
