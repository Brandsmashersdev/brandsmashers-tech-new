import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Blog_first from '@/components/Company/Blog_first';
import SEO from '@/components/SEO';

function Blog() {
  return (
    <>
      <SEO
        title="Blog | Brandsmashers Tech"
        description="Read the latest insights, tips, and news from Brandsmashers Tech on software development, IT outsourcing, and digital innovation."
        ogImage="/logo.jpg"
      />
      <div>
        <Navbar />
        <Blog_first />
        <Footer />
      </div>
    </>
  );
}

export default Blog;
