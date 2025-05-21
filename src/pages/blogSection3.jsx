import BlogSection3 from "@/components/Company/BlogSection3";
import BlogSection2 from "@/components/Company/BlogSection2"
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";
import Blog from "./Blog";

const blogs = () => {
  return (
    <div>

      <Navbar />
      <BlogSection3 />
      {/* <BlogSection2/> */}
      <Footer />
      
    </div>
  );
};

export default blogs;
