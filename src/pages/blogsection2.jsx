// import BlogsHeroSection from "@/components/Blogs/BlogsHeroSection";
// import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogSection1 from "@/components/Company/BlogSection1";
import BlogSection2 from "@/components/Company/BlogSection2"
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";
// import BlogPage from "@/components/blogcards";
import Blog from "./Blog";

const blogs = () => {
  return (
    <div>

      <Navbar />
      {/* <BlogSection1 /> */}
      <BlogSection2/>
      <Footer />
      
    </div>
  );
};

export default blogs;
