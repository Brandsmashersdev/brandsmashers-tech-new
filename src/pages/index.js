import ReadyToInnovate from "@/components/HomePage/ReadyToInnovate";
import ITSolutions from "@/components/HomePage/ITSolutions";
import OurVision from "@/components/HomePage/OurVision";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhyChooseUs from "@/components/HomePage/whyChooseUs";
import HeroSection from "@/components/HomePage/herosection";
import SolutionsMatrix from "@/components/HomePage/SolutionsMatrix";
import ExpandableCards from "@/components/HomePage/Whatwedo";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <SolutionsMatrix/>
    <ITSolutions/>
    <ExpandableCards/>
    <ReadyToInnovate/>
    <OurVision/>
    <WhyChooseUs/>
    <Footer/>
    </div>
  );
}
