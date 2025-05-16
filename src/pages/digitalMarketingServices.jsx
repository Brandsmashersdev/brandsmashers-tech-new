import Footer from '@/components/footer/footer';
import HeroSection from '@/components/HomePage/herosection';
import Navbar from '@/components/navbar/navbar';
import DigitalMarketingServices from '@/components/Service/DigitalMarketingServices'; // This is the component you created

function DigitalMarketingServicesPage() {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <DigitalMarketingServices />
      {/* <Footer /> */}
    </div>
  );
}

export default DigitalMarketingServicesPage;
