import Footer from '@/components/footer/footer'
// import WebAppDevelopment from '@/components/Service/mobileAppDevelopment'
import HeroSection from '@/components/HomePage/herosection'
import Navbar from '@/components/navbar/navbar'
import MobileAppDevelopment from '@/components/Service/MobileAppDevelopment'
function mobileAppDevelopmentService() {
  return (
    <div>
      <Navbar />
     <MobileAppDevelopment/>
     <Footer/>
    </div>
  )
}

export default mobileAppDevelopmentService;