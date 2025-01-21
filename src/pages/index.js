import ReadyToInnovate from "@/components/HomePage/ReadyToInnovate";
import ITSolutions from "@/components/HomePage/ITSolutions";
import OurVision from "@/components/HomePage/OurVision";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhyChooseUs from "@/components/HomePage/whyChooseUs";
import HeroSection from "@/components/HomePage/herosection";
import SolutionsMatrix from "@/components/HomePage/SolutionsMatrix";
import ExpandableCards from "@/components/HomePage/Whatwedo";
import OurPartner from "@/components/OurPartners/OurPartner";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <SolutionsMatrix/>
    <ITSolutions/>
    <ExpandableCards/>
    <ReadyToInnovate/>
    <OurPartner/>
    <OurVision/>
    <WhyChooseUs/>
    <Footer/>
    </div>
  );
}
