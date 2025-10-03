import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function LearnMore() {
  return (
    <>
      <Head>
        <title>Learn More - Brandsmashers Tech</title>
        <meta name="description" content="Discover more about Brandsmashers Tech - our mission, services, and why choose us" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center bg-fixed" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-gray-900" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255, 80, 16, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 80, 16, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        <style>{`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>

        {/* Header */}
        <header className="relative z-10 p-4 sm:p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              href="/all-links"
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            
            {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ff5010]/20 backdrop-blur-sm rounded-full border border-[#ff5010]/30">
              <Sparkles className="w-4 h-4 text-[#ff5010]" />
              <span className="text-sm font-medium">Learn More</span>
            </div> */}
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 px-4 sm:px-6 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#ff5010] via-orange-400 to-red-400 bg-clip-text text-transparent">
                About Brandsmashers Tech
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive approach to technology, innovation, and client success
              </p>
            </div>

            {/* Images Section */}
            <div className="space-y-8 sm:space-y-12">
              {/* First Image */}
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="relative h-96 sm:h-[500px] md:h-[600px]">
                  <Image
                    src="/1.png"
                    alt="Brandsmashers Tech - Company Overview"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#ff5010]/30 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
              </div>

              {/* Second Image */}
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="relative h-96 sm:h-[500px] md:h-[600px]">
                  <Image
                    src="/2.png"
                    alt="Brandsmashers Tech - Services and Mission"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#ff5010]/30 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="relative bg-gradient-to-br from-[#ff5010]/20 to-orange-600/20 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5010]/10 via-orange-600/10 to-red-600/10 animate-pulse" />
                
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Ready to Work With Us?
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Let&apos;s discuss how we can help transform your ideas into impactful solutions
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/all-links"
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ff5010] to-orange-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff5010]/50 text-sm sm:text-base"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="mailto:info@brandsmashers.com"
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 text-sm sm:text-base"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 px-4 sm:px-6 py-8 border-t border-white/10 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#ff5010] to-orange-400 bg-clip-text text-transparent mb-2">
              Brandsmashers Tech
            </h3>
            <p className="text-gray-400 text-sm">From Vision To Impact</p>
          </div>
        </footer>
      </div>
    </>
  );
}
