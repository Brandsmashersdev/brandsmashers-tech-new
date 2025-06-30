// import BlogsHeroSection from "@/components/Blogs/BlogsHeroSection";
// import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogSection2 from '@/components/Company/BlogSection2';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import React from 'react';
// import BlogPage from "@/components/blogcards";

const blogs = () => {
  return (
    <div>
      <Navbar />
      {/* <BlogSection1 /> */}
      <BlogSection2 />
      <Footer />
    </div>
  );
};

export default blogs;
