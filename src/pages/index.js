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
import TechnologyServices from "@/components/HomePage/TechnologyServices";
import Industries from "@/components/HomePage/Industries";
import FAQSection from "@/components/HomePage/FAQSection";
// import "../components/HomePage/TechnologyServices.module.css";
// import "../components/HomePage/Industries.module.css";




export default function Home() {
  return (
    <div className="bg-[#343333]">
     <Navbar/>
    <HeroSection/>
    <SolutionsMatrix/>
    <ITSolutions/>
    <ExpandableCards/>
    <ReadyToInnovate/>
    <OurPartner/>
    <TechnologyServices/>
    <Industries />
    <OurVision/>
    <WhyChooseUs/>
    <FAQSection/>
     <Footer/> 
    </div>
  );
}
