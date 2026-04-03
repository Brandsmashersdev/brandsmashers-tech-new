
import BlogSection1 from "@/components/Company/blogsection1";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React, { useEffect, memo } from "react";
import Head from "next/head";
import { trackBlogPageView } from "@/lib/gtm";
// import BlogPage from "@/components/blogcards";


const Blogs = memo(() => {
  useEffect(() => {
    // GTM Page View Tracking
    trackBlogPageView('section1', 'Blog Section 1 - Brandsmashers Tech');
  }, []);

  return (
    <>
      <Head>
        <title>Blog Section 1 - Brandsmashers Tech</title>
        <meta name="description" content="Explore our latest blog posts and insights on technology, software development, and industry trends." />
      </Head>
      <div>
        <Navbar />
        <BlogSection1 />
        <Footer />
      </div>
    </>
  );
});

export default Blogs;
