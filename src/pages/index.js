// import Navbar from "@/components/navbar/navbar";
import ReadyToInnovate from "@/components/HomePage/ReadyToInnovate";
import { Geist, Geist_Mono } from "next/font/google";
import ITSolutions from "@/components/HomePage/ITSolutions";
import SolutionsMatrix from "@/components/HomePage/SolutionsMatrix";
import OurVision from "@/components/HomePage/OurVision";
// import Whatwedo from "@/components/HomePage/Whatwedo";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhyChooseUs from "@/components/HomePage/whyChooseUs";


export default function Home() {
  return (
    <div className="container" style={{
      backgroundColor: "#343333",
      fontFamily:"gilroy"
    }}>
    <Navbar/>
    <SolutionsMatrix/>
    <ITSolutions/>
    {/* <Whatwedo/> */}
    <ReadyToInnovate/>
    <OurVision/>
    <WhyChooseUs/>
    <Footer/>
    </div>
  );
}
