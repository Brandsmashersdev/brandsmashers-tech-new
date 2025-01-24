import BlogsHeroSection from "@/components/Blogs/BlogsHeroSection";
import BlogDetails from "@/components/Blogs/BlogDetails";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogsHeroSection/>
      <BlogDetails/>
      <Footer />
    </div>
  );
};

export default blogs;
