// src/pages/_app.js
import React from "react";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import ToastContainer from "@/components/shared/ToastContainer";
import ChatWidget from "@/components/shared/ChatWidget";
import { initWebVitals } from "@/lib/web-vitals";
import "../styles/globals.css"; // your global styles

function MyApp({ Component, pageProps }) {
  // Initialize web vitals monitoring
  React.useEffect(() => {
    initWebVitals();
  }, []);

  return (
    <ErrorBoundary>
      {/* Google Tag Manager */}
      <Head>
        <title>Contact Us - Hire Developers | Brandsmashers Tech</title>
        <meta name="description" content="Brandsmashers Tech offers innovative custom software development, IT outsourcing, and scalable web & mobile app solutions. Expert developers for hire." />
        <meta name="keywords" content="custom software development, web development, mobile app development, IT outsourcing, remote developers, React, Node.js, Python, Java" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Brandsmashers Tech - Custom Software Development" />
        <meta property="og:description" content="Innovative custom software development and IT solutions. Expert developers for hire." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brandsmashers Tech" />
        <meta name="twitter:description" content="Custom software development and IT solutions" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="canonical" href="https://brandsmashers.tech" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://code.tidio.co" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Brandsmashers Tech",
              "url": "https://brandsmashers.tech",
              "logo": "https://brandsmashers.tech/logo.jpg",
              "description": "Custom software development and IT solutions company",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@brandsmashers.tech"
              },
              "sameAs": [
                "https://www.linkedin.com/company/brandsmashers-tech",
                "https://twitter.com/brandsmashers"
              ]
            })
          }}
        />
      </Head>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMM4SMCF');
          `,
        }}
      />

      <Component {...pageProps} />
      
      {/* Tidio Chat Widget - Live Chat for Lead Capture */}
      <Script
        id="tidio-widget"
        strategy="afterInteractive"
        src="https://code.tidio.co/xu46hwnb13wjrpyqwjtg1kbthonqcoht.js"
      />
      
      {/* Custom Chat Widget */}
      {/* <ChatWidget /> */}
      
      <ToastContainer />
      <Analytics />
      <SpeedInsights />
    </ErrorBoundary>
  );
}

export default MyApp;
