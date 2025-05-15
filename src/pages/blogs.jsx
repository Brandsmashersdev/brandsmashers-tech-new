import BlogsHeroSection from "@/components/Blogs/BlogsHeroSection";
import BlogDetails from "@/components/Blogs/BlogDetails";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import BlogPage from "@/components/Blogs/blogcards";

const blogs = () => {
  return (
    <div>

      <Navbar />
      <BlogsHeroSection/>
      <BlogPage/>
      {/* <BlogDetails/> */}
      <Footer />
      
    </div>
  );
};

export default blogs;
