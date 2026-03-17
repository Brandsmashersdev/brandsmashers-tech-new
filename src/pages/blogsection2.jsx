
import BlogSection2 from "@/components/Company/blogsection2"
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React, { useEffect } from "react";
import Head from "next/head";
import { trackBlogPageView } from "@/lib/gtm";

const Blogs = () => {
  useEffect(() => {
    // GTM Page View Tracking
    trackBlogPageView('section2', 'Blog Section 2 - Brandsmashers Tech');
  }, []);

  return (
    <>
      <Head>
        <title>Blog Section 2 - Brandsmashers Tech</title>
        <meta name="description" content="Discover more insights, case studies, and technology updates from our expert team." />
      </Head>
      <div>
        <Navbar />
        <BlogSection2/>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
