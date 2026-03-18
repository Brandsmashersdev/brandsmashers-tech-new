import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import industries from '@/data/industries';

export default function IndustryPage({ industry }) {
  if (!industry) {
    return (
      <div className="min-h-screen bg-[#343333] flex items-center justify-center">
        <div className="text-white text-xl">Industry not found</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{industry.title} | Brandsmashers Tech</title>
        <meta name="description" content={industry.description} />
      </Head>
      
      <div className="bg-[#343333] min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/#industries" 
              className="text-orange-500 hover:text-orange-400 mb-8 inline-flex items-center"
            >
              ← Back to Industries
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {industry.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              {industry.description}
            </p>
            
            <Link 
              href="/contact"
              className="inline-block bg-[#ff5010] text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-[#2a2a2a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Our {industry.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-[#343333] p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
                  <p className="text-gray-400">
                    Custom {service.toLowerCase()} solutions tailored to your business needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your {industry.title.split(' ')[0]} Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help you achieve your goals with cutting-edge technology solutions.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-[#ff5010] text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

// Generate static paths for all industries
export async function getStaticPaths() {
  const paths = industries.map((industry) => ({
    params: { slug: industry.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Get data for each industry
export async function getStaticProps({ params }) {
  const industry = industries.find((ind) => ind.slug === params.slug);
  
  return {
    props: {
      industry: industry || null,
    },
  };
}
