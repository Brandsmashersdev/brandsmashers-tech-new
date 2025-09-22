// src/pages/BlogSectionNew.jsx
import BlogSectionNew from "@/components/Company/BlogSectionNew";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const blogSectionNew = () => {
  return (
    <div>
      <Navbar />
      <BlogSectionNew />
      <Footer />
    </div>
  );
};

export default blogSectionNew;