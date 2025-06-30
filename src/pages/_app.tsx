// src/pages/_app.js
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css'; // your global styles
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import PerformanceMonitor from '@/components/PerformanceMonitor';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager */}
      <Head>
        <title>Brandsmashers Tech</title>
        <link rel="icon" href="/logo.jpg" />
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

      {/* GTM (noscript fallback for non-JS users) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MMM4SMCF"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <PerformanceMonitor />
      <Component {...pageProps} />
    </>
  );
}
