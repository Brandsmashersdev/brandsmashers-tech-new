
import AboutSection from '@/components/AboutUS/AboutSection'
import React from 'react'
import aboutus from '../aboutus'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Slider from 'react-slick';
// import BlogCarousel from '@/components/Service/custom-service/carousel';
import { FaCrown, FaUsers, FaCogs, FaBuilding, FaSmile } from 'react-icons/fa';
import CustomSoftwareDevelopmentPage from '@/components/Service/Customservice/CustomService';


  

  
// Auto-scroll every 5 seconds

const demo = () => {
  return (
   
     <>
     <Navbar/>
     <CustomSoftwareDevelopmentPage/>
     <Footer/>
     </>

  );
}


   export default demo;
   

