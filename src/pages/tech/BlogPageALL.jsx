// src/pages/BlogSectionNew.jsx
import BlogPageALL from "@/components/HomePage/BlogPageALL";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const blogSectionNew = () => {
  return (
    <div>
      <Navbar />
      <BlogPageALL/>
      <Footer />
    </div>
  );
};

export default blogSectionNew;